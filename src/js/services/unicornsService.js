((app) => {
    'use strict'
    app.service('unicornService', ['$http', '$cookies', '$q', '$window', 'authService',
                        function($http, $cookies, $q, $window, authService) {
        return {
            get() {
                return $http.get('/api/unicorn')
            },
            getById(id) {
                return $http.get('/api/unicorn/' + id)
            },
            add(newUnicorn) {
                return $http.post('/api/unicorn', newUnicorn)
            },
            edit(unicorn) {
                return $http.put('/api/unicorn/' + unicorn._id, unicorn)
            },
            delete(unicorn) {
                return $http.delete('/api/unicorn/' + unicorn._id)
            }
        }
    }])
})(angular.module('app.services'))
