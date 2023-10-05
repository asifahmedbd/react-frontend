import React, { Component, Fragment } from "react";
import CategoryMenu from "../common/CategoryMenu";
import Topmenu from "../common/Topmenu";

class Navigation extends Component {
	
	render() {
	    return (
			<div class="container-fluid mb-5">
				<div class="row border-top px-xl-5">
					<Fragment>
						<CategoryMenu />
						<div class="col-lg-9">
							<Topmenu />
						</div>
					</Fragment>
				</div>
			</div>
	    );
	}
}

export default Navigation;