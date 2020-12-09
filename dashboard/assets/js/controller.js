angular.module('chooseCatg', []).controller('loadCatg_controller', function($scope,$http) {
    $("#category").click(()=>{
      $http.get("https://fortunate-versed-clematis.glitch.me/getCategory").then((response)=>{
        //console.log(response.data);
        $scope.catgs=response.data;
      });
    })
  });

