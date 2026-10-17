function queue1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("John");
        }, 1500);
    });
}

function queue2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ed");
        }, 2000);
    });
}

function queue3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Jane");
        }, 500);
    });
}

queue1()
    .then(function(value) {
        console.log(value);
        return queue2();
    })
    .then(function(value) {
        console.log(value);
        return queue3();
    })
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.error(error);
    });
