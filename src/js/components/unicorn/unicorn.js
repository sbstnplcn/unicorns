((app) => {
    app.component('unicorn', {
        templateUrl: 'js/components/unicorn/unicorn.html',
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
                            this.unicorns.forEach((el) => {
                                let a = new Date
                                let b = new Date(el.birth)
                                return el.age = (a.getFullYear() - b.getFullYear())
                            })
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
})(angular.module('app.unicorn'))
