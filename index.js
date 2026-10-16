function queue() {
    return new Promise(function(resolve, reject) {
        const nama = ["Jane", "John", "Ed"];
        const waktu = [500, 1500, 2000];
        for (let i = 0; i < nama.length; i++) {
            setTimeout(() => {
                console.log(nama[i]);
                if (i === nama.length - 1) {
                    resolve("Antrean selesai");
                }
            }, waktu[i]);
        }
    });
}

queue()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Terjadi kesalahan:", error);
    });