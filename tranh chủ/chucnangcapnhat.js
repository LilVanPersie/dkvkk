// Lấy phần tử form từ DOM
const form = document.getElementById("user-info-form");

// Thêm sự kiện khi form được gửi
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của form

  // Lấy giá trị từ các trường
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const khoa = document.getElementById("khoa").value;

  // Hiển thị thông tin (có thể thay thế bằng lưu trữ vào cơ sở dữ liệu)
  console.log("Thông tin người dùng:");
  console.log("Họ và tên:", name);
  console.log("Email:", email);
  console.log("Số điện thoại:", phone);
  console.log("Khoa:", khoa);

  // Thông báo cho người dùng
  alert("Thông tin của bạn đã được cập nhật!");

  // Có thể thêm mã để lưu trữ vào cơ sở dữ liệu hoặc gửi yêu cầu đến máy chủ ở đây.
});
