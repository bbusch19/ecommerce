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

this.putProduct = function(product) {
  $http({
    method: 'PUT',
    url: 'http://localhost:3000/products/' + product.id,
    data: product
  })
}

this.deleteProduct = function(product) {
  $http({
    method: 'DELETE',
    url: 'http://localhost:3000/products/' + product.id
  })
}

});
