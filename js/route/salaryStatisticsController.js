app.controller('salaryStatisticsController', function($scope, $http) {
    // Dữ liệu mẫu cho bảng
    $scope.employees = [
      {
        name: "Nguyễn Văn A",
        position: "Nhân viên",
        department: "Kế toán",
        salaryDate: new Date(2024, 0, 25), // Ngày nhận lương 25/01/2024
        baseSalary: 7000000,
        allowance: 1500000,
        overtimePay: 500000,
        totalSalary: 9000000
      },
      {
        name: "Trần Thị B",
        position: "Trưởng phòng",
        department: "Nhân sự",
        salaryDate: new Date(2024, 0, 25),
        baseSalary: 12000000,
        allowance: 2000000,
        overtimePay: 800000,
        totalSalary: 14800000
      },
      {
        name: "Lê Văn C",
        position: "Nhân viên",
        department: "Kinh doanh",
        salaryDate: new Date(2024, 0, 25),
        baseSalary: 8000000,
        allowance: 1000000,
        overtimePay: 600000,
        totalSalary: 9600000
      },
      {
        name: "Phạm Thị D",
        position: "Quản lý",
        department: "Sản xuất",
        salaryDate: new Date(2024, 0, 25),
        baseSalary: 15000000,
        allowance: 2500000,
        overtimePay: 1000000,
        totalSalary: 18500000
      }
    ];
});
