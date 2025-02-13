import React from "react";

export const Impacto = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Impacto Ambiental</h1>

      {/* Contexto Global */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Contexto Global</h3>
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center mb-4">
                    <i className="fas fa-water fa-3x text-primary mb-3"></i>
                    <h4 className="h5">Océanos en Crisis</h4>
                    <p>Cubren más del 70% de la superficie terrestre y están en estado crítico.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center mb-4">
                    <i className="fas fa-trash-alt fa-3x text-primary mb-3"></i>
                    <h4 className="h5">Contaminación Plástica</h4>
                    <p>14 millones de toneladas de plástico ingresan al océano cada año (PNUMA, 2023).</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center mb-4">
                    <i className="fas fa-temperature-high fa-3x text-primary mb-3"></i>
                    <h4 className="h5">Blanqueamiento de Corales</h4>
                    <p>50% de reducción en biodiversidad desde 1980 (NOAA, 2022).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eficiencia del Sistema */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-center mb-4">Eficiencia del Sistema</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-primary">
                <div className="card-body text-center">
                  <h2 className="display-4 text-primary">40%</h2>
                  <p className="lead">Reducción en costos de recolección vs. métodos tradicionales</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-primary">
                <div className="card-body text-center">
                  <h2 className="display-4 text-primary">60%</h2>
                  <p className="lead">Aumento en eficiencia de restauración de corales</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-primary">
                <div className="card-body text-center">
                  <h2 className="display-4 text-primary">100%</h2>
                  <p className="lead">Datos científicos en tiempo real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proyecciones */}
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mb-4">Proyecciones de Impacto</h3>
          <div className="timeline">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h4>2025</h4>
                    <p>Reducción del 50% en contaminación plástica en zonas piloto</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h4>2030</h4>
                    <p>Restauración del 20% de arrecifes de coral dañados</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h4>2035</h4>
                    <p>10M de toneladas de plástico recolectadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 