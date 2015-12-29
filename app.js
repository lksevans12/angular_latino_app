var app = angular.module('laura',['ngAnimate'])

app.controller('MainController', function($scope,$http ){
  $http.get('https://data.cityofnewyork.us/resource/799n-b76v.json').then(function(response){
    $scope.nycData = response.data;
    console.log($scope.nycData)
  });

  function moveMap(lat, lng) {
    map.setCenter(new google.maps.LatLng(lat, lng));
    dropPin(lat,lng);
  }

  function dropPin(lat,lng){
    var myLatLng = {lat: Number(lat), lng: Number(lng)};
    var marker = new google.maps.Marker({
      position: myLatLng,
      map:window.map,
      title: "Location"
    });
  }


  $scope.toggleItem = function(item){
    item.showMore = !(item.showMore);
    if (item.toggleText == "show less"){
      item.toggleText = "show more";
    } else {
      item.toggleText = "show less";
    };
    moveMap(item.location_1.latitude, item.location_1.longitude);
  };


});


function initMap() {
  var latitude = 41;
  var longitude = -72;
// Create a map object and specify the DOM element for display.
window.map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: Number(latitude), lng: Number(longitude)},
  scrollwheel: false,
  zoom: 16
  });
};
