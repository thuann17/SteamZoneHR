app.controller('positionController', function ($scope, $http) {
    // Dữ liệu giả lập cho Phòng ban và Chức vụ
    $scope.departments = [
        { id: 1, name: 'Phòng nhân sự', status: true },
        { id: 2, name: 'Phòng kỹ thuật', status: true },
        { id: 3, name: 'Phòng bán hàng', status: false },
        { id: 4, name: 'Phòng marketing', status: true },
        { id: 5, name: 'Phòng tài chính', status: false }
    ];

    $scope.positions = [
        { id: 1, name: 'Trưởng phòng', departmentId: 1 },
        { id: 2, name: 'Nhân viên', departmentId: 1 },
        { id: 3, name: 'Kỹ sư', departmentId: 2 },
        { id: 4, name: 'Nhân viên bán hàng', departmentId: 3 },
        { id: 5, name: 'Chuyên viên marketing', departmentId: 4 }
    ];

    // Lấy tên phòng ban dựa trên ID
    $scope.getDepartmentName = function (departmentId) {
        var department = $scope.departments.find(function (dep) {
            return dep.id === departmentId;
        });
        return department ? department.name : '';
    };

    // Hàm thêm phòng ban
    $scope.addDepartment = function () {
        var newDepartment = {
            id: $scope.departments.length + 1,
            name: $scope.newDepartment.name,
            status: $scope.newDepartment.status
        };
        $scope.departments.push(newDepartment);
        phongBanTable.row.add(newDepartment).draw(); // thêm vào DataTable
        $scope.newDepartment = {}; // reset form
    };

    // Hàm cập nhật phòng ban
    $scope.updateDepartment = function () {
        // Cập nhật logic ở đây
        alert("Chức năng cập nhật phòng ban chưa được triển khai.");
    };

    // Hàm lưu phòng ban sau khi chỉnh sửa
    $scope.saveDepartment = function (department) {
        department.isEditing = false;
        // Logic lưu cập nhật ở đây
    };

    // Hàm xóa phòng ban
    $scope.deleteDepartment = function (id) {
        $scope.departments = $scope.departments.filter(function (dep) {
            return dep.id !== id;
        });
        phongBanTable.clear().rows.add($scope.departments).draw(); // cập nhật DataTable
    };

    // Hàm thêm chức vụ
    $scope.addPosition = function () {
        var newPosition = {
            id: $scope.positions.length + 1,
            name: $scope.newPosition.name,
            departmentId: $scope.newPosition.departmentId,
            isEditing: false
        };
        $scope.positions.push(newPosition);
        chucVuTable.row.add(newPosition).draw(); // thêm vào DataTable
        $scope.clear
        $scope.newPosition = {}; // reset form
    };

    // Hàm cập nhật chức vụ
    $scope.updatePosition = function () {
        // Cập nhật logic ở đây
        alert("Chức năng cập nhật chức vụ chưa được triển khai.");
    };

    // Hàm lưu chức vụ sau khi chỉnh sửa
    $scope.savePosition = function (position) {
        position.isEditing = false;
        // Logic lưu cập nhật ở đây
    };

    // Hàm xóa chức vụ
    $scope.deletePosition = function (id) {
        $scope.positions = $scope.positions.filter(function (pos) {
            return pos.id !== id;
        });
        chucVuTable.clear().rows.add($scope.positions).draw(); // cập nhật DataTable
    };

    // Hàm chỉnh sửa phòng ban
    $scope.editDepartment = function (department, field) {
        department.isEditing = true;
        department.editingField = field;
    };

    // Hàm chỉnh sửa chức vụ
    $scope.editPosition = function (position, field) {
        position.isEditing = true;
        position.editingField = field;
    };

    // Kiểm tra phím Enter để lưu chỉnh sửa
    $scope.checkEnter = function (event, item) {
        if (event.key === "Enter") {
            item.isEditing = false;
            // Logic lưu cập nhật ở đây
        }
    };
});