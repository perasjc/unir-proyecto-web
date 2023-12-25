import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/paciente.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Swal from "sweetalert2";

export const Medicos = () => {
  const [idMedico, setIdMedico] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cmp, setCmp] = useState("");

  const [medico, setMedico] = useState({
    idMedico: 0,
    nombre: "",
    apellido: "",
    cmp: "",
  });
  const [medicos, setMedicos] = useState([
    {
      idMedico: Math.floor(Math.random() * 1000),
      nombre: "Juan Manuel",
      apellido: "Garcia Moran",
      cmp: "42157899",
    },
    {
      idMedico: Math.floor(Math.random() * 1000),
      nombre: "Roberto Carlos",
      apellido: "Mogollon Lopez",
      cmp: "42158889",
    },
  ]);
  const [editar, setEditar] = useState(false);

  const add = () => {
    medico.idMedico = Math.floor(Math.random() * 1000);
    medico.nombre = nombre;
    medico.apellido = apellido;
    medico.cmp = cmp;
    setMedico(medico);

    setMedicos([...medicos, medico]);
    limpiarCampos();
    Swal.fire({
      title: "<strong>Registro exitoso!!!</strong>",
      html:
        "<i>El medico <strong>" +
        nombre +
        "</strong> fue registrado con éxito!!!</i>",
      icon: "success",
      timer: 1000,
    });
  };

  const update = () => {
    const medicosNextList = [...medicos];
    const medico = medicosNextList.find((a) => a.idMedico === idMedico);
    medico.nombre = nombre;
    medico.apellido = apellido;
    medico.cmp = cmp;
    setMedicos(medicosNextList);

    limpiarCampos();
    Swal.fire({
      title: "<strong>Actualización exitoso!!!</strong>",
      html:
        "<i>El medico <strong>" +
        nombre +
        "</strong> fue actualizado con éxito!!!</i>",
      icon: "success",
      timer: 1000,
    });
  };

  const deleteMedico = () => {
    setMedicos(medicos.filter((medico) => medico.idMedico !== idMedico));
    limpiarCampos();
    Swal.fire({
      title: "<strong>Eliminación exitosa!!!</strong>",
      html:
        "<i>El medico <strong>" +
        nombre +
        "</strong> fue eliminado con éxito!!!</i>",
      icon: "success",
      timer: 1000,
    });
  };

  const editarMedico = (val) => {
    setEditar(true);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setCmp(val.cmp);
    setIdMedico(val.idMedico);
  };

  const limpiarCampos = () => {
    setEditar(false);
    setNombre("");
    setApellido("");
    setCmp("");
  };

  const mostrarDatos = () => {
    add();
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">GESTION DE MEDICOS</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre:
            </span>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Apellido:
            </span>
            <input
              type="text"
              name="apellido"
              value={apellido}
              onChange={(event) => {
                setApellido(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese apellido"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              CMP:
            </span>
            <input
              type="text"
              name="cmp"
              value={cmp}
              onChange={(event) => {
                setCmp(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese CMP"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          {editar ? (
            <div>
              <button className="btn btn-warning m-2" onClick={update}>
                Actualizar
              </button>
              <button className="btn btn-info m-2" onClick={limpiarCampos}>
                Cancelar
              </button>
            </div>
          ) : (
            <button className="btn btn-success" onClick={mostrarDatos}>
              Registrar
            </button>
          )}
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">CMP</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((val, key) => {
            return (
              <tr key={val.idMedico}>
                <th scope="row">{val.idMedico}</th>
                <td>{val.nombre}</td>
                <td>{val.apellido}</td>
                <td>{val.cmp}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        editarMedico(val);
                      }}
                      className="btn btn-info"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        deleteMedico(val);
                      }}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
