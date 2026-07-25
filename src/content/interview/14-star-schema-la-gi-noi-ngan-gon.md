---
title: 'Star Schema là gì, nói ngắn gọn?'
description: 'Câu hỏi phỏng vấn Data Engineer: Star Schema là gì, nói ngắn gọn?'
questionNumber: 14
category: 'data-modeling'
tags:
  - star-schema
  - data-warehouse
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DVqoH6UlHtz'
draft: true
---

## Câu trả lời

Star Schema (Lược đồ Sao) là một kiến trúc thiết kế cơ sở dữ liệu phổ biến trong Data Warehouse và Business Intelligence, được đặt tên như vậy vì cấu trúc của nó trông giống như một ngôi sao.

1. Bảng Fact (Bảng trung tâm): Nằm ở trung tâm của "ngôi sao". Chứa dữ liệu số liệu (metrics) cần phân tích như doanh thu, số lượng bán, chi phí. Chứa các khóa ngoại (foreign keys) liên kết đến các bảng Dimension. Thường có số lượng bản ghi rất lớn. Ví dụ: bảng "Sales_Fact" chứa thông tin về mỗi giao dịch bán hàng.

2. Bảng Dimension (Các tia sao): Là các bảng bao quanh bảng Fact. Chứa thông tin mô tả, ngữ cảnh về các chiều phân tích. Thường chứa ít bản ghi hơn bảng Fact. Ví dụ: bảng "Customer" (thông tin khách hàng), "Product" (thông tin sản phẩm), "Time" (thời gian), "Location" (địa điểm).

Đặc điểm chính: Đơn giản và dễ hiểu: Cấu trúc một tầng, không phức tạp, dễ hình dung. Hiệu suất truy vấn cao: Số lượng JOIN ít (chỉ cần JOIN giữa Fact và Dimension), giúp query nhanh. Phi chuẩn hóa: Các bảng Dimension thường được phi chuẩn hóa (denormalized) để tối ưu tốc độ đọc. Phù hợp với OLAP: Rất tốt cho các phân tích đa chiều và báo cáo.

Ví dụ thực tế: Giả sử bạn phân tích doanh số bán hàng: Bảng Fact_Sales (trung tâm): chứa sales_amount, quantity, profit. Bảng Dim_Customer: thông tin khách hàng (tên, địa chỉ, phân loại). Bảng Dim_Product: thông tin sản phẩm (tên, loại, nhà sản xuất). Bảng Dim_Time: thông tin thời gian (ngày, tháng, quý, năm). Bảng Dim_Store: thông tin cửa hàng (tên, vị trí, khu vực).

So sánh với Snowflake Schema: Star Schema khác với Snowflake Schema ở chỗ các bảng Dimension trong Star Schema được phi chuẩn hóa hoàn toàn, trong khi Snowflake Schema chuẩn hóa các bảng Dimension thành nhiều bảng con, tạo thành cấu trúc phức tạp hơn nhưng tiết kiệm không gian lưu trữ hơn. Kết luận: Star Schema là lựa chọn ưu tiên cho hầu hết các hệ thống Data Warehouse nhờ sự đơn giản, hiệu suất cao và dễ bảo trì.
