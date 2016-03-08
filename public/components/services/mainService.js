angular.module('ecommerceApp').service('mainService', function($http, $q) {

this.getProducts = function() {
  return $http({
    method: 'GET',
    url: 'http://localhost:3000/products'
  })
}

this.postProduct = function(newProduct) {
  $http({
    method: 'POST',
    url: 'http://localhost:3000/products',
    data: newProduct
  })
}

this.putProduct = function(product, id) {
  $http({
    method: 'PUT',
    url: 'http://localhost:3000/products/' + id,
    data: product
  })
}

this.deleteProduct = function(productId) {
  $http({
    method: 'DELETE',
    url: 'http://localhost:3000/products/' + productId
  })
}

});
