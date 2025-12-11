const nilai = 14;

if (nilai === 5) {
    console.log('Satuan');
} else if (nilai === 14) {
    console.log('Puluhan');
} else if (nilai >= 100) {
    console.log("Ratusan")
} else if (nilai >= 1000) {
    console.log(nilai)
} else if (nilai <= 0) {
    console.log('Kok Minus?')
} else {
    console.log('Bukan angka yang diminta!')
}
