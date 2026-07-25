# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 24)

Nguồn: https://www.threads.com/@3dongcode/post/DWMITD8FBbW

Làm thế nào mà việc cache dữ liệu cải thiện mọi thứ?

Chi tiết ⬇

Caching (bộ nhớ đệm) là một kỹ thuật cực kỳ quan trọng trong Data Engineering, giúp cải thiện hiệu suất hệ thống một cách đáng kể. Để hiểu rõ, tôi sẽ giải thích chi tiết từng khía cạnh:

1. Giảm thời gian truy cập dữ liệu (Latency)Khi bạn cache dữ liệu, bạn đang lưu trữ nó ở một nơi "gần" hơn và "nhanh" hơn so với nguồn dữ liệu gốc. Ví dụ:

Thay vì phải query database trên disk (có thể mất 50-100ms), bạn lấy từ RAM (chỉ mất vài microseconds)

Thay vì phải gọi API từ server ở xa (có thể mất vài trăm milliseconds), bạn lấy từ bộ nhớ local

Điều này giống như việc bạn photocopy những trang sách hay đọc nhất và để ngay trên bàn, thay vì phải đi xuống tầng hầm mỗi lần cần đọc lại.

2. Giảm tải cho hệ thống backend

Mỗi lần query database hoặc gọi API đều tốn tài nguyên:

CPU phải xử lý query

Database phải scan/index

Network phải truyền tải dữ liệu

Khi cache, các request lặp lại không cần đến backend nữa. Ví dụ, nếu 1000 users cùng xem một trang sản phẩm, thay vì query database 1000 lần, bạn chỉ cần query 1 lần và serve 999 lần còn lại từ cache.

3. Tăng khả năng mở rộng (Scalability)

Với cache, hệ thống của bạn có thể phục vụ nhiều request hơn mà không cần tăng thêm database servers. Điều này đặc biệt quan trọng khi:

Traffic tăng đột biến (flash sale, viral content)

Bạn có nhiều read operations hơn write operations

Chi phí scale database rất đắt so với scale cache layer

4. Cải thiện trải nghiệm người dùng

Người dùng không phải chờ đợi lâu:

Trang web load nhanh hơn

Dashboard hiển thị dữ liệu tức thì

Mobile app phản hồi mượt mà hơn

Nghiên cứu cho thấy mỗi 100ms delay có thể làm giảm 1% conversion rate trong e-commerce.

5. Tiết kiệm chi phí

Giảm số lượng database queries = giảm chi phí infrastructure

Giảm bandwidth sử dụng = giảm chi phí network

Giảm compute resources = giảm chi phí cloud

Ví dụ, nếu bạn đang dùng AWS RDS và có thể cache 80% queries, bạn có thể downgrade instance size và tiết kiệm hàng nghìn USD mỗi tháng.

6. Cho phép xử lý dữ liệu phức tạp trước

Bạn có thể:

Pre-compute các aggregations phức tạp

Pre-join nhiều bảng

Pre-format dữ liệu theo đúng format client cần

Thay vì phải tính toán mỗi lần request, bạn làm một lần và cache kết quả.

7. Tăng độ sẵn sàng (Availability)

Nếu database tạm thời bị down hoặc chậm, cache vẫn có thể serve dữ liệu (stale data tốt hơn no data). Điều này đặc biệt quan trọng cho các hệ thống mission-critical.

Các loại cache phổ biến trong Data Engineering:

Application-level cache: Redis, Memcached

Database query cache: MySQL query cache, PostgreSQL shared buffers

CDN cache: CloudFlare, AWS CloudFront cho static assets

Browser cache: Cho frontend resources

Materialized views: Pre-computed views trong database

Distributed cache: Hazelcast, Apache Ignite cho hệ thống phân tán

Lưu ý quan trọng:

Cache không phải là silver bullet. Bạn cần cân nhắc:

Cache invalidation: Khi nào thì cập nhật/xóa cache? (Có câu nói nổi tiếng: "There are only two hard things in Computer Science: cache invalidation and naming things")

Stale data: Dữ liệu trong cache có thể không mới nhất

Memory cost: Cache tốn RAM, cần balance giữa cost và benefit

Complexity: Thêm một layer cần maintain
