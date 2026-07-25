---
title: 'Định nghĩa Data Modeling (Mô hình hóa Dữ liệu)?'
description: 'Câu hỏi phỏng vấn Data Engineer: Định nghĩa Data Modeling (Mô hình hóa Dữ liệu)?'
questionNumber: 7
category: 'data-modeling'
tags:
  - data-modeling
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DVOTu6hk-r4'
draft: false
---

## Câu trả lời

Data Modeling (Mô hình hóa Dữ liệu) là quá trình tạo ra một biểu diễn trực quan về cấu trúc dữ liệu của một hệ thống thông tin. Nó giống như việc vẽ bản thiết kế kiến trúc trước khi xây nhà vậy - bạn cần phác thảo rõ ràng dữ liệu sẽ được tổ chức như thế nào trước khi bắt đầu xây dựng cơ sở dữ liệu thực sự.

Mục đích chính: Tổ chức dữ liệu một cách logic: Xác định các thực thể (entities) là gì, chúng có thuộc tính (attributes) gì, và mối quan hệ (relationships) giữa chúng ra sao. Ví dụ: trong hệ thống bán hàng, bạn có "Khách hàng", "Đơn hàng", "Sản phẩm" - và cần định nghĩa rõ một khách hàng có thể có nhiều đơn hàng, mỗi đơn hàng chứa nhiều sản phẩm.

Đảm bảo tính nhất quán: Giúp loại bỏ dữ liệu trùng lặp và mâu thuẫn. Nếu thông tin địa chỉ khách hàng được lưu ở nhiều nơi khác nhau mà không có quy tắc rõ ràng, bạn sẽ gặp rắc rối khi cập nhật. Cải thiện hiệu suất: Một mô hình dữ liệu tốt giúp truy vấn nhanh hơn, tối ưu hóa lưu trữ và giảm thiểu xung đột khi nhiều người dùng truy cập đồng thời.

Ba cấp độ mô hình hóa: Conceptual Model (Mô hình Khái niệm): Đây là cấp độ cao nhất, trừu tượng nhất. Nó tập trung vào "CÁI GÌ" - những thực thể nào tồn tại và quan hệ giữa chúng, không quan tâm đến chi tiết kỹ thuật. Dành cho các stakeholder, business analyst để hiểu tổng quan.

Logical Model (Mô hình Logic): Chi tiết hơn một chút, định nghĩa cấu trúc dữ liệu với các thuộc tính, kiểu dữ liệu, khóa chính, khóa ngoại nhưng vẫn độc lập với công nghệ cụ thể. Nó trả lời câu hỏi "NHƯ THẾ NÀO" về mặt cấu trúc. Physical Model (Mô hình Vật lý): Cấp độ thấp nhất, cụ thể cho từng hệ quản trị cơ sở dữ liệu (MySQL, PostgreSQL, MongoDB...). Bao gồm cả indexes, partitions, storage parameters - những thứ ảnh hưởng trực tiếp đến hiệu suất.

Các kỹ thuật phổ biến: Entity-Relationship Diagram (ERD): Sơ đồ thực thể - mối quan hệ, được dùng rất phổ biến cho cơ sở dữ liệu quan hệ. Bạn có hình chữ nhật đại diện cho thực thể, hình thoi cho quan hệ, và các đường nối chúng lại.

Normalization: Quá trình chuẩn hóa để loại bỏ dư thừa dữ liệu, đảm bảo tính toàn vẹn. Có các cấp độ từ 1NF đến 5NF, nhưng thực tế thường áp dụng đến 3NF là đủ cho hầu hết trường hợp. Star Schema và Snowflake Schema: Dùng trong data warehouse, với fact tables ở giữa và dimension tables xung quanh, giúp phân tích dữ liệu nhanh chóng.
