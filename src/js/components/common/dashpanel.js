((app) => {
    app.component('dashpanel', {
        templateUrl: "js/components/common/dashpanel.html",
        controller: ['usersService', function(usersService) {
            usersService.getCurrent().then((res) => {
                this.user = res.data
            })
        }]
    })
})(angular.module('app.common'))
