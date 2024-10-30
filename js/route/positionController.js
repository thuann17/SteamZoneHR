app.controller('positionController', function ($scope, $http) {
    // Dữ liệu giả lập cho Phòng ban và Chức vụ
    $scope.departments = [
        { id: 1, name: 'Phòng nhân sự', status: true, isSelected: false },
        { id: 2, name: 'Phòng kỹ thuật', status: true, isSelected: false },
        { id: 3, name: 'Phòng bán hàng', status: false, isSelected: false },
        { id: 4, name: 'Phòng marketing', status: true, isSelected: false },
        { id: 5, name: 'Phòng tài chính', status: false, isSelected: false },
        { id: 6, name: 'Phòng công nghệ', status: false, isSelected: false }
    ];

    $scope.positions = [
        { id: 1, name: 'Trưởng phòng', departmentIds: [1] },
        { id: 2, name: 'Nhân viên', departmentIds: [1] },
        { id: 3, name: 'Kỹ sư', departmentIds: [2] },
        { id: 4, name: 'Nhân viên bán hàng', departmentIds: [3] },
        { id: 5, name: 'Chuyên viên marketing', departmentIds: [4] }
    ];

    // Hàm lấy tên phòng ban dựa trên ID
    $scope.getDepartmentNames = function (departmentIds) {
        return departmentIds.map(id => {
            const department = $scope.departments.find(dep => dep.id === id);
            return department ? department.name : '';
        }).join(', ');
    };

    // Cập nhật danh sách phòng ban đã chọn
    $scope.updateSelectedDepartments = function () {
        const selectedDepartmentIds = $scope.departments
            .filter(department => department.isSelected)
            .map(department => department.id);

        // Cập nhật id phòng ban trong chức vụ mới
        $scope.newPosition.departmentIds = selectedDepartmentIds;
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
        var selectedDepartmentIds = $scope.departments
            .filter(department => department.isSelected) // Lọc các phòng ban đã chọn
            .map(department => department.id); // Lấy danh sách ID phòng ban

        var newPosition = {
            id: $scope.positions.length + 1,
            name: $scope.newPosition.name,
            departmentIds: selectedDepartmentIds, // Gán danh sách phòng ban đã chọn
            isEditing: false
        };

        $scope.positions.push(newPosition); // Thêm chức vụ vào danh sách
        chucVuTable.row.add(newPosition).draw(); // Thêm vào DataTable

        // Sau khi thêm, reset form nhưng KHÔNG reset ngay các checkbox
        $scope.newPosition = {}; // Reset thông tin chức vụ
        $scope.departments.forEach(department => department.isSelected = false); // Reset checkbox sau
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