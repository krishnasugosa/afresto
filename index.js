var DataSiswa = [
    {id:4061,pw:3321},
    {id:4072,pw:3421},
    {id:4083,pw:3521},
    {id:4094,pw:3621},
]

document.getElementById("BtnEnter").onclick = function(){
function getDataSiswa(){
    const txt1 = document.getElementById("txt1");
    const txt2 = document.getElementById("txt2");
    const errorPop = document.querySelector(".text-wrong")
    
    for(let datasiswa of DataSiswa){
        if(datasiswa.id == txt1.value && datasiswa.pw == txt2.value){
            window.location = "room.html"
        }else{
           errorPop.style.display = "block"
        }
    }
   
}
getDataSiswa()
}


//Mendeteksi perubahan status koneksi
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Fungsi untuk menampilkan pop-up
function showPopup() {
    popSW = document.querySelector(".containerPOP")
    popSW.style.display = "block"
}

// Fungsi untuk memperbarui status online/offline
function updateOnlineStatus() {
    popSW = document.querySelector(".containerPOP")
  if (navigator.onLine) {
    // Pengguna telah terhubung kembali
    popSW.style.display = "none"
  } else {
    // Pengguna telah kehilangan koneksi
    showPopup();
}
}

window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
    return 'Apakah Anda yakin ingin keluar dari website ini?';
  });


