import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { MyJumbotron } from "./myjumbotron.jsx";
import { MyCard } from "./mycard.jsx";

export function Home() {
	return <MyJumbotron />, <MyCard />;
}
