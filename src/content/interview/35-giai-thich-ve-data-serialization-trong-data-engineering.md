---
title: 'Giải thích về Data Serialization trong Data Engineering'
description: 'Câu hỏi phỏng vấn Data Engineer: Giải thích về Data Serialization trong Data Engineering'
questionNumber: 35
category: 'data-engineering-fundamentals'
tags:
  - data-serialization
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DW340tGlApw'
draft: true
---

## Câu trả lời

Data Serialization là gì?

Data Serialization (Tuần tự hóa dữ liệu) là quá trình chuyển đổi một cấu trúc dữ liệu hoặc đối tượng trong bộ nhớ (như object, array, struct) thành một định dạng có thể lưu trữ hoặc truyền tải được — ví dụ như chuỗi byte, văn bản JSON, hay file nhị phân.

Quá trình ngược lại gọi là Deserialization — tức là đọc dữ liệu đã được serialize và tái tạo lại cấu trúc ban đầu trong bộ nhớ.

Tại sao cần Serialization?

Hãy hình dung thế này: khi bạn có một object Python với hàng chục fields đang chạy trên một máy chủ, làm thế nào để:

Lưu nó xuống ổ đĩa?

Gửi nó qua mạng sang một service khác?

Đưa nó vào Kafka, S3, hay một database?

Object trong RAM không thể di chuyển trực tiếp — nó cần được "đóng gói" lại. Đó chính là vai trò của serialization.

Tại sao Serialization quan trọng trong Data Engineering?

1. Hiệu suất truyền tải dữ liệu (Performance)

Trong các pipeline xử lý hàng tỷ records, việc chọn định dạng sai có thể làm chậm toàn bộ hệ thống. Parquet hay Avro có thể nhỏ hơn JSON 5–10 lần, giúp tiết kiệm băng thông và chi phí lưu trữ đáng kể.

2. Schema Evolution

Dữ liệu thực tế luôn thay đổi — thêm cột, đổi kiểu dữ liệu. Các format như Avro và Protobuf hỗ trợ schema evolution tốt, nghĩa là producer và consumer có thể dùng schema khác nhau mà không bị lỗi.

3. Khả năng tương thích giữa các hệ thống (Interoperability)

Trong một kiến trúc hiện đại, dữ liệu đi qua nhiều hệ thống: Kafka → Spark → S3 → Redshift. Serialization đảm bảo dữ liệu được hiểu nhất quán ở tất cả các bước, dù viết bằng Python, Java hay Scala.

4. Tối ưu hóa lưu trữ trong Data Lake

Columnar formats như Parquet hay ORC được thiết kế để các query engine (Spark, Athena, BigQuery) chỉ đọc đúng những cột cần thiết — thay vì quét toàn bộ file. Đây là lý do tại sao Data Lake hiện đại hầu như đều dùng Parquet.

5. Streaming & Message Queue

Trong hệ thống real-time với Kafka, mỗi message được serialize trước khi gửi. Nếu dùng JSON thô, throughput sẽ thấp hơn rất nhiều so với Avro hay Protobuf vì kích thước payload lớn hơn nhiều lần.

Nguyên tắc chọn định dạng

Cần đọc nhiều, analytics → chọn Parquet / ORC

Cần streaming, schema linh hoạt → chọn Avro

Cần microservices, low-latency → chọn Protobuf

Cần debug dễ, đơn giản → chọn JSON

Tóm lại

Serialization không phải là chi tiết kỹ thuật nhỏ — nó ảnh hưởng trực tiếp đến tốc độ pipeline, chi phí lưu trữ, khả năng mở rộng và độ ổn định của toàn bộ hệ thống dữ liệu. Một Data Engineer giỏi cần hiểu rõ trade-off giữa các định dạng để đưa ra lựa chọn phù hợp cho từng use case cụ thể.
