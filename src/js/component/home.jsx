import React from "react";

//include images into your bundle

import { Jumbotron } from "./jumbotron.js";
import { Navbar } from "./navbar.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";
import lista from "./data.js";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row">
					{lista.map((elemento, index) => (
						<div className="col-md-4">
							<Card
								key={index}
								titulo={elemento.titulo}
								descripcion={elemento.descripcion}
								buttonUrl={elemento.buttonUrl}
								imageUrl={elemento.imageUrl}
								buttonLabel={elemento.buttonLabel}
							/>
						</div>
					))}
					;
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
