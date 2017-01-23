((app) => {
    app.component('dashboard', {
        templateUrl: 'js/components/dashboard/dashboard.html',
        controller: ['usersService', '$state', function(usersService, $state) {
            angular.extend(this, {
                $onInit() {

                    let user = usersService.getCurrent().then((res) => {
                        user = res.data
                    }).catch(()=>{
                        $state.go('app.prelogin', {reload: true})
                    })

                }
            })
        }]
    })
})(angular.module('app.dashboard'))
