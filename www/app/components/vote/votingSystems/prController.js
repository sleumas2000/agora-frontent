(function(){
  'use strict';

  angular.module('agora')
    .controller('prController', function($scope, $rootScope, User, Election){
      if (!$rootScope.isGoing) $rootScope.$broadcast('goBackHome');
      var makeFilter = function(choice) {
        return function(candidate) {
          return candidate.CandidateID == choice
        }
      }
      $scope.setChoice = function(choice) {
        var choiceList = $rootScope.election.candidates.filter(makeFilter(choice))
        if (choiceList.length === 1) {
          $rootScope.prChoice = choiceList[0]
        } else {
          $rootScope.prChoice = {CandidateID:0,CandidateName:"",PartyID:"",PartyName:""}
        }
      }
      $scope.setChoice(0)
      $scope.$on('systemsLoaded', function() {
        $rootScope.currentPage = $rootScope.currentPage + 1
        console.log("goingpr")
        console.log($rootScope.election.systems[$rootScope.currentPage+1])
        $scope.nextPage=$rootScope.election.systems[$rootScope.currentPage+1]
      })
    })
})();