---
title: 'Giải thích về Data Sharding và tác động đến khả năng mở rộng cơ sở dữ liệu'
description: 'Câu hỏi phỏng vấn Data Engineer: Giải thích về Data Sharding và tác động đến khả năng mở rộng cơ sở dữ liệu'
questionNumber: 27
category: 'databases'
tags:
  - data-sharding
  - scalability
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DWRRfKEFAfl'
draft: true
---

## Câu trả lời

Data Sharding là gì?

Data Sharding (phân mảnh dữ liệu) là một kỹ thuật kiến trúc cơ sở dữ liệu trong đó bạn chia nhỏ một cơ sở dữ liệu lớn thành nhiều phần nhỏ hơn gọi là "shards" (mảnh). Mỗi shard là một cơ sở dữ liệu độc lập, chứa một tập con của toàn bộ dữ liệu.

Hình dung đơn giản: Thay vì lưu tất cả dữ liệu của 1 triệu người dùng trong một server duy nhất, bạn có thể chia thành 10 shards, mỗi shard chứa 100,000 người dùng và chạy trên các server riêng biệt.

Các đặc điểm chính của Sharding

1. Horizontal Partitioning (Phân vùng ngang)

Sharding là một dạng phân vùng ngang - chia dữ liệu theo hàng (rows)

Khác với vertical partitioning (phân vùng dọc) - chia theo cột (columns)

Mỗi shard chứa cùng schema nhưng dữ liệu khác nhau

2. Shard Key (Khóa phân mảnh)

Là trường dữ liệu được sử dụng để quyết định dữ liệu nào thuộc shard nào

Ví dụ: user_id, location, date, customer_id

Việc chọn shard key đúng là cực kỳ quan trọng

3. Độc lập về mặt vật lý

Mỗi shard thường nằm trên server riêng

Các shard không chia sẻ tài nguyên phần cứng

Có thể scale từng shard độc lập

Các phương pháp Sharding phổ biến

1. Range-based Sharding (Phân mảnh theo khoảng)

Chia dữ liệu dựa trên khoảng giá trị của shard key

Ví dụ:

Shard 1: user_id từ 1-100,000

Shard 2: user_id từ 100,001-200,000

Shard 3: user_id từ 200,001-300,000

Ưu điểm: Đơn giản, dễ triển khai, truy vấn range queries hiệu quả

Nhược điểm: Có thể gây mất cân bằng dữ liệu (hotspots) nếu dữ liệu phân bố không đều

2. Hash-based Sharding (Phân mảnh theo hash)

Sử dụng hàm hash để quyết định shard

Ví dụ: shard_number = hash(user_id) % number_of_shards

Ưu điểm: Phân bố dữ liệu đều, tránh hotspots

Nhược điểm: Khó khăn khi thêm/bớt shard, range queries kém hiệu quả

3. Directory-based Sharding (Phân mảnh theo thư mục)

Sử dụng một bảng lookup (bảng tra cứu) để ánh xạ dữ liệu với shard

Bảng này lưu thông tin về dữ liệu nào nằm ở shard nào

Ưu điểm: Linh hoạt nhất, dễ tái cân bằng

Nhược điểm: Bảng lookup có thể trở thành điểm nghẽn (bottleneck)

4. Geo-based Sharding (Phân mảnh theo địa lý)

Chia dữ liệu theo vị trí địa lý

Ví dụ:

Shard Châu Á

Shard Châu Âu

Shard Bắc Mỹ

Ưu điểm: Giảm latency cho người dùng địa phương, tuân thủ quy định về dữ liệu

Nhược điểm: Phân bố không đều nếu người dùng tập trung ở một khu vực

Tác động của Sharding đến khả năng mở rộng (Scalability)

Lợi ích về Scalability:

1. Horizontal Scaling (Mở rộng ngang)

Có thể thêm nhiều shard hơn khi dữ liệu tăng lên

Mỗi shard mới mang thêm tài nguyên tính toán, bộ nhớ, I/O

Chi phí thấp hơn so với việc nâng cấp một server lớn (vertical scaling)

2. Cải thiện hiệu năng đọc/ghi

Tải được phân tán trên nhiều server

Nếu có 1 triệu request và 10 shards → mỗi shard chỉ xử lý ~100,000 request

Giảm thời gian chờ đợi và tăng throughput tổng thể

3. Tăng khả năng lưu trữ

Vượt qua giới hạn lưu trữ của một server đơn lẻ

Mỗi shard chỉ cần lưu một phần dữ liệu

Dễ dàng mở rộng khi cần thêm không gian

4. Cải thiện khả năng sẵn sàng (Availability)

Khi một shard gặp sự cố, các shard khác vẫn hoạt động

Chỉ ảnh hưởng một phần nhỏ người dùng

Giảm "single point of failure"

5. Tối ưu hóa tài nguyên

Có thể đặt các shard gần người dùng về mặt địa lý

Giảm network latency

Cải thiện trải nghiệm người dùng

Kết luận

Data Sharding là một công cụ mạnh mẽ cho việc scale database theo chiều ngang, cho phép xử lý lượng dữ liệu và traffic khổng lồ. Tuy nhiên, nó đi kèm với độ phức tạp đáng kể về mặt kỹ thuật và vận hành.

Quyết định sử dụng sharding cần được cân nhắc kỹ lưỡng, đảm bảo rằng lợi ích về scalability vượt trội hơn so với chi phí và độ phức tạp thêm vào. Trong nhiều trường hợp, các kỹ thuật đơn giản hơn như indexing, caching, và read replicas có thể giải quyết vấn đề mà không cần đến sharding.
