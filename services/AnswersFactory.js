askExpert.factory('AnswersFactory', function AnswersFactory() {
  var factory = {};
  factory.answers = [];

  factory.addAnswer = function() {
    factory.answers.push({ answer: factory.answerString, id: factory.questions.length + 1, answers: [] });
    factory.questionString = null;
  };

  return factory;

});
