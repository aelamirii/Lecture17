(function () {
'use strict';

var Shopping_List_Item1 = ["Milk", "Danute", "Cookies","Chokolate"];

var Shopping_List_Item2 = [

{
  name: "Milk",
  quantity: "10"
},
{
  name: "Danute",
  quantity: "200"
},
{
  name: "Cookies",
  quantity: "300"
},
{
  name: "Chokolate",
  quantity: "10"
}
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope) {

  $scope.ShoppingListItems1 = Shopping_List_Item1;
  $scope.ShoppingListItems2 = Shopping_List_Item2;


  $scope.AddNewItem2 = function () {

    var newItem = {
                  name: $scope.NewItemName,
                  quantity: $scope.NewItemQuantity
                };
      $scope.ShoppingListItems2.push(newItem)          ;

  };


  $scope.AddNewItem1 = function () {
    console.log("New Item 1 :"+$scope.NewItemName1+":");

    var newItem = $scope.NewItemName1;

    $scope.ShoppingListItems1.push(newItem);

    $scope.NewItemName1 = "";
  
  };


}



})();
