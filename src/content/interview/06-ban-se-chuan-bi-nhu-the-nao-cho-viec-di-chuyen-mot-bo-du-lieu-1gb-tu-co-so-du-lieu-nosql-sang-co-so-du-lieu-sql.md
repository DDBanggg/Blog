---
title: 'Bạn sẽ chuẩn bị như thế nào cho việc di chuyển một bộ dữ liệu 1GB từ cơ sở dữ liệu NoSQL sang cơ sở dữ liệu SQL?'
description: 'Câu hỏi phỏng vấn Data Engineer: Bạn sẽ chuẩn bị như thế nào cho việc di chuyển một bộ dữ liệu 1GB từ cơ sở dữ liệu NoSQL sang cơ sở dữ liệu SQL?'
questionNumber: 6
category: 'data-migration'
tags:
  - nosql
  - sql
  - data-migration
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DVGkRy4E-VZ'
draft: true
---

## Câu trả lời

1. Phân tích và đánh giá ban đầu

Trước tiên, tôi cần hiểu rõ cấu trúc dữ liệu hiện tại trong NoSQL. Ví dụ nếu đang dùng MongoDB với dữ liệu dạng document lồng nhau, tôi sẽ phân tích xem các trường nào, kiểu dữ liệu ra sao, có mảng hay object lồng nhau không. Điều này rất quan trọng vì NoSQL thường cho phép cấu trúc linh hoạt trong khi SQL yêu cầu schema cố định.

Tôi sẽ làm một bản inventory chi tiết về: Tổng số collections/tables hiện có. Cấu trúc của từng document/record. Các trường bắt buộc và tùy chọn. Kiểu dữ liệu của mỗi trường. Các mối quan hệ ẩn trong dữ liệu (dù NoSQL không enforce relationships nhưng logic nghiệp vụ vẫn có).

2. Thiết kế schema SQL Đây là bước quan trọng nhất. Tôi cần chuyển đổi từ mô hình document-oriented sang relational model. Với các document lồng nhau, tôi sẽ chuẩn hóa thành nhiều bảng có quan hệ với nhau. Ví dụ nếu có một collection "orders" chứa mảng "items" bên trong, tôi sẽ tách thành hai bảng: "orders" và "order_items" với foreign key liên kết.

Tôi sẽ áp dụng các nguyên tắc chuẩn hóa (normalization) phù hợp, thường là 3NF, để tránh dư thừa dữ liệu. Tuy nhiên cũng cân nhắc denormalization ở một số chỗ nếu cần tối ưu performance cho các truy vấn thường xuyên.

3. Lập kế hoạch mapping dữ liệu Tôi sẽ tạo một bản mapping document chi tiết, ghi rõ: Mỗi collection NoSQL sẽ map sang bảng nào trong SQL. Mỗi trường trong document sẽ map sang cột nào. Các quy tắc transformation cần thiết (ví dụ: chuyển đổi định dạng ngày tháng, xử lý giá trị null, transform enum values). Cách xử lý dữ liệu lồng nhau và mảng.

4. Xử lý các trường hợp đặc biệt NoSQL thường có những tính năng mà SQL không hỗ trợ trực tiếp: Dữ liệu động (các document có thể có các trường khác nhau): Tôi sẽ quyết định dùng cột nullable hoặc lưu dạng JSON trong một cột nếu cần. Mảng: Tạo bảng riêng với quan hệ one-to-many. Dữ liệu lồng sâu nhiều tầng: Có thể giữ lại dạng JSON hoặc flatten ra nhiều bảng tùy mức độ phức tạp.

5. Chiến lược migration Với 1GB dữ liệu, đây là kích thước vừa phải, tôi sẽ: Tạo môi trường test: Clone một phần dữ liệu (khoảng 10-20%) để test toàn bộ quy trình migration trước. Điều này giúp phát hiện vấn đề mà không ảnh hưởng production.

Chọn phương pháp migration phù hợp: Với 1GB, tôi có thể dùng phương pháp bulk export/import. Tùy loại NoSQL database, tôi sẽ export sang định dạng trung gian như CSV hoặc JSON, sau đó transform và import vào SQL. Xử lý theo batch: Thay vì load hết 1GB vào memory, tôi sẽ chia nhỏ thành các batch khoảng 50-100MB để xử lý. Điều này giúp tránh quá tải memory và dễ retry nếu có lỗi.

6. Viết script transformation Tôi sẽ viết script (có thể dùng Python với pandas, hoặc Node.js) để: Đọc dữ liệu từ NoSQL. Transform theo mapping đã định nghĩa. Validate dữ liệu (kiểm tra ràng buộc, kiểu dữ liệu, giá trị hợp lệ). Log các record có vấn đề để xử lý manual. Insert vào SQL database. Script này phải có khả năng resume từ điểm bị gián đoạn để tránh phải chạy lại từ đầu nếu có sự cố.

7. Validation và kiểm tra chất lượng dữ liệu Sau khi migration, tôi sẽ: So sánh số lượng records giữa source và destination. Chạy các checksum queries để đảm bảo dữ liệu quan trọng được migrate đúng. Test các business logic queries trên SQL database mới. Kiểm tra referential integrity (foreign keys).

8. Xử lý downtime Tùy yêu cầu của hệ thống: Nếu chấp nhận được downtime: Tạm dừng hệ thống, migrate, test, rồi switch sang SQL Nếu cần zero-downtime: Thiết lập dual-write (ghi vào cả NoSQL và SQL trong thời gian chuyển đổi), sau đó migration dữ liệu cũ, verify, rồi mới switch hoàn toàn.

9. Rollback plan Tôi luôn chuẩn bị kế hoạch rollback: Giữ nguyên NoSQL database cho đến khi SQL database chạy stable ít nhất 1-2 tuần. Có script để quickly switch back nếu phát hiện vấn đề nghiêm trọng Backup đầy đủ trước khi thực hiện migration.

10. Performance tuning Sau migration, tôi sẽ: Tạo indexes phù hợp dựa trên các query patterns. Analyze query execution plans. Optimize các queries chậm. Configure connection pooling phù hợp. Tóm lại, với 1GB dữ liệu thì quy mô không quá lớn nhưng vẫn cần có quy trình chặt chẽ. Điều quan trọng nhất là hiểu rõ cấu trúc dữ liệu, lập kế hoạch chi tiết, test kỹ càng, và luôn có phương án dự phòng.
