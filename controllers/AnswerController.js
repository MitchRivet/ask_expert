askExpert.controller('AnswerCtrl', function AnswerCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {

  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)


  $scope.addAnswer = function() {
    $scope.question.answers.push({ answer: $scope.questionAnswer, id: $scope.question.answers.length,  approved: false });
    $scope.questionAnswer = null;

  }

  $scope.approveAnswer = function(answer, id) {

    $scope.question.answers[id] = ({ answer: answer, id: id, approved: true });

  }


  console.log($scope.question);

});
