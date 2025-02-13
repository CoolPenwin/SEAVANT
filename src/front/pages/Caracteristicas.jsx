import React from "react";

export const Caracteristicas = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Características Técnicas</h1>
      
      {/* Especificaciones Técnicas */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3>Especificaciones del Dron</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Dimensiones:</strong> 1.2m x 0.8m x 0.5m
            </li>
            <li className="list-group-item">
              <strong>Peso:</strong> 45 kg
            </li>
            <li className="list-group-item">
              <strong>Profundidad máxima:</strong> 100 metros
            </li>
            <li className="list-group-item">
              <strong>Autonomía:</strong> 8 horas
            </li>
            <li className="list-group-item">
              <strong>Capacidad de recolección:</strong> 20kg de plástico
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500x300" alt="Especificaciones técnicas" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Sistema de Filtración */}
      <div className="row mb-5">
        <div className="col-md-6 order-md-2">
          <h3>Sistema de Filtración Avanzado</h3>
          <p>Nuestro sistema de filtración utiliza tecnología de última generación para:</p>
          <ul className="list-group">
            <li className="list-group-item">Separación de microplásticos</li>
            <li className="list-group-item">Filtración selectiva por tamaño</li>
            <li className="list-group-item">Preservación de la vida marina</li>
            <li className="list-group-item">Almacenamiento compacto de residuos</li>
          </ul>
        </div>
        <div className="col-md-6 order-md-1">
          <img src="https://via.placeholder.com/500x300" alt="Sistema de filtración" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Sistema de Navegación */}
      <div className="row">
        <div className="col-md-6">
          <h3>Navegación Inteligente</h3>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tecnología de IA</h5>
              <p className="card-text">
                Sistema de navegación autónomo que utiliza:
              </p>
              <ul>
                <li>Sensores de proximidad avanzados</li>
                <li>Mapeo 3D del entorno marino</li>
                <li>Algoritmos de evasión de obstáculos</li>
                <li>Planificación de rutas optimizada</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500x300" alt="Sistema de navegación" className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  );
}; 