# Progress Log

## 2026-07-27 — Hoàn thành QA và Cloudflare Pages deployment

- Mục tiêu: xác nhận static site sẵn sàng phát hành trên Cloudflare Pages.
- Công việc đã thực hiện: kiểm tra build output, 48 route bài viết, RSS, sitemap, robots, responsive breakpoints, accessibility cơ bản và toàn bộ internal link; xác nhận deployment Cloudflare Pages thành công từ người quản lý dự án.
- File quan trọng đã thay đổi: `README.md`, `docs/ROADMAP.md`, `docs/TASKS.md`, `docs/CHANGELOG.md`.
- Kết quả kiểm tra: build output có 50 trang; 55 internal link đều hợp lệ; RSS có 48 item và search index có 48 entry. Deployment production được người quản lý dự án xác nhận thành công.
- Vấn đề còn tồn tại: chưa có URL production trong nhật ký để thực hiện kiểm tra HTTP từ môi trường này; cần bảo đảm `site` trong `astro.config.mjs` khớp URL cuối cùng.
- Bước tiếp theo: đánh giá Phase 6 theo phản hồi người đọc và nhu cầu cải tiến.

## 2026-07-25 — Đồng bộ lockfile cho Cloudflare Pages

- Mục tiêu: khắc phục lỗi `npm ci` trên Cloudflare Pages.
- Công việc đã thực hiện: tái tạo `package-lock.json` bằng npm 10.9.2, nới ràng buộc npm của project để tương thích npm 10.9+ và xác minh bằng clean install.
- File quan trọng đã thay đổi: `package.json`, `package-lock.json`, `docs/CHANGELOG.md`.
- Kết quả kiểm tra: `npx npm@10.9.2 ci` và `npx npm@10.9.2 run build` đều thành công.
- Vấn đề còn tồn tại: cần push commit sửa lockfile để Cloudflare Pages thực hiện deployment mới.
- Bước tiếp theo: push `main`, theo dõi build Pages và xác nhận URL production.

## 2026-07-25 — Thêm search, SEO, sitemap và RSS

- Mục tiêu: cải thiện khả năng tìm thấy, subscribe và index website.
- Công việc đã thực hiện: tạo search index JSON tại build time và ô tìm kiếm toàn văn; thêm canonical, Open Graph, RSS discovery, `robots.txt`, `rss.xml` và sitemap chính thức của Astro.
- File quan trọng đã thay đổi: `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `src/pages/interview/index.astro`, `src/pages/search-index.json.ts`, `src/pages/rss.xml.ts`, `src/pages/robots.txt.ts`.
- Kết quả kiểm tra: format, lint, Astro check và build thành công. Build xác minh search index có 48 entry, RSS có 48 item, sitemap có index và 49 URL interview.
- Vấn đề còn tồn tại: URL chuẩn đang là hostname Cloudflare Pages tạm thời `https://data-engineering-interview-blog.pages.dev`.
- Bước tiếp theo: thay URL chuẩn bằng domain deploy thật, thực hiện QA và deploy Cloudflare Pages ở Phase 5.

## 2026-07-25 — Xuất bản danh sách và trang chi tiết interview

- Mục tiêu: tạo route tĩnh để người đọc duyệt và đọc 48 câu hỏi.
- Công việc đã thực hiện: tạo `/interview/`, `/interview/[slug]/`, metadata bài viết, category/tag, mục lục, nguồn, previous/next và style Markdown; chuyển 48 entry từ `draft: true` sang `draft: false` vì các route đã sẵn sàng xuất bản.
- File quan trọng đã thay đổi: `src/pages/interview/index.astro`, `src/pages/interview/[slug].astro`, `src/utils/interview.ts`, `src/components/layout/SiteHeader.astro`, `src/pages/index.astro`, `src/content/interview/*.md`.
- Kết quả kiểm tra: `npm run format`, `npm run format:check`, `npm run lint`, `npm run check` và `npm run build` đều thành công. Build sinh 50 trang tĩnh, gồm 48 bài interview.
- Vấn đề còn tồn tại: chưa có tìm kiếm toàn văn, sitemap hoặc RSS.
- Bước tiếp theo: thực hiện Search, SEO và RSS ở Phase 4.

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
