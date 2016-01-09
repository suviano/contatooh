angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(
        function ($routeProvider, $httpProvider) {

            $httpProvider.interceptors.push('Interceptor');

            $routeProvider.when('/contacts', {
                templateUrl: 'partials/contacts.html',
                controller: 'ContactsController'
            }).when('/contact/:contactId', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactController'
            }).when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactController'
            }).when('/auth', {
                templateUrl: 'partials/auth.html'
            }).otherwise({
                redirectTo: '/contacts'
            });
        });
