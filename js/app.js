angular.module('BootstrapTabs', ['ui.bootstrap'])

.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
});