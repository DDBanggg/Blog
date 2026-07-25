# Product Requirements

## Vấn đề cần giải quyết

Tạo một nơi tập trung, có cấu trúc và dễ tra cứu cho 48 câu hỏi phỏng vấn Data Engineer bằng tiếng Việt.

## Đối tượng sử dụng

Người đang học, ôn luyện hoặc chuẩn bị phỏng vấn vị trí Data Engineer.

## Mục tiêu MVP

Xuất bản một blog tĩnh nhanh, dễ bảo trì, trong đó mỗi câu hỏi là một bài Markdown độc lập.

## Phạm vi MVP

- Blog tĩnh với 48 bài phỏng vấn Data Engineer.
- Trang chủ, danh sách câu hỏi và trang chi tiết bài viết.
- Điều hướng câu trước/câu sau, mục lục bài viết, category và tag.
- Responsive design, dark mode, SEO cơ bản.
- Tìm kiếm toàn văn ở giai đoạn sau của MVP.

## Ngoài phạm vi MVP

Database, đăng nhập, CMS, bình luận, newsletter, theo dõi tiến độ học, backend và trang quản trị.

## Các trang dự kiến

`/`, `/interview/`, `/interview/[slug]/`, cùng các trang category/tag khi nhu cầu điều hướng yêu cầu.

## Yêu cầu chức năng dự kiến

Đọc danh sách và bài viết, lọc/duyệt theo category-tag, xem mục lục, chuyển câu liền kề và tìm kiếm toàn văn sau này.

## Yêu cầu phi chức năng

Static-first, tải nhanh, semantic HTML, responsive, hỗ trợ dark mode, khả năng truy cập bàn phím cơ bản, SEO metadata và không theo dõi người dùng.

## Tiêu chí hoàn thành MVP

48 bài hợp lệ theo schema, các trang và điều hướng nêu trên hoạt động, build/check/lint/format thành công và sẵn sàng deploy Cloudflare Pages.
