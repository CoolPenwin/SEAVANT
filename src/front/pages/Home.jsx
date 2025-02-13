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
              <h2 className="h3 mb-4">Inteligencia Artificial y Robótica para la Regeneración Oceánica</h2>
              <p className="lead mb-4">Sistema Autónomo de Regeneración Oceánica que combina IA distribuida, robótica autónoma y biotecnología marina para restaurar nuestros océanos.</p>
              <button className="btn btn-light btn-lg">Conoce Más</button>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x300" alt="SEAVANT" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Problema Global */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">El Desafío Global</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-water fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Crisis Oceánica</h3>
                  <p className="card-text">Los océanos cubren más del 70% de la superficie terrestre y están en estado crítico debido a la contaminación.</p>
                  <p className="card-text"><small className="text-muted">Para 2050, habrá más plásticos que peces en el océano.</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-trash-alt fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Contaminación Plástica</h3>
                  <p className="card-text">14 millones de toneladas de plástico ingresan al océano cada año.</p>
                  <p className="card-text"><small className="text-muted">Fuente: PNUMA, 2023</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-temperature-high fa-3x mb-3 text-primary"></i>
                  <h3 className="card-title h4">Pérdida de Biodiversidad</h3>
                  <p className="card-text">50% de reducción en biodiversidad desde 1980 debido al blanqueamiento de corales.</p>
                  <p className="card-text"><small className="text-muted">Fuente: NOAA, 2022</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solución */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nuestra Solución</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500x300" alt="Tecnología SEAVANT" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h3 className="mb-4">Sistema Autónomo de Regeneración Oceánica</h3>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="fas fa-check-circle text-success fa-2x"></i>
                </div>
                <div>
                  <h4 className="h5">Detección Inteligente</h4>
                  <p>Red neuronal profunda (CNN) para identificación y clasificación de residuos en tiempo real.</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3">
                  <i className="fas fa-check-circle text-success fa-2x"></i>
                </div>
                <div>
                  <h4 className="h5">Recolección Eficiente</h4>
                  <p>Drones autónomos biomiméticos con sensores de detección química y robótica de precisión.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <i className="fas fa-check-circle text-success fa-2x"></i>
                </div>
                <div>
                  <h4 className="h5">Restauración Ecosistémica</h4>
                  <p>Impresión 3D de corales y liberación de microorganismos regenerativos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viabilidad */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Viabilidad y Aplicabilidad</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="display-4 text-primary mb-3">40%</div>
              <h3 className="h5">Reducción de Costos</h3>
              <p>En recolección de plásticos vs. métodos tradicionales</p>
            </div>
            <div className="col-md-4">
              <div className="display-4 text-primary mb-3">60%</div>
              <h3 className="h5">Mayor Eficiencia</h3>
              <p>En restauración de corales mediante impresión 3D</p>
            </div>
            <div className="col-md-4">
              <div className="display-4 text-primary mb-3">100%</div>
              <h3 className="h5">Datos en Tiempo Real</h3>
              <p>Para toma de decisiones en conservación marina</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};