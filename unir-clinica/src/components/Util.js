import React, { useState } from "react";

//const [empleadosLista, setEmpleados] = useState(["", ""]);
const restaurants = [
  { name: "Nueva Italiana", cuisine: "Italiana", rating: 4.5 },
  { name: "El Parterre", cuisine: "Española", rating: 4.9 },
  { name: "Rey Sushi", cuisine: "Japonés", rating: 4.2 },
  { name: "Dale taco", cuisine: "Mexicana", rating: 4.7 },
  { name: "Cookery", cuisine: "Americana", rating: 4.1 },
  { name: "Chumy Restaurante, donde Jose", cuisine: "Castiza", rating: 3.6 },
];
const [pacientesLista, getPacientes] = useState([
  {
    nombre: "Juan Carlos",
    apellido: "Perez Astudillo",
    dni: "45876533",
    direccion: "Urb. Palomares, Block U # 3, Rimac",
    telefono: "968478548",
  },
  {
    nombre: "Juan Carlos",
    apellido: "Perez Astudillo",
    dni: "45876533",
    direccion: "Urb. Palomares, Block U # 3, Rimac",
    telefono: "968478548",
  },
  {
    nombre: "Juan Carlos",
    apellido: "Perez Astudillo",
    dni: "45876533",
    direccion: "Urb. Palomares, Block U # 3, Rimac",
    telefono: "968478548",
  },
]);

export const getEmpleados = () => {
  return getPacientes();
};
