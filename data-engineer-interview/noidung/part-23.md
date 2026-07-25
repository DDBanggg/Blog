# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 22)

Nguồn: https://www.threads.com/@3dongcode/post/DWEYbXyFIDH

Giải thích sự khác biệt giữa kho dữ liệu (data warehouse) và hồ dữ liệu (data lake).

Chi tiết ⬇

1. Data Warehouse

Định nghĩa: Data Warehouse là một hệ thống lưu trữ tập trung, được thiết kế để lưu trữ dữ liệu có cấu trúc, đã được xử lý và tối ưu hóa cho việc phân tích và báo cáo.

Đặc điểm chính:

Dữ liệu có cấu trúc: Dữ liệu được tổ chức theo schema định trước (schema-on-write), thường ở dạng bảng quan hệ với các cột và hàng rõ ràngDữ liệu đã được xử lý: Trước khi lưu vào warehouse, dữ liệu đã trải qua quá trình ETL (Extract, Transform, Load) - được làm sạch, chuẩn hóa và biến đổi

Mục đích: Phục vụ cho phân tích kinh doanh (Business Intelligence), báo cáo, và ra quyết định chiến lược

Người dùng: Chủ yếu là business analysts, data analysts, những người cần câu trả lời nhanh cho các câu hỏi kinh doanh cụ thể

Hiệu suất truy vấn: Rất nhanh vì dữ liệu đã được tối ưu hóa, đánh index, và tổ chức theo các mô hình như star schema hay snowflake schema

Chi phí: Thường đắt hơn vì cần phần cứng mạnh và giấy phép phần mềm đắt tiền

2. Data Lake (Hồ dữ liệu)

Định nghĩa: Data Lake là một kho lưu trữ tập trung cho phép bạn lưu trữ tất cả các loại dữ liệu ở dạng thô, bất kể cấu trúc hay kích thước.

Đặc điểm chính:

Đa dạng loại dữ liệu: Chứa dữ liệu có cấu trúc, bán cấu trúc (JSON, XML), và không có cấu trúc (hình ảnh, video, văn bản tự do, log files)

Dữ liệu thô: Lưu trữ dữ liệu ở dạng nguyên gốc (schema-on-read) - chỉ định nghĩa cấu trúc khi cần sử dụng

Mục đích: Phục vụ cho machine learning, data science, advanced analytics, và lưu trữ dữ liệu cho tương lai

Người dùng: Data scientists, data engineers, machine learning engineers - những người cần truy cập dữ liệu thô để khám phá và xây dựng mô hình

Linh hoạt: Rất linh hoạt vì không bắt buộc phải định nghĩa schema trước

Chi phí: Thường rẻ hơn vì sử dụng object storage với giá thành thấp

Ví dụ công nghệ: Amazon S3 + AWS Glue, Azure Data Lake Storage, Google Cloud Storage, Hadoop HDFS

Khi nào dùng cái nào?

Dùng Data Warehouse khi:

Bạn cần báo cáo kinh doanh nhanh và chính xác

Dữ liệu chủ yếu có cấu trúc từ các hệ thống transactional

Cần hiệu suất truy vấn cao cho số lượng lớn người dùng

Các câu hỏi phân tích đã được xác định rõ ràng

Dùng Data Lake khi:

Cần lưu trữ nhiều loại dữ liệu khác nhau (logs, sensors, social media, images)

Chưa biết chính xác sẽ phân tích gì với dữ liệu

Làm việc với machine learning và cần dữ liệu thô

Muốn giảm chi phí lưu trữ cho khối lượng dữ liệu lớn

Cần tính linh hoạt cao trong việc khám phá dữ liệu

5. Xu hướng hiện đại: Data Lakehouse

Ngày nay, nhiều tổ chức áp dụng kiến trúc Data Lakehouse - kết hợp ưu điểm của cả hai:

Lưu trữ linh hoạt và chi phí thấp như Data Lake

Hiệu suất truy vấn và quản lý như Data Warehouse

Ví dụ: Databricks Delta Lake, Apache Iceberg, Apache Hudi

Tóm lại: Data Warehouse giống như một siêu thị được sắp xếp ngăn nắp - bạn biết chính xác thứ gì ở đâu và lấy nhanh. Data Lake giống như một kho chứa khổng lồ - chứa đủ mọi thứ nhưng cần thời gian để tìm và xử lý cần.
