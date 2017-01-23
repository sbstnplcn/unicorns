((app) => {
    app.component('dashpanel', {
        templateUrl: "js/components/common/dashpanel.html",
        controller: ['usersService', function(usersService) {
            angular.extend(this, {
                $onInit() {
                    usersService.getCurrent().then((res) => {
                        this.user = res.data
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
        }]
    })
})(angular.module('app.common'))
