import { createContext, useContext, useState } from 'react';

const PinnedCityContext = createContext();

export const usePinnedCity = () => {
  return useContext(PinnedCityContext);
};

const PinnedCitiesProvider = ({ children }) => {
  const [pinned, setPinned] = useState([]);
  const pinCity = (cityData) => {
    if (cityData && cityData.length > 0) {
      const newCities = cityData.filter(
        (city) => !pinned.find((pinnedCity) => pinnedCity.id === city.id)
      );

      const pinnedCities = newCities
        .map((city) => {
          if (
            city &&
            city.id &&
            city.name &&
            city.sys &&
            city.main &&
            city.weather &&
            city.wind
          ) {
            const { id, name, sys, main, weather, wind } = city;
            return { id, name, sys, main, weather, wind };
          } else {
            console.error(
              'City data is incomplete or missing required properties:',
              city
            );
            return null;
          }
        })
        .filter(Boolean);

      setPinned((prevPinned) => [...prevPinned, ...pinnedCities]);
    } else {
      console.error('City data is empty or not an array:', cityData);
    }
  };

  const unpinCity = (cityId) => {
    setPinned((prevPinned) => prevPinned.filter((city) => city.id !== cityId));
  };

  const removeAllPinnedCities = () => {
    setPinned([]);
  };

  const value = {
    pinned,
    pinCity,
    unpinCity,
    removeAllPinnedCities,
  };

  return (
    <PinnedCityContext.Provider value={value}>
      {children}
    </PinnedCityContext.Provider>
  );
};

export default PinnedCitiesProvider;
