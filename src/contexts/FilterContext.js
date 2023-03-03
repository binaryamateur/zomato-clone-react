import React, { useState } from "react";

const FilterContext = React.createContext();

function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState(-1);
  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContextProvider, FilterContext };
