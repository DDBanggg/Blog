---
title: 'Sự khác biệt giữa dữ liệu có cấu trúc (structured data) và dữ liệu không có cấu trúc (unstructured data) là gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Sự khác biệt giữa dữ liệu có cấu trúc (structured data) và dữ liệu không có cấu trúc (unstructured data) là gì?'
questionNumber: 9
category: 'data-fundamentals'
tags:
  - data-fundamentals
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DVWE2_CEyWu'
draft: false
---

## Câu trả lời

1. Định nghĩa cơ bảnDữ liệu có cấu trúc là dữ liệu được tổ chức theo một định dạng rõ ràng, có schema xác định trước. Nó tuân theo một mô hình dữ liệu cụ thể với các trường (fields) và kiểu dữ liệu (data types) được định nghĩa sẵn. Bạn có thể hình dung như một bảng Excel với các cột và hàng rõ ràng. Dữ liệu không có cấu trúc là dữ liệu không tuân theo một mô hình hoặc schema cố định nào. Nó tồn tại ở dạng tự do, không có cấu trúc bảng biểu rõ ràng, và thường khó phân tích hơn.

2. Đặc điểm và ví dụ cụ thể Dữ liệu có cấu trúc: Tổ chức: Được lưu trữ trong các bảng với hàng và cột. Schema: Có schema cố định, được định nghĩa trước. Truy vấn: Dễ dàng truy vấn bằng SQL. Ví dụ thực tế: Dữ liệu trong cơ sở dữ liệu quan hệ (MySQL, PostgreSQL, Oracle). File CSV, Excel với các cột rõ ràng. Dữ liệu giao dịch ngân hàng (số tài khoản, số tiền, ngày giao dịch). Thông tin khách hàng (tên, email, số điện thoại, địa chỉ).

Dữ liệu không có cấu trúc: Tổ chức: Không có cấu trúc rõ ràng, dạng tự do. Schema: Không có schema định trước. Truy vấn: Khó truy vấn, cần công cụ đặc biệt. Ví dụ thực tế: File văn bản tự do, tài liệu Word, PDF. Email, tin nhắn. Hình ảnh, video, audio. Bài đăng trên mạng xã hội. Log files từ ứng dụng.

3. So sánh chi tiết các khía cạnh Về lưu trữ: Có cấu trúc: Thường lưu trong các hệ quản trị cơ sở dữ liệu quan hệ (RDBMS), chiếm ít dung lượng hơn vì được tối ưu hóa. Không có cấu trúc: Lưu trong data lakes, object storage (như Amazon S3), hệ thống file phân tán, chiếm nhiều dung lượng hơn.

Về khả năng phân tích: Có cấu trúc: Dễ phân tích ngay lập tức bằng các công cụ BI truyền thống, có thể thực hiện các phép tính, tổng hợp, so sánh một cách trực tiếp. Không có cấu trúc: Cần xử lý trước (pre-processing) bằng các kỹ thuật như NLP, computer vision, hoặc machine learning để trích xuất insight.

Về tốc độ truy xuất: Có cấu trúc: Truy xuất rất nhanh với các index và query optimization. Không có cấu trúc: Chậm hơn, phải quét toàn bộ dữ liệu hoặc sử dụng các kỹ thuật indexing đặc biệt. Về tính linh hoạt: Có cấu trúc: Ít linh hoạt, khó thay đổi schema sau khi đã thiết kế. Không có cấu trúc: Rất linh hoạt, có thể lưu bất kỳ loại dữ liệu nào mà không cần định nghĩa trước.

4. Dữ liệu bán cấu trúc (Semi-structured) Còn có một loại nằm giữa hai loại trên là dữ liệu bán cấu trúc, có một số đặc điểm của cả hai: Ví dụ: JSON, XML, YAML, Parquet, Avro. Có cấu trúc nhất định nhưng không cứng nhắc như bảng. Linh hoạt hơn structured nhưng có thể truy vấn tốt hơn unstructured. Rất phổ biến trong các hệ thống hiện đại và API.

5. Tác động đến Data Engineering Với dữ liệu có cấu trúc: Data engineer tập trung vào: thiết kế schema, tối ưu query, đảm bảo data integrity. Pipeline đơn giản hơn: Extract → Transform → Load (ETL). Công cụ: SQL, Apache Spark SQL, dbt. Với dữ liệu không có cấu trúc: Data engineer phải: xây dựng pipeline phức tạp để xử lý, cần nhiều tài nguyên computing hơn. Thường sử dụng: ELT (Extract → Load → Transform) thay vì ETL. Công cụ: Apache Spark, Apache Flink, các dịch vụ ML/AI để xử lý.

6. Xu hướng hiện tại Ngày nay, khoảng 80-90% dữ liệu được tạo ra là dữ liệu không có cấu trúc, tạo ra thách thức lớn cho data engineers. Các tổ chức đang chuyển sang kiến trúc Data Lakehouse để kết hợp ưu điểm của cả data warehouse (cho structured) và data lake (cho unstructured), cho phép xử lý linh hoạt cả hai loại dữ liệu trong cùng một hệ thống.
