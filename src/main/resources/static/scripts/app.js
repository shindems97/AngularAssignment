var app = angular.module('Demo', ['ngRoute']);

app.config(function ($routeProvider) {
            		 $routeProvider
	                    .when("/home", {
	                        templateUrl: 'Templates/home.html',
	                        controller: 'ProductController'
	                    })
	                    .when("/singleproduct", {
	                        templateUrl: 'Templates/courses.html',
	                        controller: 'SingleProduct'
	                    })
	                    .when("/viewDiscounts",{
	                    	templateUrl: 'Templates/viewDiscounts.html',
	                        controller: 'DiscountController'
	                    })
	                    .when("/viewDiscounts/:id",{
	                    	templateUrl: 'Templates/applyDiscount.html',
	                        controller: 'ApplyDiscount'
	                    })
	                    .when("/addDiscount",{
	                    	templateUrl: 'Templates/addDiscount.html',
	                        controller: 'AddDiscount'
	                    })
	                    
	                    .otherwise({
	                    	redirectTo:"/viewDiscounts"
	                    })
            	 });
            
app.controller('SingleProduct', function ($scope,$http, $routeParams) {
                
                $http.get("/discountById/" + id).then(function(response){
                    console.log("get");
                    $scope.discount = response.data;
                });
            });

app.controller('ProductController', function ($scope,$http,$routeParams) {
	
	$scope.pic="https://www.91-img.com/gallery_images_uploads/f/7/f7201fa7ae89d5a6f32a36f042a6b4722f4bad37.jpeg?tr=h-550,w-0,c-at_max";
	$scope.getAllProduct= function(){
		$http.get('/products')
		  .then(
			function (response) {
		      $scope.response = response.data
		    }, 
		    function error(response) {
		      $scope.postResultMessage = "Error with status: " +  response.statusText;
		    }
		    );
	};
	
	$scope.selectedProduct=0;
	$scope.getAllProduct();
	$scope.oneProduct={};
	var id = $routeParams.id;
	$scope.getSingleProduct=function(){
		$http.get("/productById/" + $scope.selectedProduct).then(function(response){
	        console.log("get");
	        $scope.oneProduct = response.data;
	    });	
	}
	
/*	$scope.discountedPrice=0;
	$scope.calculateDiscount=function(){
		$scope.discountedPrice=$scope.oneProduct*$scope.discount.percentage*0.01;
	}*/
    
	$scope.updateProduct=function(){
		var id=$scope.selectedProduct;
		var discountedPrice=$scope.oneProduct.price;
		$scope.updateProduct={"id":id,"price":discountedPrice};
		$http({
		      method  : 'PUT',
		      url     : '/update',
		      data    : $scope.updateProduct,
		      headers : { 'Content-Type': 'application/json' } 
		     })
		      .success(function(data) {
		        if (data.errors) {
		          $scope.errorName = data.errors.name;
		          $scope.errorUserName = data.errors.username;
		          $scope.errorEmail = data.errors.email;
		        } else {
		          $scope.message = data.message;
		        }
		      });
	}
});

app.controller('DiscountController', function ($scope,$http) {
	
	$scope.pic="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/AUGART/newstore/v1/main_750x375.jpg";
	
    $http.get('/discounts')
	  .then(
		function (response) {
	      $scope.response = response.data
	    }, 
	    function error(response) {
	      $scope.postResultMessage = "Error with status: " +  response.statusText;
	    }
	    );
});

app.controller('ApplyDiscount', function ($scope,$http, $routeParams) {
	$scope.discount = null;
	$scope.pic="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/AUGART/newstore/v1/main_750x375.jpg";
	$scope.pic2="https://cdn0.desidime.com/attachments/photos/589790/original/IMG_20191010_103727.JPG?1570684539";
	var id = $routeParams.id;
	
	$http.get("/discountById/" + id).then(function(response){
        console.log("get");
        $scope.discount = response.data;
    });
});

app.controller('FunctionTest', function($scope){
	$scope.test=function(){
		$scope.message="testing";
	}
})

app.controller("AddDiscount", function($scope, $http){
	$scope.example = {
	         value: new Date(2020, 7, 10)
	       };
	$scope.myDate=new Date();
	$scope.discountForm = {};
    $scope.submitForm = function() {
    $http({
      method  : 'POST',
      url     : '/addDiscount',
      data    : $scope.discountForm,
      headers : { 'Content-Type': 'application/json' } 
     })
      .success(function(data) {
        if (data.errors) {
          $scope.errorName = data.errors.name;
          $scope.errorUserName = data.errors.username;
          $scope.errorEmail = data.errors.email;
        } else {
          $scope.message = data.message;
        }
      });
    };

})

/*app.controller('postcontroller', function($scope, $http, $location) {
	  $scope.submitForm = function(){
	    var url = $location.absUrl() + "postcustomer";
	    
	    var config = {
	                headers : {
	                    'Accept': 'text/plain'
	                }
	        }
	    var data = {
	            firstname: $scope.firstname,
	            lastname: $scope.lastname
	        };
	    
	    $http.post(url, data, config).then(function (response) {
	      $scope.postResultMessage = response.data;
	    }, function error(response) {
	      $scope.postResultMessage = "Error with status: " +  response.statusText;
	    });
	    
	    $scope.firstname = "";
	    $scope.lastname = "";
	  }
	});*/

