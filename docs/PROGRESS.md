# Progress Log

## 2026-07-25 — Khởi tạo nền móng dự án

- Mục tiêu: tạo static Astro blog và các quy ước để quản lý bộ 48 câu hỏi.
- Công việc đã thực hiện: khởi tạo Git branch `main`; thêm Astro, Tailwind, TypeScript strict, ESLint, Prettier, Content Collection `interview`, trang chủ tạm thời, template Markdown và hệ thống docs.
- File quan trọng đã thay đổi: `package.json`, `astro.config.mjs`, `src/content.config.ts`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `docs/`.
- Kết quả kiểm tra: `npm install`, `npm run format`, `npm run format:check`, `npm run lint`, `npm run check` và `npm run build` đều thành công. Build tạo `dist/index.html`, `dist/favicon.svg` và assets.
- Vấn đề còn tồn tại: 48 tệp nội dung nguồn ở `data-engineer-interview/noidung/` chưa được migrate vào collection.
- Bước tiếp theo: chuẩn hoá 48 tệp nội dung nguồn rồi migrate vào Content Collection ở Phase 1.
