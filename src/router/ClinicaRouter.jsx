import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Article } from "../components/Article";
import { Aside } from "../components/Aside";

export const ClinicaRouter = () => {
  return (
    <BrowserRouter>
      <Aside />
      <Article />
    </BrowserRouter>
  );
};
