# MASTER PLAN GEN HỆ THỐNG QUẢN LÝ CSKD–ANTT TRÊN BASE44

## I. YÊU CẦU CHUNG ÁP DỤNG CHO TẤT CẢ PHASE

Hãy tiếp tục phát triển trên chính project Base44 hiện tại.

Tên hệ thống:

**HỆ THỐNG QUẢN LÝ CƠ SỞ KINH DOANH CÓ ĐIỀU KIỆN VỀ AN NINH TRẬT TỰ – TỈNH NINH BÌNH**

Tên ngắn:

**CSKD–ANTT Ninh Bình**

Mục tiêu hệ thống:

* Số hóa hồ sơ các cơ sở kinh doanh có điều kiện về ANTT.
* Quản lý dữ liệu theo mô hình Tỉnh → Xã/Phường → Cơ sở kinh doanh.
* Theo dõi vị trí cơ sở trên bản đồ GIS.
* Quản lý giấy phép, chủ cơ sở, nhân sự, cơ sở vật chất.
* Tiếp nhận khai báo, báo cáo từ cơ sở kinh doanh.
* Quản lý kiểm tra, biên bản và vi phạm.
* Tổng hợp báo cáo, cảnh báo và thống kê theo thời gian thực.
* Phân quyền dữ liệu theo cấp quản lý và địa bàn.
* Ghi nhận đầy đủ nhật ký thao tác.

### Nguyên tắc bắt buộc khi phát triển

1. Không chỉ tạo giao diện tĩnh hoặc dữ liệu hard-code.
2. Mọi màn danh sách phải sử dụng dữ liệu thật từ Base44 Entities.
3. Các nút Thêm, Sửa, Xóa, Xem chi tiết, Duyệt, Từ chối, Xuất báo cáo phải hoạt động.
4. Mỗi chức năng phải có đủ:

   * Màn danh sách.
   * Màn tìm kiếm/lọc.
   * Màn thêm mới hoặc wizard.
   * Màn xem chi tiết.
   * Màn chỉnh sửa.
   * Popup xác nhận thao tác.
   * Empty state.
   * Loading state.
   * Error state.
5. Không làm lại hoặc phá vỡ chức năng của phase trước.
6. Tái sử dụng component, layout, bảng dữ liệu, bộ lọc và modal.
7. Mỗi bảng dữ liệu phải có:

   * Tìm kiếm nhanh.
   * Bộ lọc nâng cao.
   * Sắp xếp.
   * Phân trang.
   * Chọn số dòng/trang.
   * Chọn nhiều bản ghi khi phù hợp.
   * Xuất Excel hoặc CSV.
   * Hiển thị tổng số bản ghi.
8. Tất cả form phải:

   * Có label tiếng Việt.
   * Đánh dấu trường bắt buộc.
   * Kiểm tra dữ liệu đầu vào.
   * Hiển thị lỗi ngay dưới trường.
   * Cảnh báo khi rời trang mà chưa lưu.
9. Ngày tháng hiển thị theo định dạng `dd/MM/yyyy`.
10. Thời gian hiển thị theo định dạng `HH:mm dd/MM/yyyy`.
11. Không xóa vật lý dữ liệu nghiệp vụ; sử dụng trạng thái hoặc soft delete.
12. Các dữ liệu mẫu phải phù hợp với tỉnh Ninh Bình, không dùng tên nước ngoài ngẫu nhiên.

### Phong cách giao diện

Thiết kế theo phong cách hệ thống quản lý hành chính hiện đại:

* Sidebar cố định bên trái.
* Header phía trên.
* Breadcrumb trên từng trang.
* Nội dung sử dụng card trắng, nền xám nhạt.
* Màu chủ đạo xanh dương đậm.
* Màu đỏ dùng cho cảnh báo, quá hạn, vi phạm.
* Màu cam dùng cho chờ xử lý.
* Màu xanh lá dùng cho đang hoạt động, đã hoàn thành.
* Font rõ ràng, mật độ thông tin vừa phải.
* Responsive cho desktop, tablet và màn hình điện thoại.
* Không sử dụng quá nhiều gradient hoặc hiệu ứng mang tính quảng cáo.
* Các biểu đồ, bảng và bản đồ cần ưu tiên khả năng đọc dữ liệu.

---

# PHASE 01 – KHUNG HỆ THỐNG, ĐĂNG NHẬP VÀ PHÂN QUYỀN NỀN TẢNG

## Mục tiêu

Xây dựng kiến trúc chung, layout, đăng nhập, tài khoản mẫu, role, permission và phạm vi dữ liệu theo địa bàn.

## Vai trò người dùng

Tạo các vai trò:

1. **Quản trị hệ thống**

   * Toàn quyền.
   * Quản lý tài khoản, vai trò, danh mục và cấu hình.

2. **Lãnh đạo PC06 cấp tỉnh**

   * Xem dữ liệu toàn tỉnh.
   * Xem dashboard, bản đồ, báo cáo.
   * Duyệt hồ sơ và xem cảnh báo.

3. **Cán bộ PC06**

   * Quản lý hồ sơ toàn tỉnh theo nhiệm vụ được phân công.
   * Lập kế hoạch kiểm tra.
   * Xử lý vi phạm và báo cáo.

4. **Công an xã/phường**

   * Chỉ xem và xử lý cơ sở thuộc địa bàn được phân công.
   * Tiếp nhận khai báo.
   * Kiểm tra cơ sở.
   * Lập biên bản và cập nhật tình trạng xử lý.

5. **Chủ cơ sở kinh doanh**

   * Chỉ xem và cập nhật cơ sở của mình.
   * Khai báo khách, tài sản và báo cáo định kỳ.
   * Xem thông báo, lịch kiểm tra và yêu cầu bổ sung.

6. **Người xem báo cáo**

   * Chỉ được xem dashboard và báo cáo được cấp quyền.

## Entities cần tạo

### UserProfile

* userId
* fullName
* username
* email
* phone
* avatar
* officerCode
* position
* unitName
* roleId
* provinceId
* wardId
* businessId
* status
* lastLoginAt

### Role

* code
* name
* description
* status
* systemRole

### Permission

* moduleCode
* actionCode
* actionName
* description

### RolePermission

* roleId
* permissionId
* allowed

### WardAssignment

* userId
* wardId
* assignmentType
* startDate
* endDate
* status
* note

## Các màn hình phải tạo

### 1. Màn đăng nhập

Bao gồm:

* Logo đơn vị.
* Tên hệ thống.
* Tên đăng nhập.
* Mật khẩu.
* Ghi nhớ đăng nhập.
* Nút Đăng nhập.
* Quên mật khẩu.
* Hiển thị/ẩn mật khẩu.
* Thông báo lỗi khi sai thông tin.
* Thông báo tài khoản bị khóa.
* Loading khi đăng nhập.

Sau khi đăng nhập:

* Điều hướng theo vai trò.
* Ghi nhận thời gian đăng nhập.
* Ghi nhật ký đăng nhập.

### 2. Layout quản trị

Sidebar gồm:

* Tổng quan.
* Bản đồ số.
* Cơ sở kinh doanh.
* Khai báo từ cơ sở.
* Kiểm tra – giám sát.
* Vi phạm.
* Báo cáo – thống kê.
* Thủ tục hành chính.
* Danh mục dùng chung.
* Người dùng và phân quyền.
* Nhật ký hệ thống.
* Cấu hình hệ thống.

Header gồm:

* Nút đóng/mở sidebar.
* Tìm kiếm toàn hệ thống.
* Thông báo.
* Tên người dùng.
* Vai trò.
* Đơn vị.
* Đổi mật khẩu.
* Hồ sơ cá nhân.
* Đăng xuất.

### 3. Màn hồ sơ cá nhân

* Ảnh đại diện.
* Họ tên.
* Mã cán bộ.
* Đơn vị.
* Chức vụ.
* Điện thoại.
* Email.
* Địa bàn phụ trách.
* Nút cập nhật thông tin.
* Nút đổi mật khẩu.

### 4. Màn danh sách tài khoản

Cột dữ liệu:

* STT.
* Họ tên.
* Tên đăng nhập.
* Vai trò.
* Đơn vị.
* Địa bàn.
* Số điện thoại.
* Trạng thái.
* Lần đăng nhập cuối.
* Thao tác.

Bộ lọc:

* Từ khóa.
* Vai trò.
* Đơn vị.
* Xã/phường.
* Trạng thái.

Thao tác:

* Thêm tài khoản.
* Xem.
* Sửa.
* Khóa/mở khóa.
* Đặt lại mật khẩu.
* Phân công địa bàn.
* Xóa mềm.

### 5. Form thêm/sửa tài khoản

Chia thành các nhóm:

* Thông tin đăng nhập.
* Thông tin cá nhân.
* Thông tin đơn vị.
* Vai trò.
* Phạm vi địa bàn.
* Trạng thái.

Nếu vai trò là Chủ cơ sở kinh doanh thì hiển thị trường chọn cơ sở.

Nếu vai trò là Công an xã/phường thì bắt buộc chọn xã/phường.

### 6. Màn ma trận phân quyền

Hiển thị:

* Hàng là module/chức năng.
* Cột là Xem, Thêm, Sửa, Xóa, Duyệt, Xuất dữ liệu, Quản trị.
* Chọn vai trò ở đầu trang.
* Checkbox từng quyền.
* Chọn tất cả theo hàng.
* Chọn tất cả theo cột.
* Nút Lưu phân quyền.
* Cảnh báo khi thay đổi quyền quản trị.

### 7. Màn phân công địa bàn

* Danh sách cán bộ.
* Danh sách xã/phường được giao.
* Ngày bắt đầu.
* Ngày kết thúc.
* Loại phân công chính/phối hợp.
* Trạng thái.
* Thao tác thêm, sửa, kết thúc phân công.

## Điều kiện nghiệm thu Phase 01

* Đăng nhập được bằng tài khoản mẫu.
* Menu thay đổi đúng theo role.
* Người dùng cấp xã không xem được dữ liệu xã khác.
* Chủ cơ sở không vào được trang quản trị.
* Các quyền Xem, Thêm, Sửa, Xóa thực sự ảnh hưởng tới nút và route.
* Đăng xuất hoạt động.
* Có dữ liệu mẫu cho tất cả vai trò.

---

# PHASE 02 – DANH MỤC DÙNG CHUNG VÀ CẤU TRÚC ĐỊA BÀN

## Mục tiêu

Tạo các danh mục nền tảng phục vụ toàn bộ hệ thống.

## Entities cần tạo

### Province

* code
* name
* centerLatitude
* centerLongitude
* status

### Ward

* code
* name
* provinceId
* type
* address
* latitude
* longitude
* policeUnitName
* contactPhone
* status

### BusinessType

* code
* name
* description
* legalBasis
* licenseRequired
* declarationType
* riskLevel
* icon
* mapColor
* status
* displayOrder

### ViolationType

* code
* name
* description
* legalBasis
* severity
* defaultFineFrom
* defaultFineTo
* status

### DocumentType

* code
* name
* businessTypeId
* required
* expiryRequired
* description
* status

### InspectionCategory

* code
* name
* description
* displayOrder
* status

## Các màn hình phải tạo

### 1. Màn quản lý tỉnh/thành phố

* Danh sách tỉnh.
* Thêm/sửa tỉnh.
* Tọa độ trung tâm bản đồ.
* Trạng thái sử dụng.

Mặc định tạo tỉnh Ninh Bình.

### 2. Màn quản lý xã/phường

Danh sách:

* Mã xã/phường.
* Tên xã/phường.
* Loại đơn vị.
* Đơn vị Công an quản lý.
* Số cơ sở.
* Cán bộ phụ trách.
* Trạng thái.

Có:

* Tìm kiếm.
* Lọc trạng thái.
* Thêm mới.
* Sửa.
* Xem thống kê địa bàn.
* Import Excel.
* Xuất danh sách.

### 3. Màn quản lý loại hình kinh doanh

Quản lý 23 nhóm ngành nghề có điều kiện về ANTT.

Danh sách hiển thị:

* Mã ngành.
* Tên ngành.
* Yêu cầu giấy phép.
* Mức độ rủi ro.
* Số lượng cơ sở.
* Màu trên bản đồ.
* Trạng thái.

Form cấu hình ngành nghề gồm:

* Thông tin cơ bản.
* Căn cứ pháp lý.
* Loại giấy tờ bắt buộc.
* Tần suất báo cáo.
* Tần suất kiểm tra.
* Biểu tượng bản đồ.
* Mức độ rủi ro.
* Trạng thái.

### 4. Màn quản lý loại giấy tờ

Ví dụ:

* Giấy chứng nhận đủ điều kiện về ANTT.
* Giấy đăng ký kinh doanh.
* Giấy chứng nhận PCCC.
* Giấy tờ người đại diện.
* Hợp đồng thuê địa điểm.
* Giấy phép chuyên ngành.

Cho phép cấu hình giấy tờ bắt buộc theo từng ngành nghề.

### 5. Màn quản lý loại vi phạm

* Danh sách loại vi phạm.
* Mức độ.
* Căn cứ pháp lý.
* Khung tiền phạt tham khảo.
* Biện pháp xử lý.
* Trạng thái.

### 6. Màn quản lý nhóm nội dung kiểm tra

* Nhóm hồ sơ pháp lý.
* Nhóm nhân sự.
* Nhóm cơ sở vật chất.
* Nhóm PCCC.
* Nhóm lưu trú.
* Nhóm quản lý tài sản.
* Nhóm thực hiện chế độ báo cáo.

## Điều kiện nghiệm thu Phase 02

* Danh mục có CRUD hoàn chỉnh.
* Không cho xóa danh mục đang được sử dụng.
* Có thể kích hoạt/ngừng sử dụng.
* Form cơ sở kinh doanh lấy dữ liệu trực tiếp từ các danh mục.
* Bản đồ sử dụng màu và icon cấu hình theo loại hình kinh doanh.

---

# PHASE 03 – HỒ SƠ SỐ CƠ SỞ KINH DOANH

## Mục tiêu

Xây dựng module cốt lõi quản lý toàn bộ hồ sơ cơ sở kinh doanh.

## Entities cần tạo

### Business

* code
* name
* shortName
* businessTypeId
* taxCode
* registrationNumber
* establishedDate
* phone
* email
* website
* provinceId
* wardId
* address
* latitude
* longitude
* legalRepresentativeName
* legalRepresentativeIdNumber
* legalRepresentativePhone
* managerName
* managerPhone
* totalEmployees
* totalRooms
* capacity
* operatingScale
* riskLevel
* status
* verificationStatus
* managementUnit
* assignedOfficerId
* lastInspectionDate
* nextInspectionDate
* createdBy
* approvedBy
* approvedAt
* note

### BusinessPerson

* businessId
* personType
* fullName
* idNumber
* dateOfBirth
* gender
* phone
* address
* position
* startDate
* endDate
* status

### BusinessDocument

* businessId
* documentTypeId
* documentNumber
* issuedDate
* expiryDate
* issuedBy
* fileUrl
* verificationStatus
* note

### BusinessImage

* businessId
* imageType
* fileUrl
* caption
* takenAt
* latitude
* longitude

### BusinessChangeHistory

* businessId
* changeType
* oldValue
* newValue
* reason
* changedBy
* changedAt

## Các màn hình phải tạo

### 1. Màn danh sách cơ sở kinh doanh

Thanh trên cùng:

* Tiêu đề.
* Tổng số cơ sở.
* Nút Thêm cơ sở.
* Nút Import Excel.
* Nút Xuất Excel.
* Nút xem dạng bảng.
* Nút xem dạng thẻ.

Bộ lọc nâng cao:

* Từ khóa theo tên, mã, mã số thuế, người đại diện.
* Loại hình kinh doanh.
* Xã/phường.
* Trạng thái hoạt động.
* Trạng thái hồ sơ.
* Mức độ rủi ro.
* Đơn vị quản lý.
* Cán bộ phụ trách.
* Giấy phép sắp hết hạn.
* Ngày kiểm tra gần nhất.
* Có/không có tọa độ bản đồ.

Cột bảng:

* Mã cơ sở.
* Tên cơ sở.
* Loại hình.
* Địa chỉ.
* Xã/phường.
* Người đại diện.
* Số điện thoại.
* Trạng thái hoạt động.
* Trạng thái hồ sơ.
* Mức độ rủi ro.
* Lần kiểm tra gần nhất.
* Thao tác.

### 2. Wizard thêm mới cơ sở

Không đặt toàn bộ dữ liệu trong một form dài.

Tạo wizard 6 bước:

#### Bước 1 – Thông tin nhận diện

* Mã cơ sở tự sinh.
* Tên cơ sở.
* Tên viết tắt.
* Loại hình kinh doanh.
* Mã số thuế.
* Số đăng ký kinh doanh.
* Ngày thành lập.
* Số điện thoại.
* Email.
* Website.

#### Bước 2 – Địa chỉ và vị trí

* Tỉnh.
* Xã/phường.
* Địa chỉ chi tiết.
* Chọn vị trí trên bản đồ.
* Vĩ độ.
* Kinh độ.
* Nút lấy vị trí hiện tại.
* Kiểm tra vị trí có nằm trong địa bàn được chọn hay không.

#### Bước 3 – Người đại diện và quản lý

* Người đại diện pháp luật.
* Số CCCD.
* Ngày sinh.
* Số điện thoại.
* Địa chỉ thường trú.
* Người quản lý trực tiếp.
* Chức vụ.
* Điện thoại quản lý.

#### Bước 4 – Quy mô và cơ sở vật chất

* Quy mô hoạt động.
* Tổng số nhân viên.
* Tổng số phòng.
* Sức chứa.
* Diện tích.
* Giờ hoạt động.
* Mô tả cơ sở vật chất.
* Điều kiện PCCC.
* Camera giám sát.
* Nơi lưu trữ dữ liệu.

#### Bước 5 – Hồ sơ và giấy phép
Tự động hiển thị danh sách giấy tờ bắt buộc theo loại hình kinh doanh.

Mỗi giấy tờ gồm:

* Loại giấy tờ.
* Số giấy tờ.
* Ngày cấp.
* Ngày hết hạn.
* Nơi cấp.
* Upload file.
* Trạng thái xác thực.

#### Bước 6 – Kiểm tra và gửi duyệt

* Hiển thị bản tóm tắt toàn bộ dữ liệu.
* Danh sách trường còn thiếu.
* Checkbox xác nhận thông tin chính xác.
* Nút Lưu nháp.
* Nút Gửi phê duyệt.

### 3. Màn chi tiết cơ sở

Phần đầu trang:

* Tên cơ sở.
* Mã cơ sở.
* Loại hình.
* Địa chỉ.
* Trạng thái.
* Mức độ rủi ro.
* Trạng thái hồ sơ.
* Cán bộ phụ trách.
* Nút Chỉnh sửa.
* Nút In hồ sơ.
* Nút Tạo kế hoạch kiểm tra.
* Nút Gửi thông báo.

Sử dụng các tab:

#### Tab Tổng quan

* Thông tin nhận diện.
* Thông tin liên hệ.
* Người đại diện.
* Quy mô hoạt động.
* Vị trí mini-map.
* Ảnh đại diện cơ sở.
* Các cảnh báo hiện tại.

#### Tab Giấy phép – hồ sơ

* Danh sách giấy tờ.
* Trạng thái còn hạn, sắp hết hạn, hết hạn.
* Xem file.
* Thay thế file.
* Xác minh giấy tờ.
* Lịch sử thay đổi.

#### Tab Chủ cơ sở và nhân sự

* Người đại diện.
* Người quản lý.
* Danh sách nhân viên.
* Trạng thái đang làm/nghỉ việc.
* Thêm nhân sự.
* Import nhân sự.

#### Tab Cơ sở vật chất

* Số phòng.
* Diện tích.
* Sức chứa.
* Camera.
* PCCC.
* Ảnh mặt tiền.
* Ảnh bên trong.
* Sơ đồ mặt bằng.

#### Tab Kiểm tra

* Lịch sử kiểm tra.
* Kế hoạch sắp tới.
* Kết quả.
* Số lỗi phát hiện.
* Biên bản đính kèm.

#### Tab Vi phạm

* Danh sách vi phạm.
* Mức độ.
* Hình thức xử lý.
* Tình trạng khắc phục.

#### Tab Khai báo – báo cáo

* Khai báo lưu trú.
* Khai báo tài sản.
* Báo cáo định kỳ.
* Các kỳ chưa nộp hoặc nộp muộn.

#### Tab Lịch sử thay đổi

* Thời gian.
* Người thực hiện.
* Nội dung thay đổi.
* Giá trị cũ.
* Giá trị mới.

### 4. Màn chỉnh sửa cơ sở

Dùng lại wizard nhưng cho phép chuyển nhanh giữa các bước.

Phải ghi lịch sử khi thay đổi:

* Chủ cơ sở.
* Địa chỉ.
* Loại hình.
* Trạng thái hoạt động.
* Giấy phép.
* Quy mô.

### 5. Màn quy trình xử lý hồ sơ

Hiển thị dạng Kanban hoặc danh sách theo trạng thái:

* Hồ sơ nháp.
* Chờ tiếp nhận.
* Đang kiểm tra.
* Yêu cầu bổ sung.
* Chờ phê duyệt.
* Đã phê duyệt.
* Từ chối.
* Tạm ngừng.
* Đã đóng cửa.

Khi yêu cầu bổ sung:

* Mở modal nhập nội dung cần bổ sung.
* Chọn hạn bổ sung.
* Gửi thông báo cho cơ sở.
* Ghi lịch sử xử lý.

Khi phê duyệt:

* Hiển thị checklist.
* Người phê duyệt.
* Ngày phê duyệt.
* Ghi chú.

## Điều kiện nghiệm thu Phase 03
* Tạo mới được cơ sở bằng wizard.
* Lưu nháp và tiếp tục chỉnh sửa được.
* Upload và xem được tài liệu.
* Trạng thái hồ sơ thay đổi đúng quy trình.
* Màn chi tiết hiển thị đầy đủ các tab.
* Người cấp xã chỉ thấy cơ sở thuộc xã được giao.
* Các thay đổi quan trọng được ghi lịch sử.

---

# PHASE 04 – BẢN ĐỒ SỐ GIS VÀ GIÁM SÁT ĐỊA BÀN

## Mục tiêu

Trực quan hóa cơ sở kinh doanh theo vị trí, loại hình, trạng thái và mức độ rủi ro.

## Các màn hình phải tạo

### 1. Màn bản đồ quản lý toàn tỉnh

Layout:

* Bản đồ chiếm phần lớn màn hình.
* Panel bộ lọc bên trái.
* Panel thông tin cơ sở mở từ bên phải.
* Thanh thống kê nhanh phía trên.

Thống kê:

* Tổng số cơ sở.
* Đang hoạt động.
* Tạm ngừng.
* Hồ sơ chưa hoàn chỉnh.
* Cơ sở rủi ro cao.
* Giấy phép sắp hết hạn.
* Cơ sở quá hạn kiểm tra.

Bộ lọc:

* Loại hình kinh doanh.
* Xã/phường.
* Trạng thái.
* Mức độ rủi ro.
* Trạng thái hồ sơ.
* Giấy phép.
* Ngày kiểm tra.
* Cán bộ phụ trách.

Tính năng bản đồ:

* Marker theo màu loại hình.
* Marker cảnh báo nhấp nháy hoặc có viền đỏ.
* Cluster marker khi thu nhỏ.
* Zoom theo xã/phường.
* Chuyển lớp bản đồ.
* Xem toàn màn hình.
* Định vị hiện tại.
* Tìm kiếm theo tên hoặc địa chỉ.
* Chọn vùng để thống kê.

### 2. Popup thông tin nhanh cơ sở

Khi click marker hiển thị:

* Tên cơ sở.
* Loại hình.
* Địa chỉ.
* Người đại diện.
* Điện thoại.
* Trạng thái.
* Mức độ rủi ro.
* Ngày kiểm tra gần nhất.
* Nút Xem hồ sơ.
* Nút Chỉ đường.
* Nút Tạo kế hoạch kiểm tra.

### 3. Màn thống kê địa bàn xã/phường

Phần đầu:

* Tên địa bàn.
* Cán bộ phụ trách.
* Tổng số cơ sở.
* Tổng vi phạm.
* Tổng cảnh báo.

Các thành phần:

* Biểu đồ cơ sở theo loại hình.
* Biểu đồ theo trạng thái.
* Biểu đồ theo mức độ rủi ro.
* Danh sách cơ sở mới.
* Danh sách cơ sở cần kiểm tra.
* Danh sách giấy phép sắp hết hạn.
* Mini-map địa bàn.

### 4. Màn bản đồ công khai

Chỉ hiển thị dữ liệu được phép công khai:

* Tên cơ sở.
* Loại hình.
* Địa chỉ.
* Trạng thái hoạt động.
* Số điện thoại công khai.
* Chỉ đường.

Không hiển thị:

* CCCD.
* Hồ sơ nội bộ.
* Vi phạm chưa công bố.
* Ghi chú nghiệp vụ.
* Thông tin cán bộ.

## Điều kiện nghiệm thu Phase 04

* Marker lấy trực tiếp từ dữ liệu cơ sở.
* Bộ lọc cập nhật marker và số liệu thống kê.
* Click marker mở đúng thông tin cơ sở.
* Người dùng cấp xã chỉ thấy marker thuộc địa bàn.
* Bản đồ công khai không làm lộ dữ liệu nội bộ.

---
# PHASE 05 – CỔNG DÀNH CHO CƠ SỞ KINH DOANH VÀ KHAI BÁO DỮ LIỆU

## Mục tiêu

Tạo khu vực riêng cho chủ cơ sở thực hiện khai báo và gửi báo cáo cho cơ quan quản lý.

## Entities cần tạo

### GuestStayDeclaration

* businessId
* declarationCode
* guestName
* idNumber
* nationality
* dateOfBirth
* phone
* checkInAt
* expectedCheckOutAt
* actualCheckOutAt
* roomNumber
* declarationStatus
* riskCheckStatus
* note

### AssetDeclaration

* businessId
* declarationCode
* assetType
* assetName
* serialNumber
* brand
* sellerName
* sellerIdNumber
* buyerName
* buyerIdNumber
* transactionDate
* amount
* attachmentUrl
* riskCheckStatus
* note

### PeriodicReport

* businessId
* reportType
* periodType
* periodFrom
* periodTo
* dueDate
* submittedAt
* status
* dataJson
* attachmentUrl
* reviewerId
* reviewNote

## Các màn hình phải tạo

### 1. Dashboard cơ sở kinh doanh

Hiển thị:

* Thông tin cơ sở.
* Trạng thái hồ sơ.
* Giấy phép sắp hết hạn.
* Kỳ báo cáo sắp đến hạn.
* Yêu cầu bổ sung.
* Lịch kiểm tra sắp tới.
* Số khai báo trong tháng.
* Thông báo mới.

Quick actions:

* Khai báo lưu trú.
* Khai báo tài sản.
* Nộp báo cáo định kỳ.
* Cập nhật hồ sơ.
* Gửi phản ánh.

### 2. Màn hồ sơ cơ sở của tôi

* Xem hồ sơ.
* Chỉnh sửa các trường được cho phép.
* Upload giấy tờ mới.
* Gửi yêu cầu thay đổi.
* Theo dõi trạng thái duyệt.
* Xem nội dung yêu cầu bổ sung.

### 3. Màn khai báo lưu trú

Danh sách:

* Mã khai báo.
* Họ tên khách.
* Số giấy tờ.
* Phòng.
* Thời gian đến.
* Thời gian dự kiến đi.
* Trạng thái.
* Kết quả kiểm tra.

Form khai báo:

* Thông tin người lưu trú.
* Thông tin giấy tờ.
* Thời gian lưu trú.
* Phòng.
* Ảnh giấy tờ nếu cần.
* Ghi chú.

Có:

* Thêm từng người.
* Thêm nhiều người.
* Import Excel.
* Sao chép khai báo.
* Thực hiện trả phòng.
* Hủy khai báo.
* Xuất danh sách.

### 4. Màn khai báo tài sản/giao dịch

Phù hợp với các cơ sở kinh doanh có tiếp nhận, mua bán hoặc cầm cố tài sản.

Danh sách:

* Mã khai báo.
* Loại tài sản.
* Tên tài sản.
* Số serial/biển số.
* Người giao dịch.
* Ngày giao dịch.
* Giá trị.
* Trạng thái cảnh báo.

Form:

* Thông tin tài sản.
* Ảnh tài sản.
* Serial/IMEI/biển số.
* Thông tin người giao dịch.
* Số CCCD.
* Ngày giao dịch.
* Giá trị giao dịch.
* File biên nhận.
* Ghi chú.

### 5. Màn báo cáo định kỳ

Danh sách theo kỳ:

* Loại báo cáo.
* Kỳ báo cáo.
* Hạn nộp.
* Ngày nộp.
* Trạng thái.
* Người tiếp nhận.
* Ý kiến phản hồi.

Luồng:
1. Hệ thống tạo kỳ báo cáo.
2. Cơ sở mở biểu mẫu.
3. Nhập số liệu.
4. Lưu nháp.
5. Gửi báo cáo.
6. Cán bộ tiếp nhận.
7. Cán bộ yêu cầu bổ sung hoặc chấp nhận.
8. Cơ sở xem kết quả.

### 6. Màn quản lý khai báo dành cho cán bộ

Có các tab:

* Khai báo lưu trú.
* Khai báo tài sản.
* Báo cáo định kỳ.
* Nộp muộn.
* Có cảnh báo.
* Chờ xử lý.

Bộ lọc theo:

* Cơ sở.
* Địa bàn.
* Loại khai báo.
* Thời gian.
* Trạng thái.
* Mức độ cảnh báo.

### 7. Màn chi tiết khai báo

* Toàn bộ nội dung khai báo.
* Thông tin cơ sở.
* Thông tin người khai.
* File đính kèm.
* Kết quả đối soát.
* Lịch sử xử lý.
* Nút Chấp nhận.
* Nút Yêu cầu bổ sung.
* Nút Đánh dấu cần xác minh.

## Điều kiện nghiệm thu Phase 05

* Chủ cơ sở chỉ xem dữ liệu của cơ sở mình.
* Có thể lưu nháp và gửi khai báo.
* Cán bộ xem được khai báo theo phạm vi địa bàn.
* Có trạng thái xử lý rõ ràng.
* Các trường nhạy cảm chỉ hiển thị cho người có quyền.

---

# PHASE 06 – QUẢN LÝ KIỂM TRA VÀ CHECKLIST

## Mục tiêu

Quản lý quy trình lập kế hoạch, phân công, kiểm tra tại cơ sở và theo dõi khắc phục.

## Entities cần tạo

### ChecklistTemplate

* code
* name
* businessTypeId
* inspectionCategoryId
* version
* effectiveDate
* status
* description

### ChecklistItem

* templateId
* groupName
* content
* resultType
* required
* legalBasis
* displayOrder

### Inspection

* code
* businessId
* inspectionType
* planDate
* actualDate
* leaderId
* status
* result
* conclusion
* nextInspectionDate
* reportFileUrl
* createdBy

### InspectionMember

* inspectionId
* userId
* role

### InspectionResultItem

* inspectionId
* checklistItemId
* result
* description
* evidenceUrl
* correctiveAction
* dueDate
* correctedAt
* verificationStatus

## Các màn hình phải tạo

### 1. Màn quản lý mẫu checklist

Danh sách mẫu:

* Mã.
* Tên.
* Loại hình áp dụng.
* Phiên bản.
* Ngày hiệu lực.
* Số tiêu chí.
* Trạng thái.

Màn thiết kế checklist:

* Tạo nhóm tiêu chí.
* Thêm tiêu chí.
* Kéo thả sắp xếp.
* Chọn kiểu kết quả:

  * Đạt/Không đạt.
  * Có/Không.
  * Nhập số.
  * Nhập nội dung.
  * Chọn danh sách.
* Căn cứ pháp lý.
* Bắt buộc nhập minh chứng khi không đạt.
* Nhân bản phiên bản.

### 2. Màn danh sách kế hoạch kiểm tra

Các tab:

* Tất cả.
* Dự kiến.
* Đã phân công.
* Sắp diễn ra.
* Đang thực hiện.
* Chờ hoàn thiện biên bản.
* Đã hoàn thành.
* Quá hạn.

Cột:

* Mã đợt kiểm tra.
* Cơ sở.
* Địa bàn.
* Loại kiểm tra.
* Ngày dự kiến.
* Trưởng đoàn.
* Thành viên.
* Trạng thái.
* Kết quả sơ bộ.
* Thao tác.

### 3. Wizard tạo kế hoạch kiểm tra

#### Bước 1

* Chọn cơ sở.
* Loại kiểm tra: định kỳ, đột xuất, tái kiểm tra.
* Lý do.
* Thời gian.
* Địa điểm.

#### Bước 2

* Chọn trưởng đoàn.
* Chọn thành viên.
* Phân công nhiệm vụ.

#### Bước 3

* Chọn mẫu checklist.
* Xem trước tiêu chí.

#### Bước 4

* Gửi thông báo cho cơ sở.
* Hoàn tất kế hoạch.

### 4. Màn thực hiện kiểm tra

Thiết kế tối ưu cho tablet:

* Thông tin cơ sở phía trên.
* Danh sách nhóm tiêu chí bên trái.
* Nội dung tiêu chí bên phải.
* Nút Đạt.
* Nút Không đạt.
* Nút Không áp dụng.
* Ô ghi chú.
* Upload ảnh minh chứng.
* Nhập yêu cầu khắc phục.
* Hạn khắc phục.

Có thanh tiến độ:

* Tổng tiêu chí.
* Đã kiểm tra.
* Số không đạt.
* Số chưa xử lý.

### 5. Màn tổng hợp kết quả kiểm tra

* Thông tin đoàn kiểm tra.
* Thời gian.
* Danh sách tiêu chí không đạt.
* Hình ảnh minh chứng.
* Kết luận.
* Kiến nghị xử lý.
* Ngày tái kiểm tra.
* Nút Lưu nháp.
* Nút Hoàn tất.
* Nút Xuất biên bản.
* Nút Tạo vi phạm từ kết quả.

### 6. Màn theo dõi khắc phục

* Cơ sở.
* Nội dung cần khắc phục.
* Hạn hoàn thành.
* Trạng thái.
* Bằng chứng cơ sở gửi.
* Cán bộ xác minh.
* Kết quả xác minh.

## Điều kiện nghiệm thu Phase 06

* Có thể tạo mẫu checklist động.
* Mỗi loại hình có thể sử dụng checklist khác nhau.
* Có thể thực hiện kiểm tra và upload minh chứng.
* Tiêu chí không đạt có thể sinh vi phạm.
* Có theo dõi hạn khắc phục và tái kiểm tra.

---

# PHASE 07 – QUẢN LÝ VI PHẠM, CẢNH BÁO VÀ XỬ LÝ

## Mục tiêu

Quản lý vi phạm phát hiện từ kiểm tra, khai báo hoặc phản ánh; theo dõi quá trình xử lý và khắc phục.

## Entities cần tạo

### Violation

* code
* businessId
* inspectionId
* violationTypeId
* detectedAt
* source
* description
* legalBasis
* severity
* proposedAction
* fineAmount
* dueDate
* status
* assignedOfficerId
* evidenceUrl
* decisionFileUrl
* resolvedAt
* resolutionNote

### Alert

* code
* alertType
* businessId
* referenceEntity
* referenceId
* title
* content
* severity
* status
* assignedTo
* createdAt
* acknowledgedAt
* resolvedAt

## Các màn hình phải tạo

### 1. Màn danh sách vi phạm

Các tab:

* Mới phát hiện.
* Chờ xác minh.
* Đang xử lý.
* Chờ khắc phục.
* Đã khắc phục.
* Quá hạn.
* Đã đóng.

Bộ lọc:

* Từ khóa.
* Cơ sở.
* Địa bàn.
* Loại vi phạm.
* Mức độ.
* Nguồn phát hiện.
* Cán bộ xử lý.
* Thời gian.
* Trạng thái.

### 2. Form lập vi phạm
* Cơ sở.
* Nguồn phát hiện.
* Loại vi phạm.
* Thời gian.
* Nội dung.
* Căn cứ pháp lý.
* Mức độ.
* Minh chứng.
* Hình thức xử lý đề xuất.
* Số tiền phạt.
* Hạn khắc phục.
* Cán bộ phụ trách.

### 3. Màn chi tiết vi phạm

Hiển thị timeline:

1. Phát hiện.
2. Xác minh.
3. Lập biên bản.
4. Ra quyết định.
5. Yêu cầu khắc phục.
6. Cơ sở gửi kết quả.
7. Xác minh hoàn thành.
8. Đóng vụ việc.

Các khu vực:

* Thông tin vi phạm.
* Hồ sơ cơ sở.
* Minh chứng.
* Biên bản.
* Quyết định xử lý.
* Lịch sử cập nhật.
* Trao đổi với cơ sở.

### 4. Trung tâm cảnh báo

Các loại cảnh báo:

* Giấy phép sắp hết hạn.
* Giấy phép đã hết hạn.
* Quá hạn nộp báo cáo.
* Quá hạn khắc phục.
* Quá hạn kiểm tra định kỳ.
* Cơ sở có nhiều vi phạm.
* Khai báo có dữ liệu nghi vấn.
* Thông tin hồ sơ thiếu hoặc không thống nhất.
* Cơ sở thay đổi người đại diện.
* Cơ sở ngừng hoạt động bất thường.

Hiển thị:

* Tổng cảnh báo theo mức độ.
* Danh sách cảnh báo.
* Cơ sở liên quan.
* Người được giao xử lý.
* Trạng thái đã đọc/chưa đọc.
* Đã tiếp nhận.
* Đã giải quyết.
* Bỏ qua có lý do.

### 5. Popup đối soát dữ liệu nghi vấn

Do chưa có kết nối thật với CSDL dân cư hoặc dữ liệu truy nã, hãy tạo luồng mô phỏng có cấu trúc:

* Trạng thái Chưa đối soát.
* Đang kiểm tra.
* Khớp thông tin.
* Không khớp.
* Cần xác minh thủ công.
* Có dấu hiệu nghi vấn.

Không khẳng định một người là tội phạm nếu chỉ dựa trên dữ liệu demo.

## Điều kiện nghiệm thu Phase 07

* Vi phạm có quy trình trạng thái.
* Có timeline xử lý.
* Cảnh báo được tạo tự động từ các điều kiện dữ liệu.
* Có thể phân công người xử lý cảnh báo.
* Cảnh báo biến mất khỏi danh sách đang xử lý sau khi hoàn thành nhưng vẫn tồn tại trong lịch sử.

---

# PHASE 08 – DASHBOARD ĐIỀU HÀNH VÀ DASHBOARD CÁN BỘ

## Mục tiêu

Cung cấp dashboard riêng theo cấp tỉnh, xã/phường, cán bộ và cơ sở kinh doanh.

## Các màn hình phải tạo

### 1. Dashboard lãnh đạo cấp tỉnh

Bộ lọc chung:

* Khoảng thời gian.
* Xã/phường.
* Loại hình.
* Trạng thái.
* Mức độ rủi ro.

KPI cards:

* Tổng số cơ sở.
* Cơ sở đang hoạt động.
* Cơ sở mới trong kỳ.
* Hồ sơ chờ duyệt.
* Giấy phép sắp hết hạn.
* Kiểm tra trong kỳ.
* Vi phạm trong kỳ.
* Cảnh báo chưa xử lý.
* Tỷ lệ nộp báo cáo đúng hạn.

Biểu đồ:

* Cơ sở theo xã/phường.
* Cơ sở theo loại hình.
* Xu hướng tăng giảm cơ sở.
* Vi phạm theo tháng.
* Vi phạm theo loại.
* Kết quả kiểm tra.
* Mức độ rủi ro.
* Tỷ lệ báo cáo đúng hạn.
Các khối dữ liệu:

* Bản đồ nhiệt địa bàn.
* Top địa bàn có nhiều vi phạm.
* Top loại hình rủi ro cao.
* Cơ sở cần chú ý.
* Hoạt động gần đây.

### 2. Dashboard xã/phường

* Tổng cơ sở địa bàn.
* Cơ sở mới.
* Cơ sở chưa xác minh.
* Cơ sở quá hạn kiểm tra.
* Báo cáo chờ tiếp nhận.
* Cảnh báo chưa xử lý.
* Danh sách công việc hôm nay.
* Bản đồ địa bàn.

### 3. Dashboard cán bộ

* Hồ sơ được giao.
* Kế hoạch kiểm tra.
* Vi phạm đang xử lý.
* Cảnh báo đang phụ trách.
* Công việc quá hạn.
* Lịch làm việc.
* Hiệu suất cá nhân.

### 4. Màn hiệu suất cán bộ

Bộ lọc:

* Thời gian.
* Đơn vị.
* Địa bàn.
* Cán bộ.

Chỉ số:

* Hồ sơ xử lý.
* Thời gian xử lý trung bình.
* Đợt kiểm tra hoàn thành.
* Vi phạm đã giải quyết.
* Cảnh báo đã xử lý.
* Công việc quá hạn.
* Tỷ lệ đúng hạn.

Không sử dụng chỉ số để kết luận cá nhân tốt/xấu nếu dữ liệu chưa đầy đủ.

## Điều kiện nghiệm thu Phase 08

* Dashboard thay đổi theo vai trò.
* Bộ lọc tác động lên toàn bộ card và biểu đồ.
* Click KPI mở danh sách dữ liệu tương ứng.
* Không dùng số liệu hard-code.
* Có skeleton loading cho biểu đồ.

---

# PHASE 09 – BÁO CÁO, THỐNG KÊ VÀ REPORT BUILDER

## Mục tiêu

Cung cấp báo cáo định kỳ, báo cáo chuyên đề và chức năng tạo báo cáo tùy biến.

## Các màn hình phải tạo

### 1. Trang danh sách báo cáo

Chia nhóm:

* Báo cáo cơ sở kinh doanh.
* Báo cáo giấy phép.
* Báo cáo kiểm tra.
* Báo cáo vi phạm.
* Báo cáo khai báo lưu trú.
* Báo cáo tài sản.
* Báo cáo tình hình nộp báo cáo.
* Báo cáo theo địa bàn.
* Báo cáo hiệu suất cán bộ.
* Báo cáo cảnh báo.

### 2. Báo cáo tổng hợp cơ sở kinh doanh

Bộ lọc:

* Thời gian.
* Địa bàn.
* Loại hình.
* Trạng thái.
* Mức độ rủi ro.

Kết quả:

* Bảng số liệu.
* Biểu đồ.
* Tổng cộng.
* So sánh kỳ trước.
* Xuất Excel.
* Xuất PDF.
* In báo cáo.

### 3. Báo cáo giấy phép

* Còn hiệu lực.
* Sắp hết hạn 30 ngày.
* Sắp hết hạn 60 ngày.
* Đã hết hạn.
* Thiếu giấy phép.
* Chờ xác minh.

### 4. Báo cáo kiểm tra

* Kế hoạch và thực hiện.
* Đúng hạn/quá hạn.
* Kết quả đạt/không đạt.
* Theo cán bộ.
* Theo địa bàn.
* Theo loại hình.

### 5. Báo cáo vi phạm

* Theo loại vi phạm.
* Theo mức độ.
* Theo địa bàn.
* Theo loại hình.
* Theo trạng thái xử lý.
* Tổng tiền xử phạt.
* Tỷ lệ khắc phục.

### 6. Report Builder

Tạo màn hình cho phép người quản trị:

1. Chọn nguồn dữ liệu.
2. Chọn trường hiển thị.
3. Chọn điều kiện lọc.
4. Chọn nhóm dữ liệu.
5. Chọn phép tính:

   * Đếm.
   * Tổng.
* Trung bình.
   * Tối thiểu.
   * Tối đa.
6. Chọn dạng hiển thị:

   * Bảng.
   * Biểu đồ cột.
   * Biểu đồ đường.
   * Biểu đồ tròn.
7. Xem trước.
8. Lưu mẫu báo cáo.
9. Chia sẻ cho role.
10. Xuất dữ liệu.

### 7. Màn thống kê xã/phường

* Tổng cơ sở.
* Cơ sở theo ngành.
* Cơ sở theo trạng thái.
* Kiểm tra.
* Vi phạm.
* Cảnh báo.
* Xếp hạng chỉ mang tính thống kê.
* So sánh với mức trung bình toàn tỉnh.

## Điều kiện nghiệm thu Phase 09

* Các báo cáo lấy từ dữ liệu nghiệp vụ.
* Bộ lọc hoạt động.
* Có drill-down từ số liệu sang danh sách.
* Có thể lưu mẫu Report Builder.
* Xuất Excel/CSV hoạt động.
* Bản in có tiêu đề, thời gian lập và người lập.

---

# PHASE 10 – THỦ TỤC HÀNH CHÍNH, PHẢN ÁNH VÀ THÔNG BÁO

## Mục tiêu

Tạo cổng thông tin hỗ trợ cơ sở kinh doanh và người dân tra cứu thủ tục, gửi phản ánh và nhận thông báo.

## Entities cần tạo

### Procedure

* code
* name
* businessTypeId
* summary
* targetAudience
* legalBasis
* requiredDocuments
* steps
* processingTime
* fee
* receivingUnit
* contactInfo
* status
* publishedAt

### Feedback

* code
* senderName
* senderPhone
* senderEmail
* businessId
* category
* title
* content
* attachmentUrl
* wardId
* status
* assignedTo
* response
* respondedAt

### Notification

* title
* content
* notificationType
* recipientType
* recipientUserId
* recipientBusinessId
* wardId
* referenceType
* referenceId
* priority
* readAt
* createdAt

## Các màn hình phải tạo

### 1. Trang danh sách thủ tục công khai

* Tìm kiếm thủ tục.
* Lọc theo loại hình kinh doanh.
* Lọc theo đối tượng.
* Hiển thị card thủ tục.
* Thời gian giải quyết.
* Cơ quan tiếp nhận.
* Số lượng hồ sơ cần chuẩn bị.

### 2. Trang chi tiết thủ tục

* Tên thủ tục.
* Mô tả.
* Đối tượng thực hiện.
* Thành phần hồ sơ.
* Trình tự thực hiện.
* Thời gian giải quyết.
* Lệ phí.
* Cơ quan tiếp nhận.
* Căn cứ pháp lý.
* File biểu mẫu.
* Câu hỏi thường gặp.
* Nút In hướng dẫn.
* Nút tải biểu mẫu.

### 3. Màn quản trị thủ tục

* Danh sách.
* Thêm.
* Sửa.
* Xem trước.
* Đăng công khai.
* Ngừng công khai.
* Quản lý phiên bản.

### 4. Màn gửi phản ánh

* Người gửi.
* Điện thoại.
* Email.
* Nhóm phản ánh.
* Cơ sở liên quan.
* Địa bàn.
* Nội dung.
* File/ảnh.
* Mã xác nhận phản ánh.

### 5. Màn quản lý phản ánh

Các tab:

* Mới tiếp nhận.
* Đã phân công.
* Đang xử lý.
* Chờ bổ sung.
* Đã trả lời.
* Đóng.

Chi tiết phản ánh:

* Nội dung.
* Người gửi.
* Cơ sở liên quan.
* Lịch sử xử lý.
* Giao cán bộ.
* Nội dung phản hồi.
* File phản hồi.

### 6. Trung tâm thông báo

Thông báo về:

* Hồ sơ được tiếp nhận.
* Yêu cầu bổ sung.
* Hồ sơ được duyệt.
* Lịch kiểm tra.
* Hạn báo cáo.
* Giấy phép sắp hết hạn.
* Vi phạm cần khắc phục.
* Phản ánh được trả lời.

Có:

* Đã đọc/chưa đọc.
* Lọc theo loại.
* Đánh dấu tất cả đã đọc.
* Click mở đúng đối tượng liên quan.

## Điều kiện nghiệm thu Phase 10

* Thủ tục có trang công khai và trang quản trị.
* Người dân gửi phản ánh không cần truy cập trang admin.
* Cán bộ xử lý phản ánh theo workflow.
* Thông báo liên kết đúng tới hồ sơ, báo cáo, kiểm tra hoặc vi phạm.

---

# PHASE 11 – NHẬT KÝ HỆ THỐNG, BẢO MẬT, SEED DATA VÀ HOÀN THIỆN DEMO

## Mục tiêu

Hoàn thiện các chức năng quản trị, nhật ký, bảo mật giao diện, dữ liệu demo và kiểm thử luồng tổng thể.

## Entities cần tạo

### ActivityLog

* userId
* username
* action
* module
* entityType
* entityId
* description
* oldData
* newData
* ipAddress
* userAgent
* createdAt
* result

### SystemSetting

* key
* value
* group
* description
* dataType
* editable

### DataImportJob

* fileName
* importType
* totalRows
* validRows
* invalidRows
* status
* errorFileUrl
* createdBy
* createdAt

## Các màn hình phải tạo

### 1. Màn nhật ký hoạt động

Bộ lọc:

* Người dùng.
* Module.
* Hành động.
* Khoảng thời gian.
* Kết quả.
* Đối tượng dữ liệu.

Danh sách:

* Thời gian.
* Người dùng.
* Vai trò.
* Hành động.
* Module.
* Đối tượng.
* Mô tả.
* IP.
* Kết quả.

Màn chi tiết log:

* Dữ liệu cũ.
* Dữ liệu mới.
* User agent.
* Thông tin phiên đăng nhập.

Không cho phép người dùng sửa hoặc xóa nhật ký.

### 2. Màn cấu hình hệ thống

Các nhóm:

* Thông tin hệ thống.
* Logo.
* Tên đơn vị.
* Thời gian cảnh báo hết hạn giấy phép.
* Chu kỳ báo cáo.
* Chu kỳ kiểm tra.
* Giới hạn upload.
* Định dạng file.
* Cấu hình thông báo.
* Cấu hình bản đồ.
* Cấu hình phiên đăng nhập.

### 3. Màn quản lý import dữ liệu

Luồng:

1. Chọn loại dữ liệu.
2. Tải file mẫu.
3. Upload Excel.
4. Đọc và kiểm tra dữ liệu.
5. Hiển thị dòng hợp lệ/lỗi.
6. Xác nhận import.
7. Hiển thị kết quả.
8. Tải file lỗi.

Áp dụng cho:

* Cơ sở kinh doanh.
* Nhân sự.
* Xã/phường.
* Danh mục.
* Giấy phép.

### 4. Seed Data Manager

Tạo nút sinh dữ liệu demo có kiểm soát.

Dữ liệu mẫu gồm:

* 20–30 xã/phường.
* 23 loại hình kinh doanh.
* 100–150 cơ sở.
* Nhiều trạng thái hoạt động.
* Các mức độ rủi ro.
* Giấy phép còn hạn, sắp hết hạn và hết hạn.
* Kế hoạch kiểm tra.
* Kết quả kiểm tra.
* Vi phạm.
* Khai báo.
* Báo cáo định kỳ.
* Cảnh báo.
* Người dùng theo từng role.

Nút seed phải:

* Hiển thị cảnh báo xác nhận.
* Không tạo trùng dữ liệu.
* Có tiến trình.
* Có thông báo kết quả.

### 5. Màn kiểm tra module

Tạo trang quản trị nội bộ hiển thị:

* Danh sách module.
* Số màn hình.
* Route.
* Quyền tương ứng.
* Tình trạng hoạt động.
* Entity sử dụng.
* Kiểm tra link hỏng.
* Kiểm tra menu không có quyền.
* Kiểm tra màn chưa có empty/loading/error state.

### 6. Hoàn thiện bảo mật phía giao diện

* Ẩn menu khi không có quyền.
* Chặn truy cập trực tiếp bằng URL.
* Không hiển thị CCCD đầy đủ ở màn danh sách.
* Mask dữ liệu nhạy cảm.
* Xác nhận trước thao tác nguy hiểm.
* Tự động đăng xuất hoặc yêu cầu đăng nhập lại khi phiên hết hạn.
* Không lưu thông tin nhạy cảm trong local storage nếu không cần thiết.

### 7. Kiểm thử các luồng end-to-end

#### Luồng 1 – Đăng ký và phê duyệt cơ sở

1. Chủ cơ sở tạo hồ sơ.
2. Lưu nháp.
3. Gửi hồ sơ.
4. Cán bộ xã tiếp nhận.
5. Yêu cầu bổ sung.
6. Chủ cơ sở bổ sung.
7. Cán bộ xác minh.
8. PC06 phê duyệt.
9. Cơ sở xuất hiện trên bản đồ.

#### Luồng 2 – Kiểm tra và vi phạm

1. Cán bộ tạo kế hoạch.
2. Phân công đoàn.
3. Thực hiện checklist.
4. Phát hiện tiêu chí không đạt.
5. Tạo vi phạm.
6. Cơ sở nhận yêu cầu khắc phục.
7. Cơ sở gửi minh chứng.
8. Cán bộ xác minh.
9. Đóng vi phạm.

#### Luồng 3 – Báo cáo định kỳ

1. Hệ thống sinh kỳ báo cáo.
2. Cơ sở nhận thông báo.
3. Cơ sở nhập dữ liệu.
4. Lưu nháp.
5. Gửi báo cáo.
6. Cán bộ tiếp nhận.
7. Chấp nhận hoặc yêu cầu bổ sung.
8. Dashboard cập nhật số liệu.

#### Luồng 4 – Cảnh báo giấy phép

1. Giấy phép còn dưới ngưỡng cảnh báo.
2. Hệ thống tạo cảnh báo.
3. Gửi thông báo cho cơ sở và cán bộ.
4. Cơ sở upload giấy phép mới.
5. Cán bộ xác minh.
6. Cảnh báo được giải quyết.

## Điều kiện nghiệm thu Phase 11

* Tất cả menu đều mở được.
* Không có nút giả không thực hiện hành động.
* Không có trang chỉ chứa dữ liệu hard-code.
* Không có lỗi console nghiêm trọng.
* Phân quyền đúng dữ liệu và chức năng.
* Dữ liệu demo liên kết hợp lý.
* Dashboard, bản đồ và báo cáo dùng chung một nguồn dữ liệu.
* Có loading, empty và error state trên các trang chính.
* Các luồng end-to-end hoạt động hoàn chỉnh.

---

# PROMPT KIỂM TRA CUỐI CÙNG SAU KHI HOÀN THÀNH 11 PHASE
Hãy audit toàn bộ project CSKD–ANTT hiện tại.

Không xây dựng lại từ đầu.

Thực hiện các việc sau:

1. Liệt kê tất cả page, route, entity và role hiện có.
2. Kiểm tra sidebar có page nào bị thiếu hoặc trùng.
3. Kiểm tra mọi nút thao tác có hoạt động hay không.
4. Kiểm tra các form có validation hay không.
5. Kiểm tra các màn danh sách có tìm kiếm, lọc, phân trang và trạng thái rỗng hay không.
6. Kiểm tra quyền truy cập theo vai trò.
7. Kiểm tra phạm vi dữ liệu tỉnh, xã/phường và cơ sở.
8. Kiểm tra liên kết:

   * Cơ sở → giấy phép.
   * Cơ sở → nhân sự.
   * Cơ sở → khai báo.
   * Cơ sở → kiểm tra.
   * Kiểm tra → vi phạm.
   * Vi phạm → khắc phục.
   * Cơ sở → cảnh báo.
9. Kiểm tra dashboard, báo cáo và bản đồ có lấy số liệu thật hay không.
10. Sửa các lỗi tìm được nhưng không làm thay đổi thiết kế tổng thể.
11. Chuẩn hóa tất cả label sang tiếng Việt.
12. Loại bỏ dữ liệu hoặc text demo không liên quan.
13. Đảm bảo toàn bộ project có giao diện thống nhất.
14. Cuối cùng tạo một trang “Hướng dẫn demo hệ thống” mô tả tài khoản mẫu và các luồng trình diễn chính.
