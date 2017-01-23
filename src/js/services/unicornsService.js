((app) => {
    'use strict'
    app.service('unicornService', ['$http', '$cookies', '$q', '$window', 'authService',
                        function($http, $cookies, $q, $window, authService) {
        return {
            get() {
                return $http.get('/api/unicorn')
            },
            getById(unicorn) {
                return $http.get('/api/unicorn/' + unicorn._id)
            },
            getCurrent(){
              return authService.getCurrent().then((current)=>{
                  return $http.get('/api/unicorn/' + current._id)
              })
            },
            add(newUser) {
                return $http.post('/api/unicorn', newUser)
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
