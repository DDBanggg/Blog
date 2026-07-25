---
title: 'Biến đổi Dữ liệu (Data Transformation) là gì?'
description: 'Câu hỏi phỏng vấn Data Engineer: Biến đổi Dữ liệu (Data Transformation) là gì?'
questionNumber: 24
category: 'data-pipelines'
tags:
  - data-transformation
  - etl
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DWG9NjGlFIL'
draft: false
---

## Câu trả lời

Biến đổi Dữ liệu (Data Transformation) là quá trình chuyển đổi dữ liệu từ định dạng, cấu trúc hoặc giá trị ban đầu sang một định dạng, cấu trúc hoặc giá trị mới phù hợp hơn cho mục đích phân tích, lưu trữ hoặc sử dụng. Đây là bước trung tâm và quan trọng nhất trong quy trình ETL (Extract, Transform, Load) hoặc ELT (Extract, Load, Transform).

Tại sao cần Biến đổi Dữ liệu?

Chuẩn hóa dữ liệu: Dữ liệu từ nhiều nguồn khác nhau thường có định dạng không đồng nhất. Ví dụ: ngày tháng có thể là "DD/MM/YYYY" ở hệ thống này nhưng "YYYY-MM-DD" ở hệ thống khác.

Làm sạch dữ liệu: Loại bỏ các giá trị null, trùng lặp, không hợp lệ hoặc các outlier.

Tích hợp dữ liệu: Kết hợp dữ liệu từ nhiều nguồn khác nhau thành một định dạng thống nhất.

Tối ưu hiệu suất: Chuyển đổi dữ liệu sang cấu trúc phù hợp với việc truy vấn và phân tích nhanh hơn.

Tuân thủ quy định: Đảm bảo dữ liệu đáp ứng các yêu cầu về bảo mật, quyền riêng tư (như GDPR, mã hóa dữ liệu nhạy cảm).

Các loại Biến đổi Dữ liệu phổ biến

1. Biến đổi Cấu trúc (Structural Transformation)

Thay đổi schema hoặc cấu trúc của dữ liệu

Ví dụ: Chuyển từ JSON sang bảng quan hệ, từ wide format sang long format

Pivot và unpivot dữ liệu

2. Biến đổi Định dạng (Format Transformation)

Chuyển đổi kiểu dữ liệu: string sang integer, timestamp sang date

Chuẩn hóa định dạng: số điện thoại, địa chỉ email, mã bưu điện

Ví dụ: "01/15/2024" thành "2024-01-15"

3. Làm giàu Dữ liệu (Data Enrichment)

Thêm thông tin bổ sung từ nguồn khác

Ví dụ: Thêm thông tin địa lý dựa trên mã zip code

Join hoặc merge với các bảng tham chiếu

4. Tổng hợp và Tính toán (Aggregation & Calculation)

Tính toán các metrics mới: tổng, trung bình, tỷ lệ

Group by và summarize dữ liệu

Ví dụ: Tính tổng doanh thu theo tháng từ dữ liệu giao dịch hàng ngày

5. Lọc và Lựa chọn (Filtering & Selection)

Chọn các cột cần thiết (projection)

Lọc các hàng theo điều kiện (filtering)

Loại bỏ duplicates

6. Mã hóa và Chuẩn hóa (Encoding & Normalization)

One-hot encoding cho categorical variables

Normalization/Standardization cho numerical features

Hashing, tokenization cho text data

7. Xử lý Giá trị Thiếu (Missing Value Handling)

Điền giá trị mặc định

Sử dụng mean/median/mode

Forward fill hoặc backward fill

Loại bỏ các hàng có giá trị thiếu

8. Masking và Anonymization

Che giấu dữ liệu nhạy cảm (PII - Personally Identifiable Information)

Hash hoặc encrypt các trường như số thẻ tín dụng, CMND

Tokenization

Best Practices

Idempotency: Transformation nên cho kết quả giống nhau khi chạy nhiều lần với cùng input

Documentation: Ghi chép rõ ràng các quy tắc biến đổi

Validation: Kiểm tra data quality trước và sau khi transform

Incremental Processing: Xử lý chỉ dữ liệu mới thay vì toàn bộ mỗi lần

Error Handling: Xử lý exceptions và log các lỗi

Performance: Tối ưu hóa cho dữ liệu lớn (partitioning, parallel processing)

Biến đổi dữ liệu là nền tảng của Data Engineering, đảm bảo dữ liệu sạch, nhất quán và sẵn sàng cho các mục đích phân tích và machine learning.
