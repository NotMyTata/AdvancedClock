const selections = document.querySelectorAll("select");

for (let i = 99; i >= 0; i--){
    let opt = `<option value="${i}">${i}</option>`;
    selections[0].firstElementChild.insertAdjacentHTML("afterend", opt);
}

for (let i = 59; i >= 0; i--){
    let opt = `<option value="${i}">${i}</option>`;
    selections[1].firstElementChild.insertAdjacentHTML("afterend", opt);
}

for (let i = 59; i >= 0; i--){
    let opt = `<option value="${i}">${i}</option>`;
    selections[2].firstElementChild.insertAdjacentHTML("afterend", opt);
}

var hasSet = false;

function startTimer(){
    let h = selections[0].value;
    let m = selections[1].value;
    let s = selections[2].value;

    if (h == "Jam" || m == "Menit" || s == "Detik"){
        return alert("Input tidak sesuai.");
    } else if (h == 0 && m == 0 && s == 0){
        return alert("Input tidak sesuai.");
    }

    updateTimer(h, m, s);
    hasSet = true;
    tick();
}

function tick(){
    if (hasSet == false) return;

    let timer = document.getElementById('timer').innerHTML;
    let h = timer[0]+timer[1];
    let m = timer[3]+timer[4];
    let s = timer[6]+timer[7];

    h = Number(h);
    m = Number(m);
    s = Number(s);

    let totalSeconds = (h*60*60) + (m*60) + s;

    if (totalSeconds <= 0){
        hasSet = false;
        return alert("Waktu telah habis!");
    }

    totalSeconds--;

    h = Math.floor(totalSeconds/3600);
    m = Math.floor(totalSeconds/60) - (h*60);
    s = totalSeconds - (h*3600 + m*60);
    updateTimer(h, m, s);
}

function updateTimer(h, m, s){
    h = h < 10? '0'+h : h;
    m = m < 10? '0'+m : m;
    s = s < 10? '0'+s : s;

    document.getElementById('timer').innerHTML = `${h}:${m}:${s}`;
}

setInterval(tick, 1000);