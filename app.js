var customersupportapp = angular.module('customersupportapp', []);
customersupportapp.controller('customerCtrl', function ($scope, $http, $timeout) {
    $scope.flagdata = false;
    $scope.tempData = {};
    $scope.tempData.customer_care_number = '';
    $scope.tempData.sec_customer_care_number = '';
    $scope.tempData.email_address = '';
    $scope.tempData.from_email_address = '';
 
    $scope.custservice = [];
    $scope.tempArray = [];
 
    $scope.addMoreCustomerContact = function () {
        $scope.tempArray = {
            customer_care_number: '',
            sec_customer_care_number: '',
            email_address: '',
            from_email_address: ''
        };
        $scope.custservice.push($scope.tempArray);
 
    };
});
customersupportapp.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});
