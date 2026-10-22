# JavaScript 8

## Membuat antrian dengan built-in constructor object Promise

### Kode
```javascript
function queue(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(name), delay);
    });
}

queue("John", 1500)
    .then((value) => {
        console.log(value);
        return queue("Ed", 2000);
    })
    .then((value) => {
        console.log(value);
        return queue("Jane", 500);
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error);
    });
```