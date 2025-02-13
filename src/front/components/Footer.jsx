export const Footer = () => (
  <footer className="footer bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>EcoSubmarine</h5>
          <p className="small">Innovando para un océano más limpio y saludable</p>
        </div>
        <div className="col-md-4">
          <h5>Contacto</h5>
          <p className="small">
            <i className="fas fa-envelope me-2"></i>info@ecosubmarine.com<br />
            <i className="fas fa-phone me-2"></i>+34 900 000 000
          </p>
        </div>
        <div className="col-md-4">
          <h5>Síguenos</h5>
          <div className="social-links">
            <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="text-center">
        <p className="small mb-0">© 2024 EcoSubmarine. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);