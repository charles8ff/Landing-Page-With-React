import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

// export const cards = props => {
// 	return cardsContents.map((singleCard, i) => (
// 		<Card key={i}>
// 			<Card.Img variant="top" src="holder.js/100px160" />
// 			<Card.Body>
// 				<Card.Title>{singleCard.Title}</Card.Title>
// 				<Card.Text>
// 					This is a wider card with supporting text below as a natural
// 					lead-in to additional content. This content is a little bit
// 					longer.
// 				</Card.Text>
// 			</Card.Body>
// 			<Card.Footer>
// 				<small className="text-muted">Last updated 3 mins ago</small>
// 			</Card.Footer>
// 		</Card>
// 	));
// };

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
