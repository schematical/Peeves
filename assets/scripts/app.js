var _app = angular.module('sogotp', []);
_app.config(function(){

});
_app.controller('MainCtrl', function ($scope, $http) {
    $http.get(
        ghost.url.api('tags', {
            limit: 'all',
            include: 'count.posts',
            order: 'count.posts DESC'
        })
    ).then(function (response) {
        console.log('Success!', response.data);
        $scope.tags = response.data.tags;
    });
})
.directive('tagList', function() {
    return {
        scope: {
            tags: '=tags'
        },
        template:
        '<div>' +
            '<ul style="list-style-type:none;">' +
                '<li ng-repeat="tag in tags">' +
                '       <a href="/tag/{{tag.slug}}">' +
                '           {{tag.name}}' +
                '       </a>' +
                '</li>' +
            '</ul>' +
        '</div>'
    };
});