import React from "react";
import PropType from "prop-types";

export function Card(props) {
	return (
		<div className="card p-3 mb-2" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.titulo}</h5>
				<p className="card-text">{props.descripcion}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}
