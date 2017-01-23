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
                            console.log(this.unicorns);
                            this.unicorns.forEach((el) => {
                                let a = new Date
                                let b = new Date(el.birth)
                                return el.age = (a.getFullYear() - b.getFullYear())
                            })
                        })

                        this.filterby = 'name'

                    }
                })
            }
        ]
    })
})(angular.module('app.dashboard'))
