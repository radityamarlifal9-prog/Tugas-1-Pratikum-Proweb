let jenisPermainan = 0;

function suitBatuGuntingKertas(pilihanUser) {
    const pilihan = ['batu', 'gunting', 'kertas'];
    const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)];
    
    let hasil = `Kamu: ${pilihanUser} | Komputer: ${pilihanKomputer}<br><br>`;
    
    if (pilihanUser === pilihanKomputer) {
        hasil += '⚖️ SERI!';
    } else if (
        (pilihanUser === 'batu' && pilihanKomputer === 'gunting') ||
        (pilihanUser === 'gunting' && pilihanKomputer === 'kertas') ||
        (pilihanUser === 'kertas' && pilihanKomputer === 'batu')
    ) {
        hasil += '🎉 KAMU MENANG!';
    } else {
        hasil += '😅 KAMU KALAH!';
    }
    return hasil;
}

function suitGajahOrangSemut(pilihanUser) {
    const pilihan = ['gajah', 'orang', 'semut'];
    const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)];
    
    let hasil = `Kamu: ${pilihanUser} | Komputer: ${pilihanKomputer}<br><br>`;
    
    if (pilihanUser === pilihanKomputer) {
        hasil += '⚖️ SERI!';
    } else if (
        (pilihanUser === 'gajah' && pilihanKomputer === 'orang') ||
        (pilihanUser === 'orang' && pilihanKomputer === 'semut') ||
        (pilihanUser === 'semut' && pilihanKomputer === 'gajah')
    ) {
        hasil += '🎉 KAMU MENANG!';
    } else {
        hasil += '😅 KAMU KALAH!';
    }
    return hasil;
}

function suitJari(pilihanUser) {
    const pilihanKomputer = Math.floor(Math.random() * 6);
    
    let hasil = `Kamu: ${pilihanUser} | Komputer: ${pilihanKomputer}<br><br>`;
    
    if (pilihanUser === pilihanKomputer) {
        hasil += '⚖️ SERI!';
    } else if (pilihanUser > pilihanKomputer) {
        hasil += '🎉 KAMU MENANG!';
    } else {
        hasil += '😅 KAMU KALAH!';
    }
    return hasil;
}

function pilihSuit(jenis) {
    jenisPermainan = jenis;
    const areaInput = document.getElementById('areaInput');
    const hasil = document.getElementById('hasil');
    hasil.innerHTML = '';
    
    if (jenis === 1) {
        areaInput.innerHTML = `
            <p>Pilih: batu / gunting / kertas</p>
            <input type="text" id="pilihanUser" placeholder="Ketik di sini">
            <button onclick="main()">MAIN!</button>
        `;
    } else if (jenis === 2) {
        areaInput.innerHTML = `
            <p>Pilih: gajah / orang / semut</p>
            <input type="text" id="pilihanUser" placeholder="Ketik di sini">
            <button onclick="main()">MAIN!</button>
        `;
    } else if (jenis === 3) {
        areaInput.innerHTML = `
            <p>Pilih angka 0 - 5</p>
            <input type="number" id="pilihanUser" min="0" max="5" placeholder="0-5">
            <button onclick="main()">MAIN!</button>
        `;
    }
    areaInput.style.display = 'block';
}

function main() {
    const pilihanUser = document.getElementById('pilihanUser').value.toLowerCase().trim();
    const hasil = document.getElementById('hasil');
    let teksHasil = '';
    
    if (jenisPermainan === 1) {
        if (!['batu', 'gunting', 'kertas'].includes(pilihanUser)) {
            hasil.innerHTML = '❌ Pilihan tidak valid!';
            return;
        }
        teksHasil = suitBatuGuntingKertas(pilihanUser);
    } else if (jenisPermainan === 2) {
        if (!['gajah', 'orang', 'semut'].includes(pilihanUser)) {
            hasil.innerHTML = '❌ Pilihan tidak valid!';
            return;
        }
        teksHasil = suitGajahOrangSemut(pilihanUser);
    } else if (jenisPermainan === 3) {
        const angka = parseInt(pilihanUser);
        if (isNaN(angka) || angka < 0 || angka > 5) {
            hasil.innerHTML = '❌ Masukkan angka 0-5!';
            return;
        }
        teksHasil = suitJari(angka);
    }
    
    hasil.innerHTML = teksHasil;
}