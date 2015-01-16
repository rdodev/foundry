'use strict';

describe('MainCtrl Unit Test', function() {
 
  beforeEach(module('foundryApp'));

  var MainCtrl, scope, rootScope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    rootScope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $rootScope : rootScope
    });
  }));

  describe('new Main scope', function () {
    it('Initially rootScope properties shouldnt be initialized', function () {
      expect(rootScope.template).toBeUndefined();
      expect(rootScope.servers).toBeUndefined();
      expect(rootScope.lbs).toBeUndefined();
      expect(rootScope.resources).toBeUndefined();
    });
  });

  describe('init scope', function () {
    it('Initially rootScope properties shouldnt be initialized', function () {
      scope.description = 'test description';
      scope.addResources();
      expect(rootScope.template).not.toBeUndefined();
      expect(rootScope.servers).toEqual([]);
      expect(rootScope.lbs).toEqual([]);
      expect(rootScope.resources).toEqual([]);
    });
  });
});
