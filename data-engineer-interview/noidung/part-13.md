# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 13)

Nguồn: https://www.threads.com/@3dongcode/post/DVi7YDtFGvV

Block và Block Scanner trong HDFS là gì?

Chi tiết ⬇

1. Block (Khối dữ liệu) trong HDFS Block là đơn vị lưu trữ cơ bản nhất trong HDFS. Khi bạn lưu một file vào HDFS, file đó không được lưu nguyên vẹn mà được chia nhỏ thành nhiều khối có kích thước cố định.

Đặc điểm của Block: Kích thước mặc định: Trong Hadoop 2.x và 3.x, kích thước block mặc định là 128MB (phiên bản cũ hơn là 64MB). Bạn có thể cấu hình kích thước này tùy theo nhu cầu. Lưu trữ phân tán: Mỗi block được sao chép và lưu trữ trên nhiều DataNode khác nhau (mặc định là 3 bản sao) để đảm bảo tính sẵn sàng và chống mất dữ liệu. Độc lập: Mỗi block được quản lý độc lập. Các block của cùng một file có thể nằm trên các DataNode khác nhau trong cluster.

Tại sao sử dụng Block? Lưu trữ file lớn: File có kích thước lớn hơn dung lượng của một máy đơn lẻ vẫn có thể được lưu trữ bằng cách phân tán các block ra nhiều máy. Tối ưu hóa xử lý: Các framework như MapReduce có thể xử lý song song nhiều block cùng lúc, tăng hiệu suất. Quản lý metadata đơn giản: NameNode chỉ cần quản lý thông tin về các block thay vì từng byte của file, giảm tải cho bộ nhớ. Khả năng chịu lỗi: Nếu một DataNode bị hỏng, các block trên đó vẫn có bản sao ở DataNode khác.

Ví dụ minh họa: Giả sử bạn có file 400MB, với block size 128MB: Block 1: 128MB Block 2: 128MB Block 3: 128MB Block 4: 16MB (phần còn lại) Mỗi block này được nhân bản 3 lần và phân tán trên các DataNode khác nhau trong cluster.

2. Block Scanner trong HDFS Block Scanner là một tiến trình chạy nền trên mỗi DataNode, có nhiệm vụ kiểm tra tính toàn vẹn (integrity) của các block được lưu trữ trên DataNode đó.

Chức năng chính: Phát hiện lỗi dữ liệu: Block Scanner định kỳ quét qua tất cả các block trên DataNode và sử dụng checksum để kiểm tra xem dữ liệu có bị hỏng (corrupted) không. Báo cáo cho NameNode: Khi phát hiện block bị lỗi, Block Scanner sẽ báo cáo cho NameNode. NameNode sau đó sẽ đánh dấu block đó là "corrupted" và tạo bản sao mới từ replica còn tốt trên DataNode khác. Kiểm tra proactive: Thay vì chờ đến khi client đọc dữ liệu mới phát hiện lỗi, Block Scanner chủ động tìm kiếm vấn đề trước.

Cơ chế hoạt động: Quét định kỳ: Block Scanner không quét tất cả block cùng lúc mà quét từng phần theo lịch trình để không ảnh hưởng đến hiệu suất hệ thống. Sử dụng checksum: Khi dữ liệu được ghi vào HDFS, hệ thống tính toán checksum cho mỗi block. Block Scanner sẽ tính lại checksum khi quét và so sánh với giá trị ban đầu. Ưu tiên quét: Các block được đọc ít thường xuyên sẽ được ưu tiên quét cao hơn vì khả năng phát hiện lỗi qua việc đọc bình thường thấp hơn.

Tham số cấu hình quan trọng: dfs.datanode.scan.period.hours: Khoảng thời gian giữa các lần quét (mặc định 504 giờ - khoảng 3 tuần). dfs.block.scanner.volume.bytes.per.second: Giới hạn băng thông cho việc quét để không làm chậm các hoạt động I/O khác.

Lợi ích: Phát hiện sớm: Tìm ra vấn đề về phần cứng (ổ đĩa bị hỏng, bad sector) trước khi nó ảnh hưởng đến dữ liệu quan trọng. Tự động phục hồi: Kết hợp với cơ chế replication của HDFS, hệ thống có thể tự động thay thế block hỏng bằng bản sao tốt. Đảm bảo độ tin cậy: Duy trì tính toàn vẹn dữ liệu trong thời gian dài, đặc biệt với dữ liệu ít được truy cập.

Tóm lại: Block là đơn vị lưu trữ cơ bản, cho phép HDFS chia nhỏ và phân tán file lớn trên nhiều máy, hỗ trợ xử lý song song và chịu lỗi tốt. Block Scanner là "người giám sát" chạy trên mỗi DataNode, liên tục kiểm tra sức khỏe của các block để đảm bảo dữ liệu luôn toàn vẹn và đáng tin cậy. Hai thành phần này phối hợp chặt chẽ tạo nên nền tảng cho khả năng lưu trữ tin cậy và có khả năng mở rộng của HDFS.
