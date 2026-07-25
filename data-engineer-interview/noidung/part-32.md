# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 31)

Nguồn: https://www.threads.com/@3dongcode/post/DWocEt3FJQI

Giải thích sự khác biệt giữa Time-series Database và Relational Database truyền thống

Chi tiết ⬇

Relational Database (RDBMS) được thiết kế để lưu trữ dữ liệu có cấu trúc quan hệ, tối ưu cho các thao tác CRUD (Create, Read, Update, Delete) và các phép JOIN phức tạp. Thời gian chỉ là một cột dữ liệu bình thường.

Time-series Database (TSDB) được thiết kế chuyên biệt cho dữ liệu gắn với mốc thời gian, nơi timestamp là trục trung tâm của mọi truy vấn và lưu trữ. Dữ liệu luôn được ghi theo chiều tăng dần của thời gian (append-only).

Tại sao RDBMS không phù hợp cho time-series?

Giả sử bạn có sensor ghi nhiệt độ mỗi giây, 1 năm = ~31 triệu bản ghi. Khi dùng RDBMS:

Index B-tree sẽ bị phình to, insert chậm dần theo thời gian

Không có cơ chế tự động xóa dữ liệu cũ (data retention)

Truy vấn kiểu "trung bình nhiệt độ theo từng giờ trong 30 ngày" rất tốn kém

Không tối ưu cho các phép tính window function theo thời gian

Ví dụ thực tế

Dùng RDBMS phù hợp khi:

Hệ thống quản lý đơn hàng (Orders, Customers, Products)

Hệ thống ngân hàng (tài khoản, giao dịch có quan hệ phức tạp)

Dùng TSDB phù hợp khi:

Monitoring hạ tầng: CPU, RAM, network của server (Prometheus + Grafana)

IoT: Dữ liệu cảm biến nhiệt độ, độ ẩm từ thiết bị

Tài chính: Giá cổ phiếu tick-by-tick

Application metrics: Request latency, error rate theo thời gian thực

Tóm lại

TSDB không thay thế RDBMS — chúng giải quyết hai bài toán khác nhau. Trong thực tế Data Engineering, người ta thường dùng kết hợp cả hai: RDBMS cho business data (users, orders), TSDB cho operational/monitoring data (metrics, events, logs).
