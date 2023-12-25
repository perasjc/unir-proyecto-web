import React from "react";
import { Route, Routes } from "react-router-dom";
import { Registro } from "./Registro";
import { Medicos } from "./Medicos";

const Home = () => <h1>Home Page</h1>;
const Login = () => <h1>Login Page</h1>;

export const Article = () => {
  return (
    <article className="main">
      <Routes>
        <Route path="/home/" element={<Home />} />
        <Route path="/medico/" element={<Medicos />} />
        <Route path="/registro/" element={<Registro />} />
      </Routes>
    </article>
  );
};
