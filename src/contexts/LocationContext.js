import React, { useState } from "react";
const LocationContext = React.createContext();

function LocationContextProvider({ children }) {
  const [currentLocation, setCurrentLocation] = useState(0);
  return (
    <LocationContext.Provider value={[currentLocation, setCurrentLocation]}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationContextProvider, LocationContext };
