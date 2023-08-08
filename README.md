npm init -y
untuk membuat package.json, package.json berfungsi untuk menyimpan informasi package/modul dalam aplikasi kita.
NPM = node package manager
npm install <package_name>
untuk menginstall modul dari npm
npm install express pg sequelize ejs dotenv
npm install nodemon sequelize-cli --save-dev
Membuat file app.js dan .gitignore, .env
.gitignore berfungsi untuk tidak memasukkan node_modules ke dalam GitHub repository
.env berfungsi untuk meletakan variable yang akan di gunakan dalam environment tertentu
Membuat _routing dan controllers__

npx nodemon app.js

untuk menjalankan
Konfigurasi Postgres menggunakan Sequelize
npx sequelize-cli init
untuk membuat initiation awal sequelize
Konfigurasi database di dalam config.json

npx sequelize-cli db:create

untuk membuat database lewat sequelize tanpa query manual
npx sequelize-cli model:generate --name Todo --attributes task:string,status:string
untuk membuat class dan juga migrations
npx sequelize-cli db:migrate
untuk melakukan migrations
agar table di buat
npx sequelize-cli migration:generate --name add-column
untuk menambahkan column