import React, { Component, Fragment } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";

class FeaturedCategory extends Component {

	constructor() {
	    super();
	    this.state = {
	      FeaturedCategory: [],
	    };
	}

	componentDidMount() {
    axios
      .get(AppURL.getAllFeaturedCategory)
      .then((response) => {
        console.log(response.data);
        this.setState({
          FeaturedCategory: response.data,
        });
      })
      .catch((error) => {});
  }
	
	render() {

		const FeaturedCategory = this.state.FeaturedCategory;

	    return (
	    	<div className="container-fluid pt-5">
	        	<div className="row px-xl-5 pb-3">

		        	{Object.keys(FeaturedCategory).map((key) => {
		        		const image_path = AppURL.categoryImagePath+FeaturedCategory[key].category_image;
		        		const imageUrl = 'https://www.sarkarinaukriexams.com/images/editor/1685773894programming-g964918a15_640.png';
		        		return (
				          <div className="col-lg-4 col-md-6 pb-1">
				            <div className="cat-item d-flex flex-column border mb-4" style={{padding: '30px'}}>
				              <p className="text-right"></p>
				              <a href className="cat-img position-relative overflow-hidden mb-3">
				                <img className="img-fluid" src={image_path} alt="" width="500px" height="400px" />
				              </a>
				              <h5 className="font-weight-semi-bold m-0">{FeaturedCategory[key].category_name}</h5>
				            </div>
				          </div>
				        );
			        })}

	        	</div>
	      	</div>
	    );
	}
}

export default FeaturedCategory;