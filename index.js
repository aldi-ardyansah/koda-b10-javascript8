function queue() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Jane");
            setTimeout(() => {
                console.log("John");
                setTimeout(() => {
                    console.log("Ed");
                    resolve("Queue Selesai");
                }, 500);
            }, 1000);
        }, 500);
    });
}

queue()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log("Terjadi kesalahan:", error);
});