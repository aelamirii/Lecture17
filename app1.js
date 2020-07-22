(function () {
'use strict';

var List_Items1 = ["Milk" ,"Danute", "Cookies","Chokolate"];

var List_Items2 = [
{
name: "Milk" ,
quantity: "2"
},
{
name: "Danute" ,
quantity: "200"
},
{
name: "Cookies" ,
quantity: "300"
},
{
name: "Chokolate" ,
quantity: "10"
}
];

angular.module('ShoppingListApp' , [])
.controller('ShoppingListController' , ShoppingListController );

ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope) {

  $scope.ListItems1 = List_Items1;
  $scope.ListItems2 = List_Items2;

  $scope.AddNewItem = function () {
    var newItem = {
      name:$scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.ListItems2.push(newItem);

    $scope.newItemName = "";
    $scope.newItemQuantity = "";

  };


  $scope.AddnewItem1 = function () {
    var newItem = $scope.Item1_Name;

    $scope.ListItems1.push(newItem);

     $scope.Item1_Name = "";


  }


};



})();
