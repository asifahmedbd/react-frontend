import React, { Component, Fragment } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";

class CategoryMenu extends Component {

  constructor() {
    super();
    this.state = {
      MenuData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        console.log(response.data);
        this.setState({
          MenuData: response.data,
        });
      })
      .catch((error) => {});
  }
  

  
  render() {
      const CategoryList = this.state.MenuData;

      return (
        <div className="col-lg-3 d-none d-lg-block">
        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: '65px', marginTop: '-1px', padding: '0 30px'}}>
          <h6 className="m-0">Categories</h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
          <div className="navbar-nav w-100 overflow-hidden" style={{height: '410px'}}>
            {Object.keys(CategoryList).map((key) => {
            return (
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">{CategoryList[key].category_name} <i className="fa fa-angle-down float-right mt-1" /></a>
              {CategoryList[key].subcategory ?
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  {Object.keys(CategoryList[key].subcategory).map((sub) => {
                    return (
                      <a href className="dropdown-item">{CategoryList[key].subcategory[sub].category_name}</a>
                    )  
                  })}
                </div>
               : ''}
            </div>
            );
            })}
          </div>
        </nav>
      </div>
      );
  }
}

export default CategoryMenu;