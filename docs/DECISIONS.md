# Architecture Decision Log

## ADR-001 — Dùng Astro

- Ngày: 2026-07-25
- Trạng thái: Accepted
- Bối cảnh: Website chủ yếu xuất bản nội dung tĩnh.
- Quyết định: Dùng Astro làm framework xây dựng.
- Lý do: Static-first, phù hợp Markdown và không cần framework UI client.
- Hệ quả: Ưu tiên component `.astro` và chỉ thêm client JavaScript khi cần.

## ADR-002 — Dùng Markdown Content Collections

- Ngày: 2026-07-25
- Trạng thái: Accepted
- Bối cảnh: 48 bài cần metadata thống nhất và validation khi build.
- Quyết định: Lưu bài trong Astro Content Collection `interview`.
- Lý do: Markdown dễ bảo trì, schema tập trung và không cần CMS.
- Hệ quả: Mỗi bài phải có frontmatter hợp lệ theo `src/content.config.ts`.

## ADR-003 — Không dùng database cho MVP

- Ngày: 2026-07-25
- Trạng thái: Accepted
- Bối cảnh: Nội dung là tập Markdown hữu hạn, không có dữ liệu người dùng.
- Quyết định: Không dùng database.
- Lý do: Giảm vận hành, chi phí và độ phức tạp.
- Hệ quả: Tính năng động như tiến độ học không thuộc MVP.

## ADR-004 — Static-site generation

- Ngày: 2026-07-25
- Trạng thái: Accepted
- Bối cảnh: Website không cần server-side runtime.
- Quyết định: Build output tĩnh bằng Astro.
- Lý do: Hiệu năng tốt và triển khai đơn giản.
- Hệ quả: Nội dung thay đổi yêu cầu build/deploy lại.

## ADR-005 — Cloudflare Pages là mục tiêu deploy

- Ngày: 2026-07-25
- Trạng thái: Accepted
- Bối cảnh: Cần hosting miễn phí cho static site.
- Quyết định: Nhắm tới Cloudflare Pages ở phase deploy.
- Lý do: Phù hợp output tĩnh và workflow Git.
- Hệ quả: Chưa thêm cấu hình deploy ở Phase 0.

## ADR-006 — Dùng npm

- Ngày: 2026-07-25
- Trạng thái: Accepted
- Bối cảnh: Cần package manager và lockfile dễ tiếp cận.
- Quyết định: Dùng npm với `package-lock.json`.
- Lý do: Có sẵn trong môi trường Node.js và đúng yêu cầu dự án.
- Hệ quả: Toàn bộ lệnh dependency dùng npm cục bộ.

## ADR-007 — Dùng TypeScript strict

- Ngày: 2026-07-25
- Trạng thái: Accepted
- Bối cảnh: Dự án sẽ mở rộng thêm route và xử lý content.
- Quyết định: Kế thừa Astro strict TypeScript config.
- Lý do: Phát hiện lỗi sớm và giữ code dễ bảo trì.
- Hệ quả: Không dùng `any` nếu không có lý do rõ ràng.
