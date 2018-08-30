;(function () {

    'use strict';

    angular
        .module('app')
        .controller('LogoBlockController', LogoBlockController);

    LogoBlockController.$inject = ['$state'];

    function LogoBlockController($state) {
        let vm = this;

        vm.logos=[
            {url:'content/img/logo/logo-mc.svg'},
            {url:'content/img/logo/logo-pci.svg'},
            {url:'content/img/logo/logo-visa.svg'},
            {url:'content/img/logo/SEPA.svg'},
            {url:'content/img/logo/SWIFT.svg'},
        ]

    }
})();
