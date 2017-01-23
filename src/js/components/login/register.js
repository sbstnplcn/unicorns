((app) => {
    'use strict'
    app.component('register', {
        templateUrl: 'js/components/login/register.html',
        controller: ['usersService','authService', '$state', function(usersService, authService, $state) {
            angular.extend(this, {
                $onInit() {

                    // add Article
                    this.add = () => {
                        usersService.add(this.newUser).then((res) => {
                            authService.connect(res.data).then(() => {
                                $state.go('app.home').then(() => {
                                    $state.reload()
                                })
                            })
                        })
                    }

                }
            })
        }]
    })
})(angular.module('app.register', []))
