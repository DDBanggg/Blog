# Progress Log

## 2026-07-25 — Xây layout dùng chung và điều hướng cơ bản

- Mục tiêu: tạo khung giao diện tái sử dụng cho các trang blog trong Phase 3.
- Công việc đã thực hiện: thêm `SiteHeader`, `SiteFooter`, skip link, navigation theo anchor hợp lệ, layout responsive và dark mode theo `prefers-color-scheme`; cập nhật trang chủ để phản ánh trạng thái 48 bài draft.
- File quan trọng đã thay đổi: `src/components/layout/SiteHeader.astro`, `src/components/layout/SiteFooter.astro`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`.
- Kết quả kiểm tra: `npm run format`, `npm run format:check`, `npm run lint`, `npm run check` và `npm run build` đều thành công.
- Vấn đề còn tồn tại: chưa có route danh sách hoặc route chi tiết bài interview.
- Bước tiếp theo: xây `/interview/` và `/interview/[slug]/` ở Phase 3.

## 2026-07-25 — Chuẩn hoá và migrate nội dung phỏng vấn

- Mục tiêu: chuyển 48 bài nội dung nguồn sang Astro Content Collection `interview`.
- Công việc đã thực hiện: trích xuất câu hỏi, URL nguồn và phần trả lời từ 48 tệp nguồn; tạo tên file theo tiền tố hai chữ số, frontmatter hợp lệ, category, tags và slug không dấu trong `src/content/interview/`. Tất cả bài được giữ `draft: true`; không có ảnh nguồn để migrate.
- File quan trọng đã thay đổi: `src/content/interview/01-*.md` đến `src/content/interview/48-*.md`, `README.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, `docs/CHANGELOG.md`.
- Kết quả kiểm tra: `npm run check` xác thực 48 content entry với 0 errors, 0 warnings, 0 hints.
- Vấn đề còn tồn tại: chưa có route, trang danh sách hoặc trang chi tiết để xuất bản các bài draft.
- Bước tiếp theo: xây blog layout và navigation ở Phase 2.

## 2026-07-25 — Khởi tạo nền móng dự án

- Mục tiêu: tạo static Astro blog và các quy ước để quản lý bộ 48 câu hỏi.
- Công việc đã thực hiện: khởi tạo Git branch `main`; thêm Astro, Tailwind, TypeScript strict, ESLint, Prettier, Content Collection `interview`, trang chủ tạm thời, template Markdown và hệ thống docs.
- File quan trọng đã thay đổi: `package.json`, `astro.config.mjs`, `src/content.config.ts`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `docs/`.
- Kết quả kiểm tra: `npm install`, `npm run format`, `npm run format:check`, `npm run lint`, `npm run check` và `npm run build` đều thành công. Build tạo `dist/index.html`, `dist/favicon.svg` và assets.
- Vấn đề còn tồn tại: 48 tệp nội dung nguồn ở `data-engineer-interview/noidung/` chưa được migrate vào collection.
- Bước tiếp theo: chuẩn hoá 48 tệp nội dung nguồn rồi migrate vào Content Collection ở Phase 1.
