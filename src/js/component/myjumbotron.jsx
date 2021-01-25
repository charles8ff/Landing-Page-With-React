import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export const MyJumbotron = props => (
	<Jumbotron className="theJumbo">
		<div>
			<h1>Enjoy your stay at The Book Basement </h1>
			<p>
				Greetings, tired traveller! Get comfy, grab a drink, and pick a
				whole lot of books to get rolling into the fantasies only books
				can behold.
			</p>
		</div>
		<p>
			<Button variant="warning" href="About.html">Learn more about us</Button>
		</p>
	</Jumbotron>
);
