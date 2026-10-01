# SMK PINTAR - SMK 17 MUNCAR
## Game Interaktif Pengenalan Coding RPL — GitHub Ready

### Fitur
- Responsive mobile-first dan touchscreen Android.
- Registrasi akun + login otomatis.
- Progress 31 level.
- 3 misi setiap level = 93 misi.
- Level 1–5: Pengenalan Dasar Coding.
- Level 6–10: Pengenalan Mendalam Coding.
- Level 11–15: Membuat Aplikasi Berbasis Web.
- Level 16–20: Membuat Aplikasi Berbasis Android.
- Level 21–25: Membuat Aplikasi Berbasis EXE/Desktop.
- Level 26–30: Pengenalan Mahir Coding.
- Level 31: refleksi harapan belajar RPL dan evaluasi penyampaian pembelajaran Pak Willy.
- Nilai dan progres tersimpan di localStorage.
- Hasil penyelesaian setiap level dapat dikirim ke Google Sheets.
- Dashboard admin + export CSV data lokal.

## Upload ke GitHub Pages
1. Buat repository GitHub, misalnya `smk-pintar-rpl`.
2. Upload `index.html`, `style.css`, `app.js`, `config.js`.
3. Commit.
4. Settings → Pages → Deploy from branch → pilih `main` dan `/root`.
5. Buka URL GitHub Pages.

## Hubungkan Google Sheets
1. Buat Google Sheet kosong.
2. Extensions → Apps Script.
3. Tempel isi `google-apps-script.gs`.
4. Ganti `ADMIN_USER` dan `ADMIN_PASS`.
5. Deploy → New deployment → Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Salin URL `/exec`.
9. Buka `config.js`.
10. Isi:
   `GOOGLE_SHEETS_API: "URL_WEB_APP_ANDA"`
11. Pastikan username/password admin pada `config.js` sama dengan Apps Script.
12. Upload ulang `config.js` ke GitHub.

## Login Admin
Default demo:
- Username: `adminrpl`
- Password: `SMK17Muncar@2026`

**WAJIB ganti password sebelum digunakan sungguhan.**
Karena GitHub Pages adalah aplikasi frontend statis, kredensial yang ditulis di JavaScript dapat dilihat melalui browser. Untuk keamanan tinggi, autentikasi admin sebaiknya dipindahkan ke backend.

## Catatan nilai
Setiap level selesai:
- Nama
- Username
- Kelas
- Level
- Judul level
- Skor level
- Total skor
- Jawaban 3 misi
- Waktu
akan dikirim ke Google Sheets.

Untuk soal pilihan ganda, jawaban benar mendapat 100 poin per misi.
Level 31 menggunakan jawaban refleksi dan mendapat 150 poin per misi.
Skor maksimum = 30 × 300 + 31 × 450 = 22.950 poin.

## Struktur
- `index.html` — tampilan game
- `style.css` — desain responsive
- `app.js` — seluruh logika game + 31 level
- `config.js` — konfigurasi URL Google Sheets + admin
- `google-apps-script.gs` — backend Google Sheets
- `README.md` — panduan

## Uji sebelum dipakai
Coba:
1. Daftar akun baru.
2. Tutup dan buka ulang halaman.
3. Login kembali.
4. Selesaikan 3 misi Level 1.
5. Pastikan Level 2 terbuka.
6. Hubungkan Google Sheets lalu cek satu baris hasil.
7. Login admin dan cek Dashboard.
8. Uji di Chrome Android.
