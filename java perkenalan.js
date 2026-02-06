// Saat halaman dibuka, isi otomatis jika ada data
window.onload = function () {
    if (localStorage.getItem("username")) {
        document.getElementById("username").value = localStorage.getItem("username");
        document.getElementById("password").value = localStorage.getItem("password");
    }
};

// Saat form disubmit → simpan / update
document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Data berhasil disimpan / diupdate! ✅");
});

// Tombol clear
function clearData(){
    localStorage.clear();
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    alert("Data dihapus! ❌");
}
