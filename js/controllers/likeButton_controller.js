let LikeButtonController = function ($scope) {

  $scope.words = 'like';
  $scope.words = 'likes';

  $scope.doSomething = function () {
    $scope.count = $scope.count + 1;

    if ($scope.count === 1) {
      $scope.words = 'like';
    } else {
      $scope.words = 'likes';
    }
  };

};

LikeButtonController.$inject = ['$scope'];
export default LikeButtonController;