askExpert.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];

  factory.addQuestion = function() {
    factory.questions.push({ question: factory.questionString, id: factory.questions.length + 1, answers: [] });
    factory.questionString = null;
  };

  factory.filterFn = function(question) {
    return  question.answers && question.answers.length === 0;
  };

  return factory;

});
