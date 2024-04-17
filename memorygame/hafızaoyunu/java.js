//Global
var hafiza;
var BTNPREFIX = 'btn';
var secim = -1;

function cevir(idx) {
    idx = parseInt(idx);
    console.log(idx);
    if (secim < 0) {
        var btn = document.getElementById(BTNPREFIX + idx);
        secim = idx;
        btn.innerText = hafiza[idx];
    } else {
        btn = document.getElementById(BTNPREFIX + secim);
        var btn2 = document.getElementById(BTNPREFIX + idx);
        btn2.innerText = hafiza[idx];
        //Eðer seçim tamam ise
        if (hafiza[idx] == hafiza[secim]) {
            console.log("Oley!");
            btn.parentElement.removeChild(btn);
            btn2.parentElement.removeChild(btn2);
        } else {
            //Deðilse gecikmeli sýfýrla
            setTimeout(function () {
                btn.innerText = "X";
                btn2.innerText = "X";
            }, 1111)

        }
        secim = -1;
    }
}

function karistir(array) {
    var c = array.length, t, r;

    // Sondan baþa doðru say
    while (0 !== c) {

        // c den küçük rastgele bir index seç
        r = Math.floor(Math.random() * c);
        c -= 1;

        // index ile yerlerini deðiþtir
        t = array[c];
        array[c] = array[r];
        array[r] = t;
    }

    return array;
}

function rastgeleDiziOlustur(buyukluk) {
    buyukluk = parseInt(buyukluk);
    var len = (buyukluk * (buyukluk + 1));
    console.log(buyukluk);
    console.log(len);
    hafiza = new Array(len);

    for (var i = 0; i < len / 2; i++) {
        hafiza[i] = i;
        hafiza[(len / 2) + i] = i;
    }
    console.log(hafiza);
    hafiza = karistir(hafiza);
    console.log(hafiza);
}

function hazirla(buyukluk) {
    buyukluk = parseInt(buyukluk);
    //document.clear();
    document.body.innerHTML = '';

    rastgeleDiziOlustur(buyukluk);

    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    //tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    var xc = buyukluk;
    var yc = buyukluk + 1; // Tek x Çift = çift
    var p = 0;
    for (var x = 0; x < xc ; x++) {
        var tr = document.createElement('tr');

        for (var y = 0; y < yc ; y++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('\u0020'))
            td.innerHTML = '<button type="button" id="' + BTNPREFIX + p + '" onclick="cevir(' + p + ');">X</button>'
            tr.appendChild(td);
            p++;
        }
        tbdy.appendChild(tr);

    }

    tbl.appendChild(tbdy);
    body.appendChild(tbl)

}