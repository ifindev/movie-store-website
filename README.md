# Movie Store Website

## Keterangan Repository

Repositori ini adalah implementasi kode frontend dari Movie Store Website yang telah didesain pada file [Figma ini](https://www.figma.com/file/bTfNSWux0iKoR9TjtgqUl8/Movie-Store-Website?node-id=0%3A1). Pada projek ini, framework yang saya gunakan adalah Angular untuk logic & manage data di frontend nya serta CSS Bootstrap 4 untuk styling komponen & layout. Untuk melihat desain database dari website ini, silahkan buka [repo berikut](https://github.com/ifindev/movie-store-db-schema).

## Arsitektur Kode

Untuk mengimplementasikan desain dan use-cases yang ada, saya putuskan untuk menggunakan arsitektur program yang terdiri dari empat bagian utama. Keempat bagian tersebut adalah:

- `layout`: Komponent-komponen yang berfungsi sebagai layout dan tidak akan banyak menerima data. Komponen yang termasuk layout sementara ini adalah footer & navbar.
- `views`: Komponen-komponen yang berfungsi sebagai laman / page sebagai layer view utama. Layer view akan menerima komponen-komponen utils untuk membentuk isinya nanti.
- `utils`: Komponen-komponen utility yang akan banyak digunakan oleh komponen-komponen pada layer views.
- `services`: Servis-servis yang akan digunakan untuk handle data antar layer views dan juga untuk komunikasi dengan backend nantinya.

## Petunjuk Menjalankan Projek di Localhost

Untuk menjalankan projek di localhost, lakukan langkah-langkah sebagai berikut:

- Pertama clone atau download dulu repository ini.
- Buka folder direktori. Jika menggunakan terminal, bisa dengan command `cd movie-store-website`.
- Pada root directory, install dependencies yang dibutuhkan dengan menjalankan command `npm install`.
- Pada root directory, jalankan command `ng serve --open`.
- Buka projek di `http://localhost:4200/` atau sesuai yang ada di terminal.

## Copyright

Muhammad Arifin &copy; 2021
