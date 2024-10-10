const users = JSON.parse(localStorage.getItem("users")) || [];

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    messageDiv.innerText = "Đăng nhập thành công!";
    messageDiv.className = "message success";
    messageDiv.style.display = "block";
  } else {
    messageDiv.innerText = "Tên đăng nhập hoặc mật khẩu không đúng!";
    messageDiv.className = "message error";
    messageDiv.style.display = "block";
  }
}

function handleRegister() {
  const username = prompt("Nhập tên đăng nhập:");
  const password = prompt("Nhập mật khẩu:");

  if (username && password) {
    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
    } else {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
    }
  }
}

function handleForgotPassword(event) {
  event.preventDefault();
  const username = prompt("Nhập tên đăng nhập của bạn để khôi phục mật khẩu:");

  if (username) {
    const user = users.find((user) => user.username === username);
    if (user) {
      const newPassword = prompt("Nhập mật khẩu mới:");
      if (newPassword) {
        user.password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Mật khẩu đã được khôi phục thành công!");
      }
    } else {
      alert("Tên đăng nhập đã tồn tại.");
    }
  }
}
