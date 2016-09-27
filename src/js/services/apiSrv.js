(function() {
	angular.module('App').service('APIService', [
    '$http',
    function($http) {
		
		var self = this;
		
		self.base_url = "";
		self.api_url = "";

    self.getWorksList = function(callback) {
      $http.get('/data/works.json', {
        cache: false
      }).success(function(data) {
        if (callback) callback(data);
      });
    };

    self.getMenu = function(callback) {
      $http.get('/data/menu.json', {
        cache: false
      }).success(function(data) {
        if (callback) callback(data);
      });
    };
			
	}]);
})(angular);
