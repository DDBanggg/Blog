---
title: 'Data Skew trong Distributed Data Processing là gì và cách giảm thiểu?'
description: 'Câu hỏi phỏng vấn Data Engineer: Data Skew trong Distributed Data Processing là gì và cách giảm thiểu?'
questionNumber: 31
category: 'distributed-systems'
tags:
  - distributed-systems
  - data-skew
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DWl5K7cFHY0'
draft: true
---

## Câu trả lời

Data Skew (lệch dữ liệu) là hiện tượng xảy ra khi dữ liệu phân bố không đồng đều giữa các partition/node trong một hệ thống xử lý phân tán. Một số node phải xử lý lượng dữ liệu lớn hơn nhiều so với các node khác, dẫn đến bottleneck (nút thắt cổ chai).

Tại sao Data Skew là vấn đề nghiêm trọng?

Hãy tưởng tượng bạn có 10 công nhân và 1000 món hàng cần đóng gói. Nếu phân chia đều, mỗi người làm 100 món — rất hiệu quả. Nhưng nếu 1 người phải làm 700 món còn 9 người kia chỉ làm 33 món, thì toàn bộ dây chuyền phải chờ người đó xong. Đó chính là data skew.

Trong hệ thống như Spark, Hadoop, Flink:

Toàn bộ job phải chờ task chậm nhất (straggler task) hoàn thành

Node bị skew có thể OOM (Out of Memory)

Tài nguyên các node khác lãng phí vì ngồi chờ

SLA bị vi phạm, pipeline chậm hơn dự kiến nhiều lần

Các loại Data Skew phổ biến

1. Key Skew — Loại phổ biến nhất, xảy ra khi một số key xuất hiện với tần suất cực cao. Ví dụ: khi join bảng orders với bảng users, user VIP có thể có hàng triệu đơn hàng trong khi user thường chỉ có vài chục.

2. Partition Skew — Các partition có kích thước không đều nhau do cách chia dữ liệu ban đầu không hợp lý (ví dụ: chia theo ngày nhưng ngày cuối năm có lượng giao dịch gấp 10 lần ngày thường).

3. Shuffle Skew — Xảy ra trong giai đoạn shuffle (khi dữ liệu được redistribute qua mạng). Đây là giai đoạn tốn kém nhất và dễ bị skew nhất khi thực hiện groupBy, join, orderBy.

ác kỹ thuật giảm thiểu Data Skew

1. Salting (Thêm muối vào key) 🧂

Đây là kỹ thuật phổ biến và hiệu quả nhất. Ý tưởng là thêm một giá trị ngẫu nhiên vào key bị skew để phân tán nó ra nhiều partition hơn. Ví dụ, key "user_vip" sẽ được biến thành "user_vip_1", "user_vip_2", ..., "user_vip_10" — từ đó dữ liệu được chia đều cho 10 partition. Sau khi xử lý xong, bạn gộp (aggregate) kết quả lại bằng cách bỏ phần suffix.

2. Broadcast Join (cho bảng nhỏ)

Khi join một bảng lớn với một bảng nhỏ, thay vì shuffle cả hai bảng, hãy broadcast bảng nhỏ lên tất cả các node. Mỗi node tự join cục bộ mà không cần shuffle dữ liệu — loại bỏ hoàn toàn nguy cơ shuffle skew. Spark hỗ trợ điều này qua broadcast hint hoặc tự động khi bảng nhỏ hơn ngưỡng cấu hình.

3. Repartitioning thông minh

Thay vì để hệ thống tự phân chia, bạn chủ động chỉ định số lượng partition và cách chia sao cho phù hợp với đặc điểm dữ liệu. Ví dụ, nếu biết trước một số key "nóng", có thể tạo custom partitioner để phân tán chúng.

4. Skewed Join Optimization

Một số engine hiện đại như Spark 3.x có tính năng Adaptive Query Execution (AQE) tự động phát hiện và xử lý skewed partition bằng cách chia nhỏ chúng ra trong runtime — không cần can thiệp thủ công.

5. Lọc dữ liệu sớm (Predicate Pushdown)

Loại bỏ các bản ghi không cần thiết càng sớm càng tốt trong pipeline, trước khi thực hiện shuffle. Giảm tổng lượng dữ liệu đồng nghĩa giảm thiểu tác động của skew.

6. Sampling & Phân tích trước

Trước khi chạy job nặng, sample dữ liệu để phát hiện các key hot (key có tần suất cao bất thường). Từ đó áp dụng chiến lược phù hợp riêng cho từng nhóm key — ví dụ xử lý key hot theo một pipeline riêng, key bình thường theo pipeline thông thường.
