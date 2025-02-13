import React from "react";

export const Caracteristicas = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Arquitectura del Sistema SEAVANT</h1>
      
      {/* Arquitectura del Sistema */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3>Componentes Principales</h3>
          <div className="accordion" id="architectureAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#urs">
                  Unidad Robótica Submarina (URS)
                </button>
              </h2>
              <div id="urs" className="accordion-collapse collapse show" data-bs-parent="#architectureAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Drones submarinos autónomos</li>
                    <li><i className="fas fa-check text-success me-2"></i>Sensores ambientales (temperatura, pH, turbidez)</li>
                    <li><i className="fas fa-check text-success me-2"></i>Propulsión biomimética optimizada</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#spaa">
                  Sistema de Percepción y Análisis Ambiental (SPAA)
                </button>
              </h2>
              <div id="spaa" className="accordion-collapse collapse" data-bs-parent="#architectureAccordion">
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Sensores espectrales y LIDAR submarino</li>
                    <li><i className="fas fa-check text-success me-2"></i>Cámaras de visión computarizada con CNN</li>
                    <li><i className="fas fa-check text-success me-2"></i>Fusión de datos IoT en tiempo real</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500x300" alt="Arquitectura SEAVANT" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Tecnologías Clave */}
      <div className="row mb-5">
        <h3 className="text-center mb-4">Tecnologías Clave</h3>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <i className="fas fa-brain fa-3x mb-3 text-primary"></i>
              <h4 className="card-title h5">IA y Machine Learning</h4>
              <ul className="list-unstyled">
                <li>Red neuronal profunda (CNN)</li>
                <li>Visión computacional submarina</li>
                <li>Modelos predictivos satelitales</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <i className="fas fa-microchip fa-3x mb-3 text-primary"></i>
              <h4 className="card-title h5">Hardware</h4>
              <ul className="list-unstyled">
                <li>LIDAR submarino</li>
                <li>Cámaras espectrales</li>
                <li>Sensores ambientales</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <i className="fas fa-code fa-3x mb-3 text-primary"></i>
              <h4 className="card-title h5">Software</h4>
              <ul className="list-unstyled">
                <li>Algoritmos A* y Dijkstra</li>
                <li>Deep Reinforcement Learning</li>
                <li>Gemelos digitales</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <i className="fas fa-shield-alt fa-3x mb-3 text-primary"></i>
              <h4 className="card-title h5">Seguridad</h4>
              <ul className="list-unstyled">
                <li>Autenticación multifactor</li>
                <li>Encriptación de datos</li>
                <li>Firewalls IoT submarino</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Materiales y Fabricación */}
      <div className="row">
        <h3 className="text-center mb-4">Materiales y Fabricación</h3>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Materiales Avanzados</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Nylon reforzado con fibra de carbono</li>
                <li className="list-group-item">Materiales biodegradables</li>
                <li className="list-group-item">Recubrimientos anti-corrosión</li>
                <li className="list-group-item">Nanotecnología antifouling</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Fabricación Aditiva</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Optimización topológica CAD</li>
                <li className="list-group-item">Análisis de Elementos Finitos</li>
                <li className="list-group-item">Materiales autorreparables</li>
                <li className="list-group-item">Impresión 3D submarina</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 