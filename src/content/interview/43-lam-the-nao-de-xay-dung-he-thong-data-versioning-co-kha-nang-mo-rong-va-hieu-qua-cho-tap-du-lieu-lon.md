---
title: 'Làm thế nào để xây dựng hệ thống Data Versioning có khả năng mở rộng và hiệu quả cho tập dữ liệu lớn?'
description: 'Câu hỏi phỏng vấn Data Engineer: Làm thế nào để xây dựng hệ thống Data Versioning có khả năng mở rộng và hiệu quả cho tập dữ liệu lớn?'
questionNumber: 43
category: 'data-governance'
tags:
  - data-versioning
  - data-governance
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DXPDINTlKSY'
draft: false
---

## Câu trả lời

Vấn đề cốt lõi

Data versioning giải quyết bài toán: "Dữ liệu của tôi hôm qua trông như thế nào? Ai thay đổi gì? Tôi có thể rollback không?" — tương tự như Git cho code, nhưng phức tạp hơn vì dữ liệu có thể lên đến hàng TB.

1. Chọn chiến lược versioning phù hợp

Có 3 chiến lược chính, mỗi cái có đánh đổi khác nhau:

Full Snapshot (Toàn bộ bản sao)

Mỗi version lưu toàn bộ dataset. Đơn giản nhất nhưng tốn storage khủng khiếp. Chỉ phù hợp khi dataset nhỏ hoặc ít thay đổi.

Delta/Incremental (Chỉ lưu phần thay đổi)

Chỉ lưu diff giữa các version. Tiết kiệm storage nhưng khi restore phải reconstruct lại từng bước — càng nhiều version thì càng chậm. Đây là cách Git hoạt động.

Copy-on-Write (COW) (khuyến nghị cho big data)

Khi có thay đổi, chỉ copy block/file bị ảnh hưởng, phần còn lại dùng chung con trỏ (pointer) trỏ về dữ liệu cũ. Đây là nền tảng của Delta Lake, Apache Iceberg, Apache Hudi.

2. Kiến trúc tổng thể

┌─────────────────────────────────────────┐
│Metadata Layer │ ← Lưu version history, schema, lineage
├─────────────────────────────────────────┤
│ Storage Layer │ ← Parquet/ORC files trên S3/HDFS/GCS
├─────────────────────────────────────────┤
│ Transaction Log Layer │ ← Commit log (ai làm gì, lúc nào)
├─────────────────────────────────────────┤
│Catalog Layer │ ← Hive Metastore / AWS Glue / Nessie
└─────────────────────────────────────────┘

Metadata Layer là trái tim của hệ thống

Mỗi version phải lưu: version ID, timestamp, author, schema tại thời điểm đó, danh sách file thay đổi, checksum, và lineage (version này được tạo ra từ version nào).

4. Các kỹ thuật tối ưu hiệu năng

Partition-aware Versioning

Đừng version toàn bộ table — hãy version theo partition (ví dụ theo ngày). Khi chỉ có dữ liệu ngày hôm qua thay đổi, bạn chỉ cần tạo version mới cho partition đó.

Lazy Materialization

Không restore toàn bộ dataset ngay khi cần — chỉ reconstruct phần nào được query đến. Iceberg và Delta Lake đều làm điều này.

Metadata Caching

Transaction log và manifest files phải được cache aggressively. Đây là điểm nghẽn thường gặp khi có hàng nghìn version.

Compaction định kỳ

Sau nhiều lần delta, cần compact lại thành snapshot đầy đủ để tránh read amplification — tương tự VACUUM trong Delta Lake.

5. Time Travel — Tính năng then chốt

Hệ thống tốt phải cho phép query dữ liệu tại bất kỳ thời điểm nào trong quá khứ:

"Cho tôi xem dữ liệu sales của bảng orders vào ngày 1/1/2024"

"So sánh schema của table này 3 tháng trước với hiện tại"

"Rollback về version trước khi có bug ETL"

Để làm được điều này, không bao giờ được xóa file vật lý ngay lập tức — luôn dùng soft delete và có retention policy rõ ràng (ví dụ: giữ 90 ngày).

6. Schema Versioning — Thường bị bỏ quên

Data versioning không chỉ là version dữ liệu mà còn phải version schema. Cần xử lý:

Backward compatibility: Người đọc cũ vẫn đọc được dữ liệu mới

Forward compatibility: Người đọc mới đọc được dữ liệu cũ

Dùng Schema Registry (Confluent Schema Registry, AWS Glue Schema Registry) để quản lý evolution

7. Observability & Audit

Một hệ thống enterprise cần ghi lại đầy đủ:

Ai tạo version này (data lineage)

Tại sao (commit message, job ID, pipeline run ID)

Impact: Version này ảnh hưởng bao nhiêu row/partition

Alert khi có version bất thường (quá nhiều row bị xóa, schema break)

8. Retention Policy — Đừng giữ mãi

Giữ tất cả version mãi mãi sẽ phá vỡ hệ thống. Cần có chính sách rõ ràng:

Hot versions (7-30 ngày gần nhất): Giữ tất cả

Warm versions (30-90 ngày): Giữ daily snapshot

Cold versions (> 90 ngày): Chỉ giữ monthly hoặc xóa hẳn

Compliance exceptions: Một số version phải giữ theo luật (GDPR, SOX)
