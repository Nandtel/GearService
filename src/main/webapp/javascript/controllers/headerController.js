/**
 * Controller HeaderController handles request from header.html
 * It handles current positions of tab and change it, when it is necessary
 * It handles active state of edit tab: active, when user view all information of one cheque and inactive in other cases
 *
 * @version 1.0
 * @author Dmitry
 * @since 04.09.2015
 */
app.controller("HeaderController", ['$scope', '$rootScope', '$http', '$mdToast',
    function ($scope, $rootScope, $http, $mdToast) {
        $scope.data = {};
        $rootScope.rates = {};

        $scope.getCurrencyRate = function() {
            $http.get('/currency-rates').success(function(resolve) {
                $rootScope.rates = resolve;
            });
        };

        $scope.$on('$stateChangeSuccess', function(event, toState) {
            $scope.data.selectedIndex = toState.data.selectedTab;
            $scope.data.disabledEdit = toState.data.disabledEdit;
        });

        $scope.getCurrencyRate();
    }
]);