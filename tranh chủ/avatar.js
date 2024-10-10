// Lấy các phần tử cần thiết từ DOM
const avatarImage = document.querySelector(".avatar");
const avatarInput = document.createElement("input");

// Thiết lập thuộc tính cho input để chọn file
avatarInput.type = "file";
avatarInput.accept = "image/*";
avatarInput.style.display = "none"; // Ẩn input file

// Thêm input file vào body
document.body.appendChild(avatarInput);

// Thêm sự kiện khi người dùng nhấn vào ảnh đại diện
avatarImage.addEventListener("click", function () {
  avatarInput.click(); // Kích hoạt input file
});

// Thêm sự kiện khi người dùng chọn tệp
avatarInput.addEventListener("change", function (event) {
  const file = event.target.files[0]; // Lấy tệp đã chọn
  if (file) {
    const reader = new FileReader(); // Tạo một FileReader để đọc tệp
    reader.onload = function (e) {
      avatarImage.src = e.target.result; // Cập nhật src của ảnh đại diện
    };
    reader.readAsDataURL(file); // Đọc tệp dưới dạng URL
  }
});
