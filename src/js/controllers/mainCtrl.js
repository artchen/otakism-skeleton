(function() {	
	
	angular.module('App').controller('MainController', [
		'$scope',
		'$window',
		'$mdSidenav',
		'APIService',
		function($scope, $window, $mdSidenav, APIService) {

			$scope.menu = [];
			$scope.loaded = false;
			
			$scope.getMenu = function(callback) {
				APIService.getMenu(function(data) {
					$scope.menu = data;
					if (callback instanceof Function) callback();
				});
			};
			
			$scope.toggleSidebar = function() {
				$mdSidenav('sidebar').toggle();
			};
			
			$scope.jump = function(url, target) {
				$window.open(url, target||'');
			};
			
			$scope.init = function() {
				$scope.getMenu(function() {
					$scope.loaded = true;
				});
			};

			$scope.init();
		}
	]);
	
})(angular);