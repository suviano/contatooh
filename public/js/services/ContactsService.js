angular.module('contatooh')
    .factory('Contact', function ($resource) {
        return $resource('/api/contacts/:id');
    })
    .factory('Contacts', function ($resource) {
        return $resource('/api/contacts');
    });
