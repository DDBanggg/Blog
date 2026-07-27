# Changelog

## [Unreleased]

### Added

- QA tĩnh cho route, internal link, responsive layout và accessibility cơ bản.
- Tìm kiếm toàn văn client-side từ search index được sinh lúc build.
- SEO metadata, canonical URL, Open Graph, RSS, robots.txt và sitemap.
- Trang `/interview/` và 48 trang chi tiết static với mục lục, metadata, nguồn và previous/next.
- Header, footer, skip link và navigation responsive cho layout dùng chung.
- 48 bài interview Markdown trong Content Collection `interview`, với frontmatter, category, tag, slug và link nguồn.
- Nền tảng Astro static site với TypeScript strict.
- Tailwind CSS 4 qua plugin Vite chính thức.
- ESLint, Prettier và các script kiểm tra chất lượng.
- Content Collection `interview` với validation frontmatter.
- Trang chủ tạm thời, BaseLayout và dark mode theo hệ thống.
- Tài liệu yêu cầu, kiến trúc, roadmap, task, progress, decision và content guide.
- Template Markdown interview ngoài collection.

### Changed

### Fixed

- Đồng bộ `package-lock.json` với npm 10.9.2 để Cloudflare Pages có thể chạy `npm ci`.
