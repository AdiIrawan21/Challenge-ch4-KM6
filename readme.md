# Challenge Chapter 4: Membuat End Point API
# KM6-Binar Academy BEJS-1

## Struktur Relasi Entitas
1. Setiap User dapat memiliki banyak Akun (One-to-Many antara Users dan Bank Accounts).
2. Setiap Akun hanya dimiliki oleh satu User (Many-to-One antara Bank Accounts dan Users).
3. Setiap User hanya memiliki satu Profile (One-to-One antara Users dan Profiles).
4. Setiap Profile hanya dimiliki oleh satu User (One-to-One antara Profiles dan Users).
5. Setiap Akun dapat memiliki banyak Transaksi (Many-to-Many antara Bank Accounts dan Bank Accounts melalui table penampung Transactions).

## API Endpoints
1. GET /api/v1/users: Mendapatkan daftar semua pengguna.
2. POST /api/v1/users: Membuat pengguna baru.
3. GET /api/v1/users/:id: Menampilkan detail pengguna.
4. PUT /api/v1/users/:id: Update data pengguna.
5. GET /api/v1/accounts: Mendapatkan daftar semua akun.
6. POST /api/v1/accounts: Membuat akun baru dengan pengguna yang telah didaftarkan.
7. GET /api/v1/accounts:id: Menampilkan detail akun. 
8. GET /api/v1/transactions: Mendapatkan daftar transaksi.
9. POST /api/v1/transactions: Membuat transaksi baru.
10. GET /api/v1/transactions/:transaction: Mendapatkan detail transaksi.

## Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file LICENSE untuk informasi lebih lanjut.
