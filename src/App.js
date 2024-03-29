import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainWrapper } from "./components/MainWrapper/MainWrapper";
import { SubFooter } from "./components/SubFooter/SubFooter";
import { SubHeaderWrapper } from "./components/SubHeaderWrapper/SubHeaderWrapper";
import { FilterContextProvider } from "./contexts/FilterContext";
import { LocationContextProvider } from "./contexts/LocationContext";

function App() {
  return (
    <LocationContextProvider>
      <div className="App">
        <Header />
        <FilterContextProvider>
          <SubHeaderWrapper />
          <MainWrapper />
        </FilterContextProvider>
        <SubFooter />
        <Footer />
      </div>
    </LocationContextProvider>
  );
}

export default App;
