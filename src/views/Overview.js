import { useState } from "react";
import { GeoContext } from "../components/GeoContext";

import "../styles/clinica.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { ClinicaRouter } from "../router/ClinicaRouter";

export const Overview = () => {
  const [globalClicks, setGlobalClicks] = useState(0);

  let updateClicks = () => {
    setGlobalClicks(globalClicks + 1);
  };

  return (
    <div className="grid-container">
      <Header />
      <Nav />
      <GeoContext.Provider value={{ globalClicks, updateClicks }}>
        <ClinicaRouter></ClinicaRouter>
      </GeoContext.Provider>
      <Footer />
    </div>
  );
};
