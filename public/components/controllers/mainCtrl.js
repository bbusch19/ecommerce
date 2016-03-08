angular.module('ecommerceApp').controller('mainCtrl', function($scope, mainService) {

mainService.getProducts().then(function(response) {
  $scope.products = response.data;
});


});
