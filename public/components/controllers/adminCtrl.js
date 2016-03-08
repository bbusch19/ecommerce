angular.module('ecommerceApp').controller('adminCtrl', function($scope, mainService) {

  mainService.getProducts().then(function(response) {
    $scope.products = response.data;
  });

  $scope.addProduct = function(newProduct) {
      mainService.postProduct(newProduct);
  }

  $scope.changeProduct = function(product, id) {
    mainService.putProduct(product, id);
  }

  $scope.removeProduct = function(productId) {
    mainService.deleteProduct(productId)
  }

})
