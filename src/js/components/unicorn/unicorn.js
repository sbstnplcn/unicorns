((app) => {
    app.component('unicorn', {
        templateUrl: 'js/components/unicorn/unicorn.html',
        controller: ['usersService', '$state', 'authService', 'unicornService', '$stateParams',
            function(usersService, $state, authService, unicornService, $stateParams) {
                angular.extend(this, {
                    $onInit() {

                        usersService.getCurrent().then((res) => {
                            this.user = res.data
                        }).catch(() => {
                            $state.go('app.prelogin', {
                                reload: true
                            })
                        })

                        unicornService.getById($stateParams.unicornId).then((res) => {
                            this.unicorn = res.data
                            let a = new Date
                            let b = new Date(this.unicorn.birth)
                            this.unicorn.age = (a.getFullYear() - b.getFullYear())
                        })


                        //Edit Mode
                        this.editMode = false

                        let previous = {}

                        this.edit = (unicorn) => {
                            if (this.editMode) {
                                unicornService.edit(unicorn).then((res) => {
                                    this.editMode = false
                                })
                            } else {
                                previous[unicorn] = angular.copy(unicorn)
                                this.editMode = true
                            }
                        }

                        // cancel
                        this.cancel = (unicorn) => {
                            unicorn = previous[unicorn]
                            this.unicorn = unicorn
                            this.editMode = false
                        }

                        // delete
                        this.delete = (unicorn) => {
                            unicornService.delete(unicorn).then((res) => {
                                $state.go('app.dashboard', {reload: true})
                            })
                        }


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
