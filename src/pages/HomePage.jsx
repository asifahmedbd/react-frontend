import React, { Component, Fragment } from "react";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/Footer";
import Navigation from "../components/home/Navigation";

class HomePage extends Component {
	
	render() {
	    return (
	    	<Fragment>
	      		<Topbar />
	      		<Navigation />
	      		<Footer />
	      	</Fragment>
	    );
	}
}

export default HomePage;