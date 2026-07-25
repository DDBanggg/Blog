# Content Guide

## Tên file và slug

Đặt file theo thứ tự hai chữ số, slug chữ thường không dấu, dùng dấu gạch ngang và không có ký tự đặc biệt không cần thiết:

```text
01-data-engineer-la-gi.md
02-data-pipeline-la-gi.md
...
48-ten-cau-hoi.md
```

Số thứ tự trong file name và `questionNumber` phải khớp, trong khoảng 1–48.

## Frontmatter

Mỗi bài phải có `title`, `description`, `questionNumber`, `category`, `difficulty`, `publishedAt` và `draft`. `tags` mặc định rỗng. `updatedAt`, `sourceName`, `sourceUrl` là tuỳ chọn; URL phải hợp lệ. Dùng [template tham khảo](examples/interview-question.example.md) trước khi tạo bài.

## Cấu trúc bài interview

Sử dụng lần lượt `## Câu trả lời ngắn`, `## Giải thích chi tiết`, `## Ví dụ thực tế` khi phù hợp, và `## Tổng kết`. Chỉ có một `#` là title do hệ thống render; không thêm `#` trong nội dung Markdown.

## Ảnh

Đặt ảnh tĩnh tại `public/images/interview/` với tên mô tả không dấu. Thêm alt text mô tả thông tin ảnh; không dùng alt chung chung như “ảnh”. Chỉ dùng ảnh khi chúng giúp người đọc hiểu nội dung.

## Code, heading và link

Khai báo ngôn ngữ cho code block (ví dụ `sql`, `python`). Không bỏ qua cấp heading. Link nguồn bằng URL HTTPS khi có thể, kèm `sourceName`/`sourceUrl` trong frontmatter nếu là nguồn chính.

## Category, tag và draft

Category dùng tên nhất quán, tag viết thường và dấu gạch ngang. Đặt `draft: true` đến khi bài sẵn sàng xuất bản; chỉ chuyển `false` sau khi rà soát nội dung, link và metadata.

## Ngôn ngữ và chính tả

Viết tiếng Việt rõ ràng, ưu tiên thuật ngữ Data Engineering chuẩn và giải thích từ viết tắt ở lần đầu xuất hiện. Rà chính tả, dấu câu và tính nhất quán của tên công nghệ trước khi xuất bản.
