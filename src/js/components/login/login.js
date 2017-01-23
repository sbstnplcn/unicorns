((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: ['authService', '$state', function(authService, $state) {
            angular.extend(this, {
                $onInit() {

                },
                connect() {
                    authService.connect(this.user).then((res) => {
                        $state.go('app.dashboard').then(() => {
                            $state.reload()
                        })
                    })
                }
            })
        }]
    })
})(angular.module('app.login', []))
