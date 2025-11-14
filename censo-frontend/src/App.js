import React, { useState, useEffect } from "react";
import {
  getDepartamentos,
  crearDepartamento,
  actualizarDepartamento,
  eliminarDepartamento,
} from "./api/censoApi";

function App() {
  const [departamentos, setDepartamentos] = useState([]);
  const [form, setForm] = useState({
    departamento: "",
    poblacion: "",
    hogares: "",
    promedioEdad: "",
    alfabetizacion: "",
  });
  const [editId, setEditId] = useState(null);

  // Cargar departamentos
  const cargarDepartamentos = async () => {
    const res = await getDepartamentos();
    if (res.status === "success") setDepartamentos(res.data);
  };

  useEffect(() => {
    cargarDepartamentos();
  }, []);

  // Manejar cambios de form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Insertar o actualizar
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await actualizarDepartamento(editId, form);
      setEditId(null);
    } else {
      await crearDepartamento(form);
    }
    setForm({ departamento: "", poblacion: "", hogares: "", promedioEdad: "", alfabetizacion: "" });
    cargarDepartamentos();
  };

  // Editar
  const handleEdit = (dep) => {
    setEditId(dep.id);
    setForm({
      departamento: dep.nombre,
      poblacion: dep.poblacion,
      hogares: dep.hogares,
      promedioEdad: dep.promedio_edad,
      alfabetizacion: dep.alfabetizacion,
    });
  };

  // Eliminar
  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar este departamento?")) {
      await eliminarDepartamento(id);
      cargarDepartamentos();
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Censo Departamentos</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input name="departamento" placeholder="Departamento" value={form.departamento} onChange={handleChange} required />
        <input name="poblacion" type="number" placeholder="Población" value={form.poblacion} onChange={handleChange} required />
        <input name="hogares" type="number" placeholder="Hogares" value={form.hogares} onChange={handleChange} required />
        <input name="promedioEdad" type="number" placeholder="Promedio Edad" value={form.promedioEdad} onChange={handleChange} required />
        <input name="alfabetizacion" type="number" step="0.1" placeholder="Alfabetización %" value={form.alfabetizacion} onChange={handleChange} required />
        <button type="submit">{editId ? "Actualizar" : "Agregar"}</button>
      </form>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Departamento</th>
            <th>Población</th>
            <th>Hogares</th>
            <th>Promedio Edad</th>
            <th>Alfabetización</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {departamentos.map((dep) => (
            <tr key={dep.id}>
              <td>{dep.id}</td>
              <td>{dep.nombre}</td>
              <td>{dep.poblacion}</td>
              <td>{dep.hogares}</td>
              <td>{dep.promedio_edad}</td>
              <td>{dep.alfabetizacion}</td>
              <td>
                <button onClick={() => handleEdit(dep)}>Editar</button>
                <button onClick={() => handleDelete(dep.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
