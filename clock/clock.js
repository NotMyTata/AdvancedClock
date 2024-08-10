function update(){
    const sekarang = new Date();

    var jam = sekarang.getHours();
    var menit = sekarang.getMinutes();
    var detik = sekarang.getSeconds();

    document.getElementById('jam').innerHTML = jam >= 10? jam : `0${jam}`;
    document.getElementById('menit').innerHTML = menit >= 10? menit: `0${menit}`;
    document.getElementById('detik').innerHTML = detik >= 10? detik: `0${detik}`;

    var tanggal = sekarang.getDate();
    var t_UTC = sekarang.getUTCDate();
    var h_UTC = sekarang.getUTCHours();
    var UTC = jam - sekarang.getUTCHours();

    if(tanggal < t_UTC){ UTC = 0 - (h_UTC - jam + 24); } 
    else if (tanggal > t_UTC){ UTC = Math.abs(h_UTC - 24) + jam; }
    
    UTC = UTC >= 0? `+${UTC}` : UTC;
    document.getElementById('UTC').innerHTML = `~UTC${UTC}`;

    const hariArray = ["Minggu", "Senin", " Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulanArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    var hari = hariArray[sekarang.getDay()];
    var bulan = bulanArray[sekarang.getMonth()];

    document.getElementById('tanggal').innerHTML = `${hari}, ${tanggal} ${bulan} ${sekarang.getFullYear()}`;
}
setInterval(update,100);