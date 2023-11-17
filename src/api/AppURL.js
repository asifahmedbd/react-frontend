class AppURL {
	
	static BaseURL = "http://127.0.0.1:8000/api/";
	static ImageURL = "http://127.0.0.1:8000/uploads/";

	// All Category Details
	static AllCategoryDetails = this.BaseURL + "getCategories";
	static getAllFeaturedCategory = this.BaseURL + "getAllFeaturedCategory";

	static categoryImagePath = this.ImageURL + 'category/original/';

	static submitOrderDetails = this.BaseURL + "submitOrderDetails";

	static ProductListByCategory(categoryid) {
		return this.BaseURL + "getProductsByCategoryId/" + categoryid;
	}

	static productImagePath = this.ImageURL + 'products/';
	
	static getProductsById(pid) {
		return this.BaseURL + "getProductsById/" + pid;
	}
}

export default AppURL;