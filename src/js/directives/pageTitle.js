function pageTitle($rootScope, $timeout) {
  return {
    link: function(scope, element) {
      var listener = function(event, toState, toParams, fromState, fromParams) {
        var title = $rootScope.appName;
        if (toState.data && toState.data.pageTitle) {
          title = title + ' / ' + toState.data.pageTitle;
        }
        $timeout(function() {
          element.text(title);
        });
      };
      $rootScope.$on('$stateChangeStart', listener);
    }
  };
}

angular
  .module('App')
  .directive('pageTitle', ['$rootScope', '$timeout', pageTitle]);