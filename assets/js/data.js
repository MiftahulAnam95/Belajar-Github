window.GithubLabData = (() => {
  const starterPrerequisite =
    "Sudah pernah belajar HTML, CSS, JavaScript, PHP, dan Laravel dasar. Tidak perlu hafal semuanya, cukup paham membuat project web dan menyimpan file.";

  const lesson = (item) => ({
    icon: "bi-git",
    duration: "10 menit",
    prerequisite: starterPrerequisite,
    overview: item.goal,
    steps: [
      "Baca masalah yang ingin diselesaikan.",
      "Perhatikan contoh command atau workflow.",
      "Coba ulang di folder latihan yang aman.",
      "Ubah satu hal kecil lalu cek statusnya.",
      "Jawab recall sebelum lanjut ke materi berikutnya."
    ],
    terms: [
      { term: "Repository", meaning: "Folder project yang riwayat perubahannya dikelola oleh Git." },
      { term: "Commit", meaning: "Catatan perubahan yang disimpan sebagai satu titik riwayat." },
      { term: "Remote", meaning: "Salinan repository di server, biasanya GitHub, untuk backup dan kolaborasi." }
    ],
    commonMistakes: [
      "Menjalankan command Git dari folder yang salah.",
      "Commit terlalu besar sehingga pesan commit sulit menjelaskan perubahan."
    ],
    checkpoint: "Kamu siap lanjut jika dapat menjelaskan alur konsep ini dengan bahasa sendiri.",
    filename: "terminal",
    ...item
  });

  const lessons = [
    lesson({
      id: "kenapa-github",
      title: "Kenapa web developer perlu GitHub?",
      icon: "bi-github",
      duration: "8 menit",
      goal: "Memahami GitHub sebagai tempat menyimpan, membagikan, dan mengelola riwayat project web.",
      problem: "Setelah bisa membuat HTML, CSS, JavaScript, PHP, dan Laravel, kamu perlu cara profesional untuk menyimpan versi project dan bekerja bersama orang lain.",
      analogy: "Project tanpa GitHub seperti tugas penting yang hanya disimpan di satu flashdisk. GitHub seperti ruang kerja online dengan arsip perubahan yang rapi.",
      explanation: "GitHub membantu developer menyimpan repository, membaca riwayat commit, membuat branch, membuka pull request, review kode, melacak issue, dan mempublish website statis lewat GitHub Pages.",
      code: `Project web profesional biasanya punya:
- repository
- README
- riwayat commit
- branch fitur
- issue atau task
- pull request
- deploy preview atau GitHub Pages`,
      lineNotes: [
        "Repository adalah tempat project disimpan.",
        "Commit membuat riwayat kerja dapat ditelusuri.",
        "Pull request membuat perubahan bisa direview sebelum digabung."
      ],
      exercise: "Buka salah satu project HTML/CSS/JS yang pernah kamu buat, lalu tulis alasan kenapa project itu perlu disimpan di GitHub.",
      recall: "Apa perbedaan menyimpan project di folder biasa dengan menyimpan project di GitHub?",
      debug: {
        question: "Mengapa project yang hanya disimpan di laptop berisiko untuk kerja profesional?",
        hint: "Pikirkan backup, riwayat, dan kolaborasi.",
        solution: "Tanpa repository remote, project mudah hilang, sulit dibagikan, dan perubahan sulit ditelusuri."
      },
      quiz: {
        question: "GitHub paling tepat dipakai untuk...",
        options: ["Menyimpan repository dan kolaborasi kode", "Mengganti HTML", "Menjalankan database lokal", "Menghapus kebutuhan belajar Git"],
        answer: 0,
        explanation: "GitHub adalah platform hosting repository dan kolaborasi kode."
      },
      previewOutput: "Project punya riwayat, dokumentasi, dan link yang bisa dibagikan."
    }),
    lesson({
      id: "git-vs-github",
      title: "Git vs GitHub",
      icon: "bi-diagram-3",
      duration: "9 menit",
      goal: "Membedakan Git sebagai alat versi lokal dan GitHub sebagai platform online.",
      problem: "Pemula sering mengira Git dan GitHub adalah hal yang sama, sehingga bingung saat command Git berjalan di komputer tetapi belum muncul di GitHub.",
      analogy: "Git seperti buku catatan riwayat di meja kerjamu. GitHub seperti lemari arsip online yang bisa diakses tim.",
      explanation: "Git berjalan di komputer untuk mencatat perubahan file. GitHub menerima salinan repository lewat push, lalu menyediakan fitur kolaborasi seperti pull request, issue, review, Actions, dan Pages.",
      code: `git status
git add .
git commit -m "docs: tambah README"
git push origin main`,
      lineNotes: [
        "Tiga command pertama bekerja di repository lokal.",
        "git push mengirim commit lokal ke remote GitHub.",
        "GitHub baru berubah setelah push berhasil."
      ],
      exercise: "Tulis dua kolom: fitur yang termasuk Git lokal dan fitur yang termasuk GitHub online.",
      recall: "Mengapa commit lokal belum otomatis muncul di GitHub?",
      debug: {
        question: "Commit sudah dibuat tetapi halaman GitHub belum berubah. Apa kemungkinan penyebabnya?",
        hint: "Commit lokal belum tentu sudah dikirim ke remote.",
        solution: "Jalankan git status dan git log, lalu push ke remote yang benar dengan git push origin main."
      },
      quiz: {
        question: "Git adalah...",
        options: ["Version control system", "Website hosting saja", "Bahasa pemrograman", "Framework CSS"],
        answer: 0,
        explanation: "Git adalah sistem kontrol versi untuk mencatat perubahan file."
      },
      previewOutput: "Git mencatat lokal, GitHub menyimpan dan menampilkan repository online."
    }),
    lesson({
      id: "install-identitas",
      title: "Install Git dan identitas commit",
      icon: "bi-person-badge",
      duration: "10 menit",
      goal: "Menyiapkan Git dan identitas nama serta email agar commit terbaca profesional.",
      problem: "Commit tanpa identitas yang benar akan sulit dikaitkan dengan akun GitHub atau terlihat tidak rapi di riwayat project.",
      analogy: "Identitas commit seperti tanda tangan pada dokumen kerja. Tim perlu tahu siapa yang membuat perubahan.",
      explanation: "Setelah Git terinstall, atur user.name dan user.email. Gunakan email yang sesuai dengan akun GitHub atau email privasi dari GitHub.",
      code: `git --version
git config --global user.name "Nama Kamu"
git config --global user.email "email@example.com"
git config --global --list`,
      lineNotes: [
        "git --version mengecek apakah Git sudah terpasang.",
        "user.name dan user.email dipakai di metadata commit.",
        "--global berarti pengaturan berlaku untuk semua repository di komputer."
      ],
      exercise: "Cek versi Git dan identitas global di komputermu.",
      recall: "Mengapa email commit perlu cocok dengan akun GitHub?",
      debug: {
        question: "Git menolak commit karena Author identity unknown. Apa yang harus dilakukan?",
        hint: "Git belum tahu nama dan email pembuat commit.",
        solution: "Atur identitas dengan git config --global user.name dan git config --global user.email."
      },
      quiz: {
        question: "Command untuk mengecek versi Git adalah...",
        options: ["git --version", "github --start", "git check version", "version git"],
        answer: 0,
        explanation: "git --version menampilkan versi Git yang terpasang."
      },
      previewOutput: "git version 2.x.x dan identitas commit sudah tersimpan."
    }),
    lesson({
      id: "terminal-folder",
      title: "Terminal dan folder project",
      icon: "bi-terminal",
      duration: "10 menit",
      goal: "Membiasakan diri berpindah folder dan menjalankan command Git dari lokasi yang tepat.",
      problem: "Banyak error Git terjadi karena command dijalankan di folder parent, folder kosong, atau folder project yang berbeda.",
      analogy: "Terminal seperti alamat ruangan. Kalau kamu memberi instruksi dari ruangan yang salah, Git juga melihat file yang salah.",
      explanation: "Gunakan pwd atau cd untuk memastikan lokasi kerja. Di Windows PowerShell, Get-Location dan Set-Location juga bisa dipakai.",
      code: `pwd
ls
cd nama-folder-project
git status`,
      lineNotes: [
        "pwd menampilkan folder aktif.",
        "ls menampilkan isi folder.",
        "git status membantu memastikan folder aktif adalah repository Git."
      ],
      exercise: "Masuk ke folder project HTML yang pernah kamu buat, lalu jalankan git status.",
      recall: "Apa tanda bahwa kamu sedang berada di folder yang salah?",
      debug: {
        question: "Git menampilkan fatal: not a git repository. Apa artinya?",
        hint: "Folder aktif belum memiliki folder .git atau kamu sedang di lokasi yang salah.",
        solution: "Masuk ke folder repository yang benar atau jalankan git init jika memang ingin membuat repository baru."
      },
      quiz: {
        question: "git status sebaiknya dijalankan dari...",
        options: ["Folder project/repository", "Folder gambar acak", "Browser", "Halaman GitHub saja"],
        answer: 0,
        explanation: "Git membaca repository dari folder aktif."
      },
      previewOutput: "On branch main, working tree clean."
    }),
    lesson({
      id: "repo-lokal",
      title: "Membuat repository lokal",
      icon: "bi-folder-plus",
      duration: "11 menit",
      goal: "Mengubah folder project web menjadi repository Git lokal.",
      problem: "Folder project biasa belum memiliki riwayat perubahan. Git perlu diaktifkan dulu agar perubahan bisa dicatat.",
      analogy: "git init seperti menaruh buku catatan riwayat di folder project. Setelah itu Git mulai bisa mengamati perubahan.",
      explanation: "Jalankan git init satu kali di root project. Setelah itu gunakan git status untuk melihat file yang belum dilacak.",
      code: `cd portfolio-html
git init
git status`,
      lineNotes: [
        "cd masuk ke folder project.",
        "git init membuat folder tersembunyi .git.",
        "git status menampilkan file untracked atau modified."
      ],
      exercise: "Buat folder latihan-github, isi dengan index.html sederhana, lalu jalankan git init.",
      recall: "Apa fungsi folder .git?",
      debug: {
        question: "Kenapa jangan menjalankan git init berulang di banyak subfolder project?",
        hint: "Repository bersarang bisa membuat status membingungkan.",
        solution: "Gunakan satu repository di root project, lalu kelola semua file project dari sana."
      },
      quiz: {
        question: "Command untuk membuat repository lokal adalah...",
        options: ["git init", "git make repo", "github create local", "git upload"],
        answer: 0,
        explanation: "git init menginisialisasi repository Git di folder aktif."
      },
      previewOutput: "Initialized empty Git repository."
    }),
    lesson({
      id: "add-commit",
      title: "Add dan commit pertama",
      icon: "bi-check2-square",
      duration: "12 menit",
      goal: "Mencatat perubahan project sebagai commit yang jelas dan profesional.",
      problem: "Perubahan file belum menjadi riwayat sampai kamu menambahkannya ke staging area dan membuat commit.",
      analogy: "git add seperti memilih berkas yang akan dimasukkan ke amplop. git commit seperti menyegel amplop dengan catatan singkat.",
      explanation: "Staging area memberi kesempatan memilih file mana yang masuk commit. Pesan commit sebaiknya pendek, spesifik, dan menjelaskan tujuan perubahan.",
      code: `git status
git add index.html style.css
git commit -m "feat: buat halaman portfolio awal"
git log --oneline`,
      lineNotes: [
        "git add memilih file untuk commit.",
        "git commit menyimpan snapshot perubahan.",
        "git log --oneline melihat riwayat ringkas."
      ],
      exercise: "Buat commit pertama untuk project latihan dengan pesan yang menjelaskan tujuan perubahan.",
      recall: "Apa perbedaan file modified, staged, dan committed?",
      debug: {
        question: "Kenapa git commit menampilkan nothing to commit?",
        hint: "Tidak ada file staged atau semua perubahan sudah dicommit.",
        solution: "Jalankan git status. Jika ada perubahan, gunakan git add sebelum git commit."
      },
      quiz: {
        question: "Staging area diisi dengan command...",
        options: ["git add", "git save", "git upload", "git record"],
        answer: 0,
        explanation: "git add memasukkan perubahan ke staging area."
      },
      previewOutput: "1 file changed, commit berhasil dibuat."
    }),
    lesson({
      id: "pesan-commit",
      title: "Pesan commit yang profesional",
      icon: "bi-chat-left-text",
      duration: "11 menit",
      goal: "Membuat pesan commit yang mudah dibaca oleh diri sendiri, mentor, dan tim.",
      problem: "Pesan seperti update, fix, atau final tidak membantu saat tim ingin mencari alasan perubahan.",
      analogy: "Commit message seperti judul bab di buku riwayat. Judul yang jelas membuat isi mudah ditemukan.",
      explanation: "Gunakan format sederhana seperti feat, fix, docs, style, refactor, test, atau chore. Fokus pada tujuan perubahan, bukan aktivitas mengetik.",
      code: `git commit -m "feat: tambah section kontak"
git commit -m "fix: perbaiki link navbar mobile"
git commit -m "docs: jelaskan cara deploy GitHub Pages"`,
      lineNotes: [
        "feat untuk fitur baru.",
        "fix untuk perbaikan bug.",
        "docs untuk dokumentasi seperti README."
      ],
      exercise: "Ubah tiga pesan commit buruk menjadi pesan commit yang lebih jelas.",
      recall: "Mengapa pesan commit final kurang profesional?",
      debug: {
        question: "Commit berisi banyak perubahan tidak terkait. Apa dampaknya?",
        hint: "Review dan revert akan lebih sulit.",
        solution: "Pisahkan perubahan menjadi beberapa commit kecil yang punya tujuan jelas."
      },
      quiz: {
        question: "Pesan commit paling jelas adalah...",
        options: ["fix: perbaiki tombol submit form", "update", "final banget", "coba lagi"],
        answer: 0,
        explanation: "Pesan itu menjelaskan tipe dan tujuan perubahan."
      },
      previewOutput: "Riwayat commit mudah dipindai dan dipahami."
    }),
    lesson({
      id: "branch",
      title: "Branch untuk kerja aman",
      icon: "bi-signpost-split",
      duration: "12 menit",
      goal: "Memakai branch agar fitur baru tidak langsung mengganggu branch utama.",
      problem: "Mengubah langsung di main bisa berisiko jika fitur belum selesai atau ternyata merusak halaman.",
      analogy: "Branch seperti jalur percobaan di samping jalan utama. Jika aman, jalur itu bisa digabung kembali.",
      explanation: "Buat branch untuk fitur atau perbaikan. Setelah perubahan selesai dan direview, branch bisa digabung ke main.",
      code: `git branch
git switch -c fitur-navbar
git status
git switch main`,
      lineNotes: [
        "git branch melihat daftar branch.",
        "git switch -c membuat dan pindah ke branch baru.",
        "git switch main kembali ke branch utama."
      ],
      exercise: "Buat branch fitur-readme lalu lakukan satu perubahan kecil di README.",
      recall: "Kapan sebaiknya membuat branch baru?",
      debug: {
        question: "Kenapa perubahan di branch belum terlihat di main?",
        hint: "Branch adalah jalur riwayat terpisah.",
        solution: "Gabungkan branch ke main dengan merge atau pull request setelah perubahan siap."
      },
      quiz: {
        question: "Branch biasa dipakai untuk...",
        options: ["Mengembangkan fitur terpisah dari main", "Menghapus repository", "Mengganti GitHub dengan CSS", "Membuat password"],
        answer: 0,
        explanation: "Branch menjaga perubahan fitur tetap terpisah sampai siap digabung."
      },
      previewOutput: "Switched to a new branch 'fitur-navbar'."
    }),
    lesson({
      id: "merge",
      title: "Merge perubahan",
      icon: "bi-union",
      duration: "12 menit",
      goal: "Menggabungkan branch fitur ke branch utama dengan aman.",
      problem: "Fitur di branch tidak akan masuk ke main sampai digabung. Tanpa pemahaman merge, riwayat project terasa terpisah-pisah.",
      analogy: "Merge seperti menggabungkan catatan dari jalur kerja terpisah ke buku utama.",
      explanation: "Pastikan berada di branch tujuan, biasanya main, lalu jalankan git merge nama-branch. Jika file yang sama berubah di bagian sama, conflict perlu diselesaikan.",
      code: `git switch main
git merge fitur-navbar
git status`,
      lineNotes: [
        "git switch main memilih branch tujuan.",
        "git merge fitur-navbar membawa perubahan dari branch fitur.",
        "git status memastikan hasil merge bersih."
      ],
      exercise: "Gabungkan branch fitur-readme ke main di repository latihan.",
      recall: "Mengapa posisi branch aktif penting sebelum merge?",
      debug: {
        question: "Kenapa perubahan masuk ke branch yang salah setelah merge?",
        hint: "Merge selalu masuk ke branch aktif.",
        solution: "Cek branch aktif dengan git branch sebelum merge. Pindah ke branch tujuan terlebih dahulu."
      },
      quiz: {
        question: "Sebelum merge fitur ke main, kamu harus...",
        options: ["Pindah ke branch main", "Menghapus .git", "Logout GitHub", "Mengubah file jadi PDF"],
        answer: 0,
        explanation: "Merge memasukkan perubahan ke branch yang sedang aktif."
      },
      previewOutput: "Merge made by the recursive strategy."
    }),
    lesson({
      id: "remote-origin",
      title: "Remote origin",
      icon: "bi-cloud-arrow-up",
      duration: "12 menit",
      goal: "Menghubungkan repository lokal ke repository GitHub.",
      problem: "Commit lokal tidak punya tujuan online sampai repository punya remote.",
      analogy: "Remote origin seperti alamat gudang online. Git perlu tahu alamat tujuan sebelum bisa mengirim paket commit.",
      explanation: "Buat repository di GitHub, salin URL-nya, lalu tambahkan sebagai origin. Setelah itu push branch utama.",
      code: `git remote -v
git remote add origin https://github.com/username/nama-repo.git
git branch -M main
git push -u origin main`,
      lineNotes: [
        "git remote -v mengecek daftar remote.",
        "origin adalah nama umum untuk remote utama.",
        "-u menyimpan hubungan branch lokal dan branch remote."
      ],
      exercise: "Buat repository kosong di GitHub lalu hubungkan repository lokal latihan ke remote origin.",
      recall: "Apa fungsi origin?",
      debug: {
        question: "Git menampilkan remote origin already exists. Apa artinya?",
        hint: "Repository sudah punya remote bernama origin.",
        solution: "Cek git remote -v. Jika URL salah, ubah dengan git remote set-url origin URL_BARU."
      },
      quiz: {
        question: "Command untuk melihat remote adalah...",
        options: ["git remote -v", "git remote show all css", "github remote", "git origin check"],
        answer: 0,
        explanation: "git remote -v menampilkan nama remote dan URL."
      },
      previewOutput: "origin https://github.com/username/nama-repo.git"
    }),
    lesson({
      id: "push",
      title: "Push ke GitHub",
      icon: "bi-upload",
      duration: "12 menit",
      goal: "Mengirim commit lokal ke GitHub agar bisa dibackup dan dibagikan.",
      problem: "Commit yang hanya ada di laptop belum bisa dilihat mentor, rekruter, atau anggota tim.",
      analogy: "Push seperti mengunggah paket perubahan dari komputer ke rak online GitHub.",
      explanation: "Gunakan git push untuk mengirim commit. Pada push pertama, -u origin main membuat Git mengingat tujuan push berikutnya.",
      code: `git status
git log --oneline
git push -u origin main`,
      lineNotes: [
        "git status memastikan tidak ada perubahan yang tertinggal.",
        "git log memastikan commit yang akan dikirim.",
        "git push mengirim commit ke GitHub."
      ],
      exercise: "Push repository latihan ke GitHub lalu refresh halaman repository.",
      recall: "Mengapa git push tidak sama dengan git commit?",
      debug: {
        question: "Push ditolak karena authentication failed. Apa yang harus dicek?",
        hint: "GitHub tidak menerima password akun biasa untuk Git over HTTPS.",
        solution: "Gunakan Git Credential Manager, login browser, SSH key, atau personal access token sesuai setup GitHub."
      },
      quiz: {
        question: "git push digunakan untuk...",
        options: ["Mengirim commit ke remote", "Membuat HTML", "Melihat file saja", "Membuka VS Code"],
        answer: 0,
        explanation: "git push mengirim commit lokal ke remote."
      },
      previewOutput: "Branch main tampil di GitHub dengan commit terbaru."
    }),
    lesson({
      id: "pull-sync",
      title: "Pull dan sync",
      icon: "bi-download",
      duration: "12 menit",
      goal: "Mengambil perubahan dari GitHub ke repository lokal.",
      problem: "Saat bekerja di dua komputer atau bersama tim, remote bisa punya perubahan yang belum ada di lokal.",
      analogy: "Pull seperti mengambil arsip terbaru dari ruang online agar meja kerjamu tidak tertinggal.",
      explanation: "git pull mengambil perubahan remote dan menggabungkannya ke branch lokal. Biasakan pull sebelum mulai bekerja jika repository dipakai bersama.",
      code: `git status
git pull origin main
git log --oneline --max-count=5`,
      lineNotes: [
        "Pastikan working tree bersih sebelum pull.",
        "git pull origin main mengambil branch main dari remote.",
        "git log membantu melihat commit terbaru."
      ],
      exercise: "Edit README langsung di GitHub, lalu pull perubahan itu ke lokal.",
      recall: "Mengapa pull sebaiknya dilakukan sebelum mulai mengubah file?",
      debug: {
        question: "Pull gagal karena local changes would be overwritten. Apa maksudnya?",
        hint: "Ada perubahan lokal yang belum dicommit atau disimpan.",
        solution: "Commit perubahan lokal, gunakan git stash, atau batalkan perubahan yang memang tidak dibutuhkan sebelum pull."
      },
      quiz: {
        question: "git pull digunakan untuk...",
        options: ["Mengambil perubahan dari remote", "Menghapus branch remote", "Membuat issue", "Mengganti warna CSS"],
        answer: 0,
        explanation: "git pull menyinkronkan perubahan remote ke lokal."
      },
      previewOutput: "Already up to date atau commit baru berhasil diambil."
    }),
    lesson({
      id: "readme",
      title: "README yang menjual skill",
      icon: "bi-markdown",
      duration: "13 menit",
      goal: "Membuat dokumentasi project yang membantu orang memahami tujuan, fitur, dan cara menjalankan project.",
      problem: "Repository tanpa README membuat project bagus terlihat belum siap dibaca orang lain.",
      analogy: "README seperti papan informasi di depan toko. Pengunjung harus cepat tahu isi dan cara masuk.",
      explanation: "README profesional minimal memuat nama project, deskripsi, fitur, teknologi, screenshot atau demo, cara menjalankan, dan status project.",
      filename: "README.md",
      code: `# Portfolio Web

Website portfolio untuk menampilkan project belajar web development.

## Fitur
- Responsive layout
- Section project
- Form kontak

## Teknologi
HTML, CSS, JavaScript

## Demo
https://username.github.io/portfolio-web/`,
      lineNotes: [
        "# adalah heading utama Markdown.",
        "Daftar fitur membantu pembaca memindai kemampuan project.",
        "Link demo membuat repository lebih mudah dinilai."
      ],
      exercise: "Buat README untuk project HTML/CSS yang pernah kamu buat.",
      recall: "Bagian README apa yang paling membantu rekruter memahami project?",
      debug: {
        question: "Kenapa README tampil datar tanpa heading?",
        hint: "Markdown membutuhkan spasi setelah tanda heading.",
        solution: "Tulis # Judul, bukan #Judul. Pastikan file bernama README.md."
      },
      quiz: {
        question: "README sebaiknya berisi...",
        options: ["Deskripsi, fitur, teknologi, dan cara menjalankan", "Hanya nama file", "Password akun", "Semua file project disalin manual"],
        answer: 0,
        explanation: "README membantu orang memahami project dengan cepat."
      },
      previewOutput: "Repository punya dokumentasi yang jelas dan mudah dibaca."
    }),
    lesson({
      id: "gitignore",
      title: ".gitignore",
      icon: "bi-file-earmark-minus",
      duration: "11 menit",
      goal: "Mencegah file yang tidak perlu atau sensitif ikut masuk ke repository.",
      problem: "Folder vendor, node_modules, file .env, cache, dan file build tertentu bisa membuat repository berat atau membocorkan data.",
      analogy: ".gitignore seperti daftar barang yang tidak boleh masuk koper saat mengirim project.",
      explanation: "Tulis pola file atau folder yang ingin diabaikan Git. Untuk Laravel, .env dan vendor biasanya tidak dicommit.",
      filename: ".gitignore",
      code: `node_modules/
vendor/
.env
storage/logs/
*.log
dist/`,
      lineNotes: [
        "Folder diakhiri slash untuk mengabaikan isi folder.",
        ".env sering berisi konfigurasi sensitif.",
        "*.log mengabaikan semua file dengan ekstensi .log."
      ],
      exercise: "Tambahkan .gitignore ke project latihan dan pastikan file .env tidak muncul di git status.",
      recall: "Mengapa .env tidak boleh dicommit ke repository publik?",
      debug: {
        question: "File yang sudah terlanjur tracked tetap muncul walau sudah ada di .gitignore. Kenapa?",
        hint: ".gitignore tidak otomatis menghapus file yang sudah pernah dicatat Git.",
        solution: "Gunakan git rm --cached nama-file, lalu commit perubahan .gitignore."
      },
      quiz: {
        question: ".gitignore digunakan untuk...",
        options: ["Mengabaikan file tertentu dari tracking Git", "Menghapus akun GitHub", "Membuat branch baru", "Menjalankan server"],
        answer: 0,
        explanation: ".gitignore menentukan file yang tidak perlu dilacak Git."
      },
      previewOutput: "File sensitif dan folder dependency tidak ikut masuk commit."
    }),
    lesson({
      id: "github-pages",
      title: "Publish dengan GitHub Pages",
      icon: "bi-globe2",
      duration: "14 menit",
      goal: "Mempublish project static HTML/CSS/JS agar punya link online.",
      problem: "Project portfolio perlu bisa dibuka lewat link, bukan hanya screenshot atau folder zip.",
      analogy: "GitHub Pages seperti etalase online untuk project static. Repository adalah gudang, Pages adalah halaman yang dilihat pengunjung.",
      explanation: "Untuk project static, push file index.html ke repository, buka Settings, Pages, pilih branch main dan folder root, lalu tunggu URL aktif.",
      code: `Repository:
index.html
assets/css/style.css
assets/js/app.js

GitHub Pages:
Source: Deploy from a branch
Branch: main
Folder: /root`,
      lineNotes: [
        "index.html harus berada di lokasi yang dipublish.",
        "GitHub Pages cocok untuk static site.",
        "Laravel butuh hosting PHP, bukan GitHub Pages biasa."
      ],
      exercise: "Publish project HTML/CSS/JS sederhana ke GitHub Pages.",
      recall: "Mengapa Laravel biasa tidak langsung berjalan di GitHub Pages?",
      debug: {
        question: "GitHub Pages menampilkan 404. Apa yang harus dicek?",
        hint: "Cek lokasi index.html dan pengaturan branch/folder.",
        solution: "Pastikan index.html ada di root atau folder yang dipilih, branch sudah dipush, dan Pages sudah selesai build."
      },
      quiz: {
        question: "GitHub Pages paling cocok untuk...",
        options: ["Website static HTML/CSS/JS", "Server PHP Laravel langsung", "Database MySQL lokal", "Aplikasi desktop"],
        answer: 0,
        explanation: "GitHub Pages melayani file static."
      },
      previewOutput: "https://username.github.io/nama-repo/"
    }),
    lesson({
      id: "issue-task",
      title: "Issue sebagai task kerja",
      icon: "bi-ui-checks",
      duration: "12 menit",
      goal: "Menggunakan issue untuk mencatat bug, ide fitur, dan pekerjaan project.",
      problem: "Pekerjaan yang hanya disimpan di chat atau ingatan mudah hilang dan sulit diprioritaskan.",
      analogy: "Issue seperti tiket kerja. Setiap tiket punya masalah, konteks, dan status.",
      explanation: "Issue bisa berisi deskripsi, checklist, label, assignee, dan link ke pull request. Ini membiasakan alur kerja profesional.",
      code: `Title:
fix: navbar mobile menutup konten

Description:
- Reproduksi: buka halaman di width 375px
- Masalah: menu menumpuk hero
- Ekspektasi: menu tampil sebagai collapse
- Checklist: perbaiki CSS dan test mobile`,
      lineNotes: [
        "Judul issue harus spesifik.",
        "Langkah reproduksi membantu debugging.",
        "Checklist membuat pekerjaan mudah dilacak."
      ],
      exercise: "Buat tiga issue untuk project portfolio: bug, fitur, dan dokumentasi.",
      recall: "Apa informasi minimal yang perlu ada pada issue bug?",
      debug: {
        question: "Issue terlalu umum seperti website rusak. Apa masalahnya?",
        hint: "Developer butuh konteks untuk mereproduksi masalah.",
        solution: "Tambahkan halaman, langkah reproduksi, hasil yang terjadi, hasil yang diharapkan, dan screenshot jika perlu."
      },
      quiz: {
        question: "Issue digunakan untuk...",
        options: ["Melacak bug, fitur, dan task", "Mengganti commit", "Menyimpan password", "Menjalankan PHP"],
        answer: 0,
        explanation: "Issue adalah tempat mencatat pekerjaan dan diskusi terkait task."
      },
      previewOutput: "Task project lebih rapi dan bisa ditautkan ke pull request."
    }),
    lesson({
      id: "pull-request",
      title: "Pull request",
      icon: "bi-git",
      duration: "14 menit",
      goal: "Mengusulkan perubahan dari branch fitur agar bisa direview sebelum masuk main.",
      problem: "Di kerja tim, perubahan tidak langsung didorong ke main tanpa pemeriksaan.",
      analogy: "Pull request seperti mengajukan draf pekerjaan ke mentor atau tim untuk dicek sebelum diterbitkan.",
      explanation: "Buat branch, commit perubahan, push branch, lalu buka pull request. Jelaskan apa yang berubah, kenapa, dan cara mengeceknya.",
      code: `git switch -c fix-navbar-mobile
git add .
git commit -m "fix: perbaiki navbar mobile"
git push -u origin fix-navbar-mobile`,
      lineNotes: [
        "Branch memisahkan perubahan dari main.",
        "Push branch membuatnya tersedia di GitHub.",
        "Pull request dibuat dari branch fitur ke main."
      ],
      exercise: "Buat pull request dari branch dokumentasi README ke main di repository latihan.",
      recall: "Apa isi deskripsi pull request yang baik?",
      debug: {
        question: "Pull request terlalu sulit direview karena banyak perubahan. Apa penyebabnya?",
        hint: "Scope PR mungkin terlalu besar.",
        solution: "Buat PR kecil dengan satu tujuan. Pisahkan refactor, fitur, dan perbaikan bug jika tidak saling bergantung."
      },
      quiz: {
        question: "Pull request digunakan untuk...",
        options: ["Mengusulkan dan mereview perubahan sebelum merge", "Menghapus Git", "Mengganti file dengan gambar", "Membuka terminal"],
        answer: 0,
        explanation: "Pull request adalah mekanisme review dan diskusi perubahan."
      },
      previewOutput: "PR berisi ringkasan, daftar perubahan, dan checklist test."
    }),
    lesson({
      id: "review-conflict",
      title: "Review dan conflict",
      icon: "bi-exclamation-triangle",
      duration: "15 menit",
      goal: "Memahami review kode dan menyelesaikan konflik sederhana.",
      problem: "Dua orang bisa mengubah baris yang sama, sehingga Git tidak bisa memilih hasil otomatis.",
      analogy: "Conflict seperti dua revisi berbeda pada kalimat yang sama. Manusia perlu memutuskan kalimat final.",
      explanation: "Conflict ditandai dengan marker <<<<<<<, =======, dan >>>>>>>. Baca dua versi, pilih hasil akhir, hapus marker, lalu commit.",
      code: `<<<<<<< HEAD
<h1>Portfolio Miftah</h1>
=======
<h1>Portfolio Web Developer</h1>
>>>>>>> fitur-hero`,
      lineNotes: [
        "Bagian HEAD adalah versi branch aktif.",
        "Bagian bawah adalah versi branch yang digabung.",
        "Hapus marker setelah memilih hasil final."
      ],
      exercise: "Buat simulasi conflict di file README lalu selesaikan dengan memilih versi final yang paling jelas.",
      recall: "Mengapa conflict tidak selalu berarti ada yang salah?",
      debug: {
        question: "Setelah conflict diselesaikan, Git masih bilang unmerged paths. Apa yang kurang?",
        hint: "File hasil resolve perlu di-stage.",
        solution: "Setelah menghapus marker dan menyimpan file, jalankan git add nama-file lalu commit merge."
      },
      quiz: {
        question: "Marker conflict yang harus dihapus adalah...",
        options: ["<<<<<<<, =======, >>>>>>>", "<html>, </html>", "git add, git commit", "main, origin"],
        answer: 0,
        explanation: "Marker conflict hanya penanda sementara dari Git."
      },
      previewOutput: "Conflict selesai, file final bersih, merge commit bisa dibuat."
    }),
    lesson({
      id: "portfolio-profesional",
      title: "Portfolio GitHub profesional",
      icon: "bi-person-workspace",
      duration: "15 menit",
      goal: "Menata repository agar terlihat siap dinilai oleh mentor, rekruter, atau calon klien.",
      problem: "Project yang sebenarnya bagus bisa terlihat kurang serius jika repository berantakan, README kosong, atau commit tidak jelas.",
      analogy: "Repository portfolio seperti meja presentasi. Isi project penting, tetapi cara menyajikannya juga menentukan kesan profesional.",
      explanation: "Repository portfolio sebaiknya punya nama jelas, README lengkap, demo aktif, screenshot, struktur folder rapi, commit bermakna, issue atau project board, dan release milestone.",
      code: `Checklist repository:
[ ] Nama repo jelas
[ ] README lengkap
[ ] Link demo aktif
[ ] Screenshot tersedia
[ ] Commit rapi
[ ] .gitignore aman
[ ] Issue atau task tercatat
[ ] Release versi pertama`,
      lineNotes: [
        "Nama repo membantu orang memahami isi project sebelum membuka file.",
        "Demo aktif menunjukkan project benar-benar bisa digunakan.",
        "Commit rapi memperlihatkan proses berpikir developer."
      ],
      exercise: "Audit satu repository project web milikmu dengan checklist di atas.",
      recall: "Apa tiga hal pertama yang dilihat orang saat membuka repository portfolio?",
      debug: {
        question: "Portfolio sudah dipush, tetapi sulit dinilai. Apa yang paling cepat diperbaiki?",
        hint: "Pengunjung biasanya membaca README dan mencoba demo.",
        solution: "Lengkapi README, tambahkan link demo, screenshot, dan penjelasan fitur utama."
      },
      quiz: {
        question: "Repository portfolio yang baik sebaiknya punya...",
        options: ["README, demo, commit rapi, dan struktur jelas", "File acak tanpa deskripsi", "Password di .env", "Satu commit final saja"],
        answer: 0,
        explanation: "Kerapian repository membantu orang menilai kemampuanmu."
      },
      previewOutput: "Repository siap dibagikan sebagai bagian dari portfolio web developer."
    }),
    lesson({
      id: "etika-kolaborasi",
      title: "Etika kolaborasi profesional",
      icon: "bi-people",
      duration: "13 menit",
      goal: "Membangun kebiasaan komunikasi GitHub yang jelas, sopan, dan efisien.",
      problem: "Skill teknis saja belum cukup. Developer profesional perlu menulis issue, PR, dan review dengan konteks yang membantu.",
      analogy: "GitHub seperti ruang rapat tertulis. Pesan yang jelas membuat tim bergerak lebih cepat.",
      explanation: "Biasakan memberi konteks, menyebutkan perubahan, menulis langkah test, merespons review dengan tenang, dan tidak memaksa merge jika masih ada pertanyaan penting.",
      code: `Contoh deskripsi PR:
## Ringkasan
Memperbaiki navbar mobile agar tidak menutup hero.

## Cara test
1. Buka index.html
2. Ubah viewport ke 375px
3. Klik tombol menu

## Catatan
Tidak mengubah struktur HTML utama.`,
      lineNotes: [
        "Ringkasan menjelaskan tujuan perubahan.",
        "Cara test membantu reviewer memverifikasi hasil.",
        "Catatan scope mencegah salah paham."
      ],
      exercise: "Tulis template PR yang akan kamu pakai untuk project berikutnya.",
      recall: "Mengapa cara test penting dalam pull request?",
      debug: {
        question: "Reviewer bingung karena PR tidak punya konteks. Apa yang perlu ditambahkan?",
        hint: "Jelaskan masalah, solusi, dan cara mengecek.",
        solution: "Tambahkan ringkasan, link issue, screenshot jika UI berubah, serta checklist test."
      },
      quiz: {
        question: "Deskripsi PR yang baik mencantumkan...",
        options: ["Ringkasan perubahan dan cara test", "Hanya kata done", "Password GitHub", "Semua chat pribadi"],
        answer: 0,
        explanation: "PR perlu konteks agar reviewer bisa bekerja cepat."
      },
      previewOutput: "Kolaborasi lebih rapi, review lebih cepat, dan riwayat project mudah dibaca."
    })
  ];

  const quizQuestions = [
    {
      question: "Perbedaan paling tepat antara Git dan GitHub adalah...",
      options: ["Git mencatat versi lokal, GitHub menyimpan repository online", "Git adalah CSS, GitHub adalah HTML", "Git hanya untuk desain", "GitHub menggantikan kebutuhan commit"],
      answer: 0,
      explanation: "Git adalah version control, GitHub adalah platform hosting dan kolaborasi repository."
    },
    {
      question: "Command untuk melihat status perubahan adalah...",
      options: ["git status", "git check", "github status", "git view css"],
      answer: 0,
      explanation: "git status menampilkan branch aktif dan status file."
    },
    {
      question: "Sebelum git commit, file perlu masuk ke...",
      options: ["Staging area", "Trash", "Browser cache", "GitHub Pages"],
      answer: 0,
      explanation: "Staging area diisi dengan git add."
    },
    {
      question: "Branch dipakai agar...",
      options: ["Perubahan fitur bisa dikerjakan terpisah dari main", "Repository otomatis hilang", "File menjadi gambar", "HTML tidak perlu ditulis"],
      answer: 0,
      explanation: "Branch membuat jalur kerja terpisah."
    },
    {
      question: "Command untuk mengirim commit lokal ke GitHub adalah...",
      options: ["git push", "git send", "github upload manual", "git publish css"],
      answer: 0,
      explanation: "git push mengirim commit ke remote."
    },
    {
      question: ".gitignore berguna untuk...",
      options: ["Mencegah file tertentu ikut dilacak Git", "Menghapus semua commit", "Membuat akun GitHub", "Menjalankan Laravel"],
      answer: 0,
      explanation: ".gitignore mengatur file yang diabaikan Git."
    },
    {
      question: "GitHub Pages cocok untuk...",
      options: ["Website static HTML/CSS/JS", "Server PHP Laravel penuh", "Database MySQL", "File rahasia .env"],
      answer: 0,
      explanation: "GitHub Pages melayani file static."
    },
    {
      question: "Pull request dipakai untuk...",
      options: ["Mengusulkan perubahan agar bisa direview sebelum merge", "Menghapus repository", "Membuka terminal", "Menyimpan password"],
      answer: 0,
      explanation: "Pull request membantu review dan diskusi perubahan."
    },
    {
      question: "Jika terjadi conflict, hal yang benar adalah...",
      options: ["Pilih hasil final, hapus marker conflict, lalu commit", "Hapus folder project", "Abaikan marker", "Ganti semua file jadi kosong"],
      answer: 0,
      explanation: "Conflict perlu diselesaikan manual lalu di-stage dan dicommit."
    },
    {
      question: "README profesional sebaiknya memiliki...",
      options: ["Deskripsi, fitur, teknologi, cara menjalankan, dan demo", "Hanya satu kata", "Password API", "File zip project"],
      answer: 0,
      explanation: "README membantu orang memahami project dengan cepat."
    }
  ];

  const recallChallenges = [
    {
      id: "recall-git-github",
      type: "Konsep dasar",
      title: "Git vs GitHub",
      prompt: "Jelaskan perbedaan Git dan GitHub dengan bahasa sendiri.",
      answer: "Git adalah alat untuk mencatat riwayat perubahan di komputer. GitHub adalah platform online untuk menyimpan repository, kolaborasi, review, issue, dan publish project."
    },
    {
      id: "recall-commit",
      type: "Commit",
      title: "Add ke commit",
      prompt: "Jelaskan alur dari file berubah sampai menjadi commit.",
      answer: "File diubah, dicek dengan git status, dipilih dengan git add, lalu disimpan sebagai riwayat menggunakan git commit dengan pesan yang jelas."
    },
    {
      id: "recall-branch",
      type: "Branch",
      title: "Fitur baru",
      prompt: "Mengapa fitur baru sebaiknya dikerjakan di branch terpisah?",
      answer: "Agar branch utama tetap stabil dan perubahan fitur bisa dicek, diperbaiki, atau dibatalkan tanpa mengganggu main."
    },
    {
      id: "recall-remote",
      type: "Remote",
      title: "Push dan pull",
      prompt: "Apa hubungan git push dan git pull dalam workflow GitHub?",
      answer: "git push mengirim commit lokal ke remote GitHub, sedangkan git pull mengambil perubahan dari remote ke repository lokal."
    },
    {
      id: "recall-pr",
      type: "Kolaborasi",
      title: "Pull request",
      prompt: "Apa isi pull request yang membantu reviewer?",
      answer: "Ringkasan perubahan, alasan perubahan, cara test, link issue, screenshot jika UI berubah, dan catatan scope."
    },
    {
      id: "recall-pages",
      type: "Deploy",
      title: "GitHub Pages",
      prompt: "Apa syarat sederhana agar project static bisa tampil di GitHub Pages?",
      answer: "File static seperti index.html harus ada di branch dan folder yang dipilih, repository sudah dipush, dan Pages sudah dikonfigurasi ke source yang benar."
    }
  ];

  const debugChallenges = [
    {
      id: "debug-not-repo",
      title: "Not a git repository",
      symptom: "Terminal menampilkan fatal: not a git repository.",
      code: `PS C:\\Users\\Kamu> git status
fatal: not a git repository (or any of the parent directories): .git`,
      question: "Apa penyebab paling umum error ini?",
      hint: "Cek folder aktif di terminal.",
      explanation: [
        "Git mencari folder .git dari lokasi aktif.",
        "Jika tidak ditemukan, folder aktif bukan repository.",
        "Kamu mungkin berada di folder parent atau folder lain.",
        "Masuk ke folder project yang benar.",
        "Jika project belum jadi repository, jalankan git init."
      ],
      solution: `cd path\\ke\\folder-project
git status

# atau jika memang repository baru
git init`
    },
    {
      id: "debug-identity",
      title: "Author identity unknown",
      symptom: "Commit gagal karena Git belum tahu nama dan email.",
      code: `git commit -m "feat: tambah hero"

Author identity unknown`,
      question: "Command apa yang perlu dijalankan?",
      hint: "Git membutuhkan user.name dan user.email.",
      explanation: [
        "Setiap commit memiliki metadata author.",
        "Git belum menerima konfigurasi nama dan email.",
        "Atur identitas global agar berlaku untuk semua repo.",
        "Gunakan email yang sesuai dengan akun GitHub.",
        "Ulangi commit setelah konfigurasi selesai."
      ],
      solution: `git config --global user.name "Nama Kamu"
git config --global user.email "email@example.com"
git commit -m "feat: tambah hero"`
    },
    {
      id: "debug-nothing",
      title: "Nothing to commit",
      symptom: "Commit tidak membuat riwayat baru.",
      code: `git commit -m "update"
On branch main
nothing to commit, working tree clean`,
      question: "Mengapa commit tidak dibuat?",
      hint: "Tidak ada perubahan yang staged.",
      explanation: [
        "Git hanya membuat commit dari perubahan yang tersedia.",
        "Working tree clean berarti tidak ada perubahan baru.",
        "Jika file sudah diubah, mungkin belum disimpan editor.",
        "Jika ada modified file, gunakan git add.",
        "Jika memang tidak ada perubahan, tidak perlu commit."
      ],
      solution: `git status
git add .
git commit -m "feat: tambah konten halaman"`
    },
    {
      id: "debug-origin-exists",
      title: "Remote origin already exists",
      symptom: "Menambah origin gagal karena origin sudah ada.",
      code: `git remote add origin https://github.com/kamu/repo-baru.git
error: remote origin already exists.`,
      question: "Bagaimana memperbaiki URL remote yang salah?",
      hint: "Jangan menambah origin baru, ubah URL origin yang sudah ada.",
      explanation: [
        "Repository sudah punya remote bernama origin.",
        "Cek URL saat ini dengan git remote -v.",
        "Jika URL salah, gunakan set-url.",
        "Setelah itu push ke origin.",
        "Jangan membuat remote origin ganda."
      ],
      solution: `git remote -v
git remote set-url origin https://github.com/kamu/repo-baru.git
git push -u origin main`
    },
    {
      id: "debug-auth",
      title: "Authentication failed",
      symptom: "Push ke GitHub gagal karena autentikasi.",
      code: `git push origin main
remote: Invalid username or password.
fatal: Authentication failed`,
      question: "Apa yang perlu dipakai selain password akun biasa?",
      hint: "GitHub tidak memakai password biasa untuk Git over HTTPS.",
      explanation: [
        "GitHub membutuhkan autentikasi modern.",
        "Di Windows biasanya Git Credential Manager membuka login browser.",
        "Alternatifnya gunakan SSH key atau personal access token.",
        "Pastikan akun punya akses ke repository tujuan.",
        "Coba push ulang setelah autentikasi benar."
      ],
      solution: `# Pilihan umum:
# 1. Login lewat Git Credential Manager saat diminta browser
# 2. Pakai SSH remote
git remote set-url origin git@github.com:kamu/nama-repo.git
git push origin main`
    },
    {
      id: "debug-rejected",
      title: "Push rejected",
      symptom: "Push ditolak karena remote punya commit yang belum ada di lokal.",
      code: `! [rejected] main -> main (fetch first)
error: failed to push some refs`,
      question: "Apa langkah aman sebelum push ulang?",
      hint: "Ambil perubahan remote dulu.",
      explanation: [
        "Remote memiliki commit yang tidak ada di lokal.",
        "Push langsung ditolak agar riwayat tidak tertimpa.",
        "Pull perubahan dari remote.",
        "Selesaikan conflict jika ada.",
        "Setelah lokal sinkron, push ulang."
      ],
      solution: `git pull origin main
# selesaikan conflict jika ada
git push origin main`
    },
    {
      id: "debug-conflict",
      title: "Merge conflict",
      symptom: "Git berhenti saat merge karena file yang sama berubah di bagian yang sama.",
      code: `<<<<<<< HEAD
<h1>Portfolio Anam</h1>
=======
<h1>Portfolio Web Developer</h1>
>>>>>>> fitur-hero`,
      question: "Apa yang harus dilakukan pada marker conflict?",
      hint: "Marker hanya penanda sementara.",
      explanation: [
        "Baca dua versi yang bertabrakan.",
        "Tentukan teks final yang benar.",
        "Hapus semua marker conflict.",
        "Simpan file.",
        "Stage file dan commit hasil resolve."
      ],
      solution: `<h1>Portfolio Web Developer</h1>

git add index.html
git commit`
    },
    {
      id: "debug-pages-404",
      title: "GitHub Pages 404",
      symptom: "Link GitHub Pages terbuka, tetapi halaman menampilkan 404.",
      code: `Repository:
src/index.html
assets/style.css

Pages source:
main / root`,
      question: "Apa yang tidak cocok dari konfigurasi ini?",
      hint: "GitHub Pages mencari index.html di folder yang dipilih.",
      explanation: [
        "Source Pages memilih root branch main.",
        "index.html ternyata berada di folder src.",
        "Pages tidak menemukan file utama di root.",
        "Pindahkan index.html ke root atau ubah source build sesuai struktur.",
        "Tunggu proses deploy selesai."
      ],
      solution: `Repository:
index.html
assets/style.css

Pages source:
main / root`
    },
    {
      id: "debug-ignore-tracked",
      title: ".gitignore tidak bekerja",
      symptom: "File .env masih muncul walau sudah ditulis di .gitignore.",
      code: `.gitignore
.env

git status
modified: .env`,
      question: "Mengapa .env masih tracked?",
      hint: ".gitignore tidak melepas file yang sudah pernah masuk commit.",
      explanation: [
        "File .env sudah terlanjur dilacak Git.",
        ".gitignore hanya mencegah file baru yang belum tracked.",
        "Hapus file dari index Git tanpa menghapus file lokal.",
        "Commit perubahan tracking.",
        "Pastikan data sensitif yang sudah terlanjur push ditangani serius."
      ],
      solution: `git rm --cached .env
git add .gitignore
git commit -m "chore: stop tracking env file"`
    },
    {
      id: "debug-wrong-branch",
      title: "Push ke branch salah",
      symptom: "Perubahan tidak muncul di pull request yang diharapkan.",
      code: `git branch
* main
  fix-navbar

git push origin main`,
      question: "Apa yang harus dicek sebelum commit dan push?",
      hint: "Perhatikan branch aktif.",
      explanation: [
        "Tanda bintang menunjukkan branch aktif.",
        "Kamu sedang di main, bukan fix-navbar.",
        "Perubahan masuk ke branch aktif.",
        "Pindah ke branch yang benar sebelum bekerja.",
        "Push branch yang sesuai dengan pull request."
      ],
      solution: `git switch fix-navbar
git status
git push origin fix-navbar`
    }
  ];

  const projects = [
    {
      id: "project-portfolio-pages",
      title: "Portfolio GitHub Pages",
      level: "Pemula",
      goal: "Mempublish project HTML/CSS/JS sebagai portfolio online dengan README lengkap.",
      icon: "bi-globe2",
      features: ["GitHub Pages", "README", "commit rapi", "demo link"],
      steps: ["Pilih project static", "Buat README", "Push ke GitHub", "Aktifkan Pages", "Tambahkan link demo"],
      hint: "Mulai dari project HTML/CSS yang sudah stabil agar fokus pada workflow GitHub.",
      example: { title: "Portfolio Web", subtitle: "GitHub Pages aktif", progress: 88, tags: ["README", "Demo", "Pages"] }
    },
    {
      id: "project-readme-pro",
      title: "README profesional",
      level: "Pemula",
      goal: "Mengubah repository biasa menjadi repository yang mudah dinilai.",
      icon: "bi-markdown",
      features: ["Markdown", "screenshot", "cara install", "struktur"],
      steps: ["Tulis deskripsi", "Buat daftar fitur", "Tambahkan teknologi", "Tulis cara menjalankan", "Pasang screenshot"],
      hint: "README yang baik menjawab: apa ini, kenapa dibuat, dan bagaimana mencobanya.",
      example: { title: "README.md", subtitle: "Dokumentasi siap dibaca", progress: 74, tags: ["Fitur", "Teknologi", "Demo"] }
    },
    {
      id: "project-issue-board",
      title: "Issue board mini sprint",
      level: "Pemula +",
      goal: "Membuat issue untuk bug, fitur, dan dokumentasi lalu menyelesaikannya satu per satu.",
      icon: "bi-kanban",
      features: ["issue", "label", "checklist", "milestone"],
      steps: ["Buat tiga issue", "Tambahkan label", "Kerjakan satu branch per issue", "Tautkan PR", "Tutup issue"],
      hint: "Gunakan format issue yang sama agar task mudah dibandingkan.",
      example: { title: "Mini Sprint", subtitle: "3 issue, 2 selesai", progress: 66, tags: ["Bug", "Feature", "Docs"] }
    },
    {
      id: "project-pr-review",
      title: "Pull request latihan",
      level: "Pemula +",
      goal: "Membuat branch, push, pull request, deskripsi perubahan, dan merge setelah dicek.",
      icon: "bi-git",
      features: ["branch", "pull request", "review checklist", "merge"],
      steps: ["Buat branch", "Commit perubahan kecil", "Push branch", "Buka PR", "Isi cara test"],
      hint: "Pilih perubahan kecil seperti perbaikan README atau navbar agar scope PR jelas.",
      example: { title: "PR #1", subtitle: "fix navbar mobile", progress: 91, tags: ["Branch", "Review", "Merge"] }
    },
    {
      id: "project-release",
      title: "Release versi pertama",
      level: "Menengah awal",
      goal: "Menandai project yang sudah siap ditampilkan dengan tag dan release notes.",
      icon: "bi-bookmark-star",
      features: ["tag", "release notes", "changelog", "version"],
      steps: ["Audit README", "Pastikan demo aktif", "Buat tag v1.0.0", "Push tag", "Tulis release notes"],
      hint: "Release pertama tidak harus sempurna, tetapi harus stabil dan dapat dicoba.",
      example: { title: "v1.0.0", subtitle: "Portfolio initial release", progress: 80, tags: ["Tag", "Notes", "Stable"] }
    },
    {
      id: "project-team-flow",
      title: "Simulasi kerja tim",
      level: "Menengah awal",
      goal: "Melatih workflow clone, branch, PR, review, conflict kecil, dan merge.",
      icon: "bi-people",
      features: ["clone", "review", "conflict", "collaboration"],
      steps: ["Clone repository", "Buat branch", "Ubah file yang sama", "Selesaikan conflict", "Merge PR"],
      hint: "Bisa dilakukan sendiri dengan dua branch berbeda jika belum punya partner latihan.",
      example: { title: "Team Flow", subtitle: "Conflict resolved", progress: 72, tags: ["Clone", "PR", "Conflict"] }
    }
  ];

  const badges = [
    { id: "repo-starter", title: "Repo Starter", icon: "bi-compass-fill", check: (state) => state.completedLessons.length >= 1 },
    { id: "commit-builder", title: "Commit Builder", icon: "bi-check2-square", check: (state) => ["repo-lokal", "add-commit", "pesan-commit"].every((id) => state.completedLessons.includes(id)) },
    { id: "branch-ready", title: "Branch Ready", icon: "bi-signpost-split-fill", check: (state) => ["branch", "merge", "pull-request"].every((id) => state.completedLessons.includes(id)) },
    { id: "pages-publisher", title: "Pages Publisher", icon: "bi-globe2", check: (state) => state.completedLessons.includes("github-pages") },
    { id: "github-debugger", title: "GitHub Debugger", icon: "bi-bug-fill", check: (state) => state.completedDebug.length >= 5 },
    { id: "portfolio-ready", title: "Portfolio Ready", icon: "bi-rocket-takeoff-fill", check: (state) => state.completedProjects.length >= 3 },
    { id: "workflow-pro", title: "Workflow Pro", icon: "bi-award-fill", check: (state) => state.completedLessons.length >= 20 && state.completedDebug.length >= 10 }
  ];

  const editorDefaults = {
    commands: `git init
git status
git add index.html assets/css/style.css assets/js/app.js README.md
git commit -m "feat: buat portfolio awal"
git branch -M main
git remote add origin https://github.com/username/portfolio-web.git
git push -u origin main`,
    readme: `# Portfolio Web

Website portfolio untuk menampilkan project belajar web development.

## Fitur
- Responsive layout
- Section project
- Form kontak
- Deploy via GitHub Pages

## Teknologi
HTML, CSS, JavaScript

## Demo
https://username.github.io/portfolio-web/`,
    pages: `GitHub Pages checklist:
- Repository sudah public atau Pages tersedia
- index.html berada di root
- Settings > Pages
- Source: Deploy from a branch
- Branch: main
- Folder: /root
- Tunggu URL aktif`
  };

  return {
    lessons,
    quizQuestions,
    recallChallenges,
    debugChallenges,
    projects,
    badges,
    editorDefaults
  };
})();
