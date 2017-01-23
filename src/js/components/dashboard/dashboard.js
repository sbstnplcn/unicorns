((app) => {
    app.component('dashboard', {
        templateUrl: 'js/components/dashboard/dashboard.html',
        controller: ['usersService', '$state', 'authService', 'unicornService',
            function(usersService, $state, authService, unicornService) {
                angular.extend(this, {
                    $onInit() {

                        usersService.getCurrent().then((res) => {
                            this.user = res.data
                        }).catch(() => {
                            $state.go('app.prelogin', {
                                reload: true
                            })
                        })

                        unicornService.get().then((res) => {
                            this.unicorns = res.data
                        })


                    },
                    disconnect() {
                        authService.disconnect().then(() => {
                            $state.go('app.prelogin', {
                                reload: true
                            })
                        })
                    }
                })
            }
        ]
    })
})(angular.module('app.dashboard'))
