((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<header></header><ui-view></ui-view><footer></footer>'
        })
    }])

})(angular.module('app.config'))
