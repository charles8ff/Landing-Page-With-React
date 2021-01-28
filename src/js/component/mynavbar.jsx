import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import bookImage from "../../img/open-book.png";

export const MyNavbar = props => {
	return (
		<Navbar bg="dark" variant="dark" className="TheNavbar">
			<Navbar.Brand href="#home">The Book Basement</Navbar.Brand>
			<img src={bookImage} className="bookimage" />
			<Nav className="mr-auto">
				<Nav.Link href="#home" className="TheNavLink">
					<a>Home</a>
				</Nav.Link>
				<Nav.Link href="#features" className="TheNavLink">
					<a>Products</a>
				</Nav.Link>
				<Nav.Link href="#pricing" className="TheNavLink">
					<a>About</a>
				</Nav.Link>
				<Nav.Link href="#pricing" className="TheNavLink">
					<a>Contact</a>
				</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl
					type="text"
					placeholder="Search for books here"
					className="mr-sm-2"
				/>
				<Button variant="outline-warning">
					<i className="fas fa-search" />
				</Button>
			</Form>
		</Navbar>
	);
};

MyNavbar.propTypes = {
	webName: PropTypes.string
};
