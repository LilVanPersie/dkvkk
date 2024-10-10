const users = JSON.parse(localStorage.getItem("users")) || [];

function handleLogin(event) {
  event.preventDefault(); // Ngăn chặn gửi form

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  // Kiểm tra thông tin đăng nhập
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Đăng nhập thành công
    messageDiv.innerText = "Đăng nhập thành công!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Thực hiện chuyển hướng hoặc các hành động khác
    // window.location.href = 'homepage.html'; // Ví dụ: chuyển đến trang chủ
  } else {
    // Đăng nhập thất bại
    messageDiv.innerText = "Tên đăng nhập hoặc mật khẩu không đúng!";
    messageDiv.className = "message error";
    messageDiv.style.display = "block";
  }
}
