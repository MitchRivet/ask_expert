askExpert.controller('AnswerCtrl', function AnswerCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {

  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)


  $scope.addAnswer = function() {
    $scope.question.answers.push({ answer: $scope.questionAnswer, id: $scope.question.answers.length,  approved: false, votes: 0});
    $scope.questionAnswer = null;

  }

  $scope.approveAnswer = function(answer, id, votes) {

    $scope.question.answers[id] = ({ answer: answer, id: id, approved: true, votes: votes});

  }

  $scope.upVote = function (answer, id, approved, votes) {
      $scope.question.answers[id] = ({ answer: answer, id: id, approved: approved, votes: (votes + 1)})
  }

  $scope.downVote = function (answer, id, approved, votes) {
    $scope.question.answers[id] = ({ answer: answer, id: id, approved: approved, votes: (votes - 1)})
  }


  console.log($scope.question);

});
