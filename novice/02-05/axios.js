const axios = require('axios');

axios.post('YOUR_URI', {
    username: 'root',
    password: '123'
  })
  .then(function (res) {
    const {token} = res.data.data; //menyimpan dilocalstorage misal ya!
    axios.get('http://159.65.108.6:8800/auth/rolecheck', {
      headers : {
          authorization : `Bearer ${token}`
      }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    })
  .catch(function (error) {
    console.log(error);
  });