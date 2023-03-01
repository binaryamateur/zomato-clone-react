import React from "react";
import { LocationContext } from "../contexts/LocationContext";

function useCurrentLocation() {
  const context = React.useContext(LocationContext);
  if (!context) {
    throw new Error(
      "useCurrentLocation must be called inside a LocationContextProvider"
    );
  }
  return context;
}

export { useCurrentLocation };
