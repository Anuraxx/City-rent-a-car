angular.module('vehicleOption', []).controller('loadVehNames_controller', function($scope,$http) {
    $("#select_cartype").click(()=>{
      $http.get("https://fortunate-versed-clematis.glitch.me/getDataFromQuery?query_name=getVehicleIds").then((response)=>{
        //console.log(response.data);
        var result= response.data;
        var vehIds=[];
        for (var i = 0; i < result.length; i++) {
            vehIds[i] = result[i].vehicleId;
        }
        $scope.names=vehIds;
      });
    })
});