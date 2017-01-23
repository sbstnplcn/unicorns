((app) => {
    'use strict'
    app.service('usersService', ['$http', '$cookies', '$q', '$window', 'authService',
                        function($http, $cookies, $q, $window, authService) {
        return {
            get() {
                return $http.get('/api/users')
            },
            getById(users) {
                return $http.get('/api/users/' + users._id)
            },
            getCurrent(){
              return authService.getCurrent().then((current)=>{
                  return $http.get('/api/users/' + current._id)
              })
            },
            add(newUser) {
                return $http.post('/api/users', newUser)
            },
            edit(user) {
                return $http.put('/api/users/' + user._id, user)
            },
            delete(user) {
                return $http.delete('/api/users/' + user._id)
            }
        }
    }])
})(angular.module('app.services'))
