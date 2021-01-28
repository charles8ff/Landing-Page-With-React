import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

export const TheCards = props => {
	console.log(props);
	return (
		<Card className="allBooks">
			<Card.Img variant="top" src={props.img} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">{props.footer}</small>
			</Card.Footer>
		</Card>
	);
};
TheCards.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	footer: PropTypes.string
};
