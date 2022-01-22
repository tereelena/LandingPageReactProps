import React from "react";

export function Navbar() {
	return (
		<div className="container-fluid">
			<nav className=" navbar-expand-lg navbar navbar-dark bg-dark   ">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Boostrap
					</a>
					<ul className="nav justify-content-end ">
						<li className="nav-item">
							<a
								className="nav-link active text-white "
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item ">
							<a className="nav-link text-light" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
