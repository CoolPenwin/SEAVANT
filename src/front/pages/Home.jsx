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
              <h1 className="display-4 fw-bold">SEAVANT</h1>
              <h2 className="h3 mb-4">Un sistema holístico de restauración marina</h2>
              <p className="lead mb-4">Sistema de inteligencia artificial distribuida, combinado con robótica autónoma y biotecnología marina, diseñado para restaurar los océanos a su estado natural.</p>
              <p className="mb-4">Por Lorena C.G</p>
              <button className="btn btn-light btn-lg">Conoce Más</button>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x300" alt="SEAVANT" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es SEAVANT? */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">¿Qué es SEAVANT?</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="lead">SEAVANT es un sistema diseñado para detectar, recolectar y procesar residuos plásticos, así como restaurar ecosistemas dañados mediante impresión 3D de corales y liberación de microorganismos regenerativos.</p>
              <p>Nuestro objetivo es restaurar los océanos a su estado natural, protegiendo la vida marina y asegurando la sostenibilidad de los ecosistemas marinos para las generaciones futuras.</p>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x300" alt="Sistema SEAVANT" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías Principales */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Tecnologías Principales</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-brain fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Inteligencia Artificial Distribuida</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">Análisis de datos mediante red de sensores</li>
                    <li className="mb-2">Toma de decisiones descentralizada</li>
                    <li>Aprendizaje continuo y adaptativo</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-robot fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Robótica Autónoma</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">Limpieza eficiente</li>
                    <li className="mb-2">Navegación inteligente</li>
                    <li>Monitoreo en tiempo real</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-dna fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Biotecnología Marina</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2">Impresión 3D de corales</li>
                    <li className="mb-2">Microorganismos regenerativos</li>
                    <li>Restauración de ecosistemas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados y Proyecciones */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Resultados y Proyecciones</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="display-4 text-primary mb-3">50%</div>
              <h3 className="h5">Reducción de Contaminación</h3>
              <p>Reducción de plásticos en océanos en 10 años</p>
            </div>
            <div className="col-md-4">
              <div className="display-4 text-primary mb-3">20%</div>
              <h3 className="h5">Recuperación de Ecosistemas</h3>
              <p>Restauración de arrecifes de coral en 5 años</p>
            </div>
            <div className="col-md-4">
              <div className="display-4 text-primary mb-3">10M</div>
              <h3 className="h5">Toneladas de Plástico</h3>
              <p>Recolección proyectada en 15 años</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};