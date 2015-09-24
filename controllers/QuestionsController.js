askExpert.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
  $scope.questions = QuestionsFactory.questions;
  $scope.QuestionsFactory = QuestionsFactory;



  $scope.filterFn = function(question) {
    return  question.answers && question.answers.length === 0;
  };

  $scope.filterFn2 = function(question) {
    return  question.answers && question.answers.length != 0;
  };

});
