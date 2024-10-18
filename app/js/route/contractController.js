app.controller('contractController', function($scope, $http) {
    // Khởi tạo dữ liệu mẫu cho hợp đồng
    $scope.contracts = [
      { id: 1, employeeID: { fullName: "Nguyễn Văn A", avatar: "path/to/avatar1.jpg" }, startDate: "2020-01-01", endDate: "2025-01-01", signingDate: "2019-12-31", agreedSalary: 20000000, confirmerID: { fullName: "Nguyễn Văn B", avatar: "path/to/avatar2.jpg" }, isActive: true },
      { id: 2, employeeID: { fullName: "Trần Thị B", avatar: "path/to/avatar3.jpg" }, startDate: "2021-03-15", endDate: "2023-03-15", signingDate: "2021-03-10", agreedSalary: 15000000, confirmerID: { fullName: "Trần Văn C", avatar: "path/to/avatar4.jpg" }, isActive: false },
      { id: 3, employeeID: { fullName: "Lê Văn C", avatar: "path/to/avatar5.jpg" }, startDate: "2022-06-01", endDate: "2022-12-01", signingDate: "2022-05-30", agreedSalary: 10000000, confirmerID: { fullName: "Lê Thị D", avatar: "path/to/avatar6.jpg" }, isActive: true }
    ];
  
    // Dữ liệu mẫu cho nhân viên và người xác nhận
    $scope.employees = [
      { fullName: "Nguyễn Văn A", avatar: "path/to/avatar1.jpg" },
      { fullName: "Trần Thị B", avatar: "path/to/avatar2.jpg" },
      { fullName: "Lê Văn C", avatar: "path/to/avatar3.jpg" }
    ];
  
    $scope.confirmers = [
      { fullName: "Nguyễn Văn B", avatar: "path/to/avatar2.jpg" },
      { fullName: "Trần Văn C", avatar: "path/to/avatar4.jpg" },
      { fullName: "Lê Thị D", avatar: "path/to/avatar6.jpg" }
    ];
  
    $scope.selectedContract = {};
    $scope.newContract = {};
    $scope.searchQuery = ''; // Biến chứa truy vấn tìm kiếm
    $scope.filteredContracts = []; // Danh sách hợp đồng sau khi tìm kiếm
    $scope.noResult = false; // Biến kiểm tra có kết quả tìm kiếm hay không
    $scope.searchEmployeeQuery = ''; // Biến chứa truy vấn tìm kiếm nhân viên
    $scope.filteredEmployees = []; // Danh sách nhân viên sau khi tìm kiếm
    $scope.searchConfirmerQuery = ''; // Biến chứa truy vấn tìm kiếm người xác nhận
    $scope.filteredConfirmers = []; // Danh sách người xác nhận sau khi tìm kiếm
  
    // Mở modal thêm hợp đồng
    $scope.openAddModal = function () {
      $scope.newContract = {}; // Khởi tạo lại thông tin hợp đồng mới
      $('#addModal').modal('show');
    };
  
    // Thêm hợp đồng
    $scope.addContract = function () {
      $scope.newContract.id = $scope.contracts.length + 1; // Tạo ID mới cho hợp đồng
      $scope.contracts.push(angular.copy($scope.newContract)); // Thêm hợp đồng vào danh sách
      $('#addModal').modal('hide'); // Đóng modal
    };
  
    // Mở modal cập nhật hợp đồng
    $scope.openUpdateModal = function (contract) {
      $scope.selectedContract = angular.copy(contract); // Sao chép thông tin hợp đồng đã chọn
      $('#updateModal').modal('show'); // Mở modal cập nhật
    };
  
    // Cập nhật hợp đồng
    $scope.updateContract = function () {
      var contractIndex = $scope.contracts.findIndex(c => c.id === $scope.selectedContract.id); // Tìm chỉ số hợp đồng cần cập nhật
      if (contractIndex !== -1) {
        $scope.contracts[contractIndex] = angular.copy($scope.selectedContract); // Cập nhật thông tin hợp đồng
        $('#updateModal').modal('hide'); // Đóng modal
      }
    };
  
    // Toggle trạng thái hợp đồng
    $scope.toggleStatus = function (contract) {
      contract.isActive = !contract.isActive; // Chuyển đổi trạng thái kích hoạt
    };
  
    // Tìm kiếm hợp đồng
    $scope.searchContracts = function () {
      $scope.filteredContracts = [];
      $scope.noResult = false;
  
      if (!$scope.searchQuery) return;
  
      let count = 0;
      $scope.contracts.forEach(function (contract) {
        // Kiểm tra nếu tên nhân viên trong hợp đồng chứa truy vấn tìm kiếm
        if (contract.employeeID.fullName.toUpperCase().includes($scope.searchQuery.toUpperCase()) && count < 5) {
          $scope.filteredContracts.push(contract);
          count++;
        }
      });
  
      if ($scope.filteredContracts.length === 0) {
        $scope.noResult = true; // Nếu không có kết quả tìm kiếm
      }
    };
  
    // Hàm xóa kết quả tìm kiếm
    $scope.clearSearchResults = function () {
      $scope.filteredContracts = [];
      $scope.noResult = false;
      $scope.searchQuery = ''; // Reset truy vấn tìm kiếm
    };
  
    // Tìm kiếm nhân viên
    $scope.searchEmployees = function () {
      $scope.filteredEmployees = [];
      if (!$scope.searchEmployeeQuery) return;
  
      let count = 0;
      $scope.employees.forEach(function (employee) {
        if (employee.fullName.toUpperCase().includes($scope.searchEmployeeQuery.toUpperCase()) && count < 5) {
          $scope.filteredEmployees.push(employee);
          count++;
        }
      });
    };
  
    // Tìm kiếm người xác nhận
    $scope.searchConfirmers = function () {
      $scope.filteredConfirmers = [];
      if (!$scope.searchConfirmerQuery) return;
  
      let count = 0;
      $scope.confirmers.forEach(function (confirmer) {
        if (confirmer.fullName.toUpperCase().includes($scope.searchConfirmerQuery.toUpperCase()) && count < 5) {
          $scope.filteredConfirmers.push(confirmer);
          count++;
        }
      });
    };
  
    // Chọn nhân viên từ danh sách tìm kiếm
    $scope.selectEmployee = function(employee) {
      $scope.newContract.employeeID = employee; // Gán thông tin nhân viên được chọn
      $scope.searchEmployeeQuery = ''; // Reset trường tìm kiếm
      $scope.filteredEmployees = []; // Xóa danh sách nhân viên tìm kiếm
    };
  
    // Chọn người xác nhận từ danh sách tìm kiếm
    $scope.selectConfirmer = function(confirmer) {
      $scope.newContract.confirmerID = confirmer; // Gán thông tin người xác nhận được chọn
      $scope.searchConfirmerQuery = ''; // Reset trường tìm kiếm
      $scope.filteredConfirmers = []; // Xóa danh sách người xác nhận tìm kiếm
    };
  });
  