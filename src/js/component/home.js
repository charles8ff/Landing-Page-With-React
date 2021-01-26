import React, { Fragment } from "react";

//include images into your bundle
import PropTypes from "prop-types";
//include navbar
import { MyNavbar } from "./mynavbar.jsx";
import { TheCards } from "./thecards.jsx";
import CardDeck from "react-bootstrap/CardDeck";

const cardsContents = [
	{
		img:
			"https://www.ustarnovels.com/media/1000x1000/cover_wuthering_heights.jpg",
		title: "WUTHERING HEIGHTS",
		text:
			"Wuthering Heights concerns two families of the landed gentry in the West Yorkshire moorlands, the Earnshaws and the Lintons, and their turbulent relationships with Earnshaw's adopted son, Heathcliff.",
		footer: "Novel by Emily Brontë"
	},
	{
		img:
			"https://readingbyeugene.files.wordpress.com/2012/03/lolita-ben-wiseman.jpg",
		title: "LOLITA",
		text:
			"The novel is notable for it's controversial subject: the protagonist and unreliable narrator, a middle-aged literature professor under the pseudonym Humbert Humbert, is obsessed with a 12-year-old girl, Dolores Haze, with whom he becomes sexually involved after he becomes her stepfather. ",
		footer: "Novel by Vladimir Nabokov"
	},
	{
		img:
			"https://i.pinimg.com/originals/7d/fe/1a/7dfe1a803e988a73ac0201f4e9ecc82a.jpg",
		title: "CRIME AND PUNISHMENT",
		text:
			"Crime and Punishment focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates a plan to kill an unscrupulous pawnbroker for her money.",
		footer: "Novel by Fyodor Dostoevsky"
	}
];
const addBooksHTML = () => {
	return cardsContents.map((book, index) => (
		<TheCards
			img={book.img}
			title={book.title}
			text={book.text}
			footer={book.footer}
			key={index.toString()}
		/>
	));
};

export function Home() {
	return (
		<Fragment>
			<MyNavbar />
			<CardDeck className="theCardDeck">{addBooksHTML()}</CardDeck>
		</Fragment>
	);
}
