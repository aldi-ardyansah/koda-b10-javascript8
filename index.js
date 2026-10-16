function queue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("John");
            resolve();
        }, 1500);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Ed");
                resolve();
            }, 2000);
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Jane");
                resolve("Antrean selesai");
            }, 500);
        });
    });
}

queue()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Terjadi kesalahan:", error);
    });