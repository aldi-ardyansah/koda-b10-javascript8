function queue() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Jane");
            resolve();
        }, 500);
    });
}

queue()
    .then(() => {
        setTimeout(() => {
            console.log("John");
        }, 1000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("Ed");
        }, 500);
    })
    .catch((error) => {
        console.log("Terjadi kesalahan:", error);
    });

