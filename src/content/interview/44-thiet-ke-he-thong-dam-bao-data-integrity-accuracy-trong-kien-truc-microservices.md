---
title: 'Thiết kế hệ thống đảm bảo Data Integrity & Accuracy trong kiến trúc Microservices'
description: 'Câu hỏi phỏng vấn Data Engineer: Thiết kế hệ thống đảm bảo Data Integrity & Accuracy trong kiến trúc Microservices'
questionNumber: 44
category: 'data-quality'
tags:
  - data-integrity
  - microservices
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DXRpzmHFJ34'
draft: true
---

## Câu trả lời

Vấn đề cốt lõi

Trong Microservices, mỗi service có database riêng (Database-per-Service pattern), nên không thể dùng ACID transaction truyền thống trải dài nhiều service. Đây là thách thức chính cần giải quyết.

1. Saga Pattern — Quản lý distributed transaction

Thay vì một transaction lớn, ta chia thành chuỗi local transaction nhỏ, mỗi bước có compensating transaction để rollback nếu lỗi.

Choreography Saga: Các service tự lắng nghe event và phản ứng — phù hợp hệ thống đơn giản.

Orchestration Saga: Có một Saga Orchestrator điều phối toàn bộ luồng — dễ debug hơn, phù hợp luồng phức tạp.

Ví dụ: Đặt hàng → trừ tồn kho → trừ tiền → giao hàng. Nếu bước trừ tiền thất bại, orchestrator gọi compensating action để hoàn lại tồn kho.

2. Outbox Pattern — Đảm bảo event được gửi đi đúng

Vấn đề: Service lưu DB thành công nhưng publish event lên message broker lại thất bại → dữ liệu bất đồng bộ.

Giải pháp: Ghi event vào bảng outbox trong cùng một transaction với dữ liệu chính. Một tiến trình riêng (Debezium/CDC) sẽ đọc bảng outbox và publish lên Kafka/RabbitMQ. Đảm bảo at-least-once delivery.

3. Event Sourcing — Nguồn sự thật duy nhất

Thay vì lưu trạng thái hiện tại, lưu toàn bộ chuỗi sự kiện đã xảy ra. Trạng thái hiện tại được tái tạo bằng cách replay lại events. Lợi ích: audit log đầy đủ, dễ debug, có thể tái tạo dữ liệu tại bất kỳ thời điểm nào.

4. Idempotency — Tránh xử lý trùng lặp

Mỗi message/request cần có idempotency key (ví dụ: order_id + action). Service kiểm tra key này trước khi xử lý — nếu đã xử lý rồi thì bỏ qua. Quan trọng vì message broker thường đảm bảo at-least-once, không phải exactly-once.

5. Eventual Consistency — Chấp nhận và quản lý

Trong Microservices, strong consistency ở mọi nơi là không thực tế. Cần:

Thiết kế UI/UX chấp nhận dữ liệu có độ trễ nhỏ (ví dụ: "Đơn hàng đang xử lý...")

Dùng read-your-writes consistency cho trường hợp quan trọng

Monitoring lag giữa các service

6. Data Validation & Schema Governance

Schema Registry (Confluent Schema Registry): Enforce schema cho Kafka events, tránh breaking changes.

Contract Testing (Pact): Kiểm thử rằng producer và consumer đồng ý với nhau về format dữ liệu.

Validate dữ liệu tại input boundary của từng service, không tin tưởng dữ liệu từ service khác.

7. Monitoring & Reconciliation

Distributed tracing (Jaeger, Zipkin): Theo dõi luồng dữ liệu xuyên suốt các service.

Data reconciliation jobs: Định kỳ so sánh dữ liệu giữa các service để phát hiện bất đồng bộ.

Dead Letter Queue (DLQ): Các message lỗi được đưa vào DLQ để xử lý thủ công hoặc retry.

Tóm tắt kiến trúc

[Service A] → ghi Outbox → CDC (Debezium) → Kafka → [Service B]

↓ (cùng transaction)

[Local DB A]

Saga Orchestrator điều phối compensating transactions nếu lỗi

Schema Registry đảm bảo format event nhất quán

Idempotency key ngăn xử lý trùng

DLQ + Monitoring đảm bảo không mất dữ liệu
