angular.module('ecommerceApp').controller('adminCtrl', function($scope, mainService) {

  mainService.getProducts().then(function(response) {
    $scope.products = response.data;
  });

  $scope.addProduct = function(newProduct) {
      mainService.postProduct(newProduct);
  }

  $scope.changeProduct = function(product) {
    mainService.putProduct(product);
  }

  $scope.removeProduct = function(product) {
    mainService.deleteProduct(product);
  }

})
