<!DOCTYPE html>
<html>
<head>
     <meta chrset="UTF 8">

    <title>Spring boot and Angularjs Tutorial</title>
    
    <link rel="stylesheet" href="css/app.css">
    
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
	<!--  -->
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.min.js"></script>
      
	<script type="text/javascript" src="scripts/app.js"></script>
	
</head>

<body data-ng-app="Demo">

 	<ng-include src="'shared/navbar.html'"></ng-include>
 	
 	<div data-ng-view></div>
	
	<ng-include src="'shared/footer.html'"></ng-include>
	
</body>
</html>