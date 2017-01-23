((app) => {
    'use strict'
    app.service('authService', ['$http', '$cookies', '$q', '$window',
    function($http, $cookies, $q, $window) {
        return {
            connect(data) {
                return $http.post('/api/auth', data).then((res) => {
                    this.currentUser = res.data.user
                    $cookies.put('token', res.data.token)
                })
            },
            disconnect() {
                return new Promise((resolve, reject) => {
                    $cookies.remove("token")
                    this.currentUser = null
                    resolve()
                })
            },
            getCurrent() {

                let deferred = $q.defer()
                if (!$cookies.get('token')) {
                    deferred.reject()
                } else {
                    if (!this.currentUser) {
                        let payload = $cookies.get('token').split('.')[1]
                        payload = $window.atob(payload)
                        payload = JSON.parse(payload)
                        this.currentUser = payload._doc
                        if (Math.round(new Date().getTime() / 1000) > payload.exp)
                            return this.disconnect()
                    }
                    deferred.resolve(this.currentUser)
                }
                return deferred.promise
            }
        }
    }])
})(angular.module('app.services'))
