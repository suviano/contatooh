angular.module('contatooh')
  .controller('ContactController',
    function($scope, $routeParams, Contact) {

      if ($routeParams.contactId) {
        Contact.get({
            id: $routeParams.contactId
          },
          function(contact) {
            $scope.contact = contact;
          },
          function(erro) {
            $scope.message = {
              text: 'Not possible get the contact'
            }
            console.log(erro);
          });
      } else {
        $scope.contact = {};
      }

      Contact.query(function(contacts) {
        $scope.contacts = contacts;
      });

      $scope.contact = new Contact();

      $scope.save = function() {
        $scope.contact.$save()
          .then(function() {
            $scope.message = {
              text: "Saved successfully"
            };
            $scope.contact = new Contact();
          })
          .catch(function(erro) {
            $scope.message = {
              text: "It's not possible save the contact"
            };
            console.log(erro);
          });
      };

    });
