;(function () {
    angular
        .module('app')
        .config(mainConfig);


    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$translateProvider'];

    function mainConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {


        $urlRouterProvider.otherwise('/home');


        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm'
            })
            .state('ecn', {
            url: '/ecn',
            templateUrl: 'templates/ecn/ecn.html',
            controller: 'ECNController',
            controllerAs: 'vm'
            })
            .state('mt4', {
                url: '/mt4',
                templateUrl: 'templates/mt4/mt4.html',
                controller: 'MT4Controller',
                controllerAs: 'vm'
            })
            .state('liquidity', {
                url: '/liquidity',
                templateUrl: 'templates/liquidity/liquidity.html',
                controller: 'LiquidityController',
                controllerAs: 'vm'
            })
            .state('trade', {
                url: '/trade',
                templateUrl: 'templates/trade/trade.html',
                controller: 'TradeController',
                controllerAs: 'vm'
            })
            .state('provider', {
                url: '/provider',
                templateUrl: 'templates/provider/provider.html',
                controller: 'ProviderController',
                controllerAs: 'vm'
            })
            .state('floating', {
                url: '/floating',
                templateUrl: 'templates/floating/floating.html',
                controller: 'FloatingController',
                controllerAs: 'vm'
            })
            .state('auto_risk', {
                url: '/auto_risk',
                templateUrl: 'templates/auto_risk/auto_risk.html',
                controller: 'AutoRiskController',
                controllerAs: 'vm'
            })
            .state('api', {
                url: '/api',
                templateUrl: 'templates/api/api.html',
                controller: 'APIController',
                controllerAs: 'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about/about.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact/contact.html',
                controller: 'ContactController',
                controllerAs: 'vm'
            })
            .state('crm', {
                url: '/crm',
                templateUrl: 'templates/crm/crm.html',
                controller: 'CRMController',
                controllerAs: 'vm'
            })
            .state('trader_room', {
                url: '/trader_room',
                templateUrl: 'templates/trader_room/trader_room.html',
                controller: 'TraderRoomController',
                controllerAs: 'vm'
            })


        // $locationProvider.html5Mode(true);

        $translateProvider.registerAvailableLanguageKeys(['en', 'ru'], {
            'en-*': 'en',
            'ru-*': 'ru'
        });


        $translateProvider.useStaticFilesLoader({
            prefix: 'language/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }


})();

