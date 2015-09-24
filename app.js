var askExpert = angular.module('askExpert', ['ui.router']);

askExpert.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('ask', {
      url:"/questions_user",
    templateUrl: "partials/questions_user.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state ('answer_question', {
    url: "/questions_expert",
    templateUrl: "partials/questions_expert.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state ('question_answers_expert', {
    url: "/:questionId/expert",
    templateUrl: "partials/question_answers_expert.html",
    controller: 'AnswerCtrl'
  });

  $stateProvider.state ('question_answers_user', {
    url: "/:questionId/user",
    templateUrl: "partials/question_answers_user.html",
    controller: 'AnswerCtrl'
  });

});
