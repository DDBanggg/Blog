# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 37)

Nguồn: https://www.threads.com/@3dongcode/post/DW_lFVClAF9

Bạn có kinh nghiệm làm việc với Data Modeling không?

Chi tiết ⬇

1. Các loại Data Model đã làm việc

Conceptual Model – Xác định các entity và quan hệ ở mức nghiệp vụ, thường dùng trong giai đoạn thu thập yêu cầu.

Logical Model – Định nghĩa cụ thể các bảng, cột, kiểu dữ liệu, khóa chính/ngoại – độc lập với hệ thống lưu trữ.

Physical Model – Triển khai thực tế trên database cụ thể (PostgreSQL, BigQuery, Redshift...), tối ưu về index, partition, clustering.

2. Các kỹ thuật modeling phổ biến đã áp dụng

Star Schema / Snowflake Schema – Dùng trong Data Warehouse, tách biệt Fact Table và Dimension Table, phục vụ truy vấn OLAP nhanh.

Data Vault – Phù hợp với hệ thống lớn, cần audit trail và khả năng mở rộng cao (Hub, Link, Satellite).

3NF (Third Normal Form) – Áp dụng trong operational database để tránh redundancy.

One Big Table (OBT) – Denormalized, thường dùng trong modern data stack (dbt, Lakehouse) để tối ưu query performance.

3. Công cụ đã sử dụng

dbt – Modeling trực tiếp trên data warehouse bằng SQL, quản lý lineage và documentation.

ERD tools – dbdiagram.io, Lucidchart, draw.io để vẽ sơ đồ quan hệ.

Data Catalog – Datahub, OpenMetadata để document và quản lý schema.

4. Thực tế áp dụng

Trong các dự án thực tế, tôi đã thiết kế model cho:

Hệ thống báo cáo doanh thu – Star schema với fact bán hàng, dim thời gian, dim sản phẩm, dim khách hàng.

Pipeline event tracking – Xử lý clickstream data, modeling theo dạng wide table để phân tích hành vi người dùng.

Data Lakehouse – Kết hợp Bronze/Silver/Gold layer (Medallion Architecture), mỗi layer có model phù hợp với mức độ transformation.

Data Modeling không chỉ là vẽ sơ đồ — mà là đưa ra quyết định kiến trúc ảnh hưởng trực tiếp đến hiệu năng truy vấn, chi phí lưu trữ, và khả năng maintain về sau. Một model tốt giúp downstream analyst/BI viết query đơn giản hơn và kết quả chính xác hơn.
