# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 19)

Nguồn: https://www.threads.com/@3dongcode/post/DV8rhSllCfZ

Data Redundancy (Dư thừa dữ liệu) là gì và cách khắc phục?

Chi tiết ⬇

Định nghĩa Data Redundancy

Data Redundancy (Dư thừa dữ liệu) là tình trạng cùng một thông tin được lưu trữ nhiều lần ở nhiều nơi khác nhau trong cơ sở dữ liệu hoặc hệ thống lưu trữ. Đây là một vấn đề phổ biến trong data engineering khi dữ liệu bị sao chép không cần thiết.

Tại sao Data Redundancy là vấn đề?

1. Lãng phí không gian lưu trữ

Cùng một dữ liệu được lưu nhiều lần chiếm dụng dung lượng ổ cứng không cần thiết

Tăng chi phí lưu trữ, đặc biệt với dữ liệu lớn

2. Khó khăn trong việc cập nhật dữ liệu (Data Inconsistency)

Khi cần thay đổi thông tin, phải cập nhật ở nhiều nơi

Dễ xảy ra tình trạng dữ liệu không đồng bộ - một số bản sao được cập nhật, một số không

Dẫn đến dữ liệu mâu thuẫn, không nhất quán

3. Giảm hiệu suất hệ thống

Thao tác INSERT, UPDATE, DELETE chậm hơn

Cần nhiều tài nguyên hơn để xử lý

4. Khó bảo trì

Tăng độ phức tạp của hệ thống

Khó phát hiện và sửa lỗi

Cách khắc phục Data Redundancy

1. Database Normalization (Chuẩn hóa cơ sở dữ liệu)

Đây là phương pháp quan trọng nhất, áp dụng các quy tắc chuẩn hóa (Normal Forms)

2. Sử dụng Foreign Keys và Relationships

Thiết lập mối quan hệ giữa các bảng thông qua khóa ngoại

Đảm bảo tính toàn vẹn tham chiếu (referential integrity)

Một thông tin master chỉ lưu ở một bảng, các bảng khác tham chiếu qua ID

3. Data Deduplication

Sử dụng các công cụ hoặc script để phát hiện và loại bỏ dữ liệu trùng lặp

Áp dụng các thuật toán so khớp để tìm bản ghi duplicate

Thiết lập unique constraints, primary keys để ngăn chặn duplicate từ đầu

4. Master Data Management (MDM)

Tạo một "single source of truth" - nguồn dữ liệu chính thống nhất

Tất cả hệ thống khác tham chiếu từ nguồn master này

Đặc biệt quan trọng trong môi trường có nhiều hệ thống

5. Data Warehouse Design

Sử dụng mô hình Star Schema hoặc Snowflake Schema

Dimension tables lưu thông tin master

Fact tables chỉ lưu foreign keys và metrics

6. Áp dụng Data Governance

Thiết lập quy trình và chính sách quản lý dữ liệu

Định nghĩa rõ data ownership - ai chịu trách nhiệm về loại dữ liệu nào

Review và audit định kỳ

7. ETL/ELT Process Design

Trong quá trình ETL, thêm bước deduplication

Sử dụng CDC (Change Data Capture) để đồng bộ thay vì copy toàn bộ

Thiết kế incremental load thay vì full load

Lưu ý quan trọng

Redundancy có chủ đích vs Redundancy không mong muốn:

Đôi khi chúng ta cố ý duplicate dữ liệu cho mục đích backup, disaster recovery, hoặc tối ưu performance (denormalization)

Redundancy cần khắc phục là redundancy không kiểm soát, không có mục đích rõ ràng

Trade-off:

Normalization quá mức có thể làm giảm performance do phải JOIN nhiều bảng

Cần cân bằng giữa normalization và performance dựa trên use case cụ thể
