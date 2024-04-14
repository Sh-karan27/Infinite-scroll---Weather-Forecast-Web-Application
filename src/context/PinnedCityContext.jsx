import { createContext, useContext, useState } from 'react';

const PinnedCityContext = createContext();

export const usePinnedCity = () => {
  return useContext(PinnedCityContext);
};

const PinnedCitiesProvider = ({ children }) => {
  const [pinned, setPinned] = useState([]);
  const pinCity = (cityData) => {
    // Check if cityData is not empty and contains the necessary properties
    if (cityData && cityData.length > 0) {
      // Map over each city data and extract relevant information
      const pinnedCities = cityData
        .map((city) => {
          // Check if city contains the necessary properties
          if (
            city &&
            city.id &&
            city.name &&
            city.sys &&
            city.main &&
            city.weather &&
            city.wind
          ) {
            // Extract relevant city information
            const { id, name, sys, main, weather, wind } = city;
            return { id, name, sys, main, weather, wind };
          } else {
            console.error(
              'City data is incomplete or missing required properties:',
              city
            );
            return null; // Return null for invalid city data
          }
        })
        .filter(Boolean); // Filter out null values

      // Update pinned array with valid city data
      setPinned((prevPinned) => [...prevPinned, ...pinnedCities]);
    } else {
      console.error('City data is empty or not an array:', cityData);
    }
  };

  const unpinCity = (cityId) => {
    setPinned((prevPinned) => prevPinned.filter((city) => city.id !== cityId));
  };

  const value = {
    pinned,
    pinCity,
    unpinCity,
  };

  return (
    <PinnedCityContext.Provider value={value}>
      {children}
    </PinnedCityContext.Provider>
  );
};

export default PinnedCitiesProvider;
