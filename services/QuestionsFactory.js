askExpert.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];

  factory.addQuestion = function() {
    factory.questions.push({ question: factory.questionString, id: factory.questions.length + 1, answers: [] });
    factory.questionString = null;
  };

  return factory;

}); 
