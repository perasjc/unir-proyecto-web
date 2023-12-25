import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/paciente.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Swal from "sweetalert2";

export const Registro = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [id, setId] = useState(0);

  const [paciente, setPaciente] = useState({
    id: 0,
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    telefono: "",
  });
  const [pacientes, setPacientes] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "Juan Carlos",
      apellido: "Pérez Astudillo",
      dni: "42157899",
      direccion: "Praderas del Golf",
      telefono: "959687452",
    },
    {
      id: Math.floor(Math.random() * 1000),
      nombre: "Jose Carlos",
      apellido: "Rodriguez Garcia",
      dni: "42158889",
      direccion: "Av. Los Incas",
      telefono: "956777452",
    },
  ]);
  const [editar, setEditar] = useState(false);

  const add = () => {
    paciente.id = Math.floor(Math.random() * 1000);
    paciente.nombre = nombre;
    paciente.apellido = apellido;
    paciente.dni = dni;
    paciente.direccion = direccion;
    paciente.telefono = telefono;
    setPaciente(paciente);

    setPacientes([...pacientes, paciente]);
    limpiarCampos();
    Swal.fire({
      title: "<strong>Registro exitoso!!!</strong>",
      html:
        "<i>El paciente <strong>" +
        nombre +
        "</strong> fue registrado con éxito!!!</i>",
      icon: "success",
      timer: 1000,
    });
  };

  const update = () => {
    const pacientesNextList = [...pacientes];
    const paciente = pacientesNextList.find((a) => a.id === id);
    paciente.nombre = nombre;
    paciente.apellido = apellido;
    paciente.dni = dni;
    paciente.direccion = direccion;
    paciente.telefono = telefono;
    setPacientes(pacientesNextList);

    limpiarCampos();
    Swal.fire({
      title: "<strong>Actualización exitoso!!!</strong>",
      html:
        "<i>El paciente <strong>" +
        nombre +
        "</strong> fue actualizado con éxito!!!</i>",
      icon: "success",
      timer: 1000,
    });
  };

  const deletePaciente = () => {
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
    limpiarCampos();
    Swal.fire({
      title: "<strong>Eliminación exitosa!!!</strong>",
      html:
        "<i>El paciente <strong>" +
        nombre +
        "</strong> fue eliminado con éxito!!!</i>",
      icon: "success",
      timer: 1000,
    });
  };

  const editarPaciente = (val) => {
    setEditar(true);
    setNombre(val.nombre);
    setApellido(val.apellido);
    setDni(val.dni);
    setDireccion(val.direccion);
    setTelefono(val.telefono);
    setId(val.id);
  };

  const limpiarCampos = () => {
    setEditar(false);
    setNombre("");
    setApellido("");
    setDni("");
    setDireccion("");
    setTelefono("");
  };

  const mostrarDatos = () => {
    add();
  };

  const listarPacientes = () => {
    paciente.id = Math.floor(Math.random() * 1000);
    paciente.nombre = "Juan Carlos";
    paciente.apellido = "Pérez Astudillo";
    paciente.dni = "41568577";
    paciente.direccion = "Las Praderas del Golf";
    paciente.telefono = "959687412";
    setPaciente(paciente);

    setPacientes([...pacientes, paciente]);
    limpiarCampos();
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">GESTION DE PACIENTES</div>
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
              DNI:
            </span>
            <input
              type="text"
              name="dni"
              value={dni}
              onChange={(event) => {
                setDni(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese DNI"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Direccion:
            </span>
            <input
              type="text"
              name="direccion"
              value={direccion}
              onChange={(event) => {
                setDireccion(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese direccion"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Telefono:
            </span>
            <input
              type="text"
              name="telefono"
              value={telefono}
              onChange={(event) => {
                setTelefono(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese telefono"
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
            <th scope="col">DNI</th>
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((val, key) => {
            return (
              <tr key={val.id}>
                <th scope="row">{val.id}</th>
                <td>{val.nombre}</td>
                <td>{val.apellido}</td>
                <td>{val.dni}</td>
                <td>{val.direccion}</td>
                <td>{val.telefono}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        editarPaciente(val);
                      }}
                      className="btn btn-info"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        deletePaciente(val);
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
