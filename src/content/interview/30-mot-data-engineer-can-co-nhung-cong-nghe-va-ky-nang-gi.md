---
title: 'Một Data Engineer cần có những công nghệ và kỹ năng gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Một Data Engineer cần có những công nghệ và kỹ năng gì?'
questionNumber: 30
category: 'career'
tags:
  - data-engineering
  - career
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DWjWH7LFII3'
draft: false
---

## Câu trả lời

1. Nền tảng lập trình

Python là ngôn ngữ cốt lõi — dùng để xây dựng pipeline, xử lý dữ liệu, viết ETL script. Ngoài ra cần biết SQL ở mức thành thạo (không chỉ SELECT đơn giản mà phải viết được query phức tạp, tối ưu index, window function). Scala hoặc Java là lợi thế lớn nếu làm với Apache Spark.

2. ETL / Data Pipeline

Đây là trái tim của công việc Data Engineer — thiết kế luồng dữ liệu từ nguồn đến đích:

Apache Airflow — orchestrate và schedule pipeline

Apache Spark — xử lý dữ liệu phân tán, batch & streaming

Apache Kafka — xử lý dữ liệu real-time / event streaming

dbt (Data Build Tool) — transform dữ liệu trong data warehouse theo kiểu khai báo

3. Databases & Storage

Cần hiểu rõ sự khác biệt và biết khi nào dùng loại nào:

OLTP (PostgreSQL, MySQL) — lưu trữ giao dịch hàng ngày

OLAP / Data Warehouse (BigQuery, Snowflake, Redshift, ClickHouse) — phân tích dữ liệu lớn

Data Lake (AWS S3, Azure Data Lake, GCS) — lưu raw data ở mọi định dạng

NoSQL (MongoDB, Cassandra, Redis) — khi schema linh hoạt hoặc cần tốc độ cao

4. Cloud Platforms

Hầu hết hạ tầng dữ liệu hiện đại đều chạy trên cloud, cần thành thạo ít nhất một nền tảng:

AWS (S3, Glue, Redshift, Lambda, EMR)

Google Cloud (BigQuery, Dataflow, Pub/Sub)

Azure (Azure Data Factory, Synapse Analytics)

5. DevOps & Infrastructure

Data Engineer hiện đại không thể tách rời khỏi vận hành:

Docker & Kubernetes — đóng gói và deploy pipeline

Terraform / Infrastructure as Code — quản lý hạ tầng tự động

CI/CD (GitHub Actions, GitLab CI) — tự động hoá kiểm thử và deploy

Git — quản lý version code pipeline

6. Data Modeling & Architecture

Hiểu cách thiết kế dữ liệu là kỹ năng phân biệt senior với junior:

Star Schema / Snowflake Schema — mô hình cho data warehouse

Data Vault — mô hình cho hệ thống phức tạp, lịch sử lâu dài

Medallion Architecture (Bronze → Silver → Gold) — kiến trúc data lakehouse phổ biến hiện nay (Databricks)

7. Data Quality & Observability

Dữ liệu xấu còn tệ hơn không có dữ liệu:

Great Expectations, Soda — validate chất lượng dữ liệu tự động

Data lineage — truy vết nguồn gốc dữ liệu

Monte Carlo, Metaplane — monitoring và alerting khi dữ liệu bất thường

8. Soft Skills không thể thiếu

Tư duy hệ thống — nhìn toàn bộ luồng dữ liệu, không chỉ một bước

Giao tiếp với Data Analyst / Scientist — hiểu nhu cầu để thiết kế schema phù hợp

Tư duy về scalability — pipeline hôm nay xử lý 1GB, tháng sau có thể là 1TB

Documentation — pipeline không có tài liệu là pipeline của người khác
