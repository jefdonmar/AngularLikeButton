let LikeButtonController = function ($scope) {

  $scope.doSomething = function () {
    $scope.count = $scope.count + 1;
  };

};

LikeButtonController.$inject = ['$scope'];
export default LikeButtonController;