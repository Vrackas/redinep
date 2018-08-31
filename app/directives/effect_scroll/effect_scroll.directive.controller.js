;(function () {

    'use strict';

    angular
        .module('app')
        .controller('effectScrollController', effectScrollController);

    effectScrollController.$inject = ['$state'];

    function effectScrollController($state) {
        var vm = this;

        $("#anchor").on("click", "a", function (event) {

            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            // console.log(id);
            if (id === '#section') {
                top = top - 200;
                // return top;
                $('body,html').animate({scrollTop: top}, 1000);
            }

            $('body,html').animate({scrollTop: top}, 1000);
        });





    }
})();
