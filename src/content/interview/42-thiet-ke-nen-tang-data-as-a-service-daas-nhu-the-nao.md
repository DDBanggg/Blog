---
title: 'Thiết kế nền tảng Data as a Service (DaaS) như thế nào?'
description: 'Câu hỏi phỏng vấn Data Engineer: Thiết kế nền tảng Data as a Service (DaaS) như thế nào?'
questionNumber: 42
category: 'data-architecture'
tags:
  - daas
  - data-architecture
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DXMgx6KFOJ9'
draft: false
---

## Câu trả lời

DaaS là gì?

DaaS là mô hình cung cấp dữ liệu như một dịch vụ — nghĩa là thay vì mỗi team/hệ thống tự thu thập và xử lý dữ liệu riêng, bạn xây dựng một nền tảng trung tâm cung cấp dữ liệu sạch, chuẩn hóa, có thể truy cập qua API hoặc query interface cho tất cả người dùng nội bộ lẫn bên ngoài.

1. Xác định yêu cầu và phạm vi (Requirements & Scope)

Trước tiên cần trả lời các câu hỏi nền tảng:

Ai là người dùng? — Internal teams (analytics, product), external partners, hay third-party developers?

Loại dữ liệu gì? — Structured, semi-structured, unstructured?

Tần suất truy cập? — Real-time, near real-time, hay batch?

SLA là gì? — Độ trễ tối đa cho phép, uptime yêu cầu?

Việc này quyết định toàn bộ kiến trúc phía sau.

2. 🏗️ Kiến trúc tổng thể (High-Level Architecture)

Một DaaS platform thường có 5 lớp chính:

[Data Sources] → [Ingestion Layer] → [Storage Layer] → [Serving Layer] → [Consumer]

↕

[Governance & Security Layer]

Lớp 1 — Data Ingestion

Kết nối đến mọi nguồn dữ liệu: databases, event streams, APIs, files

Dùng các công cụ như Kafka (streaming), Airbyte/Fivetran (batch/CDC), Spark Structured Streaming

Cần hỗ trợ cả batch lẫn real-time ingestion

Lớp 2 — Storage

Thiết kế theo mô hình Medallion Architecture (Bronze → Silver → Gold):

Bronze: Raw data, lưu nguyên bản, không transform

Silver: Cleaned, deduplicated, validated

Gold: Business-ready, aggregated, domain-specific

Lưu trữ bằng Data Lakehouse (Delta Lake, Apache Iceberg) để có cả tính linh hoạt của Data Lake và tính nhất quán của Data Warehouse.

Lớp 3 — Processing & Transformation

Dùng dbt cho transformation có version control

Apache Spark / Flink cho large-scale processing

Tách biệt rõ ELT (load trước, transform sau) thay vì ETL truyền thống

Lớp 4 — Serving Layer (đây là trái tim của DaaS)

Đây là điểm khác biệt lớn nhất giữa DaaS và một Data Warehouse thông thường. Bạn cần cung cấp nhiều interface:

REST/GraphQL API — cho applications và external consumers

SQL Query Interface — cho analysts (Trino, Presto, BigQuery)

Streaming API — cho real-time use cases (Kafka topics, WebSocket)

Data Subscription — consumer đăng ký nhận data khi có update

Lớp 5 — Governance & Security

Data Catalog: Apache Atlas, DataHub — để người dùng biết dữ liệu nào tồn tại

Access Control: Row-level, column-level security (Apache Ranger)

Data Lineage: Track dữ liệu đến từ đâu, qua những bước nào

PII Masking: Tự động phát hiện và che giấu thông tin nhạy cảm

3. Các nguyên tắc thiết kế quan trọng

API-First Design

Mọi dataset đều phải có API contract rõ ràng — versioned, documented, backward-compatible. Người dùng không cần biết storage bên dưới là gì.

Data Contracts

Đây là khái niệm cực kỳ quan trọng trong DaaS hiện đại: Producer cam kết schema, SLA, và data quality với Consumer. Dùng công cụ như Soda, Great Expectations để enforce.

Self-Service

Người dùng phải tự tìm được dữ liệu mình cần qua Data Catalog, không phải hỏi Data Engineer mỗi lần. Đây là điểm mà nhiều DaaS thất bại vì bỏ qua UX cho data consumers.

Multi-tenancy & Metering

Nếu serve nhiều team/khách hàng, cần isolate resources và đo lường usage theo từng tenant — vừa để billing, vừa để tránh noisy neighbor problem.

4. Lộ trình triển khai thực tế

Không nên build tất cả cùng lúc. Nên theo thứ tự:

MVP: Một vài dataset quan trọng nhất → REST API → Basic auth

Mở rộng: Thêm Data Catalog, tăng số lượng datasets, thêm SQL interface

Mature: Data Contracts, lineage tracking, self-service portal, metering/billing

Scale: Multi-region, advanced caching, federated query engine

Tóm lại

DaaS thành công không chỉ là bài toán kỹ thuật — mà còn là bài toán organizational: bạn phải thay đổi cách các team nghĩ về data ownership. Kỹ thuật tốt mà không có Data Contracts và governance rõ ràng thì DaaS vẫn sẽ trở thành một Data Swamp khác.
