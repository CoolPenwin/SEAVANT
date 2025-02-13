import React from "react";

export const Impacto = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Nuestro Impacto Ambiental</h1>

      {/* Estadísticas de Impacto */}
      <div className="row mb-5 text-center">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="fas fa-trash-alt fa-3x text-primary mb-3"></i>
              <h2 className="card-title">500kg</h2>
              <p className="card-text">Plástico recolectado por unidad/mes</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="fas fa-water fa-3x text-primary mb-3"></i>
              <h2 className="card-title">200</h2>
              <p className="card-text">Corales artificiales instalados</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <i className="fas fa-fish fa-3x text-primary mb-3"></i>
              <h2 className="card-title">1000+</h2>
              <p className="card-text">Especies marinas protegidas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa de Impacto */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-center mb-4">Zonas de Operación</h3>
          <img src="https://via.placeholder.com/1200x400" alt="Mapa de impacto" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Testimonios */}
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mb-4">Testimonios de Expertos</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">"Una solución innovadora para la crisis de contaminación marina."</p>
                  <footer className="blockquote-footer">Dr. María González<cite>, Oceanógrafa</cite></footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">"La combinación perfecta de tecnología y conservación marina."</p>
                  <footer className="blockquote-footer">Dr. Juan Pérez<cite>, Biólogo Marino</cite></footer>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">"Un proyecto que marca la diferencia en la preservación de ecosistemas."</p>
                  <footer className="blockquote-footer">Dra. Ana Martínez<cite>, Ecologista Marina</cite></footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 