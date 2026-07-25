# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 45)

Nguồn: https://www.threads.com/@3dongcode/post/DXb7Vc8FKb4

Xử lý dữ liệu theo thời gian thực quan trọng ở điểm nào?

Chi tiết ⬇

1. Tính kịp thời của thông tin (Timeliness)

Giá trị của dữ liệu giảm dần theo thời gian. Ví dụ điển hình:

Phát hiện gian lận thẻ tín dụng — nếu xử lý sau 10 phút thì đã quá muộn

Cảnh báo hệ thống (server down, lỗi ứng dụng) — cần phản ứng trong giây

Giá cổ phiếu, tỷ giá — dữ liệu cũ vài giây là vô nghĩa

Nguyên tắc cốt lõi: Dữ liệu càng "tươi", quyết định càng chính xác.

2. Kiến trúc xử lý khác hoàn toàn Batch

Trong batch processing, bạn có thể "thoải mái" xử lý hàng triệu bản ghi sau khi tích lũy đủ. Nhưng real-time yêu cầu:

Low latency pipeline: dữ liệu phải chạy qua hệ thống trong mili-giây đến giây

Stateful processing: cần nhớ trạng thái trước đó (ví dụ: đếm số event trong 5 phút gần nhất)

Windowing: chia dòng dữ liệu vô tận thành các "cửa sổ" thời gian để tính toán (Tumbling, Sliding, Session window)

Event time vs Processing time: thời điểm sự kiện xảy ra khác thời điểm hệ thống nhận được — phải xử lý late data một cách khéo léo

3. Tính liên tục và chịu lỗi (Fault Tolerance & Exactly-once)

Khác với batch (chạy lại từ đầu nếu lỗi), real-time cần:

Checkpointing: lưu trạng thái định kỳ để phục hồi khi crash

Exactly-once semantics: đảm bảo mỗi event được xử lý đúng 1 lần — không bỏ sót, không trùng lặp

Backpressure handling: khi downstream xử lý chậm hơn upstream tạo ra data, hệ thống phải có cơ chế điều tiết

4. Những thách thức thực tế

Out-of-order events: dữ liệu đến không theo đúng thứ tự thời gian — cần watermark để quyết định "đợi thêm bao lâu"

Schema evolution: khi format dữ liệu thay đổi giữa chừng, pipeline không được chết

Scalability: lưu lượng dữ liệu tăng đột biến (flash sale, sự kiện lớn) — hệ thống phải auto-scale

Monitoring & Observability: pipeline real-time khó debug hơn batch rất nhiều, cần trace từng event

Tóm lại

Real-time processing không chỉ là "xử lý nhanh hơn" — đó là một paradigm hoàn toàn khác, đòi hỏi tư duy về trạng thái, thời gian, độ tin cậy và khả năng mở rộng một cách đồng thời. Đây là lý do các kỹ sư Data chuyên về streaming được đánh giá rất cao trong ngành.
