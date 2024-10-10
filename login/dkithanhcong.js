const users = JSON.parse(localStorage.getItem("users")) || [];

function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const messageDiv = document.getElementById("message");

  // Kiểm tra xem người dùng đã tồn tại chưa
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    messageDiv.innerText = "Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.";
    messageDiv.className = "message error";
    messageDiv.style.display = "block";
  } else {
    // Thêm người dùng mới
    const newUser = { fullname, email, phone, username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    messageDiv.innerText = "Đăng ký thành công! Bạn có thể đăng nhập ngay.";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";

    // Làm sạch form sau khi đăng ký thành công
    document.getElementById("registerForm").reset();
  }
}
