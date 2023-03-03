import React from "react";

import { FilterContext } from "../contexts/FilterContext";

function useFilter() {
  const context = React.useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilter must be called from within FilterContextProvider"
    );
  }
  return context;
}

export { useFilter };
