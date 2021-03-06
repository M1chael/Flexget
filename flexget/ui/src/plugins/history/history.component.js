(function () {
  'use strict';
  angular
    .module("flexget.plugins.history")
    .component('historyView', {
      templateUrl: 'plugins/history/history.tmpl.html',
      controllerAs: 'vm',
      controller: historyController,
    });

  function historyController($http) {
    var vm = this;

    vm.title = 'History';
    $http.get('/api/history/')
      .success(function (data) {
        vm.entries = data['entries'];
      })
      .error(function (data, status, headers, config) {
        // log error
      });
  }

})();
