---
title: 'Data Lake là gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Data Lake là gì?'
questionNumber: 16
category: 'data-storage'
tags:
  - data-lake
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DVvxNuLkwTl'
draft: false
---

## Câu trả lời

Data Lake (Hồ dữ liệu) là một kho lưu trữ tập trung cho phép bạn lưu trữ tất cả các loại dữ liệu ở quy mô lớn - cả dữ liệu có cấu trúc (structured) và không có cấu trúc (unstructured) - ở dạng thô, nguyên bản của chúng. Dữ liệu được lưu trữ mà không cần phải định nghĩa cấu trúc hay schema trước.

1. Lưu trữ dữ liệu thô (Raw data)

Dữ liệu được lưu trữ ở dạng gốc, chưa qua xử lý

Không cần biến đổi hay làm sạch dữ liệu trước khi lưu

Giữ nguyên định dạng ban đầu của dữ liệu

2. Đa dạng loại dữ liệu

Structured data: Dữ liệu từ database, bảng tính, CSV

Semi-structured data: JSON, XML, log files

Unstructured data: Hình ảnh, video, audio, văn bản tự do, email

3. Quy mô lớn (Massive scale)

Có thể lưu trữ hàng petabyte dữ liệu

Chi phí lưu trữ thấp hơn nhiều so với Data Warehouse

Thường sử dụng distributed storage như HDFS, AWS S3, Azure Data Lake Storage

4. Schema-on-read

Schema (cấu trúc) chỉ được áp dụng khi đọc dữ liệu, không phải khi ghi

Linh hoạt cho phép nhiều use case khác nhau từ cùng một nguồn dữ liệu

Trái ngược với Data Warehouse sử dụng schema-on-write

Kiến trúc điển hình

Data Lake thường được tổ chức theo các zones/layers:

Raw Zone: Dữ liệu thô từ nguồn

Cleansed/Refined Zone: Dữ liệu đã được làm sạch

Curated/Trusted Zone: Dữ liệu đã được biến đổi, tổng hợp

Sandbox: Khu vực thử nghiệm cho data scientists

Use cases phổ biến

Machine Learning: Training models với large datasets

Advanced Analytics: Phân tích dữ liệu phức tạp, exploratory analysis

Real-time Analytics: Phân tích streaming data

Data Archive: Lưu trữ dữ liệu lịch sử với chi phí thấp

IoT Data: Lưu trữ dữ liệu từ sensors, devices

Thách thức với Data Lake

1. Data Swamp (Vũng lầy dữ liệu)

Nếu không quản lý tốt, Data Lake có thể trở thành "bãi rác" dữ liệu

Thiếu metadata, documentation khiến dữ liệu khó tìm và sử dụng

2. Governance & Security

Khó kiểm soát quyền truy cập

Cần có data catalog và metadata management tốt

3. Data Quality

Dữ liệu thô có thể chứa nhiều lỗi

Cần có quy trình validation và quality checks

Các công nghệ phổ biến

Cloud Storage: AWS S3, Azure Data Lake Storage, Google Cloud Storage

On-premise: Hadoop HDFS

Processing: Apache Spark, Apache Flink

Governance: Apache Atlas, AWS Glue Data Catalog

Formats: Parquet, ORC, Avro (columnar formats tối ưu cho analytics)

Kết luận

Data Lake là giải pháp lưu trữ hiện đại cho phép tổ chức lưu giữ mọi loại dữ liệu với chi phí thấp và linh hoạt cao. Tuy nhiên, để thành công cần có chiến lược quản lý dữ liệu rõ ràng, tránh biến nó thành "data swamp". Trong thực tế, nhiều tổ chức kết hợp cả Data Lake và Data Warehouse để tận dụng ưu điểm của cả hai - được gọi là Data Lakehouse.
