let LikeButtonController = function ($scope) {

  $scope.counter = function (count){

    if (count === 1){
      return 'like';
    } else {
      return 'likes';
    }

  };

};

LikeButtonController.$inject = ['$scope'];
export default LikeButtonController;