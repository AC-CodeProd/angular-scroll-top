(function(window, angular, undefined) {
    'use strict';
    var ngScrollTopModule = angular.module('ngScrollTop', ['ng']);
    ngScrollTopModule.directive('ngScrollTop', function() {
        return {
            restrict: 'AE',
            replace: false,
            template: '<div class="scroll-top" id="scroll-top" ng-class="scrollTopColor" >' + '<a id="scroll-link" class="scroll-link" title="Revenir en haut de page">' + '<i class="fa fa-arrow-up scroll-icon"></i>' + '</a>' + '</div>',
            link: function(scope, $elm, attrs) {
                var _window = angular.element(window);
                _window.on('scroll', function() {
                    var posScroll = _window.scrollTop();
                    if (posScroll >= 300) {
                        $elm.fadeIn(600);
                    } else {
                        $elm.fadeOut(600);
                    }
                });
                $elm.on('click', function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                });
            }
        }
    });
})(window, window.angular);