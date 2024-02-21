function zoomOut() {
  var iconSurat = document.querySelector('.icon-surat');
  var text1 = document.querySelector('.text1');
  var background = document.querySelector('.background');
  var mainMenu = document.querySelector('.main-menu');
  var menuUtama = document.querySelector('.menu-utama');

  // Menambahkan class 'clicked' untuk memulai animasi zoom pada icon-surat
  iconSurat.classList.add('clicked');

  // Menambahkan class 'fade-out' untuk memulai animasi menghilang pada text1
  text1.classList.add('fade-out');

  // Menambahkan class 'fade-out' untuk memulai animasi menghilang pada background
  background.classList.add('fade-out');

  // Menunda perubahan display: none pada background setelah animasi selesai
  setTimeout(function() {
    // Menampilkan main-menu dan menu-utama setelah animasi selesai
    mainMenu.style.display = 'block';
    menuUtama.style.display = 'block';
    background.style.display = 'none';
  }, 500); // Sesuaikan dengan durasi animasi zoom pada icon-surat
}
// Fungsi untuk menaikkan main-menu
// Fungsi untuk menaikkan main-menu
function naikkeatas() {
  var mainMenu = document.querySelector('.main-menu');
  mainMenu.classList.toggle('offscreen');

  // Memulai atau menghentikan musik saat menu naik/turun
  var audio = document.getElementById('backgroundMusic');
  if (audio.paused) {
    audio.play();
    document.querySelector('.menumusik').classList.add('playing');
  } else {
    audio.pause();
    document.querySelector('.menumusik').classList.remove('playing');
  }
}

// Fungsi untuk mengatur pemutaran musik saat tombol musik diklik
document.querySelector('.menumusik').addEventListener('click', function() {
  var audio = document.getElementById('backgroundMusic');
  if (audio.paused) {
    audio.play();
    document.querySelector('.menumusik').classList.add('playing');
  } else {
    audio.pause();
    document.querySelector('.menumusik').classList.remove('playing');
  }
});

 // Tanggal target untuk countdown (tahun, bulan dimulai dari 0, tanggal)
 var targetDate = new Date(2024, 3, 1); // 1 Desember 2024

 // Fungsi untuk memperbarui countdown setiap detik
 function updateCountdown() {
   var currentDate = new Date();
   var difference = targetDate - currentDate;

   if (difference <= 0) {
     // Jika waktu target sudah berlalu, tampilkan pesan
     document.querySelector('.coutdown').innerHTML = "<p>Resepsi sudah dimulai!</p>";
     return;
   }

   var days = Math.floor(difference / (1000 * 60 * 60 * 24));
   var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((difference % (1000 * 60)) / 1000);

   // Menampilkan countdown yang diperbarui
   document.querySelector('.day').innerHTML = days + " hari ";
   document.querySelector('.hours').innerHTML = hours + " jam ";
   document.querySelector('.minutes').innerHTML = minutes + " menit ";
   document.querySelector('.second').innerHTML = seconds + " detik ";
 }

 // Memanggil fungsi updateCountdown setiap detik
 setInterval(updateCountdown, 1000);

 // Memastikan countdown diperbarui setelah halaman dimuat
 updateCountdown();


  // Select all links with class .bcmenu-i
  const menuLinks = document.querySelectorAll('.bcmenu-i a');

  // Loop through each link and add smooth scroll behavior
  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    // Get target section ID from href attribute
    const targetId = this.getAttribute('href').substring(1);

    // Find the target section by ID
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  }