;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        var vm = this;

        vm.solutionList = [
            {
                image:'content/img/homepage_solution/1.png',
                title:'homepage_solution_item1_title',
                text:'homepage_solution_item1_text',
                link:'ecn'
            },
            {
                image:'content/img/homepage_solution/4 (2).png',
                title:'homepage_solution_item2_title',
                text:'homepage_solution_item2_text',
                link:'mt4'
            },
            {
                image:'content/img/homepage_solution/2.png',
                title:'homepage_solution_item3_title',
                text:'homepage_solution_item3_text',
                link:'liquidity'
            },
            {
                image:'content/img/homepage_solution/3.png',
                title:'homepage_solution_item4_title',
                text:'homepage_solution_item4_text',
                link:'trade'
            },
            {
                image:'content/img/homepage_solution/5 (2).png',
                title:'homepage_solution_item5_title',
                text:'homepage_solution_item5_text',
                link:'provider'
            },
            {
                image:'content/img/homepage_solution/3.png',
                title:'homepage_solution_item6_title',
                text:'homepage_solution_item6_text',
                link:'floating'
            },
            {
                image:'content/img/homepage_solution/6.png',
                title:'homepage_solution_item7_title',
                text:'homepage_solution_item7_text',
                link:'auto_risk'
            },
            {
                image:'content/img/homepage_solution/4 (2).png',
                title:'homepage_solution_item8_title',
                text:'homepage_solution_item8_text',
                link:'api'
            },
            {
                image:'content/img/homepage_solution/1.png',
                title:'homepage_solution_item9_title',
                text:'homepage_solution_item9_text',
                link:'trader_room'
            },
            {
                image:'content/img/homepage_solution/3.png',
                title:'homepage_solution_item10_title',
                text:'homepage_solution_item10_text',
                link:'crm'
            }
        ]


    }
})();