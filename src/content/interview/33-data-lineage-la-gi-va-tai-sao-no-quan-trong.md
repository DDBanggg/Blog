---
title: 'Data Lineage là gì và tại sao nó quan trọng?'
description: 'Câu hỏi phỏng vấn Data Engineer: Data Lineage là gì và tại sao nó quan trọng?'
questionNumber: 33
category: 'data-governance'
tags:
  - data-lineage
  - data-governance
difficulty: 'intermediate'
publishedAt: 2026-07-25
sourceName: 'Threads / @3dongcode'
sourceUrl: 'https://www.threads.com/@3dongcode/post/DWyvi00lIg1'
draft: true
---

## Câu trả lời

Data Lineage (Dòng chảy dữ liệu) là khả năng theo dõi toàn bộ vòng đời của dữ liệu — từ nguồn gốc ban đầu, qua các bước biến đổi, cho đến đích cuối cùng. Nó trả lời câu hỏi: Dữ liệu này đến từ đâu? Đã đi qua những hệ thống nào? Đã bị thay đổi như thế nào?

Các thành phần cốt lõi

Source (Nguồn): Dữ liệu bắt đầu từ đâu — database, API, file CSV, IoT sensor...

Transformation (Biến đổi): Các bước xử lý — join, filter, aggregate, enrich...

Destination (Đích): Data warehouse, dashboard, ML model, báo cáo...

Metadata: Ai tạo ra, khi nào, version nào, schema gì...

Tại sao quan trọng trong Data Engineering?

1. Debug & Root Cause Analysis

Khi một dashboard hiển thị con số sai, lineage cho phép truy ngược ngay lập tức để tìm pipeline nào bị lỗi, thay vì mò mẫm qua hàng chục bước.

2. Impact Analysis

Khi cần thay đổi schema của một bảng nguồn, lineage cho biết có bao nhiêu downstream jobs, reports, hay models sẽ bị ảnh hưởng — tránh được các lỗi cascading.

3. Data Quality

Biết dữ liệu đi qua đâu giúp xác định điểm nào trong pipeline đang làm giảm chất lượng (null values tăng đột biến, duplicates xuất hiện...).

Tại sao quan trọng trong Compliance?

1. GDPR / PDPA (Bảo vệ dữ liệu cá nhân)

Khi người dùng yêu cầu xóa dữ liệu (right to erasure), doanh nghiệp phải biết dữ liệu đó đang nằm ở tất cả những đâu — lineage chính là bản đồ để thực thi điều này.

2. Audit Trail

Các ngành tài chính, y tế, ngân hàng yêu cầu chứng minh được rằng một con số trong báo cáo được tính toán như thế nào, từ nguồn nào — lineage cung cấp bằng chứng này.

3. Data Sovereignty

Một số quy định yêu cầu dữ liệu công dân không được rời khỏi lãnh thổ quốc gia. Lineage giúp kiểm tra dữ liệu có bị replicate sang region khác không.

Tóm lại

Data lineage không chỉ là tính năng "nice to have" — nó là nền tảng của data governance. Không có lineage, một tổ chức về cơ bản không biết dữ liệu của mình đang ở đâu và đã đi qua đâu, điều này vừa gây rủi ro kỹ thuật, vừa gây rủi ro pháp lý nghiêm trọng.
