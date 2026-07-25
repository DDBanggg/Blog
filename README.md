# Data Engineering Interview Blog

Blog tĩnh cá nhân để hệ thống hoá và chia sẻ kiến thức qua 48 câu hỏi phỏng vấn Data Engineer.

## Mục tiêu và phạm vi MVP

MVP sẽ cung cấp trang chủ, danh sách câu hỏi, trang bài viết Markdown, điều hướng câu trước/sau, mục lục, category, tag, thiết kế responsive, dark mode và SEO cơ bản. Tìm kiếm toàn văn được thực hiện ở giai đoạn sau của MVP. Dự án không dùng database, backend, CMS, đăng nhập hay trang quản trị.

## Công nghệ

- Astro và Astro Content Collections
- TypeScript strict mode
- Tailwind CSS 4 qua plugin Vite chính thức
- ESLint và Prettier
- Markdown, npm và Node.js LTS

## Yêu cầu môi trường

- Node.js 24.16+ LTS (xem `.nvmrc`)
- npm 11

## Cài đặt và chạy

```bash
npm install
npm run dev
```

Tạo production build và xem trước:

```bash
npm run build
npm run preview
```

Kiểm tra chất lượng:

```bash
npm run format:check
npm run lint
npm run check
```

## Cấu trúc rút gọn

```text
src/
  content/interview/  # Bài Markdown sẽ xuất bản
  layouts/            # Layout dùng chung
  pages/              # Routes Astro
  styles/             # CSS toàn cục và Tailwind
docs/                 # Yêu cầu, kiến trúc, roadmap và nhật ký
public/               # Tài nguyên tĩnh
```

Xem [tài liệu dự án](docs/README.md) để biết đầy đủ quy ước và kế hoạch.

## Nguyên tắc cập nhật tài liệu

Sau mỗi bước lớn, cập nhật `docs/PROGRESS.md`, trạng thái và checkbox trong `docs/ROADMAP.md`/`docs/TASKS.md`, cùng `docs/CHANGELOG.md` khi có thay đổi đáng kể. Không ghi nhận hạng mục là hoàn thành khi chưa được kiểm tra.

## Trạng thái hiện tại

Phase 0 và Phase 1 đã hoàn thành: dự án Astro, Content Collection `interview`, 48 bài Markdown đã được chuẩn hoá, trang tạm thời, cấu hình chất lượng và hệ thống tài liệu đã sẵn sàng. Các bài hiện ở trạng thái draft; Cloudflare Pages là mục tiêu deploy ở bước sau.
