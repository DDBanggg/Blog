# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 8)

Nguồn: https://www.threads.com/@3dongcode/post/DVQ6ia2k7o1

Data engineering - Những sơ đồ thiết kế nào thường được sử dụng khi thực hiện mô hình hóa dữ liệu?

Chi tiết ⬇

1. Entity-Relationship Diagram (ERD) - Sơ đồ Thực thể Quan hệ Đây là sơ đồ cơ bản nhất, được sử dụng để mô tả cấu trúc dữ liệu ở mức khái niệm. ERD giúp visualize các thực thể (entities), thuộc tính (attributes) và mối quan hệ (relationships) giữa chúng. Có ba mức độ chi tiết: Conceptual ERD: Mức cao nhất, chỉ mô tả các thực thể chính và quan hệ. Logical ERD: Chi tiết hơn, bao gồm các thuộc tính và khóa. Physical ERD: Mức thấp nhất, gần với cài đặt thực tế trong database.

2. Star Schema - Sơ đồ Hình sao Đây là mô hình phổ biến nhất trong Data Warehouse. Cấu trúc gồm một bảng fact ở trung tâm (chứa các metrics và measures) được kết nối trực tiếp với các bảng dimension xung quanh. Ưu điểm là đơn giản, dễ hiểu, truy vấn nhanh vì ít join. Thường dùng cho các hệ thống OLAP và BI reporting.

3. Snowflake Schema - Sơ đồ Bông tuyết Là biến thể chuẩn hóa của Star Schema, trong đó các bảng dimension được normalize thành nhiều bảng con có quan hệ với nhau. Giống như cấu trúc tinh thể tuyết với nhiều nhánh. Tiết kiệm không gian lưu trữ nhưng phức tạp hơn và cần nhiều join hơn khi truy vấn.

4. Galaxy Schema (Fact Constellation) - Sơ đồ Thiên hà Mở rộng của Star Schema với nhiều bảng fact cùng chia sẻ các bảng dimension. Phù hợp với các doanh nghiệp lớn có nhiều quy trình nghiệp vụ khác nhau cần phân tích. Ví dụ: một dimension "Time" có thể được sử dụng bởi cả fact table "Sales" và "Inventory".

5. Data Vault Model - Mô hình Data Vault Là phương pháp tiếp cận hiện đại cho enterprise data warehouse, gồm ba loại bảng: Hubs: Lưu trữ business keys. Links: Mô tả mối quan hệ giữa các hubs. Satellites: Chứa dữ liệu mô tả và thay đổi theo thời gian. Ưu điểm là linh hoạt, dễ mở rộng, audit tốt và hỗ trợ tích hợp từ nhiều nguồn.

6. Dimensional Model - Mô hình Chiều Theo phương pháp của Kimball, tập trung vào việc tổ chức dữ liệu theo các dimensions và facts để tối ưu cho việc phân tích. Bao gồm các kỹ thuật như Slowly Changing Dimensions (SCD) Type 1, 2, 3 để xử lý dữ liệu thay đổi theo thời gian.

7. Third Normal Form (3NF) - Chuẩn hóa dạng 3 Thường được sử dụng trong OLTP systems (operational databases). Dữ liệu được chuẩn hóa để giảm thiểu redundancy và đảm bảo tính toàn vẹn. Mỗi thuộc tính không khóa phụ thuộc hoàn toàn vào khóa chính.

8. NoSQL Data Models Với sự phát triển của Big Data, các mô hình NoSQL cũng quan trọng: Document model: MongoDB, dữ liệu dạng JSON. Key-Value: Redis, DynamoDB. Column-family: Cassandra, HBase. Graph model: Neo4j, cho dữ liệu có nhiều mối quan hệ phức tạp.

Lựa chọn sơ đồ phù hợp Việc chọn sơ đồ nào phụ thuộc vào: Mục đích sử dụng: OLTP hay OLAP. Khối lượng dữ liệu và tốc độ truy vấn yêu cầu. Độ phức tạp của nghiệp vụ. Khả năng mở rộng trong tương lai. Công nghệ database đang sử dụng.

Thông thường trong Data Engineering thực tế, bạn sẽ thấy sự kết hợp của nhiều mô hình: 3NF cho staging area, Star Schema cho data marts, và có thể Data Vault cho enterprise data warehouse layer.
