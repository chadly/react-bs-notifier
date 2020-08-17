import React from "react";
import Markdown from "react-remarkable";

import Header from "./header";
import Demos from "./demos";

import intro from "./intro.md";
import api from "./api.md";

const Root = () => (
	<div>
		<Header />
		<main className="container">
			<section className="intro">
				<Markdown source={intro} />
			</section>

			<section className="demos">
				<h2>Demos</h2>
				<Demos />
			</section>

			<section className="api">
				<h2>API</h2>
				<Markdown source={api} />
			</section>
		</main>
	</div>
);

export default Root;
