// Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2024 09:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
  
  // Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown result
  document.querySelector(".day1").innerHTML = days + "d ";
  document.querySelector(".hours1").innerHTML = hours + "h ";
  document.querySelector(".minutes1").innerHTML = minutes + "m ";
  document.querySelector(".second1").innerHTML = seconds + "s ";
  
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".coutdown1").innerHTML = "EXPIRED";
  }
}, 1000);


document.addEventListener('DOMContentLoaded', function() {
  // Menangkap elemen tombol
  var kirimButton = document.querySelector('.buttons21 button');

  // Menangkap elemen input nama dan ucapan
  var namaInput = document.querySelector('.nama-p');
  var ucapanInput = document.querySelector('.ucapan-p');

  // Menangkap elemen daftar ucapan
  var listUcapan = document.querySelector('.list-ucapan');

  // Menambahkan event listener untuk saat tombol diklik
  kirimButton.addEventListener('click', function() {
    // Ambil nilai dari input nama dan ucapan
    var nama = namaInput.value;
    var ucapan = ucapanInput.value;

    // Buat elemen baru untuk menampilkan pesan
    var newPesan = document.createElement('div');
    newPesan.classList.add('pesan');

    // Tambahkan foto bulat default
    var avatar = document.createElement('img');
    avatar.src = 'user-pp.png';
    avatar.alt = 'Avatar';
    avatar.classList.add('avatar');
    newPesan.appendChild(avatar);

    // Tambahkan isi pesan
    var isiPesan = document.createElement('div');
    isiPesan.classList.add('isi-pesan');
    isiPesan.innerHTML = '<p><strong>' + nama + '</strong>: ' + ucapan + '</p>';
    newPesan.appendChild(isiPesan);

    // Tambahkan elemen baru ke dalam daftar ucapan
    listUcapan.appendChild(newPesan);

    // Reset nilai input
    namaInput.value = '';
    ucapanInput.value = '';

    // Scroll ke bawah agar pesan terbaru terlihat
    listUcapan.scrollTop = listUcapan.scrollHeight;
  });
});

