((app) => {
    app.component('dashpanel', {
        templateUrl: "js/components/common/dashpanel.html",
        controller: ['usersService', 'authService', '$state', function(usersService, authService, $state) {
            angular.extend(this, {
                $onInit() {
                    usersService.getCurrent().then((res) => {
                        this.user = res.data
                    })

                    //Edit Mode
                    this.editMode = false

                    let previous = {}

                    this.edit = (user) => {
                        if (this.editMode) {
                            usersService.edit(user).then((res) => {
                                this.editMode = false
                            })
                        } else {
                            previous[user] = angular.copy(user)
                            this.editMode = true
                        }
                    }

                    // cancel
                    this.cancel = (user) => {
                        user = previous[user]
                        this.user = user
                        this.editMode = false
                    }

                    // delete
                    this.delete = (user) => {
                        usersService.delete(user).then((res) => {
                            $state.go('app.dashboard', {
                                reload: true
                            })
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
        }]
    })
})(angular.module('app.common'))
