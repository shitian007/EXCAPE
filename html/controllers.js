var app = angular.module('app', []);

app.controller('carouselController', function($scope) {
  $scope.features = [
    { header : "Source!", 
      image : "../resources/img/placeholder.jpg",
      description : "Source is our own customized language built on Javascript. Cutting down on certain functionalities of the original language as well as enforcing good programming habits, your foundations in programming will be stronger than ever!"}, 

    { header : "Multiple Explorable Rooms!", 
      image : "../resources/img/placeholder.jpg",
      description : "Be prepared for the challenges ahead with the extensive puzzles that you will be made to solve!"}, 

    { header : "User Content Creation!",
      image : "../resources/img/placeholder.jpg",
      description : "Never get bored again as you take on challenges issued by others. Or even better, create your own Excape rooms for others to hone their skills!"
    }
  ];

  $scope.numFeatured = [];
  for (i = 0; i < $scope.features.length; i++) {
    $scope.numFeatured.push(i);
  }
});

// Scroll document to top upon pageload
$(document).ready(function(){
    $(this).scrollTop(0);
});
