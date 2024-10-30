app.controller('attendanceStatisticsController', function ($scope, $http) {
  $scope.employees = [
    { name: "Nguyễn Văn A", position: "Nhân viên", department: "Kế toán", lateDays: 2, absentDays: 1, overtimeHours: 5, totalDays: 22 },
    { name: "Trần Thị B", position: "Trưởng phòng", department: "Nhân sự", lateDays: 1, absentDays: 2, overtimeHours: 8, totalDays: 20 },
    { name: "Lê Văn C", position: "Nhân viên", department: "Kinh doanh", lateDays: 3, absentDays: 0, overtimeHours: 10, totalDays: 25 },
    { name: "Phạm Thị D", position: "Quản lý", department: "Sản xuất", lateDays: 0, absentDays: 0, overtimeHours: 12, totalDays: 26 }
  ];

  $(document).ready(function () {
    $('#attendance-statistics').DataTable();
  });

  // Khởi tạo chế độ xem là 'month'
  $scope.viewMode = 'month';

  // Hàm để chuyển đổi chế độ xem
  $scope.toggleMonthSelect = function () {
    if ($scope.viewMode === 'year') {
      $scope.selectedMonth = null; // Xóa chọn tháng khi chọn chế độ xem theo năm
    }
  };
});
