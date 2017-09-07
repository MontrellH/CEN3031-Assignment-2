angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;


    $scope.addListing = function() {
     $scope.listings.push({ 'code':$scope.code1, 'name': $scope.name1, 'address':$scope.address1, 'coordinates':$scope.coordinates1}); //, 
      
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice( index, 1 );
    };
    $scope.showDetails = function(index) {
      $scope.code = index.code;
      $scope.name = index.name;
      $scope.address = index.address;
      $scope.coordinates = index.coordinates;
    };

  }
]);