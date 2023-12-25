import React from "react";
import { Link } from "react-router-dom";

export const Aside = () => {
  return (
    <aside className="sidebar">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/home" className="list-group-item list-group-item-action">
            Home
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/medico" className="list-group-item list-group-item-action">
            Medicos
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            to="/registro"
            className="list-group-item list-group-item-action"
          >
            Pacientes
          </Link>
        </li>
      </ul>
    </aside>
  );
};
