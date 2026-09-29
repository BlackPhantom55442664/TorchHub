/* =====================================================================
   CẤU HÌNH TRANG WEB TORCHFIND  —  CHỈ CẦN SỬA FILE NÀY
   =====================================================================

   CÁCH ĐỔI FILE TẢI VỀ
   1) Chép file cần phát hành (ví dụ TorchFind-Setup.zip) vào thư mục
      "downloads" nằm cạnh index.html.
   2) Sửa DOWNLOAD_URL bên dưới cho khớp tên file.
   3) Đưa lại cả thư mục website lên hosting.

   Khi có bản .exe: nên nén thành .zip rồi để link tới file .zip. Trình
   duyệt và Windows ít chặn file .zip hơn file .exe tải trực tiếp.

   DOWNLOAD_URL có thể là:
     - đường dẫn tương đối trong web:  "downloads/TorchFind.zip"
     - link ngoài (GitHub Releases, Google Drive...):
       "https://github.com/ten-ban/torchfind/releases/latest/download/TorchFind.zip"
     - để trống "" nếu chưa có file: nút sẽ hiện "Sắp ra mắt" và bị khoá.
   ===================================================================== */

window.TORCHFIND_CONFIG = {

  // ---------- FILE TẢI VỀ (quan trọng nhất) ----------
  DOWNLOAD_URL: "https://github.com/BlackPhantom55442664/TorchHub/releases/download/v1.0.0/TorchFind.zip",   // <-- đổi đường dẫn file ở đây
  DOWNLOAD_FILENAME: "TorchFind.zip",        // tên file khi lưu về máy người dùng

  // ---------- Thông tin hiển thị dưới nút tải ----------
  VERSION: "1.0.0",
  FILE_SIZE_TEXT: "khoảng 150 MB",           // ghi sau khi biết dung lượng thật
  PLATFORM_TEXT: "Windows 10 / 11",

  // ---------- Nội dung chung ----------
  APP_NAME: "TorchFind",
  TAGLINE: "Tìm file theo ý nghĩa, không chỉ theo tên.",
  CONTACT_EMAIL: "",                         // để trống thì ẩn dòng liên hệ
};
