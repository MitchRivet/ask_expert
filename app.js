var askExpert = angular.module('askExpert', ['ui.router']);

askExpert.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('ask', {
    url:"/questions",
    templateUrl: "partials/questions.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state ('answer_question', {
    url: "/questions_expert",
    templateUrl: "partials/questions_expert.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state ('question_answers', {
    url: "/:questionId",
    templateUrl: "partials/question_answers.html",
    controller: 'AnswerCtrl'
  });

});
