import React, { useState } from "react";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-5">Contacta con Nosotros</h1>
          
          <div className="row mb-5">
            <div className="col-md-4 text-center">
              <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
              <h5>Email</h5>
              <p>info@ecosubmarine.com</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-phone fa-2x text-primary mb-3"></i>
              <h5>Teléfono</h5>
              <p>+34 900 000 000</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
              <h5>Ubicación</h5>
              <p>Madrid, España</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="asunto" className="form-label">Asunto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 