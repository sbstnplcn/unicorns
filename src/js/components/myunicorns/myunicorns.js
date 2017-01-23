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
                        allUnicorns.forEach((el) => {
                            let a = new Date
                            let b = new Date(el.birth)
                            return el.age = (a.getFullYear() - b.getFullYear())
                        })
                        this.unicorns = allUnicorns.filter((el, idx) => {
                            return el.owner._id == this.user._id
                        })
                    })

                }
            })
        }]
    })
})(angular.module('app.myunicorns'))
