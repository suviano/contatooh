describe("ContactController", function() {
  var $scope, $httpBackend;

  beforeEach(function() {
    module('contatooh');
    inject(function($injector, _$httpBackend_) {
      $scope = $injector.get('$rootScope').$new();
      $httpBackend = _$httpBackend_;
      $httpBackend.when('GET', '/api/contacts/1').respond({
        _id: '1'
      });
      $httpBackend.when('GET', '/api/contacts').respond([{}]);
    });
  });

  it("Should create a empty contact when the route is passed",
    inject(function($controller) {
      $controller('ContactController', {
        "$scope": $scope
      });
      expect($scope.contact._id).toBeUndefined();
    }));

  it("Should fill the Contact when params when the route is passed ",
    inject(function($controller) {
      $controller('ContactController', {
        '$routeParams': {
          contactId: 1
        },
        '$scope': $scope
      });
      $httpBackend.flush();
      expect($scope.contact._id).toBeDefined();
    }));
});
