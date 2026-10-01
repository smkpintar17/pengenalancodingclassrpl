const LEVELS = [
{t:"Level 1 — Kenalan dengan Coding",c:"Dasar Coding",d:"Mengenal konsep paling dasar sebelum menulis program.",q:[
["Coding adalah...?",["Cara memberi instruksi kepada komputer","Cara memperbaiki layar HP","Cara membuat kabel jaringan","Cara menghapus file"],0],
["Algoritma adalah...?",["Kumpulan langkah terurut untuk menyelesaikan masalah","Nama bahasa pemrograman","Jenis komputer","Aplikasi desain"],0],
["Manakah contoh bahasa pemrograman?",["Python","Monitor","Keyboard","Router"],0]]},
{t:"Level 2 — Variabel",c:"Dasar Coding",d:"Memahami tempat menyimpan data di dalam program.",q:[
["Fungsi variabel adalah...?",["Menyimpan nilai/data","Mendinginkan CPU","Menggambar monitor","Menghubungkan Wi-Fi"],0],
["Nilai variabel x = 10 termasuk data...",["Angka/integer","Gambar","Video","Suara"],0],
["Nama variabel yang baik adalah...",["namaSiswa","123nama","nama siswa","class"],0]]},
{t:"Level 3 — Tipe Data",c:"Dasar Coding",d:"Mengenal beberapa bentuk data.",q:[
["'SMK 17 Muncar' termasuk...",["String","Boolean","Integer","Array"],0],
["true / false termasuk...",["Boolean","String","Integer","Image"],0],
["25 biasanya termasuk...",["Integer/number","String","Boolean","Object gambar"],0]]},
{t:"Level 4 — Operator",c:"Dasar Coding",d:"Menggunakan operator aritmetika dan perbandingan.",q:[
["Hasil 5 + 3 adalah...",["8","2","15","53"],0],
["Operator == biasanya digunakan untuk...",["Membandingkan kesamaan nilai","Penjumlahan","Komentar","Membuat fungsi"],0],
["Hasil 10 > 7 adalah...",["true","false","10","7"],0]]},
{t:"Level 5 — Percabangan",c:"Dasar Coding",d:"Program dapat mengambil keputusan menggunakan kondisi.",q:[
["if digunakan untuk...",["Mengecek kondisi","Mengulang selamanya","Menyimpan gambar","Menghapus browser"],0],
["Jika nilai >= 75 maka...",["Kondisi kelulusan dapat dibuat dengan if","Pasti error","Program mati","Tidak terjadi apa-apa"],0],
["else berarti...",["Pilihan ketika kondisi sebelumnya tidak terpenuhi","Perulangan","Variabel","Komentar"],0]]},
{t:"Level 6 — Perulangan",c:"Mendalam",d:"Memahami loop untuk menjalankan instruksi berulang.",q:[
["for cocok digunakan untuk...",["Mengulang berdasarkan urutan/range","Membuat password Wi-Fi","Menggambar logo","Menghapus OS"],0],
["while berjalan selama...",["Kondisinya bernilai benar","Keyboard menyala","File ada","Internet cepat"],0],
["Loop membantu menghindari...",["Penulisan instruksi yang sama berkali-kali","Penggunaan variabel","Penggunaan CPU","Komentar"],0]]},
{t:"Level 7 — Array/List",c:"Mendalam",d:"Mengelola banyak nilai dalam satu struktur.",q:[
["Array dapat menyimpan...",["Banyak data dalam satu struktur","Hanya satu huruf","Hanya gambar","Hanya password"],0],
["Contoh array JavaScript...",["['RPL','AKL','BDP']","{RPL}","(RPL)","<RPL>"],0],
["Index array pada banyak bahasa dimulai dari...",["0","1","2","-1"],0]]},
{t:"Level 8 — Function",c:"Mendalam",d:"Membuat blok kode yang dapat dipanggil kembali.",q:[
["Function berguna untuk...",["Mengelompokkan instruksi yang dapat digunakan kembali","Mematikan komputer","Membuat kabel","Mengganti RAM"],0],
["Parameter function adalah...",["Data yang dapat diterima function","Nama komputer","Warna tombol","Jenis monitor"],0],
["return biasanya digunakan untuk...",["Mengembalikan nilai dari function","Mengulang HTML","Membuat CSS","Menghapus file"],0]]},
{t:"Level 9 — Debugging",c:"Mendalam",d:"Mencari dan memperbaiki kesalahan program.",q:[
["Bug adalah...",["Kesalahan/perilaku program yang tidak sesuai","Jenis keyboard","Bahasa pemrograman","Database"],0],
["Console browser membantu...",["Melihat log/error JavaScript","Mencetak dokumen","Mengubah RAM","Mengedit foto"],0],
["Langkah debugging yang baik...",["Baca error, cari penyebab, uji perbaikan","Hapus semua kode","Restart tanpa membaca error","Ganti komputer"],0]]},
{t:"Level 10 — Git & GitHub",c:"Mendalam",d:"Mengenal version control dan publikasi proyek.",q:[
["Git digunakan untuk...",["Version control kode","Menggambar logo","Mengedit video","Mempercepat Wi-Fi"],0],
["GitHub dapat digunakan untuk...",["Menyimpan dan berkolaborasi pada repository kode","Mengganti CPU","Membuat kabel","Menambah RAM"],0],
["Commit berarti...",["Mencatat perubahan ke riwayat Git","Menghapus repository","Membeli domain","Menutup browser"],0]]},
{t:"Level 11 — Struktur HTML",c:"Aplikasi Web",d:"Membangun struktur halaman web.",q:[
["HTML berfungsi utama untuk...",["Struktur konten halaman web","Logika server saja","Styling saja","Database"],0],
["Tag untuk judul utama adalah...",["<h1>","<p>","<img>","<br>"],0],
["Tag untuk membuat paragraf...",["<p>","<divv>","<text>","<para>"],0]]},
{t:"Level 12 — CSS",c:"Aplikasi Web",d:"Mengatur tampilan antarmuka.",q:[
["CSS digunakan untuk...",["Mengatur tampilan halaman","Menyimpan database","Menjalankan server","Mengirim email"],0],
["Properti untuk mengubah warna teks...",["color","font-data","text-bg","paint"],0],
["Flexbox membantu...",["Mengatur layout elemen","Membuat database","Enkripsi password","Menjalankan Python"],0]]},
{t:"Level 13 — JavaScript DOM",c:"Aplikasi Web",d:"Membuat halaman web menjadi interaktif.",q:[
["DOM adalah...",["Representasi dokumen yang dapat dimanipulasi JS","Database online","Bahasa baru","Sistem operasi"],0],
["document.querySelector digunakan untuk...",["Memilih elemen DOM","Membuat server","Menghapus browser","Mengubah Wi-Fi"],0],
["event click terjadi ketika...",["Elemen diklik","Halaman dicetak","PC dimatikan","Database dibuat"],0]]},
{t:"Level 14 — Form & Validasi",c:"Aplikasi Web",d:"Menerima input pengguna dengan aman.",q:[
["Form HTML digunakan untuk...",["Menerima input pengguna","Membuat CPU","Mengubah resolusi","Menyimpan RAM"],0],
["required berarti...",["Input wajib diisi","Input tersembunyi","Input otomatis benar","Input dihapus"],0],
["Validasi berguna untuk...",["Memastikan data sesuai aturan sebelum diproses","Menghapus semua data","Mempercepat monitor","Mengganti browser"],0]]},
{t:"Level 15 — Web App Mini",c:"Aplikasi Web",d:"Menggabungkan HTML, CSS, dan JavaScript.",q:[
["Tiga teknologi dasar front-end ini adalah...",["HTML, CSS, JavaScript","PHP, Excel, Word","BIOS, RAM, CPU","Git, Wi-Fi, HDMI"],0],
["localStorage dapat digunakan untuk...",["Menyimpan data sederhana di browser","Menyimpan file di RAM permanen","Mengakses kamera tanpa izin","Mengganti OS"],0],
["Responsive design bertujuan agar...",["Tampilan menyesuaikan ukuran layar","Kode selalu panjang","Website hanya di PC","Internet lebih cepat"],0]]},
{t:"Level 16 — Konsep Android",c:"Aplikasi Android",d:"Mengenal komponen dan konsep aplikasi Android.",q:[
["Android adalah...",["Sistem operasi mobile","Bahasa pemrograman saja","Database","Browser"],0],
["IDE populer untuk pengembangan Android native...",["Android Studio","Paint","Notepad saja","Calculator"],0],
["UI adalah singkatan dari...",["User Interface","Universal Internet","User Index","Unit Input"],0]]},
{t:"Level 17 — Activity",c:"Aplikasi Android",d:"Memahami layar/aktivitas aplikasi.",q:[
["Activity pada Android merepresentasikan...",["Satu layar/halaman interaksi aplikasi","Database","Kabel USB","File gambar saja"],0],
["Lifecycle diperlukan untuk...",["Mengelola keadaan Activity","Mengatur warna keyboard","Menghapus APK","Membuat Wi-Fi"],0],
["Intent dapat digunakan untuk...",["Berkomunikasi/berpindah antar komponen","Mengubah RAM","Mencetak kode","Menghapus Gradle"],0]]},
{t:"Level 18 — Layout & Input",c:"Aplikasi Android",d:"Membuat antarmuka dan menerima input.",q:[
["Button digunakan untuk...",["Aksi yang dapat ditekan pengguna","Menyimpan database saja","Menggambar CPU","Menghapus aplikasi"],0],
["EditText digunakan untuk...",["Input teks pengguna","Menampilkan gambar saja","Mengirim APK","Mengatur Wi-Fi"],0],
["ConstraintLayout adalah...",["Salah satu sistem layout Android","Bahasa database","Antivirus","Browser"],0]]},
{t:"Level 19 — Data Android",c:"Aplikasi Android",d:"Mengenal penyimpanan data pada aplikasi.",q:[
["Data sederhana dapat disimpan dengan...",["SharedPreferences/Preferences","Monitor","HDMI","Keyboard"],0],
["Database lokal Android yang umum...",["SQLite","Photoshop","GitHub Pages","CSS"],0],
["API digunakan agar aplikasi dapat...",["Berkomunikasi dengan layanan/data lain","Mengisi baterai","Mengganti layar","Menambah RAM"],0]]},
{t:"Level 20 — Build APK",c:"Aplikasi Android",d:"Mengenal proses build aplikasi Android.",q:[
["APK adalah...",["Paket aplikasi Android","Bahasa CSS","Database","Kabel"],0],
["Build bertujuan...",["Menghasilkan artefak aplikasi yang dapat dipasang/didistribusikan","Menghapus source code","Membuat Wi-Fi","Mengganti monitor"],0],
["Sebelum rilis aplikasi, penting...",["Uji aplikasi dan periksa konfigurasi/keamanan","Langsung upload tanpa test","Hapus semua log","Matikan validasi"],0]]},
{t:"Level 21 — Konsep EXE",c:"Aplikasi EXE",d:"Mengenal aplikasi desktop Windows.",q:[
["EXE umumnya merupakan...",["Executable file Windows","File CSS","Gambar","Database"],0],
["Aplikasi desktop dapat dibuat dengan...",["C#, C++, Python, Java, dan lainnya sesuai framework/tool","HTML saja selalu","Excel saja","CSS saja"],0],
["Installer berguna untuk...",["Memudahkan pemasangan aplikasi","Menghapus source code","Mengubah monitor","Membuat akun Google"],0]]},
{t:"Level 22 — Desktop UI",c:"Aplikasi EXE",d:"Mengenal antarmuka aplikasi desktop.",q:[
["GUI adalah...",["Graphical User Interface","Google User Index","General Utility Input","Git User Interface"],0],
["Event-driven berarti program...",["Merespons event seperti klik/input","Hanya berjalan sekali","Tidak punya UI","Tidak memakai fungsi"],0],
["Button desktop biasanya memiliki...",["Event/callback saat diklik","Database wajib","Kamera wajib","Printer wajib"],0]]},
{t:"Level 23 — File & Data",c:"Aplikasi EXE",d:"Mengelola file secara aman.",q:[
["Saat membaca file, program sebaiknya...",["Menangani error dan menutup resource dengan benar","Mengabaikan error","Menghapus file","Membuka tanpa izin"],0],
["JSON cocok untuk...",["Pertukaran/penyimpanan data terstruktur","Video 4K","Driver GPU","Kabel"],0],
["Backup data penting karena...",["Mengurangi risiko kehilangan data","Membuat CPU lebih cepat","Mengubah warna UI","Menambah RAM"],0]]},
{t:"Level 24 — Packaging",c:"Aplikasi EXE",d:"Mengenal pengemasan aplikasi desktop.",q:[
["Packaging berarti...",["Menyiapkan aplikasi dan dependensinya untuk distribusi","Menghapus aplikasi","Mengubah CSS","Membuat akun"],0],
["Versioning berguna untuk...",["Melacak versi dan perubahan aplikasi","Mengganti password Wi-Fi","Menghapus log","Mengubah layar"],0],
["Installer sebaiknya diuji...",["Di lingkungan yang sesuai sebelum dibagikan","Tidak perlu diuji","Hanya di editor","Setelah rusak"],0]]},
{t:"Level 25 — Rilis Desktop",c:"Aplikasi EXE",d:"Menyusun alur rilis aplikasi.",q:[
["Checklist rilis dapat berisi...",["Test, versi, dependensi, installer, dokumentasi","Hanya nama file","Hanya warna","Hanya logo"],0],
["Dokumentasi pengguna berisi...",["Cara memasang dan menggunakan aplikasi","Source code rahasia saja","Password admin","Kunci API"],0],
["Update aplikasi sebaiknya...",["Memiliki versi dan catatan perubahan yang jelas","Tanpa nomor versi","Menghapus data pengguna","Tanpa pengujian"],0]]},
{t:"Level 26 — OOP",c:"Mahir Coding",d:"Mengenal pemrograman berorientasi objek.",q:[
["Class adalah...",["Blueprint/definisi untuk objek","Database","File gambar","Browser"],0],
["Object adalah...",["Instance dari class","Bahasa pemrograman","CPU","Folder Git"],0],
["Encapsulation berkaitan dengan...",["Membungkus data dan perilaku serta mengatur akses","Membuat warna","Menghapus file","Mengubah monitor"],0]]},
{t:"Level 27 — API & JSON",c:"Mahir Coding",d:"Menghubungkan aplikasi dengan layanan.",q:[
["REST API umumnya berkomunikasi melalui...",["HTTP","HDMI","Bluetooth wajib","BIOS"],0],
["GET biasanya digunakan untuk...",["Mengambil data","Menghapus data","Menggambar UI","Memformat disk"],0],
["JSON memiliki struktur...",["Pasangan key-value/array yang terstruktur","Hanya binary","Hanya gambar","Hanya video"],0]]},
{t:"Level 28 — Database",c:"Mahir Coding",d:"Mengenal penyimpanan data terstruktur.",q:[
["Database digunakan untuk...",["Menyimpan dan mengelola data","Membuat monitor","Mengganti keyboard","Membuat kabel"],0],
["SQL SELECT digunakan untuk...",["Mengambil data","Menghapus OS","Membuat CSS","Menjalankan browser"],0],
["Primary key berfungsi sebagai...",["Identitas unik sebuah record","Password Wi-Fi","Nama folder","Warna tombol"],0]]},
{t:"Level 29 — Keamanan Coding",c:"Mahir Coding",d:"Mengenal praktik keamanan dasar.",q:[
["Password sebaiknya...",["Tidak disimpan sebagai teks biasa; gunakan hashing yang tepat di server","Ditulis di HTML publik","Dibagikan di chat","Sama untuk semua pengguna"],0],
["XSS berkaitan dengan...",["Penyisipan script berbahaya ke konteks web","Kerusakan monitor","Kabel USB","Database offline"],0],
["Validasi server tetap penting karena...",["Client-side validation dapat dilewati pengguna","Browser selalu aman","HTML tidak bisa diubah","CSS menyimpan password"],0]]},
{t:"Level 30 — Project Mahir",c:"Mahir Coding",d:"Menyusun cara berpikir developer dari masalah sampai rilis.",q:[
["Langkah awal proyek yang baik...",["Pahami kebutuhan dan definisikan masalah","Langsung coding tanpa tujuan","Hapus database","Beli komputer"],0],
["Testing dilakukan untuk...",["Memeriksa apakah program bekerja sesuai kebutuhan","Membuat logo","Mengganti nama file","Mempercepat internet"],0],
["Refactoring bertujuan...",["Memperbaiki struktur kode tanpa mengubah perilaku yang diharapkan","Menghapus semua fitur","Mengganti OS","Menambah bug"],0]]},
{t:"Level 31 — Refleksi RPL",c:"Refleksi Akhir",d:"Misi terakhir. Jawablah dengan jujur dan konstruktif tentang pengalaman belajar.",q:[
["Apa harapanmu tentang belajar di Kelas RPL? Ceritakan target, kemampuan yang ingin kamu kuasai, dan dukungan yang kamu butuhkan.",null],
["Menurutmu, bagian mana dari cara Pak Willy menyampaikan pembelajaran yang sudah membantu kamu memahami coding? Jelaskan dengan contoh.",null],
["Menurutmu, bagian mana yang masih kurang dari penyampaian pembelajaran Pak Willy dan apa saran perbaikannya agar kamu lebih mudah belajar?",null]
]}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let state = {user:null, users:[], currentLevel:1, mission:0, score:0, answers:[], startedAt:null};
const STORAGE = "smkPintarRPL_v1";

function loadDB(){try{return JSON.parse(localStorage.getItem(STORAGE))||{users:[],session:null,localResults:[]}}catch{return {users:[],session:null,localResults:[]}}}
function saveDB(db){localStorage.setItem(STORAGE,JSON.stringify(db))}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("show"),2800)}
async function sha256(str){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(str));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
function escapeHTML(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function showView(id){["authView","gameView","adminView"].forEach(x=>$("#"+x).classList.toggle("hidden",x!==id))}
function categoryFor(l){return LEVELS[l-1].c}
function completedCount(u){return Object.keys(u.completed||{}).filter(k=>u.completed[k]).length}
function nextLevel(u){return Math.min(31,Math.max(1,(u.highestLevel||1)))}

async function register(e){
 e.preventDefault();
 const db=loadDB(), name=$("#regName").value.trim(), username=$("#regUsername").value.trim().toLowerCase(), p=$("#regPassword").value, p2=$("#regPassword2").value, cls=$("#regClass").value.trim();
 if(!/^[a-z0-9._-]{3,30}$/.test(username)) return toast("Username: 3–30 karakter, gunakan huruf/angka . _ -");
 if(p!==p2) return toast("Konfirmasi password belum sama.");
 if(p.length<6) return toast("Password minimal 6 karakter.");
 if(db.users.some(u=>u.username===username)) return toast("Username sudah digunakan.");
 const user={id:crypto.randomUUID(),name,username,passwordHash:await sha256(p),className:cls,score:0,highestLevel:1,completed:{},levelScores:{},createdAt:new Date().toISOString()};
 db.users.push(user);db.session=username;saveDB(db);state.user=user;state.score=0;showGame();toast("Pendaftaran berhasil. Selamat bermain!");
}
async function login(e){
 e.preventDefault();const db=loadDB();const username=$("#loginUsername").value.trim().toLowerCase(), p=$("#loginPassword").value;
 if(username===APP_CONFIG.ADMIN_USERNAME && p===APP_CONFIG.ADMIN_PASSWORD){showAdmin();return}
 const user=db.users.find(u=>u.username===username);if(!user||user.passwordHash!==await sha256(p))return toast("Username atau password salah.");
 db.session=username;saveDB(db);state.user=user;state.score=user.score||0;showGame();toast("Login berhasil!");
}
function logout(){const db=loadDB();db.session=null;saveDB(db);state.user=null;showView("authView")}
function showGame(){showView("gameView");$("#welcomeName").textContent=`Halo, ${state.user.name}!`;renderMap();openLevel(nextLevel(state.user))}
function renderMap(){
 const u=state.user, max=Math.min(31,u.highestLevel||1), map=$("#levelMap");map.innerHTML="";
 LEVELS.forEach((lv,i)=>{const n=i+1, done=!!u.completed[n], unlocked=n<=max;const b=document.createElement("button");b.className="level-btn "+(done?"done ":"")+(n===max?"current ":"")+(unlocked?"":"locked");b.disabled=!unlocked;b.innerHTML=`${done?"✓ ":""}${n}<small>${done?"Selesai":unlocked?"Mulai":"🔒"}</small>`;b.onclick=()=>openLevel(n);map.appendChild(b)})
 $("#levelStat").textContent=`${Math.min(state.currentLevel,31)}/31`;$("#scoreStat").textContent=state.score;$("#progressStat").textContent=Math.round((completedCount(u)/31)*100)+"%";$("#progressBar").style.width=(completedCount(u)/31*100)+"%";
}
function openLevel(n){
 if(n<1||n>31)return;if(n>(state.user.highestLevel||1))return toast("Level ini masih terkunci.");
 state.currentLevel=n;state.mission=0;state.answers=[];$("#levelIntro").classList.add("hidden");$("#missionPanel").classList.remove("hidden");renderMission();
}
function renderMission(){
 const lv=LEVELS[state.currentLevel-1], m=lv.q[state.mission];$("#missionCategory").textContent=lv.c;$("#missionCounter").textContent=`Misi ${state.mission+1}/3`;$("#levelTitle").textContent=lv.t;$("#levelDescription").textContent=lv.d;$("#feedback").className="feedback hidden";$("#feedback").innerHTML="";
 let html=`<div class="question">${escapeHTML(m[0])}</div>`;
 if(state.currentLevel>=11 && state.currentLevel<=30 && (state.mission===0)) html+=`<div class="code-block">${escapeHTML(codeHint(state.currentLevel))}</div>`;
 if(m[1]) html+=`<div class="option-list">${m[1].map((x,i)=>`<button class="option" data-i="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${escapeHTML(x)}</span></button>`).join("")}</div>`;
 else html+=`<textarea id="openAnswer" maxlength="1000" placeholder="Tulis jawabanmu di sini..."></textarea><div class="small-note">Minimal 20 karakter agar jawaban dianggap lengkap.</div>`;
 $("#questionArea").innerHTML=html;
 $$(".option").forEach(btn=>btn.addEventListener("click",()=>{$$(".option").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected")}));
 $("#submitAnswerBtn").textContent=state.mission===2?"Selesaikan Misi":"Periksa Jawaban";
}
function codeHint(level){const hints={
11:"<!DOCTYPE html>\\n<html>\\n  <body>\\n    <h1>SMK PINTAR</h1>\\n  </body>\\n</html>",
12:"body {\\n  font-family: sans-serif;\\n  padding: 20px;\\n}",
13:"document.querySelector('#tombol').addEventListener('click', () => {\\n  alert('Halo RPL!');\\n});",
14:"<form>\\n  <input required>\\n  <button type='submit'>Kirim</button>\\n</form>",
15:"HTML + CSS + JavaScript = halaman web interaktif",
16:"Android App → UI → Logic → Data",
17:"Activity → Intent → Activity lain",
18:"Input → Button → Event → Proses",
19:"App → API/Database → Data → UI",
20:"Source Code → Build → APK → Test → Release",
21:"Source Code → Compile/Package → EXE",
22:"Button → Click Event → Function",
23:"Open File → Read/Write → Handle Error → Close",
24:"Project → Dependencies → Package → Installer",
25:"Test → Version → Installer → Documentation → Release",
26:"class Siswa {\\n  constructor(nama) { this.nama = nama; }\\n}",
27:"GET /api/siswa → JSON → tampilkan ke UI",
28:"SELECT * FROM siswa WHERE id = 1;",
29:"Input → Validate → Sanitize → Process → Output",
30:"Kebutuhan → Desain → Coding → Testing → Deploy → Maintenance"};return hints[level]||""}
function selectedIndex(){const x=$(".option.selected");return x?Number(x.dataset.i):null}
async function submitMission(){
 const lv=LEVELS[state.currentLevel-1], m=lv.q[state.mission];let ok=false, answer="";
 if(m[1]){const idx=selectedIndex();if(idx===null)return toast("Pilih jawaban terlebih dahulu.");ok=idx===m[2];answer=m[1][idx]}else{answer=$("#openAnswer").value.trim();if(answer.length<20)return toast("Jawaban minimal 20 karakter.");ok=true}
 $$(".option").forEach((b,i)=>{if(m[1]){if(i===m[2])b.classList.add("correct");if(i===selectedIndex()&&i!==m[2])b.classList.add("wrong")}});
 const fb=$("#feedback");fb.className="feedback "+(ok?"good":"bad");fb.classList.remove("hidden");fb.innerHTML=ok?(m[1]?"✅ Jawaban benar.":"✅ Jawaban diterima. Terima kasih sudah menjawab dengan jujur."):"❌ Belum tepat. Coba pahami konsepnya lalu pilih kembali.";
 if(ok){
   $("#submitAnswerBtn").disabled=true;
   const points=m[1]?100:150; state.answers.push({level:state.currentLevel,mission:state.mission+1,answer,correct:true,points});
   setTimeout(async()=>{ $("#submitAnswerBtn").disabled=false; if(state.mission<2){state.mission++;renderMission()}else await finishLevel(); },700);
 }else{
   state.answers.push({level:state.currentLevel,mission:state.mission+1,answer,correct:false,points:0});
 }
}
async function finishLevel(){
 const u=state.user;const level=state.currentLevel;const gained=state.answers.filter(x=>x.level===level&&x.correct).reduce((a,b)=>a+b.points,0);
 u.score=(u.score||0)+gained;state.score=u.score;u.completed[level]=true;u.levelScores[level]=gained;if(level<31)u.highestLevel=Math.max(u.highestLevel||1,level+1);else u.highestLevel=31;
 const db=loadDB();const idx=db.users.findIndex(x=>x.id===u.id);if(idx>=0)db.users[idx]=u;db.session=u.username;
 const result={timestamp:new Date().toISOString(),name:u.name,username:u.username,className:u.className||"",level,levelTitle:LEVELS[level-1].t,scoreLevel:gained,totalScore:u.score,missionAnswers:state.answers.filter(x=>x.level===level),userAgent:navigator.userAgent};
 db.localResults=db.localResults||[];db.localResults.push(result);saveDB(db);state.user=u;
 await sendToSheets(result);
 renderMap();
 if(level===31){$("#missionPanel").classList.add("hidden");$("#levelIntro").classList.remove("hidden");$("#levelIntro").innerHTML=`<div class="hero-icon">🏆</div><h2>SELAMAT! MISI AKHIR SELESAI</h2><p>Terima kasih sudah menyelesaikan SMK PINTAR RPL.</p><p><b>Total Skor: ${u.score}</b></p><button class="primary-btn" onclick="openLevel(31)">🔁 Lihat Level 31</button>`;toast("Semua level selesai!")}
 else {$("#missionPanel").classList.add("hidden");$("#levelIntro").classList.remove("hidden");$("#levelIntro").innerHTML=`<div class="hero-icon">🎉</div><h2>Level ${level} Selesai!</h2><p>Skor level: <b>${gained}</b> • Total: <b>${u.score}</b></p><button class="primary-btn" onclick="openLevel(${level+1})">🚀 Lanjut Level ${level+1}</button>`;toast(`Level ${level} selesai. Nilai tersimpan.`)}
}
async function sendToSheets(result){
 const url=APP_CONFIG.GOOGLE_SHEETS_API;if(!url)return;
 try{await fetch(url,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"save",...result})})}
 catch(e){console.warn("Google Sheets sync failed",e)}
}
function showAdmin(){showView("adminView");$("#adminStatus").textContent="Dashboard admin aktif."}
async function loadAdmin(){
 const url=APP_CONFIG.GOOGLE_SHEETS_API, body=$("#adminTableBody");body.innerHTML="";
 if(!url){$("#adminStatus").textContent="URL Google Sheets API belum diisi di config.js. Menampilkan data lokal perangkat.";renderAdmin(loadDB().localResults||[]);return}
 $("#adminStatus").textContent="Mengambil data...";
 try{const r=await fetch(url+"?action=list&u="+encodeURIComponent(APP_CONFIG.ADMIN_USERNAME)+"&p="+encodeURIComponent(APP_CONFIG.ADMIN_PASSWORD));const data=await r.json();if(!data.ok)throw new Error(data.error||"Gagal");renderAdmin(data.rows||[]);$("#adminStatus").textContent=`Berhasil mengambil ${data.rows?.length||0} catatan.`}
 catch(e){$("#adminStatus").textContent="Gagal mengambil Google Sheets. Menampilkan data lokal.";renderAdmin(loadDB().localResults||[])}
}
function renderAdmin(rows){$("#adminTableBody").innerHTML=rows.length?rows.slice().reverse().map(r=>`<tr><td>${escapeHTML(r.name)}</td><td>${escapeHTML(r.username)}</td><td>${escapeHTML(r.level)}</td><td>${escapeHTML(r.totalScore??r.scoreLevel??0)}</td><td>${escapeHTML(r.timestamp||"")}</td></tr>`).join(""):`<tr><td colspan="5">Belum ada data.</td></tr>`}
function exportCSV(){
 const rows=loadDB().localResults||[];if(!rows.length)return toast("Belum ada data lokal untuk diekspor.");
 const head=["timestamp","name","username","className","level","levelTitle","scoreLevel","totalScore"];
 const csv=[head.join(","),...rows.map(r=>head.map(k=>`"${String(r[k]??"").replaceAll('"','""')}"`).join(","))].join("\n");
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="smk-pintar-data.csv";a.click();URL.revokeObjectURL(a.href);
}
function init(){
 $$(".tab-btn").forEach(b=>b.onclick=()=>{$$(".tab-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("#loginForm").classList.toggle("hidden",b.dataset.tab!=="login");$("#registerForm").classList.toggle("hidden",b.dataset.tab!=="register")});
 $("#loginForm").onsubmit=login;$("#registerForm").onsubmit=register;$("#submitAnswerBtn").onclick=submitMission;$("#logoutBtn").onclick=logout;$("#adminLogoutBtn").onclick=logout;$("#refreshAdminBtn").onclick=loadAdmin;$("#exportLocalBtn").onclick=exportCSV;
 const db=loadDB();if(db.session){const u=db.users.find(x=>x.username===db.session);if(u){state.user=u;state.score=u.score||0;showGame();return}}showView("authView");
}
document.addEventListener("DOMContentLoaded",init);
