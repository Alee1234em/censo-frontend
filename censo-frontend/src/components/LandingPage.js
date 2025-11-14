// src/components/LandingPage.js
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabecera */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Censo Logo" className="h-10" />
            <h1 className="text-2xl font-bold text-blue-800">Censo Nacional</h1>
          </div>
          <nav className="space-x-4 text-gray-700 font-medium">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
            <a href="#departamentos" className="hover:text-blue-600">Departamentos</a>
            <a href="#estadisticas" className="hover:text-blue-600">Estadísticas</a>
            <a href="#graficos" className="hover:text-blue-600">Gráficos</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-24 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Explora los datos del Censo Nacional
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Consulta la población, alfabetización, hogares y más por departamento
        </p>
        <a
          href="#dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Ver Dashboard
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
