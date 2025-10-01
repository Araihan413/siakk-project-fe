

# SIAKK - Sistem Asuhan Keperawatan Keluarga

Proyek ini merupakan aplikasi web berbasis **Next.js (App Router)** yang digunakan untuk dokumentasi dan manajemen **asuhan keperawatan keluarga**.  
Sistem ini ditujukan sebagai alat bantu mahasiswa keperawatan dalam melakukan praktik, pengkajian, diagnosa, dan dokumentasi asuhan keperawatan.

---

## Teknologi yang Digunakan

- [Next.js 14+](https://nextjs.org/) - React Framework dengan App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Superset dari JavaScript
- [Shadcn/UI](https://ui.shadcn.com/) - UI component library

---

## Struktur Folder

Struktur utama proyek:

```

app/
│
├─ layout.tsx              # Layout global untuk seluruh aplikasi
├─ page.tsx                # Halaman utama (landing page)
│
├─ auth/                  # Folder autentikasi
│   ├─ login/page.tsx     # Halaman login
│   └─ register/page.tsx  # Halaman registrasi
│
├─ dashboard/            # Halaman utama setelah login
│   ├─ layout.tsx        # Layout khusus dashboard (sidebar & navbar)
│   ├─ page.tsx          # Halaman dashboard utama (MainContent)
│   │
│   ├─ diagnosa/         # Modul diagnosa
│   │   └─ page.tsx
│   │
│   ├─ pengkajian/       # Modul pengkajian
│   │   └─ page.tsx
│   │
│   └─ evaluasi/         # Modul evaluasi (opsional)
│       └─ page.tsx
│
├─ components/
│   ├─ dashboard/        # Komponen untuk dashboard
│   │   ├─ Navbar.tsx
│   │   ├─ Sidebar.tsx
│   │   ├─ DashboardHeader.tsx
│   │   ├─ StatCards.tsx
│   │   └─ MainContent.tsx
│   │
│   └─ ui/              # Reusable UI components
│       └─ card.tsx
│
└─ lib/                 # Helper / utilitas
└─ utils.ts

````

---

## Alur Routing

- `/` → Halaman utama / landing page  
- `/auth/login` → Halaman login  
- `/dashboard` → Halaman dashboard utama  
- `/dashboard/diagnosa` → Halaman diagnosa  
- `/dashboard/pengkajian` → Halaman pengkajian  
- `/dashboard/evaluasi` → Halaman evaluasi  

Navigasi antar menu di dashboard hanya mengganti konten bagian tengah, **sidebar dan navbar tetap tampil**.

---

## Cara Menjalankan Proyek

1. Clone repository:
```bash
git clone https://github.com/username/siakk.git
cd siakk-fe
````

2. Install dependencies:

```bash
npm install
```

3. Jalankan server development:

```bash
npm run dev
```

4. Buka di browser:

```
http://localhost:3000
```

---

## Catatan

* Semua halaman setelah login berada di dalam folder `dashboard/`
* `layout.tsx` hanya ada dua:

  * `app/layout.tsx` → layout global
  * `app/dashboard/layout.tsx` → layout dashboard
* Setiap modul baru cukup menambahkan folder + `page.tsx` di dalam `dashboard/`.

---

