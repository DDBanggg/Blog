# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 36)

Nguồn: https://www.threads.com/@3dongcode/post/DW9BU7NlNlI

Giải thích các lưu ý và chiến lược để tối ưu hiệu năng truy vấn trong một columnar data store (kho dữ liệu dạng cột).

Chi tiết ⬇

1. Columnar Data Store là gì và tại sao nó quan trọng?

Khác với row-based storage (lưu từng hàng liền nhau), columnar store lưu từng cột riêng biệt. Điều này cực kỳ phù hợp cho analytical workload (OLAP) vì thường chỉ cần đọc vài cột trong bảng hàng triệu dòng.

Ví dụ điển hình: Amazon Redshift, Google BigQuery, Apache Parquet, Snowflake, ClickHouse.

2. Các chiến lược tối ưu chính

A. Column Pruning — Chỉ đọc cột cần thiết

Đây là nguyên tắc quan trọng nhất. Vì dữ liệu lưu theo cột, engine chỉ cần đọc đúng những cột xuất hiện trong câu query.

Tránh SELECT * — đây là anti-pattern nghiêm trọng trong columnar store vì buộc hệ thống đọc toàn bộ cột không cần thiết.

Luôn chỉ định rõ tên cột cần dùng.

B. Compression — Nén dữ liệu hiệu quả

Columnar store nén rất tốt vì các giá trị trong cùng một cột thường có kiểu dữ liệu đồng nhất và ít phân tán.

Run-Length Encoding (RLE): Hiệu quả cho cột có nhiều giá trị lặp lại (ví dụ: cột status = 'active').

Dictionary Encoding: Thay thế chuỗi bằng số nguyên (ví dụ: tên quốc gia → ID).

Delta Encoding: Tốt cho cột timestamp hoặc số tăng dần.

Chọn đúng thuật toán nén cho từng cột giúp giảm I/O đáng kể, từ đó tăng tốc truy vấn.

C. Partition Pruning — Loại bỏ partition không cần thiết

Phân vùng dữ liệu theo các tiêu chí phù hợp (thường là thời gian hoặc region) giúp engine bỏ qua toàn bộ các file/block không liên quan.

Partition theo ngày/tháng/năm là phổ biến nhất.

Khi query có điều kiện WHERE date = '2024-01', engine chỉ đọc đúng partition đó.

Lưu ý: Over-partitioning (chia quá nhỏ) gây ra vấn đề "small file problem", làm chậm metadata lookup.

D. Sort Keys & Clustering — Sắp xếp dữ liệu thông minh

Sắp xếp dữ liệu vật lý theo cột thường dùng trong filter giúp tận dụng min/max statistics để bỏ qua row groups không liên quan (kỹ thuật này gọi là Zone Map / Data Skipping).

Trong Redshift: dùng Sort Key.

Trong Snowflake: dùng Cluster Key.

Trong Parquet: dữ liệu được chia thành Row Groups, mỗi group lưu min/max, query engine dùng thông tin này để skip.

Nên chọn cột có high cardinality và thường xuyên xuất hiện trong WHERE.

E. Predicate Pushdown — Đẩy filter xuống sớm nhất có thể

Thay vì đọc toàn bộ dữ liệu rồi mới filter, engine nên lọc ngay tại tầng storage trước khi đưa lên tầng xử lý.

Các engine như Spark, Presto, DuckDB đều hỗ trợ pushdown với file Parquet.

Viết query với điều kiện rõ ràng, tránh wrap cột trong function (ví dụ: WHERE YEAR(date) = 2024 sẽ kém hơn WHERE date BETWEEN '2024-01-01' AND '2024-12-31' vì cái sau pushdown được).

F. Join Optimization

Broadcast Join: Khi một bảng nhỏ, broadcast nó sang tất cả các node để tránh shuffle dữ liệu lớn.

Colocation: Trong distributed system, đặt các bảng thường join với nhau trên cùng node/partition.

Tránh join trên cột không có index hoặc không được sort.

G. Materialized Views & Pre-aggregation

Với các aggregation query chạy lặp đi lặp lại (dashboard, report), nên dùng materialized view để tính sẵn kết quả.

BigQuery, Snowflake, Redshift đều hỗ trợ materialized views.

Phù hợp cho các metric như "doanh thu theo tháng", "số user theo region".

H. File Format & Row Group Size

Chọn format phù hợp: Parquet hoặc ORC là chuẩn vàng cho columnar.

Row Group size lý tưởng thường là 128MB–512MB — quá nhỏ thì nhiều metadata overhead, quá lớn thì kém linh hoạt khi filter.

Tránh để lại nhiều small files (dưới 10MB) trong data lake.

[Materialized Views] ← Tầng cao nhất, tốn tài nguyên nhất

[Sort Key / Clustering]

[Partition Pruning]

[Predicate Pushdown]

[Compression]

[Column Pruning] ← Nền tảng, luôn áp dụng đầu tiên
