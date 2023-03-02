import React from "react";

import "./App.css";
import { Header } from "./components/Header/Header";
import { SubHeaderWrapper } from "./components/SubHeaderWrapper/SubHeaderWrapper";
import { LocationContextProvider } from "./contexts/LocationContext";

function App() {
  return (
    <LocationContextProvider>
      <div className="App">
        <Header />
        <SubHeaderWrapper />
      </div>
    </LocationContextProvider>
  );
}

export default App;
