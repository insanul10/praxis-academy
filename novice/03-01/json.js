let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

//menampilkan name dan umur menggunakan library json
alert( user.name ); // John
alert( user.age );  // 30