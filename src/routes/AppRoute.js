import React, { Component, Fragment } from "react";
import HomePage from "../pages/HomePage";
import FAQ from "../pages/FAQ";
import ShopByCategory from "../pages/ShopByCategory";
import ProductDetails from "../pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class AppRoute extends Component {

	render() {
		return (
			<Fragment>
				<Routes>
	          		<Route path="/" element={<HomePage />} />
	          		<Route path="/FAQ" element={<FAQ />} />
	          		<Route path="/shop/:category" element={<ShopByCategory key={Date.now()} />} />
	          		<Route path="/productdetails/:id" element={<ProductDetails />} />
	          	</Routes>
      		</Fragment>
		);
	}

}

export default AppRoute;