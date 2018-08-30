;(function () {

    'use strict';

    angular
        .module('app')
        .controller('HeaderBlockController', HeaderBlockController);

    HeaderBlockController.$inject = ['$state', '$timeout', '$translate'];

    function HeaderBlockController($state, $timeout, $translate) {
        let vm = this;

        vm.contentActive = false;

        vm.langOpen = langOpen;
        vm.changeLang = changeLang;
        vm.headerWrapperOpen = headerWrapperOpen;
        vm.headerWrapperClose = headerWrapperClose;


        function headerWrapperOpen() {
            $('.header_wrapper').addClass('active');
            $(document).mouseup(function (e) {
                let container = $('.header_wrapper');
                if (container.has(e.target).length === 0) {
                    container.removeClass('active');
                }
            });
        }

        function headerWrapperClose() {
            $('.header_wrapper').removeClass('active');
        }

        function langOpen(style) {

            $timeout(function () {
                $(style).addClass('active');
            });

            $(document).mouseup(function (e) {
                var container = $(style);
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }

        function changeLang(lang) {
            $translate.use(lang);
        }

        $(document).ready(function () {
            $('body,html').animate({scrollTop: 0}, 1);
            $(window).scroll(function () {
                let wScroll = $(this).scrollTop();

                if (wScroll > $('#section').offset().top + 50) {
                    console.log("hi")
                    $('#header_site').css({
                        'background': 'rgba(37, 42, 54, 0.94)',
                        'transition': '.8s'
                    })
                }
                else if (wScroll > $('#section').offset().top - 60) {
                    $('#header_site').css({
                        'background': 'transparent',
                        'transition': '.8s'
                    })
                }

            })
        })
    }

})();
