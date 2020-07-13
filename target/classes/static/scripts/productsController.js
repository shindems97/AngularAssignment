<script type="text/javascript" src="app.js"></script>

app.controller('Failing', function($scope,$http) {

	
	$scope.fetchProducts = function() {
		
		
		$http.get('/products')
			.then(function(response) {
				$scope.mvProducts = response.data;
		});
			
			
		$http.get('/products')
		.then(function(response) {
			$scope.mpProducts = response.data;
		});
				
	}
	
});