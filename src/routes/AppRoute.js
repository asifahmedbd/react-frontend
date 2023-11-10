import React, { Component, Fragment } from "react";
import HomePage from "../pages/HomePage";
import FAQ from "../pages/FAQ";
import ShopByCategory from "../pages/ShopByCategory";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class AppRoute extends Component {

	render() {
		return (
			<Fragment>
				<Routes>
	          		<Route path="/" element={<HomePage />} />
	          		<Route path="/FAQ" element={<FAQ />} />
	          		<Route path="/shop/:category" element={<ShopByCategory />} />
	          		<Route path="/productdetails/:id" element={<ProductDetails />} />
					  <Route path="/cartPage" element={<CartPage />} />
	          	</Routes>
      		</Fragment>
		);
	}

}

export default AppRoute;