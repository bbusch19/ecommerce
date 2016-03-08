angular.module('ecommerceApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('products', {
    url: '/products',
    templateUrl: './components/views/mainTmpl.html',
    controller: 'mainCtrl'
  })
  .state('admin', {
    url: '/admin',
    templateUrl: './components/views/adminTmpl.html',
    controller: 'adminCtrl'
  });

  $urlRouterProvider.otherwise('/');


});
