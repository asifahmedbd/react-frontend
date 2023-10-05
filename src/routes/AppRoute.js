import React, { Component, Fragment } from "react";
import HomePage from "../pages/HomePage";
import FAQ from "../pages/FAQ";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class AppRoute extends Component {

	render() {
		return (
			<Fragment>
				<Routes>
	          		<Route path="/" element={<HomePage />} />
	          		<Route path="/FAQ" element={<FAQ />} />
	          	</Routes>
      		</Fragment>
		);
	}

}

export default AppRoute;