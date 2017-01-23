((app) => {
    app.component('myunicorns', {
        templateUrl: 'js/components/myunicorns/myunicorns.html',
        controller: ['unicornService', 'usersService', function(unicornService, usersService) {
            angular.extend(this, {
                $onInit() {
                    usersService.getCurrent().then((res) => {
                        this.user = res.data
                        return unicornService.get()
                    }).then((res) => {
                        let allUnicorns = res.data
                        this.unicorns = allUnicorns.filter((el, idx) => {
                            return el.owner == this.user._id
                        })
                    })

                }
            })
        }]
    })
})(angular.module('app.myunicorns'))
