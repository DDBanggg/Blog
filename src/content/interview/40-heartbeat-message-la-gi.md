---
title: 'Heartbeat Message là gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Heartbeat Message là gì?'
questionNumber: 40
category: 'distributed-systems'
tags:
  - heartbeat
  - distributed-systems
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DXEvG8zlJ1t'
draft: false
---

## Câu trả lời

Heartbeat message (tin nhắn nhịp tim) là một loại tín hiệu định kỳ được gửi giữa các thành phần trong hệ thống phân tán để xác nhận rằng một service/node vẫn đang hoạt động bình thường.

Mục đích chính

Kiểm tra tính sống còn (liveness check): Xác nhận một node/service vẫn đang chạy và có thể phản hồi.

Phát hiện lỗi sớm: Nếu heartbeat ngừng đến, hệ thống biết ngay rằng có sự cố xảy ra.

Duy trì kết nối: Giữ cho kết nối TCP/network không bị timeout do không hoạt động.

Cách hoạt động

Một component (producer, consumer, broker...) sẽ gửi một message nhỏ theo chu kỳ cố định (ví dụ mỗi 5 giây) đến một đầu nhận. Nếu sau một khoảng thời gian nhất định (timeout threshold) mà không nhận được heartbeat, hệ thống sẽ coi node đó là "dead" và thực hiện hành động khắc phục (failover, restart, alert...).

Ví dụ điển hình: Kafka

Trong Kafka, có hai tham số quan trọng:

heartbeat.interval.ms – tần suất consumer gửi heartbeat (mặc định 3 giây)

session.timeout.ms – thời gian broker chờ trước khi coi consumer là dead (mặc định 45 giây)

Nếu một consumer bị treo hoặc crash, broker không nhận được heartbeat trong session.timeout.ms → trigger rebalance, phân chia lại partition cho các consumer còn lại.

Tóm lại

Heartbeat message là cơ chế "tôi vẫn còn sống" trong hệ thống phân tán — đơn giản nhưng cực kỳ quan trọng để đảm bảo fault tolerance và high availability.
