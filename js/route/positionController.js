angular.module('app').service('PositionService', function($http) {
    // Sử dụng endpoint tương đối
    this.getAllDepartments = function() {
        return $http.get('/api/PositionDepartment/getAll');
    };

    this.getAllPositions = function() {
        return $http.get('/api/position');
    };

    this.addDepartment = function(department) {
        return $http.post('/api/PositionDepartment/add-position-department', department);
    };

    this.updateDepartment = function(id, department) {
        return $http.put(`/api/PositionDepartment/update-position-department/${id}`, department);
    };

    this.addPosition = function(position) {
        return $http.post('/api/position', position);
    };

    this.updatePosition = function(id, position) {
        return $http.put(`/api/position/${id}`, position);
    };
});

angular.module('app').controller('positionController', function($scope, PositionService) {
    $scope.positions = [];
    $scope.departments = [];
    $scope.newDepartment = {};
    $scope.selectedDepartment = null;
    $scope.newPosition = {};
    $scope.selectedPosition = null;

    // Lấy tất cả phòng ban
    $scope.loadDepartments = function() {
        PositionService.getAllDepartments()
            .then(function(response) {
                $scope.departments = response.data;
            })
            .catch(function(error) {
                console.error("Error fetching departments:", error);
            });
    };

    // Lấy tất cả chức vụ
    $scope.loadPositions = function() {
        PositionService.getAllPositions()
            .then(function(response) {
                $scope.positions = response.data;
            })
            .catch(function(error) {
                console.error("Error fetching positions:", error);
            });
    };

    // Thêm phòng ban
    $scope.addDepartment = function() {
        PositionService.addDepartment($scope.newDepartment)
            .then(function(response) {
                $scope.departments.push(response.data);
                $scope.newDepartment = {}; // Reset form
            })
            .catch(function(error) {
                console.error("Error adding department:", error);
            });
    };

    // Cập nhật phòng ban
    $scope.updateDepartment = function() {
        if ($scope.selectedDepartment) {
            PositionService.updateDepartment($scope.selectedDepartment.id, $scope.selectedDepartment)
                .then(function(response) {
                    const index = $scope.departments.findIndex(department => department.id === response.data.id);
                    if (index !== -1) {
                        $scope.departments[index] = response.data; // Cập nhật danh sách
                    }
                    $scope.selectedDepartment = null; // Reset selection
                })
                .catch(function(error) {
                    console.error("Error updating department:", error);
                });
        }
    };

    // Thêm chức vụ
    $scope.addPosition = function() {
        PositionService.addPosition($scope.newPosition)
            .then(function(response) {
                $scope.positions.push(response.data);
                $scope.newPosition = {}; // Reset form
            })
            .catch(function(error) {
                console.error("Error adding position:", error);
            });
    };

    // Cập nhật chức vụ
    $scope.updatePosition = function() {
        if ($scope.selectedPosition) {
            PositionService.updatePosition($scope.selectedPosition.id, $scope.selectedPosition)
                .then(function(response) {
                    const index = $scope.positions.findIndex(position => position.id === response.data.id);
                    if (index !== -1) {
                        $scope.positions[index] = response.data; // Cập nhật danh sách
                    }
                    $scope.selectedPosition = null; // Reset selection
                })
                .catch(function(error) {
                    console.error("Error updating position:", error);
                });
        }
    };

    // Khởi tạo dữ liệu
    $scope.loadDepartments();
    $scope.loadPositions();
});
