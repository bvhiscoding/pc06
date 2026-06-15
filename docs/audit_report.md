# BÁO CÁO ĐỐI CHIẾU TIẾN ĐỘ VÀ CÁC MÀN HÌNH CÒN THIẾU
**Dự án:** Hệ thống Quản lý Cơ sở kinh doanh có điều kiện về ANTT – Tỉnh Ninh Bình (CSKD–ANTT Ninh Bình)
**Tài liệu đối chiếu:** [pages.md](file:///d:/WORKING%20FOLDER/TFL-PROJECT/pc06/docs/pages.md)
**Ngày thực hiện:** 15/06/2026

Bản đối chiếu này so sánh chi tiết các yêu cầu về màn hình và module trong 11 Phase của Master Plan với mã nguồn hiện tại trong thư mục `html/` và `scripts/`.

---

## I. TỔNG QUAN THỐNG KÊ (HỆ THỐNG CÒN THIẾU BAO NHIÊU?)

* **Tổng số module theo Plan:** **11 Module (Phase)**
  * **Đã có khung/một phần:** **6 Module** (Phase 1, 2, 3, 4, 6, 7, 10)
  * **Chưa có gì (Thiếu hoàn toàn):** **4 Module** (Phase 5, 8, 11) và phần Report Builder của Phase 9.
* **Tổng số màn hình yêu cầu:** **62 màn hình**
  * **Màn hình ĐÃ CÓ:** **24 màn hình** (đã xây dựng dạng file `.html` tĩnh/mô phỏng dữ liệu)
  * **Màn hình CÒN THIẾU:** **38 màn hình**

---

## II. ĐỐI CHIẾU CHI TIẾT TỪNG PHASE

### PHASE 01 – KHUNG HỆ THỐNG, ĐĂNG NHẬP VÀ PHÂN QUYỀN NỀN TẢNG
* **Mục tiêu:** Thiết lập khung layout, đăng nhập, phân quyền và quản lý tài khoản.
* **Trạng thái:** **Hoàn thành 30%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Màn đăng nhập | `DangNhap.html` | **Đã có** | Đã có giao diện đăng nhập cơ bản. |
| 2 | Layout quản trị | Đang nằm trong các file admin | **Đã có** | Có Sidebar + Header, dropdown tài khoản và thông báo. |
| 3 | Màn hồ sơ cá nhân | *Chưa có* | **Thiếu** | Cần nút "Thông tin tài khoản" và màn chỉnh sửa profile cán bộ. |
| 4 | Danh sách tài khoản | *Chưa có* | **Thiếu** | Quản lý cán bộ, phân vai trò. |
| 5 | Form thêm/sửa tài khoản | *Chưa có* | **Thiếu** | Form thêm mới người dùng trong hệ thống. |
| 6 | Ma trận phân quyền | *Chưa có* | **Thiếu** | Quản lý vai trò (Role) và quyền hạn (Permission). |
| 7 | Màn phân công địa bàn | *Chưa có* | **Thiếu** | Giao quyền quản lý xã/phường cho cán bộ. |

---

### PHASE 02 – DANH MỤC DÙNG CHUNG VÀ CẤU TRÚC ĐỊA BÀN
* **Mục tiêu:** Quản lý các danh mục cơ bản (Tỉnh, xã, loại hình kinh doanh, loại giấy tờ, loại vi phạm, nội dung kiểm tra).
* **Trạng thái:** **Hoàn thành 90%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Quản lý tỉnh/thành phố | `DanhMuc.html` | **Đã có** | Tích hợp chung vào cấu trúc danh mục cây (jsTree). |
| 2 | Quản lý xã/phường | `DanhMuc.html` | **Đã có** | Tích hợp chung vào cây thư mục và danh sách. |
| 3 | Quản lý loại hình kinh doanh | `DanhMuc.html` | **Đã có** | Tích hợp chung và cấu hình ngành nghề kinh doanh. |
| 4 | Quản lý loại giấy tờ | `DanhMuc.html` | **Đã có** | Tích hợp chung. |
| 5 | Quản lý loại vi phạm | `DanhMuc.html` | **Đã có** | Tích hợp chung. |
| 6 | Quản lý nhóm nội dung kiểm tra| `DanhMuc.html` | **Đã có** | Tích hợp chung. |

> [!NOTE]
> Các danh mục đều được xây dựng chung trong màn `DanhMuc.html` rất chuyên nghiệp bằng thư viện `jsTree`. Các chức năng thêm/sửa/xóa đã có modal hoạt động trực quan.

---

### PHASE 03 – HỒ SƠ SỐ CƠ SỞ KINH DOANH
* **Mục tiêu:** Quản lý hồ sơ cơ sở kinh doanh, quy trình nộp duyệt hồ sơ.
* **Trạng thái:** **Hoàn thành 80%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Danh sách cơ sở kinh doanh | `CoSoDuLieuCSKD.html` | **Đã có** | Bộ lọc nâng cao và bảng hiển thị đã hoàn thành. |
| 2 | Wizard thêm mới cơ sở (6 bước)| `CoSoDuLieuCSKD-TaoMoi.html` | **Đã có** | Đã làm dạng Wizard 6 bước đúng theo plan. |
| 3 | Màn chi tiết cơ sở | `CoSoDuLieuCSKD-ChiTiet.html`| **Đã có** | Đầy đủ các tab: Tổng quan, Giấy phép, Nhân sự, Vi phạm... |
| 4 | Màn chỉnh sửa cơ sở | *Chưa có riêng* | **Thiếu** | Cần tích hợp nút Sửa từ màn chi tiết dẫn về form Wizard nhưng ở chế độ Edit. |
| 5 | Quy trình xử lý hồ sơ | `QuanLyHoSo.html` | **Đã có** | Danh sách hồ sơ phân loại theo tab trạng thái nộp. |

---

### PHASE 04 – BẢN ĐỒ SỐ GIS VÀ GIÁM SÁT ĐỊA BÀN
* **Mục tiêu:** Trực quan hóa dữ liệu cơ sở lên bản đồ.
* **Trạng thái:** **Hoàn thành 75%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Bản đồ quản lý toàn tỉnh | `BanDoSoGis.html` | **Đã có** | Bản đồ lớn có panel lọc bên trái và thông tin chi tiết. |
| 2 | Popup thông tin nhanh cơ sở | `BanDoSoGis.html` popup | **Đã có** | Hiện thông tin chủ cơ sở, giấy phép khi click vào marker. |
| 3 | Thống kê địa bàn xã/phường | *Chưa có* | **Thiếu** | Thống kê dạng dashboard thu nhỏ cho riêng cấp xã/phường. |
| 4 | Bản đồ công khai | `index.html` (map tab) | **Đã có** | Bản đồ công khai ẩn các thông tin nhạy cảm. |

---

### PHASE 05 – CỔNG DÀNH CHO CƠ SỞ KINH DOANH VÀ KHAI BÁO DỮ LIỆU
* **Mục tiêu:** Cung cấp tài khoản và chức năng khai báo lưu trú, khai báo giao dịch tài sản và nộp báo cáo định kỳ cho Chủ cơ sở.
* **Trạng thái:** **Thiếu 100% (Chưa phát triển)**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Dashboard cơ sở kinh doanh | *Chưa có* | **Thiếu** | Trang chủ dành riêng cho tài khoản doanh nghiệp. |
| 2 | Màn hồ sơ cơ sở của tôi | *Chưa có* | **Thiếu** | Nơi chủ cơ sở xem và yêu cầu chỉnh sửa thông tin. |
| 3 | Màn khai báo lưu trú | *Chưa có* | **Thiếu** | Đăng ký khách lưu trú (dành cho nhà nghỉ, khách sạn). |
| 4 | Màn khai báo tài sản/giao dịch | *Chưa có* | **Thiếu** | Đăng ký tài sản cầm cố, mua bán. |
| 5 | Màn báo cáo định kỳ | *Chưa có* | **Thiếu** | Gửi báo cáo định kỳ lên Công an. |
| 6 | Quản lý khai báo (cho cán bộ)| *Chưa có* | **Thiếu** | Cán bộ tiếp nhận và duyệt khai báo từ cơ sở. |
| 7 | Màn chi tiết khai báo | *Chưa có* | **Thiếu** | Xem thông tin chi tiết tờ khai lưu trú/giao dịch. |

---

### PHASE 06 – QUẢN LÝ KIỂM TRA VÀ CHECKLIST
* **Mục tiêu:** Quy trình lập kế hoạch kiểm tra, thực hiện checklist và theo dõi khắc phục sai phạm.
* **Trạng thái:** **Hoàn thành 65%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Quản lý mẫu checklist | *Chưa có* | **Thiếu** | Thiết kế tiêu chí kiểm tra động theo loại hình. |
| 2 | Danh sách kế hoạch kiểm tra | `KiemTraCoSo.html` <br> `KiemTraCoSo-LichKiemTra.html` | **Đã có** | Giao diện danh sách và lịch kiểm tra trực quan. |
| 3 | Wizard tạo kế hoạch kiểm tra | `KiemTraCoSo-TaoKeHoach.html`| **Đã có** | Wizard lập kế hoạch, chọn đoàn và checklist. |
| 4 | Màn thực hiện kiểm tra | `KiemTraCoSo-ChinhSuaKiemTra.html`| **Đã có** | Giao diện đánh giá Đạt/Không đạt trực quan trên tablet. |
| 5 | Màn tổng hợp kết quả kiểm tra | `KiemTraCoSo-ChiTietKiemTra.html`| **Đã có** | Tổng hợp biên bản kiểm tra và kiến nghị xử lý. |
| 6 | Màn theo dõi khắc phục | *Chưa có* | **Thiếu** | Theo dõi hạn và bằng chứng khắc phục lỗi của cơ sở. |

---

### PHASE 07 – QUẢN LÝ VI PHẠM, CẢNH BÁO VÀ XỬ LÝ
* **Mục tiêu:** Xử phạt hành chính và phát hiện cảnh báo sớm trên hệ thống.
* **Trạng thái:** **Hoàn thành 60%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Màn danh sách vi phạm | `XuLyViPham.html` | **Đã có** | Danh sách các vụ vi phạm theo trạng thái xử lý. |
| 2 | Form lập vi phạm | `XuLyViPham-ThemViPham.html`| **Đã có** | Nhập thông tin hành vi, mức phạt đề xuất. |
| 3 | Màn chi tiết vi phạm (timeline)| `XuLyViPham-ChiTietViPham.html` <br> `XuLyViPham-CapNhatXuLy.html` | **Đã có** | Timeline xử lý 8 bước từ phát hiện đến đóng hồ sơ. |
| 4 | Trung tâm cảnh báo | *Chưa có* | **Thiếu** | Tổng hợp cảnh báo tự động (giấy phép hết hạn, báo cáo muộn). |
| 5 | Popup đối soát dữ liệu nghi vấn | *Chưa có* | **Thiếu** | Luồng đối soát giả định với CSDL quốc gia. |

---

### PHASE 08 – DASHBOARD ĐIỀU HÀNH VÀ DASHBOARD CÁN BỘ
* **Mục tiêu:** Các bảng điều khiển tổng hợp thông tin thời gian thực phù hợp với từng vai trò.
* **Trạng thái:** **Thiếu 100% (Chưa phát triển)**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Dashboard lãnh đạo cấp tỉnh | *Chưa có* | **Thiếu** | Bản đồ nhiệt, biểu đồ vi phạm và KPI tổng thể toàn tỉnh. |
| 2 | Dashboard xã/phường | *Chưa có* | **Thiếu** | Thống kê và danh sách việc cần làm của Công an cấp xã. |
| 3 | Dashboard cán bộ | *Chưa có* | **Thiếu** | Lịch làm việc cá nhân, hồ sơ được giao. |
| 4 | Màn hiệu suất cán bộ | *Chưa có* | **Thiếu** | Thống kê số lượng hồ sơ xử lý và tỷ lệ đúng hạn. |

---

### PHASE 09 – BÁO CÁO, THỐNG KÊ VÀ REPORT BUILDER
* **Mục tiêu:** Xuất các biểu mẫu báo cáo và cho phép người dùng tự thiết kế báo cáo.
* **Trạng thái:** **Hoàn thành 20%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Trang danh sách báo cáo | *Chưa có* | **Thiếu** | Nơi điều hướng các loại báo cáo chuyên đề. |
| 2 | Báo cáo tổng hợp cơ sở | `BaoCao-ThongKe.html` | **Đã có** | Có biểu đồ Chart.js và bảng số liệu phân theo huyện. |
| 3 | Báo cáo giấy phép | *Chưa có* | **Thiếu** | Thống kê giấy phép sắp hết hạn, đã hết hạn. |
| 4 | Báo cáo kiểm tra | *Chưa có* | **Thiếu** | Thống kê lượt kiểm tra đạt/không đạt. |
| 5 | Báo cáo vi phạm | *Chưa có* | **Thiếu** | Thống kê số tiền xử phạt và tỷ lệ khắc phục. |
| 6 | Report Builder | *Chưa có* | **Thiếu** | Công cụ thiết kế báo cáo động (chọn cột, dạng biểu đồ). |
| 7 | Màn thống kê xã/phường | *Chưa có* | **Thiếu** | Chi tiết số liệu của riêng cấp phường/xã. |

---

### PHASE 10 – THỦ TỤC HÀNH CHÍNH, PHẢN ÁNH VÀ THÔNG BÁO
* **Mục tiêu:** Cổng thông tin thủ tục, gửi phản ánh kiến nghị và nhận thông báo hệ thống.
* **Trạng thái:** **Hoàn thành 70%**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Danh sách thủ tục công khai | `index.html` (tab thủ tục)| **Đã có** | Danh sách thủ tục dịch vụ công. |
| 2 | Trang chi tiết thủ tục | *Chưa có* | **Thiếu** | Xem chi tiết quy trình, lệ phí, hồ sơ cần chuẩn bị. |
| 3 | Màn quản trị thủ tục | *Chưa có* | **Thiếu** | Đăng tải và chỉnh sửa thủ tục dành cho admin. |
| 4 | Màn gửi phản ánh | `QuanLyPhanAnh-TaoMoiPhanAnh.html` | **Đã có** | Người dân nộp phản ánh kèm hình ảnh. |
| 5 | Màn quản lý phản ánh | `QuanLyPhanAnh.html` <br> `QuanLyPhanAnh-ChiTietPhanAnh.html` <br> `QuanLyPhanAnh-ChinhSuaPhanAnh.html` | **Đã có** | Workflow tiếp nhận, phân công xử lý và phản hồi phản ánh. |
| 6 | Trung tâm thông báo | Header dropdown | **Đã có** | Có thông báo nhanh ở header. Thiếu màn hình quản lý tập trung. |

---

### PHASE 11 – NHẬT KÝ HỆ THỐNG, BẢO MẬT, SEED DATA VÀ HOÀN THIỆN DEMO
* **Mục tiêu:** Các công cụ vận hành hệ thống, nhật ký hoạt động, bảo mật và chuẩn bị dữ liệu demo.
* **Trạng thái:** **Thiếu 100% (Chưa phát triển)**

| STT | Màn hình yêu cầu | File tương ứng | Trạng thái | Ghi chú |
|---|---|---|---|---|
| 1 | Màn nhật ký hoạt động | *Chưa có* | **Thiếu** | Theo dõi thao tác của các tài khoản (log). |
| 2 | Màn cấu hình hệ thống | *Chưa có* | **Thiếu** | Thay đổi logo, chu kỳ báo cáo, chu kỳ kiểm tra. |
| 3 | Màn quản lý import dữ liệu | *Chưa có* | **Thiếu** | Công cụ import file Excel danh sách cơ sở, cán bộ. |
| 4 | Seed Data Manager | *Chưa có* | **Thiếu** | Nút tạo nhanh dữ liệu giả lập cho 100-150 cơ sở. |
| 5 | Màn kiểm tra module | *Chưa có* | **Thiếu** | Kiểm tra tình trạng link hỏng, route, quyền. |
| 6 | Bảo mật phía giao diện | *Chưa có* | **Thiếu** | Phân quyền động, ẩn menu theo Role thực tế. |
| 7 | Hướng dẫn demo hệ thống | *Chưa có* | **Thiếu** | Tài liệu chỉ dẫn luồng demo kịch bản mẫu. |

---

## III. NHẬT XÉT & ĐỀ XUẤT HƯỚNG ĐI TIẾP THEO

1. **Các phần cốt lõi nghiệp vụ (Phòng PC06 & Công an Huyện/Xã):**
   * **Cơ sở dữ liệu CSKD, Kiểm tra cơ sở, Xử lý vi phạm, Quản lý phản ánh** và **Danh mục dùng chung** đã có bộ khung giao diện rất đẹp, hiện đại, sử dụng CSS tùy biến tốt và cấu trúc JavaScript xử lý dữ liệu giả lập chi tiết.
2. **Những mảng trống lớn cần hoàn thiện:**
   * **Cổng dành cho Chủ cơ sở kinh doanh (Phase 5):** Khai báo lưu trú, khai báo tài sản và báo cáo định kỳ. Đây là nhóm đối tượng người dùng thứ hai ngoài công an.
   * **Hệ thống Dashboard phân quyền (Phase 8):** Cần thiết kế Dashboard trực quan cho Lãnh đạo tỉnh (nhiều biểu đồ vĩ mô), Lãnh đạo xã và Cán bộ kiểm tra.
   * **Công cụ quản trị & vận hành (Phase 11):** Gồm Nhật ký hệ thống, Seed Data và Cấu hình.
