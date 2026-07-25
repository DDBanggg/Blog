---
title: 'Một số thành phần quan trọng của Hadoop là gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Một số thành phần quan trọng của Hadoop là gì?'
questionNumber: 11
category: 'big-data'
tags:
  - hadoop
  - big-data
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DVdxmzmEyl_'
draft: true
---

## Câu trả lời

Hadoop là một framework mã nguồn mở được thiết kế để xử lý và lưu trữ khối lượng dữ liệu khổng lồ (Big Data) một cách phân tán trên nhiều máy tính. Dưới đây là các thành phần cốt lõi và quan trọng của hệ sinh thái Hadoop:

1. HDFS (Hadoop Distributed File System) - Hệ thống file phân tán Đây là thành phần lưu trữ chính của Hadoop: Chức năng: Lưu trữ dữ liệu lớn được chia nhỏ thành các khối (blocks) và phân tán trên nhiều máy chủ. Kiến trúc: Gồm NameNode (quản lý metadata) và DataNode (lưu trữ dữ liệu thực tế). Đặc điểm: Có khả năng chịu lỗi cao nhờ sao chép dữ liệu (replication), thường là 3 bản sao. Ưu điểm: Xử lý được file cực lớn (hàng terabyte), truy cập tuần tự hiệu quả.

2. MapReduce - Framework xử lý dữ liệu Đây là mô hình lập trình để xử lý dữ liệu song song: Map phase: Chia nhỏ và xử lý dữ liệu thành các cặp key-value. Reduce phase: Tổng hợp và gộp kết quả từ Map phase. Đặc điểm: Tự động phân phối công việc, xử lý lỗi và cân bằng tải. Hạn chế: Tốc độ xử lý chậm hơn các công nghệ mới như Spark.

3. YARN (Yet Another Resource Negotiator) - Quản lý tài nguyên Hệ thống quản lý cluster và điều phối tài nguyên: ResourceManager: Quản lý tài nguyên toàn cluster. NodeManager: Quản lý tài nguyên trên từng node. ApplicationMaster: Điều phối các ứng dụng cụ thể. Vai trò: Cho phép nhiều framework khác nhau chạy đồng thời trên cùng cluster (MapReduce, Spark, Tez...).

4. Hadoop Common - Thư viện tiện ích Tập hợp các thư viện và utilities hỗ trợ các module Hadoop khác: Các file JAR và scripts cần thiết. Hệ thống xác thực và bảo mật. Các API và interfaces chung.

Bốn thành phần cốt lõi tạo nên nền tảng Hadoop là: HDFS (lưu trữ), MapReduce (xử lý), YARN (quản lý tài nguyên), và Hadoop Common (thư viện hỗ trợ). Hệ sinh thái Hadoop rất phong phú với nhiều công cụ bổ sung giúp xử lý đa dạng các bài toán Big Data, từ lưu trữ, xử lý batch, streaming, truy vấn SQL, đến quản lý workflow. Sự kết hợp linh hoạt của các thành phần này tạo nên một nền tảng mạnh mẽ cho Data Engineering hiện đại.
