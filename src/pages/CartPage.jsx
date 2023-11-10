import React, { Component, Fragment, useState, useEffect } from "react";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";
import CategoryMenu from "../components/common/CategoryMenu";
import Topmenu from "../components/common/Topmenu";
import Navigation from "../components/home/Navigation";
import PageHeader from "../components/common/PageHeader";
import CartItemDetails from "../components/common/cart-item-details/cart-item-details.component";
import { useParams } from "react-router-dom";

function CartPage() {

	return (
	    <Fragment>
			<Topbar />
			<div className="container-fluid mb-5">
				<div className="row border-top px-xl-5">
					<Fragment>
						<CategoryMenu />
						<div className="col-lg-9">
							<Topmenu />
						</div>
					</Fragment>
				</div>
			</div>
			<PageHeader />
			<CartItemDetails />
			<Footer />
		</Fragment>
	);

}

export default CartPage;