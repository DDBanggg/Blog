---
title: 'Hadoop là gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Hadoop là gì?'
questionNumber: 10
category: 'big-data'
tags:
  - hadoop
  - big-data
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DVbHW6pkzeV'
draft: false
---

## Câu trả lời

Hadoop là gì? Hadoop là một framework mã nguồn mở được phát triển bởi Apache Foundation, được thiết kế đặc biệt để xử lý và lưu trữ khối lượng dữ liệu cực lớn (Big Data) một cách phân tán trên nhiều máy tính thông thường.

Đặc điểm nổi bật: 1. Xử lý phân tán (Distributed Processing) Hadoop cho phép chia nhỏ dữ liệu lớn thành nhiều phần nhỏ và xử lý song song trên nhiều máy chủ cùng lúc. Thay vì dùng một siêu máy tính đắt tiền, Hadoop sử dụng nhiều máy tính giá rẻ làm việc cùng nhau.

2. Khả năng mở rộng (Scalability) Có thể dễ dàng thêm máy chủ mới vào hệ thống khi cần xử lý nhiều dữ liệu hơn. Mở rộng từ vài máy đến hàng nghìn máy. 3. Độ tin cậy cao (Fault Tolerance) Tự động sao lưu dữ liệu trên nhiều máy. Khi một máy bị hỏng, dữ liệu vẫn an toàn và hệ thống tiếp tục hoạt động.

Các thành phần chính của Hadoop: 1. HDFS (Hadoop Distributed File System) Là hệ thống lưu trữ file phân tán. Chia file lớn thành nhiều khối nhỏ (mặc định 128MB hoặc 256MB). Sao lưu mỗi khối dữ liệu trên nhiều máy khác nhau (thường là 3 bản sao).

2. MapReduce Là mô hình lập trình để xử lý dữ liệu lớn. Gồm hai giai đoạn: Map: Chia nhỏ và xử lý dữ liệu song song. Reduce: Tổng hợp kết quả từ các phần đã xử lý.

3. YARN (Yet Another Resource Negotiator) Quản lý tài nguyên của cụm máy (CPU, RAM). Phân bổ tài nguyên cho các ứng dụng khác nhau. Giám sát và điều phối các tác vụ. 4. Hadoop Common Các thư viện và tiện ích chung hỗ trợ các module khác.

Ưu điểm của Hadoop: Tiết kiệm chi phí: Sử dụng phần cứng thông thường thay vì máy chủ đắt tiền. Xử lý đa dạng: Có thể xử lý dữ liệu có cấu trúc, bán cấu trúc và phi cấu trúc. Tốc độ: Xử lý song song giúp tăng tốc độ xử lý đáng kể. Mã nguồn mở: Miễn phí và có cộng đồng hỗ trợ lớn.

Nhược điểm: Độ phức tạp: Cài đặt và vận hành khá phức tạp. Không phù hợp với dữ liệu nhỏ: Overhead lớn cho dữ liệu nhỏ. Xử lý thời gian thực: MapReduce không tốt cho xử lý real-time (cần công nghệ khác như Spark).

Ứng dụng thực tế: Phân tích log: Xử lý hàng tỷ dòng log từ website, ứng dụng. Phân tích mạng xã hội: Xử lý dữ liệu từ Facebook, Twitter. E-commerce: Phân tích hành vi khách hàng, đề xuất sản phẩm. Y tế: Phân tích dữ liệu gen, hồ sơ bệnh án. Tài chính: Phát hiện gian lận, phân tích rủi ro.

Tóm lại: Hadoop giống như một đội quân kiến công nghiệp - mỗi con kiến (máy tính) tuy nhỏ nhưng khi làm việc cùng nhau có thể di chuyển những thứ khổng lồ. Thay vì cần một "con voi" (siêu máy tính) đắt tiền, Hadoop sử dụng nhiều "con kiến" rẻ tiền làm việc phối hợp để xử lý Big Data một cách hiệu quả và kinh tế.
