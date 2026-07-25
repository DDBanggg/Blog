---
title: 'Giải thích những phức tạp trong việc di chuyển dữ liệu giữa các nhà cung cấp đám mây khác nhau và các chiến lược để giảm thiểu thời gian ngừng hoạt động và mất dữ liệu.'
description: 'Câu hỏi phỏng vấn Data Engineer: Giải thích những phức tạp trong việc di chuyển dữ liệu giữa các nhà cung cấp đám mây khác nhau và các chiến lược để giảm thiểu thời gian ngừng hoạt động và mất dữ liệu.'
questionNumber: 39
category: 'cloud-data-engineering'
tags:
  - cloud-migration
  - data-migration
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DXCMFbVlH-s'
draft: true
---

## Câu trả lời

Những phức tạp chính (Complications)1. Sự không tương thích về định dạng và giao thức (Format & Protocol Incompatibility)

Mỗi nhà cung cấp cloud (AWS, GCP, Azure) có định dạng lưu trữ, serialization format và API riêng. Ví dụ:

AWS dùng Parquet trên S3 với Glue Catalog

GCP dùng BigQuery storage format độc quyền

Azure dùng Azure Data Lake với Delta Lake

Khi migrate, bạn phải chuyển đổi schema, format và đảm bảo không mất metadata trong quá trình đó.

2. Băng thông và chi phí egress (Network Bandwidth & Egress Cost)

Đây là cạm bẫy lớn nhất mà nhiều team bỏ qua. Các cloud provider tính phí rất cao cho dữ liệu đi ra khỏi hệ thống của họ (egress fee). Với petabyte dữ liệu, chi phí này có thể lên đến hàng triệu USD. Ngoài ra, băng thông thực tế qua internet không đảm bảo tốc độ ổn định.

3. Tính nhất quán dữ liệu (Data Consistency)

Trong khi migration đang diễn ra, hệ thống nguồn vẫn đang hoạt động và ghi dữ liệu mới. Điều này gây ra vấn đề:

Dữ liệu bị split — một phần ở cloud cũ, một phần ở cloud mới

Transactional consistency bị phá vỡ nếu có các bảng liên quan nhau

Change Data Capture (CDC) phức tạp khi phải track mọi thay đổi real-time

4. Bảo mật và tuân thủ (Security & Compliance)

Mã hóa khác nhau: Key Management System (KMS) của mỗi cloud không tương thích — bạn phải re-encrypt toàn bộ dữ liệu

IAM policies phải được tái thiết kế hoàn toàn

Dữ liệu sensitive (PII, HIPAA, GDPR) không được phép trung chuyển qua internet tùy theo quy định

Data residency — dữ liệu phải nằm ở một region địa lý cụ thể

5. Dependency và tích hợp ngược dòng (Upstream/Downstream Dependencies)

Pipeline của bạn không tồn tại độc lập. Có thể có:

Hàng chục ETL jobs, dashboards, ML models đang đọc từ hệ thống cũ

Connection strings, credentials, endpoints bị hardcode ở nhiều nơi

Third-party tools (Fivetran, dbt, Tableau) cần được reconfigure

Các chiến lược giảm thiểu downtime và mất dữ liệu

Chiến lược 1: Incremental Migration với CDC

Thay vì di chuyển toàn bộ dữ liệu một lần (Big Bang), hãy dùng Change Data Capture:

Migrate toàn bộ historical data trước (bulk load)

Sau đó dùng CDC tools (Debezium, AWS DMS, Striim) để sync liên tục những thay đổi từ source sang destination

Khi sẵn sàng cutover, gap giữa hai hệ thống là tối thiểu (vài giây đến vài phút)

Chiến lược 2: Dual-Write Pattern

Trong giai đoạn chuyển tiếp, ứng dụng ghi đồng thời vào cả hai cloud:

Đảm bảo không mất dữ liệu mới trong quá trình migration

Cho phép validate dữ liệu trên hệ thống mới trước khi chính thức cutover

Nhược điểm: tốn tài nguyên và cần xử lý consistency giữa hai nơi

Chiến lược 3: Blue-Green Migration

Tương tự Blue-Green Deployment trong software:

Blue = cloud cũ (đang production)

Green = cloud mới (đang được build và validate)

Khi green sẵn sàng, chuyển traffic 100% trong một lần duy nhất

Nếu có vấn đề, rollback ngay về blue mà không mất dữ liệu

Chiến lược 4: Strangler Fig Pattern cho Pipeline

Thay vì migrate toàn bộ hệ thống cùng lúc, hãy di chuyển từng pipeline một:

Bắt đầu từ các pipeline ít quan trọng, ít dependency

Dần dần "bóp nghẹt" hệ thống cũ bằng cách chuyển từng phần sang cloud mới

Cuối cùng hệ thống cũ không còn được dùng nữa và bị tắt

Chiến lược 5: Validation và Data Quality Checks liên tục

Trong suốt quá trình migration, phải có automated data validation:

Row count reconciliation — số dòng phải khớp

Checksum/hash verification — nội dung dữ liệu không bị thay đổi

Statistical profiling — distribution của các cột phải tương đương

Business rule validation — các KPI/metric phải cho kết quả giống nhau trên cả hai hệ thống

Chiến lược 6: Sử dụng Cloud-Agnostic Intermediary

Dùng một lớp trung gian không phụ thuộc vào cloud cụ thể:

Apache Iceberg / Delta Lake / Hudi làm storage format trung lập

Apache Kafka làm message bus trung gian

dbt cho transformation layer độc lập với warehouse

Điều này giúp tránh vendor lock-in và dễ dàng migrate lần sau hơn

Thứ tự ưu tiên khi thực hiện:

Inventory & dependency mapping trước tiên

Thiết lập CDC/replication sớm để giảm gap

Validate liên tục, không chờ đến cuối

Cutover vào thời điểm traffic thấp nhất

Giữ hệ thống cũ chạy song song ít nhất 1-2 tuần sau cutover để có thể rollback
