import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand">EcoSubmarine</span>
				</Link>
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
							<a className="nav-link" href="#caracteristicas">Características</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#impacto">Impacto</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contacto">Contacto</a>
						</li>
						<li className="nav-item">
							<button className="btn btn-light ms-2">Invertir</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};