# Kanban Amsterdam Fox

Buatlah aplikasi Kanban menggunakan client-server model dengan spesifikasi sebagai berikut:

### 1. API Documentation (server) yang meliputi:
- URL(s)
- HTTP Method
- Request
- Response (success dan error)
- Membuat routes sesuai standar REST API

### 2. CRUD endpoints untuk Task, dimana minimal inputnya memiliki:
- title
- category

### 3. Register dan Login
Berikan atribut Organization pada User, dengan default value “Hacktiv8”. Atribut ini ditambahkan pada server sehingga akan ter-input secara otomatis ketika user baru didaftarkan dan default value tidak boleh diubah dengan value lain selain “Hacktiv8”. (Note: Untuk case ini kegunaan organization tersebut akan terlihat ketika kalian mengerjakan socket. Ketika terjadi perubahan pada task, maka semua user yang online dan 1 organisasi akan dapat melihat perubahannya. Jika ada pertanyaan lebih lanjut mengenai hal ini, bisa tanyakan instruktur :) )

### 4. Membuat authorization sehingga user hanya bisa melakukan UD terhadap task-nya sendiri

### 5. Melakukan Read pada semua card yang tersedia(authentication)

### 6. Social Login (Google/Twitter/Facebook/GitHub)

### 7. No alert()!!!
### 8. Deploy ke Heroku(server) + Firebase (client) Hosting

## Rocket 🚀
- Buat Kanban Board kamu menjadi real time menggunakan socket.io

### Kompetensi Backend
- REST API
- API Documentation
- Auth
- PostgreSQL + Sequelize

### Kompetensi Client
- Vue.js
- SPA (Single Page Application)

## Deadline
> Week 2 - Jumat 23:59

### Contoh

https://kamvan-6aa69.firebaseapp.com/
https://kanban-83af9.firebaseapp.com/

### Submission
Fork dari organization, lalu open pull request dengan title NAMA LENGKAP KAMU (ex: Dimitri Wahyudiputra) dan assign ke buddy kamu jika sudah selesai. Tambahkan comment yang berisi environment variables yang dipakai (beserta valuenya), link deploy (jika ada), fitur tambahannya apa dan kendala saat mengerjakan.

