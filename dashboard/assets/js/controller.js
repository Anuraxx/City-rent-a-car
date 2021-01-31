/* angular.module('chooseCatg', []).controller('loadCatg_controller', function($scope,$http) {
    //console.log('choosecatg');
    $http.get(`${constant.server_url}/getCategory`).then((response)=>{
        //console.log(response.data);
        $scope.catgs=response.data;
    });

  }); */
 
  angular.module('cty-ang', []).controller('cty-contr', function($scope,$http) {
    //console.log('choosecatg');
    $http.get(`${constant.server_url}/getCategory`).then((response)=>{
        //console.log(response.data);
        $scope.catgs=response.data;
    });
  
    //var prod=[5,6,8];
    var prod=[{'vechid':'TATA','catg':'SUV'},{'vechid':'Hyundai','catg':'Sedan'},{'vechid':'Maruti','catg':'Standard'}];
    $scope.prod=prod;
  });