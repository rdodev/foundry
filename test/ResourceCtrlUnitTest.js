'use strict';

describe('ResourcesCtrl Unit Test', function() {
 
  beforeEach(module('foundryApp'));

  var ResourcesCtrl, scope, rootScope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    rootScope = {};
    rootScope.lbs = [];
    rootScope.resources = [];
    rootScope.servers = [];
    ResourcesCtrl = $controller('ResourcesCtrl', {
      $scope: scope,
      $rootScope : rootScope
    });
  }));

  describe('new scope', function () {
    it('Initially properties should be initialized', function () {
      expect(scope.images).not.toBeUndefined();
      expect(scope.flavors).not.toBeUndefined();
      expect(scope.algorithms.length).toEqual(3);
      expect(scope.protocols.length).toEqual(2);
      expect(scope.caching.length).toEqual(2);
    });
  });

  describe('addServer', function () {
    it('sets values correctly after add', function () {
        expect(scope.server).toEqual({});
        scope.server.server_name = 'sname';
        scope.server.key_name = 'kname';
        scope.server.image_name = 'iname';
        scope.server.flavor_name = 'fname';
        scope.server.user_data = 'usrdata';
        scope.addServer();
        expect(rootScope.servers.length).toEqual(1);
        expect(rootScope.resources.length).toEqual(1);
        var srv = rootScope.servers.pop();
        expect(srv.server_name).toEqual('sname');
        expect(srv.key_name).toEqual('kname');
        expect(srv.image_name).toEqual('iname');
    });
  });

  describe('addLB', function () {
    it('sets values correctly after add', function () {
        expect(scope.lb).toEqual({nodes: []});
        scope.lb.lbname = 'lbname';
        scope.lb.port = '8000';
        scope.lb.protocol = 'HTTP';
        scope.addLB();
        expect(rootScope.lbs.length).toEqual(1);
        expect(rootScope.resources.length).toEqual(1);
        var lb = rootScope.lbs.pop();
        expect(lb.lb_name).toEqual('lbname');
        expect(lb.port).toEqual('8000');
        expect(lb.protocol).toEqual('HTTP');
    });
  });
});
