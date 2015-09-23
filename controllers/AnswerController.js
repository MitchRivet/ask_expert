askExpert.controller('AnswerCtrl', function AnswerCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
  $scope.addAnswer = function() {
    $scope.question.answers.push({ answer: $scope.questionAnswer });
    $scope.questionAnswer = null;
  }
  console.log($scope.question); 
});
