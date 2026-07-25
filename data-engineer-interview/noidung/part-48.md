# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 46)

Nguồn: https://www.threads.com/@3dongcode/post/DXejPdEFKkM

Data Skew trong xử lý dữ liệu phân tán là gì, và làm thế nào để giảm thiểu nó?

Chi tiết ⬇

Data Skew là gì?

Data Skew (lệch dữ liệu) xảy ra khi dữ liệu phân bổ không đồng đều giữa các node/partition trong một hệ thống xử lý phân tán (như Spark, Hadoop, Flink...).Hãy tưởng tượng bạn có 10 công nhân cùng xử lý một đống hàng. Nếu 9 người mỗi người chỉ có 10 kiện, nhưng 1 người phải xử lý 10.000 kiện — đó chính là skew. 9 người kia ngồi chơi trong khi 1 người làm không xuể, toàn bộ hệ thống bị tắc nghẽn tại điểm đó.

Tại sao Data Skew nguy hiểm?

Trong môi trường phân tán, toàn bộ job phải chờ task chậm nhất hoàn thành (gọi là straggler). Hệ quả:

Thời gian xử lý kéo dài bất thường dù hầu hết các task đã xong

Out Of Memory (OOM) trên node bị quá tải

Lãng phí tài nguyên — các node nhàn rỗi không được tận dụng

SLA bị vi phạm trong pipeline production

Các kỹ thuật giảm thiểu Data Skew

1. Salting

Đây là kỹ thuật phổ biến nhất. Ý tưởng: thêm một giá trị ngẫu nhiên vào key để phân tán các bản ghi có cùng key sang nhiều partition khác nhau, sau đó gộp lại kết quả.

Ví dụ: thay vì GROUP BY country = "VN", bạn tạo key mới là "VN_1", "VN_2", "VN_3"... để chia nhỏ gánh nặng, xử lý song song, rồi cộng tổng lại ở bước cuối.

Salting hoạt động tốt với aggregation (SUM, COUNT), nhưng phức tạp hơn với JOIN.

2. Broadcast JOIN

Khi JOIN hai bảng mà một bảng nhỏ, thay vì shuffle cả hai, hãy copy bảng nhỏ sang tất cả các node. Mỗi node tự JOIN cục bộ mà không cần trao đổi dữ liệu — loại bỏ hoàn toàn nguy cơ skew từ JOIN.

Trong Spark: broadcast(df_small) hoặc cấu hình spark.sql.autoBroadcastJoinThreshold.

3. Tách xử lý key lệch (Skewed Key Isolation)

Xử lý riêng các key bị skew nặng:

Tách các bản ghi có key "nóng" ra một nhánh pipeline riêng, xử lý độc lập

Phần còn lại xử lý bình thường

Cuối cùng UNION kết quả lại

Cách này "phẫu thuật" chính xác, không ảnh hưởng đến phần dữ liệu bình thường.

4. Tăng số lượng Partition

Tăng spark.sql.shuffle.partitions (mặc định 200) lên cao hơn giúp chia nhỏ các partition lớn hơn, giảm thiểu tình trạng một partition quá tải. Tuy nhiên đây là giải pháp "thô" — nếu key thực sự lệch nặng, tăng partition không giải quyết được gốc rễ.

5. Tối ưu hóa lúc lưu trữ dữ liệu

Giải quyết skew từ gốc khi thiết kế data:

Partitioning thông minh theo các cột có cardinality cao (nhiều giá trị phân biệt), tránh partition theo cột mà một giá trị chiếm đa số

Bucketing: chia dữ liệu vào các bucket có kích thước đồng đều khi ghi vào Hive/Delta Lake

Z-ordering / Clustering: sắp xếp dữ liệu vật lý để các query JOIN/filter hiệu quả hơn

6. Adaptive Query Execution (AQE) trong Spark 3+

Spark 3.0 giới thiệu AQE — tự động phát hiện và xử lý skew tại runtime:

Tự động chia nhỏ partition lớn thành nhiều phần nhỏ hơn

Không cần can thiệp thủ công

Bật bằng: spark.sql.adaptive.enabled = true và spark.sql.adaptive.skewJoin.enabled = true

Đây là bước tiến lớn — AQE gần như là "tự lái" cho skew handling trong Spark hiện đại.
