import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link to="/" className="navbar-brand">SEAVANT</Link>
				<button 
					className="navbar-toggler" 
					type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#navbarNav"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link to="/caracteristicas" className="nav-link">Tecnología</Link>
						</li>
						<li className="nav-item">
							<Link to="/impacto" className="nav-link">Impacto</Link>
						</li>
						<li className="nav-item">
							<Link to="/contacto" className="nav-link">Contacto</Link>
						</li>
						<li className="nav-item">
							<Link to="/invertir" className="btn btn-light ms-2">Invertir</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};