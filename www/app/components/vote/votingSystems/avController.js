(function(){
  'use strict';

  angular.module('agora')
    .controller('avController', function($scope, $rootScope, User, Election){
      $rootScope.avChoices = []
      $scope.isChosen = function(candidate) {
        var i;
        for (i = 0; i < $rootScope.avChoices.length; i++) {
          if ($rootScope.avChoices[i].CandidateID === candidate.CandidateID) {
            return true;
          }
        }
        return false;
      }
      $scope.positionOf = function(candidate) {
        return $rootScope.avChoices.findIndex(x => x.CandidateID==candidate.CandidateID)+1;
      }
      $scope.setChoice = function(candidate){
        console.log(candidate)
        if ($scope.isChosen(candidate)) {
          $scope.avChoices.splice($rootScope.avChoices.findIndex(x => x.CandidateID==candidate.CandidateID),1);
        } else {
          $rootScope.avChoices.push(candidate)
        }
      }
      $scope.$on('systemsLoaded', function() {
        $rootScope.currentPage = $rootScope.currentPage + 1
        console.log("goingav")
        $scope.nextSystem = $rootScope.election.systems[$rootScope.currentPage+1]
        console.log($rootScope.election.systems[$rootScope.currentPage+1])
        $scope.nextPage=$rootScope.election.systems[$rootScope.currentPage+1]
      })
    })
})();