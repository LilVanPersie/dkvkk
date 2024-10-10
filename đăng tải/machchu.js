import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@WebServlet("/upload")
@MultipartConfig
public class UploadServlet extends HttpServlet {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/document_db";
    private static final String JDBC_USERNAME = "root"; // Thay đổi nếu cần
    private static final String JDBC_PASSWORD = ""; // Thay đổi nếu cần
    private static final String UPLOAD_DIR = "uploads/";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String title = request.getParameter("title");
        String description = request.getParameter("description");
        Part filePart = request.getPart("file");

        // Kiểm tra xem người dùng đã chọn file hay chưa
        if (filePart == null || filePart.getSize() == 0) {
            response.sendRedirect("error.html?message=File không được để trống");
            return;
        }

        String filePath = UPLOAD_DIR + filePart.getSubmittedFileName();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD)) {
                String sql = "INSERT INTO documents (title, description, file_path) VALUES (?, ?, ?)";
                try (PreparedStatement statement = connection.prepareStatement(sql)) {
                    statement.setString(1, title);
                    statement.setString(2, description);
                    statement.setString(3, filePath);

                    // Lưu file vào server
                    InputStream fileContent = filePart.getInputStream();
                    Path path = Paths.get(filePath);
                    Files.createDirectories(path.getParent()); // Tạo thư mục nếu chưa tồn tại
                    Files.copy(fileContent, path);

                    // Thực hiện cập nhật dữ liệu vào CSDL
                    statement.executeUpdate();
                }
            }
            
            response.sendRedirect("success.html"); // Chuyển hướng đến trang thành công
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("error.html?message=" + e.getMessage()); // Chuyển hướng đến trang lỗi với thông báo
        }
    }
}
