// Hàm để tải tài liệu từ server
async function fetchDocuments() {
  try {
    const response = await fetch("/documents");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const documents = await response.json();
    displayDocuments(documents);
  } catch (error) {
    console.error("Có lỗi khi tải tài liệu:", error);
    displayError("Không thể tải danh sách tài liệu. Vui lòng thử lại sau.");
  }
}

// Hàm để hiển thị danh sách tài liệu
function displayDocuments(documents) {
  const documentList = document.getElementById("documentList");
  documentList.innerHTML = ""; // Xóa danh sách hiện tại

  documents.forEach((doc) => {
    const listItem = createDocumentListItem(doc);
    documentList.appendChild(listItem);
  });
}

// Hàm để tạo một mục trong danh sách tài liệu
function createDocumentListItem(doc) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <strong>${doc.title}</strong>: 
      ${doc.description} 
      <a href="${doc.filePath}" target="_blank">Tải về</a>
    `;
  return listItem;
}

// Hàm để hiển thị thông báo lỗi
function displayError(message) {
  const documentList = document.getElementById("documentList");
  documentList.innerHTML = `<p class="error">${message}</p>`;
}

// Gọi hàm fetchDocuments khi trang web được tải
document.addEventListener("DOMContentLoaded", fetchDocuments);
