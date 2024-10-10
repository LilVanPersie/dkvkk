function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm người dùng trong danh sách đã lưu
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    messageDiv.innerText =
      "Đăng nhập thành công! Chào mừng bạn, " + user.fullname + "!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Có thể chuyển hướng đến trang chính hoặc trang khác
    setTimeout(() => {
      window.location.href = "homepage.html"; // Thay đổi thành trang bạn muốn chuyển đến
    }, 2000);
  } else {
    messageDiv.innerText =
      "Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.";
    messageDiv.className = "message error";
    messageDiv.style.display = "block";
  }
}
