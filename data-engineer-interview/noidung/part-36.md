# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 35)

Nguồn: https://www.threads.com/@3dongcode/post/DW6fBRSlNbw

Triển khai Data Retention Policies trong Data Warehouse

Chi tiết ⬇

Data Retention Policy là gì?

Data Retention Policy (Chính sách lưu giữ dữ liệu) là tập hợp các quy tắc xác định dữ liệu nào được giữ lại, trong bao lâu, và phải làm gì với dữ liệu sau khi hết hạn — xóa, archive, hay anonymize.

Đây không chỉ là vấn đề kỹ thuật mà còn liên quan chặt chẽ đến pháp lý (GDPR, HIPAA, CCPA), chi phí lưu trữ, và hiệu suất hệ thống.

Tại sao cần Data Retention Policy?

Có 3 động lực chính buộc bạn phải có policy này:

Pháp lý & Tuân thủ: GDPR yêu cầu xóa dữ liệu cá nhân khi không còn mục đích xử lý. HIPAA yêu cầu giữ hồ sơ y tế tối thiểu 6 năm. Nếu không có policy rõ ràng, doanh nghiệp có thể bị phạt nặng.

Chi phí lưu trữ: Data warehouse như Snowflake hay BigQuery tính phí theo dung lượng. Giữ dữ liệu vô thời hạn đồng nghĩa với chi phí tăng liên tục mà phần lớn dữ liệu cũ không còn được truy vấn.

Hiệu suất: Bảng chứa hàng chục tỷ rows từ nhiều năm trước sẽ làm chậm query, tăng thời gian scan, và khó maintain.

Bước 1 — Phân loại dữ liệu trước khi đặt policy

Không phải mọi dữ liệu đều có cùng vòng đời. Bạn cần phân loại theo mức độ nhạy cảm và tầm quan trọng:

Dữ liệu giao dịch (orders, payments): thường giữ 5–7 năm vì lý do tài chính

Dữ liệu hành vi người dùng (clickstream, logs): thường chỉ cần 90–180 ngày

Dữ liệu cá nhân (PII): cần xóa hoặc anonymize theo yêu cầu pháp lý

Dữ liệu tổng hợp (aggregates): có thể giữ vĩnh viễn vì không chứa thông tin nhạy cảm

Bước 2 — Thiết kế kiến trúc hỗ trợ Retention

Một kiến trúc tốt sẽ giúp việc áp dụng policy dễ dàng hơn nhiều. Có một số pattern phổ biến:

Hot / Warm / Cold Storage Tiering: Dữ liệu mới (hot) nằm trong warehouse để query nhanh. Dữ liệu cũ hơn (warm) được move sang object storage như S3 với format Parquet. Dữ liệu rất cũ (cold) được archive sang Glacier hoặc tương đương với chi phí rất thấp. Khi dữ liệu đến ngưỡng retention, nó được xóa hoàn toàn.

Partition by Date: Đây là kỹ thuật nền tảng. Nếu bảng được partition theo ngày hoặc tháng, việc xóa dữ liệu cũ chỉ là drop một partition thay vì chạy DELETE trên toàn bộ bảng — nhanh hơn hàng trăm lần và không ảnh hưởng hiệu suất.

Separation of Raw và Aggregated Data: Raw data có thể expire sau 90 ngày, nhưng aggregated data (ví dụ: doanh thu theo tháng) có thể giữ mãi. Tách biệt hai lớp này giúp bạn xóa raw mà không mất thông tin phân tích.

Bước 3 — Xử lý PII — Anonymization thay vì chỉ Delete

Với dữ liệu cá nhân, đôi khi bạn không thể xóa hoàn toàn record vì nó liên kết với các bảng khác (ví dụ: order vẫn cần tồn tại nhưng thông tin khách hàng cần được xóa). Lúc này bạn dùng các kỹ thuật:

Pseudonymization: thay thế tên, email bằng một ID ngẫu nhiên không thể truy ngược

Data Masking: che một phần thông tin (ví dụ: chỉ giữ 4 số cuối của thẻ tín dụng)

Nullification: set các PII fields về NULL sau khi hết retention period

Bước 4 — Tự động hóa việc thực thi policy

Policy chỉ có giá trị khi được thực thi tự động và nhất quán. Các cách tiếp cận:

Scheduled Jobs qua Orchestrator: Dùng Airflow, dbt, hoặc cloud-native scheduler để chạy các job định kỳ (hàng ngày/tuần) kiểm tra và xóa/archive dữ liệu quá hạn. Mỗi job nên có logging rõ ràng để audit sau này.

Native Features của Cloud Warehouse: Snowflake có Time Travel và Data Retention settings ở cấp table. BigQuery có Table Expiration. Redshift có Lifecycle Policies. Tận dụng các tính năng built-in này trước khi xây custom solution.

Event-Driven Deletion: Với yêu cầu "right to be forgotten" (GDPR), bạn cần xóa theo yêu cầu của người dùng cụ thể, không chỉ theo thời gian. Lúc này cần một pipeline riêng nhận deletion request và propagate nó qua tất cả các bảng liên quan.

Bước 5 — Audit Trail & Monitoring

Điều quan trọng không kém là chứng minh được rằng bạn đã thực thi policy. Bạn cần:

Ghi log mỗi lần xóa hoặc archive dữ liệu: xóa bao nhiêu records, bảng nào, thời điểm nào

Dashboard theo dõi data age distribution — để phát hiện dữ liệu đang tích lũy bất thường

Alert khi một job retention thất bại — vì nếu không ai biết job bị lỗi, dữ liệu sẽ tiếp tục tồn tại trái phép

Những thách thức thường gặp

Dữ liệu phân tán: Trong kiến trúc hiện đại, cùng một dữ liệu có thể tồn tại ở warehouse, data lake, backup, cache, và các downstream systems. Retention policy cần được áp dụng đồng bộ ở tất cả các nơi — đây là phần khó nhất.

Xung đột giữa các yêu cầu: Compliance yêu cầu xóa dữ liệu sau 1 năm, nhưng business muốn giữ 5 năm để phân tích. Bạn cần một quy trình governance rõ ràng để giải quyết xung đột này, thường là anonymize thay vì xóa hoàn toàn.

Dữ liệu có dependencies: Xóa một record trong bảng gốc có thể làm vỡ foreign key ở bảng khác. Cần kiểm tra dependency graph kỹ trước khi xóa.

Tóm lại

Triển khai data retention policy hiệu quả đòi hỏi sự kết hợp của kỹ thuật tốt (partition design, tiered storage, automation) và governance rõ ràng (phân loại dữ liệu, quy trình xử lý PII, audit trail). Bắt đầu bằng cách phân loại dữ liệu, thiết kế schema thân thiện với việc xóa (partition by date), rồi tự động hóa và monitor liên tục. Đừng để retention policy chỉ tồn tại trên giấy tờ mà không được thực thi trong thực tế.
