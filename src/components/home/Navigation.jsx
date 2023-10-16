import React, { Component, Fragment } from "react";
import CategoryMenu from "../common/CategoryMenu";
import Topmenu from "../common/Topmenu";
import Slider from "./Slider";
import FeaturedItems from "./FeaturedItems";

class Navigation extends Component {
	
	render() {
	    return (
			<div className="container-fluid mb-5">
				<div className="row border-top px-xl-5">
					<Fragment>
						<CategoryMenu />
						<div className="col-lg-9">
							<Topmenu />
							<Slider />
						</div>
						<FeaturedItems />
					</Fragment>
				</div>
			</div>
	    );
	}
}

export default Navigation;