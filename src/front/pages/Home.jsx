import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const {store, dispatch} = useGlobalReducer();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">EcoSubmarine</h1>
              <p className="lead">Un dron submarino revolucionario que combate la contaminación plástica y restaura los ecosistemas marinos</p>
              <button className="btn btn-light btn-lg">Apoya el Proyecto</button>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x300" alt="Dron submarino" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Características Principales</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-trash-alt fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Recolección de Plásticos</h3>
                  <p className="card-text">Sistema avanzado de filtración y recolección de residuos plásticos en el océano.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-water fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Restauración de Corales</h3>
                  <p className="card-text">Instalación precisa de corales artificiales para regenerar ecosistemas marinos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-robot fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Tecnología Autónoma</h3>
                  <p className="card-text">Sistema de navegación autónomo con IA para optimizar las operaciones submarinas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Ambiental */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Impacto Ambiental</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x300" alt="Impacto ambiental" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <div className="ps-md-5">
                <h3>Protegiendo Nuestros Océanos</h3>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Reducción de contaminación plástica</li>
                  <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Restauración de ecosistemas coralinos</li>
                  <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Monitoreo de la salud marina</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">¡Únete a Nuestra Misión!</h2>
          <p className="lead mb-4">Ayúdanos a limpiar los océanos y restaurar la vida marina</p>
          <button className="btn btn-primary btn-lg">Invertir en el Futuro</button>
        </div>
      </section>
    </div>
  );
};