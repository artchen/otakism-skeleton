(function() {
  angular.module('App', [
    'ui.router',
    'ngMaterial',
    'ngAnimate',
    'ngSanitize',
    'angular-loading-bar'
  ]);
  
  function appConfig($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, cfpLoadingBarProvider) {
    
    cfpLoadingBarProvider.includeSpinner = false;
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange');
      
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: "/views/dashboard.html",
        controller: "DashboardController",
        date: {
          pageTitle: "Dashboard"
        }
      });
  }
  
  function appRun($rootScope, $state) {
    $rootScope.appName = "Application";
    $rootScope.$state = $state;
  }
  
  angular.module('App')
    .config(appConfig)
    .run(appRun);
    
})(angular);
