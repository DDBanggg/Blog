---
title: 'Rack Awareness là gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Rack Awareness là gì?'
questionNumber: 29
category: 'big-data'
tags:
  - hadoop
  - rack-awareness
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DWgvGVYFNjK'
draft: true
---

## Câu trả lời

Rack Awareness (Nhận thức về Rack) là một cơ chế trong các hệ thống phân tán — đặc biệt phổ biến trong Hadoop HDFS và Apache Kafka — cho phép hệ thống biết được vị trí vật lý của các node (máy chủ) trong hạ tầng data center, cụ thể là chúng thuộc rack (tủ máy chủ) nào.

Vấn đề cần giải quyết

Trong một data center lớn, hàng chục đến hàng trăm máy chủ được xếp vào các rack vật lý. Điều quan trọng cần hiểu là:

Các máy chủ trong cùng một rack giao tiếp với nhau qua switch nội bộ → băng thông cao, độ trễ thấp.

Các máy chủ khác rack phải đi qua switch tầng trên (aggregation/core switch) → băng thông thấp hơn, độ trễ cao hơn, tốn kém hơn.

Nếu toàn bộ một rack bị mất điện hoặc hỏng switch → tất cả node trong rack đó sẽ offline cùng lúc.

Rack Awareness hoạt động như thế nào trong HDFS?

Khi HDFS lưu một file, nó chia thành các block và nhân bản (replicate) ra nhiều DataNode. Mặc định replication factor = 3, và Rack Awareness sẽ phân bổ như sau:

Replica 1 → DataNode trên rack hiện tại (gần client nhất)

Replica 2 → DataNode trên rack khác (đảm bảo fault tolerance)

Replica 3 → DataNode khác, cùng rack với Replica 2

Chiến lược này cân bằng giữa hiệu năng và độ chịu lỗi (dữ liệu không bị mất nếu một rack chết hoàn toàn).

Rack Awareness trong Apache Kafka

Kafka cũng áp dụng Rack Awareness khi phân bổ partition replicas của một topic ra các broker. Mục tiêu là đảm bảo leader và follower replica không nằm cùng rack, tránh mất dữ liệu khi cả rack gặp sự cố.

Kết luận

Rack Awareness không chỉ là một tính năng kỹ thuật đơn thuần — nó là triết lý thiết kế của hệ thống phân tán: hệ thống phải hiểu được topology mạng vật lý để đưa ra quyết định thông minh hơn về nơi đặt dữ liệu, từ đó đạt được sự cân bằng tốt nhất giữa hiệu năng, độ tin cậy và chi phí mạng.
