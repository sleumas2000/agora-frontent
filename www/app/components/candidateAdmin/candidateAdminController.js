(function(){
  'use strict';

  angular.module('agora')
    .controller('candidateAdminController', function($scope, Candidate, Party){

      $scope.user = {
        id: 125,
        DisplayName: 'Mr S Balderson'
      };
      $scope.candidates = Candidate.query();
      $scope.parties = Party.query();
      $scope.newCandidate = new Candidate();
      $scope.newParty = new Party()
      $scope.addCandidate = function(){
        console.log("Submitting")
        console.log($scope.newCandidate)
        $scope.candidates.splice($scope.candidates.length,0,$scope.newCandidate)
        Candidate.save($scope.newCandidate, function(){
          delete $scope.newCandidate;
          $scope.newCandidate = new Candidate();
          $scope.candidates = Candidate.query();
        });
      };
      $scope.deleteCandidate = function(candidateID,rowNumber){
        Candidate.delete({id: candidateID});
        $scope.candidates.splice(rowNumber,1)
      }
      $scope.addParty = function(){
        console.log("Submitting")
        console.log($scope.newParty)
        $scope.parties.splice($scope.parties.length,0,$scope.newParty)
        Party.save($scope.newParty, function(){
          $scope.parties = Party.query();
          delete $scope.newParty;
          $scope.newParty = new Party();
        });
      };
      $scope.deleteParty = function(partyID,rowNumber){
        Party.delete({id: partyID});
        $scope.parties.splice(rowNumber,1)
      }
    })
})();