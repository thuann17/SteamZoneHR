var app = angular.module('app', ['ngRoute']); 

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // Nhân viên
        .when("/employees", {
            templateUrl: "app/route/employees.html",
            controller: "employeeController"
        })
        // Chức vụ
        .when("/positions", {
            templateUrl: "app/route/positions.html",
            controller: "positionController"
        })
        // Phòng ban
        .when("/departments", {
            templateUrl: "app/route/departments.html",
            controller: "departmentController"
        })
        // Chức vụ - phòng ban
        .when("/positions-departments", {
            templateUrl: "app/route/positions-departments.html",
            controller: "positionDepartmentController"
        })
        // Chấm công
        .when("/attendance", {
            templateUrl: "app/route/attendance.html",
            controller: "attendanceController"
        })
        // Phụ cấp
        .when("/allowances", {
            templateUrl: "app/route/allowances.html",
            controller: "allowanceController"
        })
        // Phụ cấp nhân viên
        .when("/employee-allowances", {
            templateUrl: "app/route/employee-allowances.html",
            controller: "employeeAllowanceController"
        })
        // Hợp đồng
        .when("/contracts", {
            templateUrl: "app/route/contracts.html",
            controller: "contractController"
        })
        // Các đường dẫn khác
        .otherwise({
            redirectTo: "/dashboard"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});



