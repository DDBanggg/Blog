# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 17)

Nguồn: https://www.threads.com/@3dongcode/post/DV06k7vlALW

Data Profiling nghĩa là gì?

Chi tiết ⬇

Data Profiling (Phân tích dữ liệu) là quá trình kiểm tra, phân tích và tóm tắt dữ liệu từ nhiều nguồn khác nhau để hiểu rõ về cấu trúc, nội dung, chất lượng và các mối quan hệ trong dữ liệu đó.

1. Đánh giá chất lượng dữ liệu:

Phát hiện các giá trị null, thiếu sót hoặc không hợp lệ

Xác định các bản ghi trùng lặp

Kiểm tra tính nhất quán của dữ liệu

2. Hiểu cấu trúc dữ liệu:

Xác định kiểu dữ liệu của từng cột (số, chuỗi, ngày tháng...)

Phân tích độ dài và định dạng của dữ liệu

Tìm hiểu các mẫu (patterns) trong dữ liệu

3. Phát hiện các vấn đề tiềm ẩn:

Giá trị ngoại lệ (outliers)

Dữ liệu không tuân theo quy tắc nghiệp vụ

Các mối quan hệ bất thường giữa các trường dữ liệu

Các loại Data Profiling phổ biến:

Column Profiling (Phân tích cột):

Phân tích từng cột riêng lẻ

Xác định giá trị min, max, trung bình

Đếm số lượng giá trị duy nhất

Tính phần trăm giá trị null

Relationship Profiling (Phân tích mối quan hệ):

Tìm hiểu mối quan hệ giữa các bảng

Xác định khóa ngoại (foreign keys)

Phát hiện các phụ thuộc hàm (functional dependencies)

Pattern Profiling (Phân tích mẫu):

Tìm các mẫu lặp lại trong dữ liệu

Ví dụ: số điện thoại theo format nào, email có đúng cấu trúc không

Lợi ích của Data Profiling:

Tiết kiệm thời gian và chi phí: Phát hiện sớm vấn đề trước khi xử lý dữ liệu

Cải thiện chất lượng quyết định: Hiểu rõ dữ liệu giúp đưa ra quyết định chính xác hơn

Hỗ trợ Data Migration: Đảm bảo dữ liệu được chuyển đổi đúng khi di chuyển giữa các hệ thống

Tuân thủ quy định: Đảm bảo dữ liệu đáp ứng các yêu cầu về bảo mật và quy định

Ví dụ thực tế:

Giả sử bạn có bảng dữ liệu khách hàng, Data Profiling sẽ giúp bạn:

Phát hiện 15% số điện thoại bị thiếu

Nhận ra 200 email có định dạng không hợp lệ

Tìm thấy 50 khách hàng trùng lặp

Xác định độ tuổi trung bình là 35, cao nhất 87, thấp nhất 18

Data Profiling là bước đầu tiên quan trọng trong bất kỳ dự án Data Engineering nào, giúp bạn hiểu rõ "nguyên liệu" trước khi bắt tay vào "chế biến" dữ liệu.
