import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CitiesContext = createContext();

export const useCityData = () => {
  return useContext(CitiesContext);
};
export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records`,
          {
            params: { limit: 20, offset: (page - 1) * 20 },
          }
        );
        setCities((prevCities) => [...prevCities, ...response.data.results]);
        console.log(response.data.results);
        setHasMore(response.data.results.length > 0);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const value = {
    cities,
    hasMore,
    setPage,
  };
  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};
