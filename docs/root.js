import React from "react";
import Markdown from "react-remarkable";

import Header from "./header";
import Demos from "./demos";

import intro from "./intro.md";
import api from "./api.md";

const Root = () => (
	<>
		<Header />
		<main className="container">
			<section>
				<Markdown source={intro} />
			</section>

			<section>
				<h2>Demos</h2>
				<Demos />
			</section>

			<section>
				<h2>API</h2>
				<Markdown source={api} />
			</section>
		</main>
	</>
);

export default Root;
