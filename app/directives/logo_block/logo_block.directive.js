;(function () {

    'use strict';

    angular
        .module('app.logo', [])
        .directive('logoBlock', logoBlock);

    logoBlock.$inject = [];

    function logoBlock() {
        return {
            bindToController: true,
            controller: 'LogoBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/logo_block/logo_block.html',
            link: link,
            restrict: 'AE',
            scope: {
                model: '='
            }
        };


        function link(scope, element, attrs) {

        }
    }
})();