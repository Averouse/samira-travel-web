# 🕋 Samira Travel - Website Agen Resmi

Website profil agen perjalanan Umroh & Haji resmi Samira Travel yang dibangun dengan fokus pada kecepatan, desain modern, dan kemudahan pengelolaan konten (brosur). Proyek ini dikembangkan menggunakan Astro v4 dan Tailwind CSS.

## 🚀 Fitur Utama

- **Responsive Design**: Optimal untuk tampilan Mobile (HP) dan Desktop
- **Flyer-Based Catalog**: Sistem katalog paket berbasis brosur gambar untuk memudahkan pembaruan harga dan paket tanpa menyentuh database
- **Modal Lightbox**: Penampil brosur halaman ganda (depan-belakang) dengan fitur zoom untuk keterbacaan teks yang lebih baik
- **Centralized Layout**: Menggunakan sistem MainLayout.astro untuk manajemen Favicon, SEO, dan Google Fonts yang efisien
- **Searchable Directory**: Fitur pencarian kantor cabang secara real-time
- **Trust Elements**: Integrasi video legalitas, edukasi syariah, dan daftar mitra (Maskapai & Hotel)

## 🛠️ Tech Stack
Framework: Astro v4 (Static Site Generator)
Styling: Tailwind CSS
Fonts: Playfair Display (Serif) & Plus Jakarta Sans (Sans)

## 📂 Struktur Folder
├── public/              # Gambar statis, favicon, dan brosur paket (.jpg/.png)
├── src/
│   ├── components/      # Potongan UI (Navbar, Footer, Hero, dll)
│   ├── layouts/         # MainLayout.astro (Bingkai utama website)
│   ├── pages/           # Halaman utama (.astro)
│   │   ├── index.astro         # Beranda
│   │   ├── paket-umroh.astro   # Galeri Paket Reguler
│   │   ├── paket-turki.astro   # Detail Paket Umroh Turki
│   │   ├── haji-furoda.astro   # Detail Haji Furoda
│   │   ├── hotel.astro         # Katalog Akomodasi
│   │   └── kantor-cabang.astro # Daftar Cabang & Filter Search
│   └── styles/
│       └── global.css   # Konfigurasi Tailwind v4 & Custom CSS
└── astro.config.mjs     # Konfigurasi utama Astro