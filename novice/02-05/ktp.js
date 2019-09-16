//main.js
let myLogModule = require('./module.js');
let ktp = require('./moduleKTP.js');

// myLogModule.info('Node.js started');
myLogModule.tambah(5);

ktp.nik();

//panggil moduleKTP
ktp.users();

//moduleKTP.js
const axios = require('axios');

let data = {
    nik: function(a) {
        console.log("1122325111233");
    },
    nama: function(b) {
        console.log("Module");
    },
    users: function() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
    }
}

module.exports = data;

//module.js
let compute = {
    tambah: function(a) {
        b=a+a;
        console.log(b);
    }
};

module.exports = compute;