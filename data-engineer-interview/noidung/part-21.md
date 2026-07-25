# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 20)

Nguồn: https://www.threads.com/@3dongcode/post/DV_PDZ6FLl9

FSCK nghĩa là gì?

Chi tiết ⬇

FSCK là gì?

FSCK là viết tắt của "File System Consistency Check" (Kiểm tra tính nhất quán của hệ thống tập tin). Đây là một tiện ích hệ thống quan trọng trong các hệ điều hành Unix và Linux, được sử dụng để kiểm tra và sửa chữa các lỗi trong hệ thống tập tin.

Ý nghĩa và mục đích:

1. Kiểm tra tính toàn vẹn dữ liệu

FSCK quét toàn bộ hệ thống tập tin để phát hiện các vấn đề như:

Các khối dữ liệu bị hỏng hoặc không nhất quán

Các inode (cấu trúc dữ liệu chứa thông tin về file) bị lỗi

Các liên kết symbolic hoặc hard link bị hỏng

Kích thước file không khớp với số khối được cấp phát

Các entry trong thư mục trỏ đến inode không tồn tại

2. Khắc phục sự cố

Khi phát hiện lỗi, FSCK có thể:

Tự động sửa chữa các lỗi đơn giản

Yêu cầu xác nhận từ người dùng cho các sửa đổi quan trọng

Khôi phục các file bị hỏng vào thư mục lost+found

Giải phóng các khối dữ liệu bị treo

3. Các tình huống sử dụng

FSCK thường được chạy khi:

Hệ thống bị tắt đột ngột (mất điện, kernel panic)

Ổ đĩa bị ngắt kết nối không đúng cách

Phát hiện lỗi ghi/đọc trên ổ đĩa

Định kỳ sau một số lần mount nhất định (với các filesystem cũ hơn)

Trước khi mount một filesystem bị đánh dấu "dirty" (không được unmount sạch)

Cách hoạt động:

Các giai đoạn kiểm tra điển hình:

Phase 1: Kiểm tra các khối và kích thước inode

Phase 2: Kiểm tra cấu trúc thư mục

Phase 3: Kiểm tra kết nối thư mục

Phase 4: Kiểm tra số lượng tham chiếu (reference counts)

Phase 5: Kiểm tra thông tin nhóm (cylinder group)

Lưu ý quan trọng trong Data Engineering:

1. Không nên chạy trên filesystem đang được mount

Chỉ chạy FSCK trên các phân vùng đã unmount hoặc mount ở chế độ read-only

Chạy trên filesystem đang hoạt động có thể gây hỏng dữ liệu nghiêm trọng

2. Các filesystem hiện đại

Các filesystem journaling như ext4, XFS, Btrfs có khả năng tự phục hồi tốt hơn

Journal log giúp giảm thiểu nhu cầu chạy FSCK thủ công

FSCK vẫn cần thiết khi có vấn đề phần cứng hoặc corruption nghiêm trọng

3. Trong môi trường Big Data

Với các hệ thống phân tán như HDFS (Hadoop Distributed File System), có công cụ tương tự là hdfs fsck

Kiểm tra block replication, under-replicated blocks, corrupt blocks

Đảm bảo data integrity trên toàn cluster

Tóm lại:

FSCK là công cụ "bác sĩ" cho hệ thống tập tin, giúp chẩn đoán và chữa trị các bệnh về dữ liệu. Trong Data Engineering, hiểu về FSCK giúp bạn:

Xử lý sự cố khi hệ thống storage gặp vấn đề

Đảm bảo tính toàn vẹn dữ liệu trong data pipeline

Phòng tránh mất mát dữ liệu trong các tình huống khẩn cấp

Đây là kiến thức nền tảng quan trọng khi làm việc với infrastructure và storage systems trong data engineering!
