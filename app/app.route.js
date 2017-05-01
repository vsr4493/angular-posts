routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
        .state('home', {
          url: '/home',
          template: '<home></home>'
        })
        .state('posts', {
          url: '/posts',
          template: '<posts></posts>',
        })
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(false);
}
