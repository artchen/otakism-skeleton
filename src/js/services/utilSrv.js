(function() {
	angular.module('App').service('UtilService', [
    '$filter', 
    '$mdDialog',
    function($filter, $mdDialog) {
		
		var self = this;

    /**
     * Popup an alert dialog
     * @param options {Object} title, content
     */
    self.alert = function(options) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.body))
          .clickOutsideToClose(true)
          .title(options.title || "Error")
          .htmlContent(options.content)
          .ariaLabel(options.title)
          .ok('Close')
      );
    };
    
    
	}]);
})(angular);
