var app = angular.module('app', ['ngRoute']); 

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/dashboard", {
            templateUrl: "app/admin/components/dashboard/dashboard.template.html",
            controller: "dashboardController"
        })
        .when("/manage-product-and-version", {
            templateUrl: "app/admin/components/manage-products/manage-products.template.html",
            controller: "manageProductController"
        })
        .when("/manage-attribute-and-value", {
            templateUrl: "app/admin/components/manage-attributes/manage-attributes.template.html",
            controller: "manageAttributeValueController"
        })
        .when("/manage-account", {
            templateUrl: "app/admin/components/manage-accounts/manage-users.template.html",
            controller: "manageUserController"
        })
        .when("/manage-role", {
            templateUrl: "app/admin/components/manage-roles/manage-roles.template.html",
            controller: "manageRoleController"
        })
        .when("/manage-rating", {
            templateUrl: "app/admin/components/manage-ratings/manage-ratings.template.html",
            controller: "manageRatingController"
        })
        .when("/manage-category", {
            templateUrl: "app/admin/components/manage-categories/manage-categories.template.html",
            controller: "manageCategoryController"
        })
        .when("/manage-order", {
            templateUrl: "app/admin/components/manage-orders/manage-orders.template.html",
            controller: "manageOrderController"
        })
        .when("/manage-brand", {
            templateUrl: "app/admin/components/manage-brands/manage-brands.template.html",
            controller: "manageBrandController"
        })
        .when("/logout", {
            templateUrl: "app/admin/components/logout/logout.template.html",
            controller: "logoutController"
        })
        .otherwise({
            redirectTo: "/dashboard"
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});


