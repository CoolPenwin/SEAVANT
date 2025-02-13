import React from "react";

export const Invertir = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Invierte en el Futuro de los Océanos</h1>

      {/* Métricas de Inversión */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h3 className="card-title">€500K</h3>
              <p className="card-text">Capital recaudado</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h3 className="card-title">200+</h3>
              <p className="card-text">Inversores</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100">
            <div className="card-body">
              <h3 className="card-title">15%</h3>
              <p className="card-text">ROI Proyectado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Planes de Inversión */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Plan Básico</h4>
              <h2 className="my-3">€5,000</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>5% participación</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Reportes trimestrales</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Acceso a eventos</li>
              </ul>
              <button className="btn btn-outline-primary w-100">Invertir Ahora</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-primary">
            <div className="card-body text-center">
              <h4 className="card-title">Plan Premium</h4>
              <h2 className="my-3">€25,000</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>15% participación</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Reportes mensuales</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Voto en decisiones</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Acceso VIP a eventos</li>
              </ul>
              <button className="btn btn-primary w-100">Invertir Ahora</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Plan Corporativo</h4>
              <h2 className="my-3">€100,000+</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>30%+ participación</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Reportes personalizados</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Asiento en la junta</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Beneficios exclusivos</li>
              </ul>
              <button className="btn btn-outline-primary w-100">Contactar</button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mb-4">Preguntas Frecuentes</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  ¿Cuál es el monto mínimo de inversión?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  El monto mínimo de inversión es de €5,000 con nuestro Plan Básico.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  ¿Cómo se distribuyen los beneficios?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Los beneficios se distribuyen trimestralmente según el porcentaje de participación.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 