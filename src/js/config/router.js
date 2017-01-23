((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<header></header><ui-view></ui-view><footer></footer>'
        })
        .state('app.dashboard', {
            url: '/dashboard',
            template: '<dashboard></dashboard>'
        })
        .state('app.prelogin', {
            url: '/prelogin',
            template: '<prelogin></prelogin>'
        })
        .state('app.login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('app.register', {
            url: '/register',
            template: '<register></register>'
        })
        .state('callback', {
            url: '/auth/callback/:token',
            template: '',
            controller: ['usersService', '$stateParams', '$state', function(usersService, $stateParams, $state) {
                if ($stateParams.token) {
                    usersService.setToken($stateParams.token).then((user) => {
                        $state.go('app.infos')
                    })
                } else {
                    $state.go('app.infos')
                }
            }]
        })
    }])

})(angular.module('app.config'))
