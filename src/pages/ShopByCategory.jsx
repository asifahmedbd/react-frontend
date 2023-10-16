import React, { Component, Fragment, useState } from "react";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";
import CategoryMenu from "../components/common/CategoryMenu";
import Topmenu from "../components/common/Topmenu";
import Navigation from "../components/home/Navigation";
import PageHeader from "../components/common/PageHeader";
import Products from "../components/common/Products";
import { useParams } from "react-router-dom";

class ShopByCategory extends Component {

  	render() {
  		const categoryId = window.location.href.split('/')[4];
  		console.log(categoryId);
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
				<Products categoryId={categoryId} />
				<Footer />
			</Fragment>
		);
	}
}

export default ShopByCategory;