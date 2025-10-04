# NatureCare • React Router + Axios Demo

Tuần 1 — hoàn thiện `my-router-app` với UI đẹp mắt, chủ đề skincare (NatureCare).

## Tính năng
- React Router v6: Layout/Outlet, NavLink active, route động `/products/:id`, 404.
- Axios call tới FakeStoreAPI, **fallback offline** nếu API lỗi.
- Tìm kiếm nhanh theo tên/category ở trang Products.
- Login giả lập (localStorage) + Protected Route `/dashboard`.
- UI dark mode tối giản, responsive, dùng CSS thuần.

## Chạy dự án
```bash
npm i
npm run dev
```

## Build & preview
```bash
npm run build
npm run preview
```

## Triển khai Vercel (gợi ý)
- Project Framework: **Vite**.
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment: mặc định là được.

> Nếu muốn domain chuyên nghiệp: vào Project Settings → Domains → add subdomain (vd: `naturecare-demo.vercel.app`) hoặc nối domain riêng của bạn.
