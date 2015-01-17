'use strict';

describe('TemplateCtrl Unit Test', function() {
 
  beforeEach(module('foundryApp'));

  var TemplateCtrl, scope, rootScope, location;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = {};
    rootScope = $rootScope;
    location = $location,
    rootScope.lbs = [];
    rootScope.resources = [];
    rootScope.servers = [];
    rootScope.template = {'description': 'test descr'};
    TemplateCtrl = $controller('TemplateCtrl', {
      $scope: scope,
      $rootScope : rootScope,
      $location: location
    });
  }));

  describe('getJSON', function () {
    it('produces good JSON', function () {
      var expected = '{\n  "heat_template_version": "2014-10-16",\n  "description": "test descr",\n  "resources": {},\n  "outputs": {}\n}'
      scope.getJSON();
      expect(rootScope.output).toEqual(expected);
    });
  });
  
  describe('getYAML', function () {
    it('produces good yaml', function () {
      var expected = 'heat_template_version: "2014-10-16"\ndescription: test descr\nresources: {}\noutputs: {}\n';
      scope.getYAML();
      expect(rootScope.output).toEqual(expected);
    });
  });

  describe('saveToFile', function () {
    it('saves with correct params', function () {
      scope.format = 'YAML';
      scope.output = 'test output';
      spyOn(window, 'Blob').and.callFake(function (a, b) { return {test: 'true'};});
      spyOn(window, 'saveAs').and.callFake(function (a, b) { return;});
      scope.saveToFile();
      expect(window.Blob).toHaveBeenCalledWith(['test output'], {type: '"application/yaml' + ';charset=' + document.characterSet});
      expect(window.saveAs.calls.mostRecent().args.length).toEqual(2);
      expect(window.saveAs.calls.mostRecent().args[0]).toEqual({test: 'true'});
    });
  });
  
  describe('back', function () {
    it('should redirect to resources', function () {
      spyOn(location, 'path');
      scope.back();
      expect(location.path).toHaveBeenCalledWith('/resources');
    });
  });

  describe('confirmCopy', function () {
    it('should pop alert', function () {
      spyOn(window, 'alert');
      scope.confirmCopy();
      expect(window.alert).toHaveBeenCalledWith('Template has been copied to your clipboard!');
    });
  });
});