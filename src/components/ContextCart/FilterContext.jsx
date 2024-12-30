import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

// eslint-disable-next-line react/prop-types
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    gender: '',
    sizes: [],
    colors: [],
    priceRange: [0, 10000],
  });

  const updateFilter = (type, value) => {
    setFilters(prev => {
      if (type === 'sizes' || type === 'colors') {
        const array = prev[type];
        const exists = array.includes(value);
        return {
          ...prev,
          [type]: exists 
            ? array.filter(item => item !== value)
            : [...array, value]
        };
      }
      return { ...prev, [type]: value };
    });
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      gender: '',
      sizes: [],
      colors: [],
      priceRange: [0, 10000],
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}

