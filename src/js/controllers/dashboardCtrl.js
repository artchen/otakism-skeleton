(function() {	
	
	angular.module('App').controller('DashboardController', [
		'$scope',
		function($scope) {

			$scope.loaded = false;
			
			$scope.init = function() {
				$scope.loaded = true;
			};

			$scope.init();
		}
	]);
	
})(angular);