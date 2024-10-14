var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // Dashboard
        .when("/dashboard", {
            templateUrl: "app/route/dashboard.html", // URL cho dashboard nếu có
            controller: "dashboardController" // Thay thế bằng controller thực tế nếu có
        })
        // Thống kê Lương
        .when("/salary-statistics", {
            templateUrl: "app/route/salary-statistics.html",
            controller: "salaryStatisticsController"
        })
        // Thống kê Chấm công
        .when("/attendance-statistics", {
            templateUrl: "app/route/attendance-statistics.html",
            controller: "attendanceStatisticsController"
        })
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
