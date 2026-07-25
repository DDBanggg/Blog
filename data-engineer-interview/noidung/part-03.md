# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 3)

Nguồn: https://www.threads.com/@3dongcode/post/DUlIuRNk1dW

Vấn đề hiệu năng data pipeline đáng nhớ nào mà bạn đã giải quyết?

Chi tiết ⬇

1. Bối cảnh vấn đề (Context) Mô tả hệ thống: loại pipeline, khối lượng dữ liệu, công nghệ sử dụng. Triệu chứng: pipeline chạy chậm, timeout, tốn tài nguyên.

2. Phân tích nguyên nhân (Root Cause) Quá trình debug: monitoring, profiling, log analysis. Xác định bottleneck: I/O, CPU, memory, network, logic xử lý.

3. Giải pháp (Solution) Approach cụ thể đã áp dụng. Trade-offs đã cân nhắc.

4. Kết quả (Impact) Số liệu cải thiện: thời gian xử lý, throughput, cost

Ví dụ câu trả lời mẫu: "Pipeline ETL xử lý 50GB log mỗi giờ bị timeout sau 2 giờ. Qua profiling phát hiện đang load toàn bộ data vào memory trước khi transform. Tôi refactor thành streaming processing với batch size 10MB, thêm parallel processing 8 workers, và tối ưu SQL query bằng cách thêm index. Kết quả giảm thời gian từ 2h xuống 25 phút và memory usage giảm 70%. Bài học là luôn profile trước khi optimize và ưu tiên xử lý incremental thay vì full load."

Những điểm nổi bật khi trả lời: Specific numbers: thể hiện impact rõ ràng. Technical depth: cho thấy hiểu biết sâu về performance tuning. Problem-solving approach: tư duy có hệ thống. Business impact: không chỉ technical mà còn về cost/efficiency.
