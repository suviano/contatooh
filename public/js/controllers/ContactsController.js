angular.module('contatooh').controller('ContactsController',
    function ($scope, Contact, Contacts) {
        $scope.contacts = [];
        $scope.message = {
            text: ''
        };
        $scope._filter = '';

        function searchContacts() {
            Contacts.query(
                function (contacts) {
                    $scope.contacts = contacts;
                    $scope.message = {};
                },
                function (erro) {
                    $scope.message = {
                        text: 'Not possible find the contact'
                    };
                    console.log(erro);
                }
                );
        }
        searchContacts();

        $scope.remove = function (contact) {
            Contact.delete({
                id: contact._id
            },
                searchContacts,
                function (erro) {
                    $scope.message = {
                        text: 'Not possible remove the contact'
                    };
                    console.log(erro);
                });
        };

    });
