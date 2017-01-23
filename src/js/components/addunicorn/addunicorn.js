((app) => {
    app.component('addunicorn', {
        templateUrl: 'js/components/addunicorn/addunicorn.html',
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




                    },
                    add(unicorn){
                        unicorn['owner'] = this.user._id
                      unicornService.add(unicorn).then((res)=>{
                        this.unicorn = {}
                        $state.reload()
                      })
                    }
                })
            }
        ]
    })
})(angular.module('app.addunicorn'))
