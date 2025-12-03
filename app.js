const warna = 'Hijau';

if (warna === 'Merah') {
    console.log('Stop');
} else {
    if (warna === 'Kuning') {
        console.log('Pelan pelan');
    } else {
        if (warna === 'Hijau') {
            console.log('Jalan');
        } else {
            console.log('tidak valid');
        } 
    }
}

if (warna === 'Merah') {
    console.log('Stop');
} else if (warna === 'Kuning') {
    console.log("Pelan - pelan");
} else if (warna === 'Hijau') {
    console.log('Jalan');
} else {
    console.log('idunno')
}
