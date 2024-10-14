
app.controller('employeeController',function($scope, $http) {
  // Dữ liệu mẫu cho nhân viên
  $scope.employees = [
    { id: 1, phong: "Kế toán", chucvu: "Nhân viên", hoten: "Nguyễn Văn A", gioitinh: "Nam", ngaysinh: "1990-01-01", email: "a.nguyen@example.com", sdt: "0912345678", cccd: "123456789", diachi: "Hà Nội", trangthai: "Kích hoạt" },
    { id: 2, phong: "Nhân sự", chucvu: "Trưởng phòng", hoten: "Trần Thị B", gioitinh: "Nữ", ngaysinh: "1988-02-01", email: "b.tran@example.com", sdt: "0912345679", cccd: "987654321", diachi: "TP HCM", trangthai: "Khóa" },
    { id: 3, phong: "IT", chucvu: "Nhân viên", hoten: "Lê Văn C", gioitinh: "Nam", ngaysinh: "1992-03-05", email: "c.le@example.com", sdt: "0912345680", cccd: "234567890", diachi: "Đà Nẵng", trangthai: "Kích hoạt" },
    { id: 4, phong: "Marketing", chucvu: "Nhân viên", hoten: "Phạm Thị D", gioitinh: "Nữ", ngaysinh: "1994-04-10", email: "d.pham@example.com", sdt: "0912345681", cccd: "345678901", diachi: "Hải Phòng", trangthai: "Khóa" },
    { id: 5, phong: "Kinh doanh", chucvu: "Nhân viên", hoten: "Trần Văn E", gioitinh: "Nam", ngaysinh: "1985-05-15", email: "e.tran@example.com", sdt: "0912345682", cccd: "456789012", diachi: "Cần Thơ", trangthai: "Kích hoạt" },
    { id: 6, phong: "Kế toán", chucvu: "Trưởng phòng", hoten: "Nguyễn Thị F", gioitinh: "Nữ", ngaysinh: "1987-06-20", email: "f.nguyen@example.com", sdt: "0912345683", cccd: "567890123", diachi: "Hà Nội", trangthai: "Kích hoạt" },
    { id: 7, phong: "IT", chucvu: "Nhân viên", hoten: "Bùi Văn G", gioitinh: "Nam", ngaysinh: "1991-07-25", email: "g.bui@example.com", sdt: "0912345684", cccd: "678901234", diachi: "TP HCM", trangthai: "Khóa" },
    { id: 8, phong: "Marketing", chucvu: "Nhân viên", hoten: "Vũ Thị H", gioitinh: "Nữ", ngaysinh: "1993-08-30", email: "h.vu@example.com", sdt: "0912345685", cccd: "789012345", diachi: "Đà Nẵng", trangthai: "Kích hoạt" },
    { id: 9, phong: "Nhân sự", chucvu: "Nhân viên", hoten: "Hoàng Văn I", gioitinh: "Nam", ngaysinh: "1995-09-01", email: "i.hoang@example.com", sdt: "0912345686", cccd: "890123456", diachi: "Hải Phòng", trangthai: "Khóa" },
    { id: 10, phong: "Kinh doanh", chucvu: "Nhân viên", hoten: "Đặng Thị J", gioitinh: "Nữ", ngaysinh: "1990-10-10", email: "j.dang@example.com", sdt: "0912345687", cccd: "901234567", diachi: "Cần Thơ", trangthai: "Kích hoạt" },
    { id: 11, phong: "IT", chucvu: "Nhân viên", hoten: "Ngô Văn K", gioitinh: "Nam", ngaysinh: "1988-11-11", email: "k.ngo@example.com", sdt: "0912345688", cccd: "012345678", diachi: "Hà Nội", trangthai: "Khóa" },
    { id: 12, phong: "Kế toán", chucvu: "Nhân viên", hoten: "Phạm Thị L", gioitinh: "Nữ", ngaysinh: "1989-12-12", email: "l.pham@example.com", sdt: "0912345689", cccd: "123456780", diachi: "TP HCM", trangthai: "Kích hoạt" },
    { id: 13, phong: "Nhân sự", chucvu: "Nhân viên", hoten: "Võ Văn M", gioitinh: "Nam", ngaysinh: "1993-01-01", email: "m.vo@example.com", sdt: "0912345690", cccd: "234567891", diachi: "Đà Nẵng", trangthai: "Kích hoạt" },
    { id: 14, phong: "Marketing", chucvu: "Trưởng phòng", hoten: "Đỗ Thị N", gioitinh: "Nữ", ngaysinh: "1986-02-02", email: "n.do@example.com", sdt: "0912345691", cccd: "345678902", diachi: "Hải Phòng", trangthai: "Khóa" },
    { id: 15, phong: "Kinh doanh", chucvu: "Nhân viên", hoten: "Trần Văn O", gioitinh: "Nam", ngaysinh: "1990-03-03", email: "o.tran@example.com", sdt: "0912345692", cccd: "456789013", diachi: "Cần Thơ", trangthai: "Kích hoạt" },
    { id: 16, phong: "IT", chucvu: "Nhân viên", hoten: "Bùi Thị P", gioitinh: "Nữ", ngaysinh: "1991-04-04", email: "p.bui@example.com", sdt: "0912345693", cccd: "567890124", diachi: "Hà Nội", trangthai: "Kích hoạt" },
    { id: 17, phong: "Kế toán", chucvu: "Nhân viên", hoten: "Nguyễn Văn Q", gioitinh: "Nam", ngaysinh: "1989-05-05", email: "q.nguyen@example.com", sdt: "0912345694", cccd: "678901235", diachi: "TP HCM", trangthai: "Khóa" },
    { id: 18, phong: "Nhân sự", chucvu: "Nhân viên", hoten: "Trần Thị R", gioitinh: "Nữ", ngaysinh: "1990-06-06", email: "r.tran@example.com", sdt: "0912345695", cccd: "789012346", diachi: "Đà Nẵng", trangthai: "Kích hoạt" },
    { id: 19, phong: "Marketing", chucvu: "Nhân viên", hoten: "Lê Văn S", gioitinh: "Nam", ngaysinh: "1992-07-07", email: "s.le@example.com", sdt: "0912345696", cccd: "890123457", diachi: "Hải Phòng", trangthai: "Khóa" },
    { id: 20, phong: "Kinh doanh", chucvu: "Nhân viên", hoten: "Phạm Thị T", gioitinh: "Nữ", ngaysinh: "1985-08-08", email: "t.pham@example.com", sdt: "0912345697", cccd: "901234568", diachi: "Cần Thơ", trangthai: "Kích hoạt" },
    { id: 21, phong: "IT", chucvu: "Nhân viên", hoten: "Hoàng Văn U", gioitinh: "Nam", ngaysinh: "1986-09-09", email: "u.hoang@example.com", sdt: "0912345698", cccd: "012345679", diachi: "Hà Nội", trangthai: "Kích hoạt" },
    { id: 22, phong: "Kế toán", chucvu: "Nhân viên", hoten: "Nguyễn Thị V", gioitinh: "Nữ", ngaysinh: "1993-10-10", email: "v.nguyen@example.com", sdt: "0912345699", cccd: "123456781", diachi: "TP HCM", trangthai: "Khóa" },
    { id: 23, phong: "Nhân sự", chucvu: "Nhân viên", hoten: "Trần Văn W", gioitinh: "Nam", ngaysinh: "1987-11-11", email: "w.tran@example.com", sdt: "0912345700", cccd: "234567892", diachi: "Đà Nẵng", trangthai: "Kích hoạt" },
    { id: 24, phong: "Marketing", chucvu: "Nhân viên", hoten: "Lê Thị X", gioitinh: "Nữ", ngaysinh: "1990-12-12", email: "x.le@example.com", sdt: "0912345701", cccd: "345678903", diachi: "Hải Phòng", trangthai: "Khóa" },
    { id: 25, phong: "Kinh doanh", chucvu: "Nhân viên", hoten: "Phạm Văn Y", gioitinh: "Nam", ngaysinh: "1989-01-01", email: "y.pham@example.com", sdt: "0912345702", cccd: "456789014", diachi: "Cần Thơ", trangthai: "Kích hoạt" },
    { id: 26, phong: "IT", chucvu: "Nhân viên", hoten: "Ngô Thị Z", gioitinh: "Nữ", ngaysinh: "1985-02-02", email: "z.ngo@example.com", sdt: "0912345703", cccd: "567890125", diachi: "Hà Nội", trangthai: "Kích hoạt" },
    { id: 27, phong: "Kế toán", chucvu: "Trưởng phòng", hoten: "Lê Văn AA", gioitinh: "Nam", ngaysinh: "1986-03-03", email: "aa.le@example.com", sdt: "0912345704", cccd: "678901236", diachi: "TP HCM", trangthai: "Khóa" },
    { id: 28, phong: "Nhân sự", chucvu: "Nhân viên", hoten: "Bùi Thị BB", gioitinh: "Nữ", ngaysinh: "1990-04-04", email: "bb.bui@example.com", sdt: "0912345705", cccd: "789012347", diachi: "Đà Nẵng", trangthai: "Kích hoạt" },
    { id: 29, phong: "Marketing", chucvu: "Nhân viên", hoten: "Hoàng Văn CC", gioitinh: "Nam", ngaysinh: "1988-05-05", email: "cc.hoang@example.com", sdt: "0912345706", cccd: "890123458", diachi: "Hải Phòng", trangthai: "Khóa" },
    { id: 30, phong: "Kinh doanh", chucvu: "Nhân viên", hoten: "Trần Thị DD", gioitinh: "Nữ", ngaysinh: "1991-06-06", email: "dd.tran@example.com", sdt: "0912345707", cccd: "901234569", diachi: "Cần Thơ", trangthai: "Kích hoạt" }
  ];
  

  // Xóa nhân viên
  $scope.deleteEmployee = function(id) {
    $scope.employees = $scope.employees.filter(employee => employee.id !== id);
  };

  // Mở modal cập nhật
  $scope.openUpdateModal = function(employee) {
    $scope.selectedEmployee = angular.copy(employee);
    new bootstrap.Modal(document.getElementById('updateModal')).show();
  };

  // Cập nhật thông tin nhân viên
  $scope.updateEmployee = function() {
    var index = $scope.employees.findIndex(employee => employee.id === $scope.selectedEmployee.id);
    if (index !== -1) {
      $scope.employees[index] = angular.copy($scope.selectedEmployee);
    }
    bootstrap.Modal.getInstance(document.getElementById('updateModal')).hide();
  };

  // Chuyển trạng thái Kích hoạt/Khóa
  $scope.toggleStatus = function(employee) {
    employee.trangthai = employee.trangthai === "Kích hoạt" ? "Khóa" : "Kích hoạt";
  };
});
