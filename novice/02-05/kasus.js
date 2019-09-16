const axios = require('axios');

axios.post('https://wstraining.bkn.go.id/oauth/', {
        clien_id: 'bengkulutraining',
        password: '123456789'
    })
    .then(function(res) {
        console.log(res);
        // const { token } = res.data; //menyimpan dilocalstorage misal ya!
        // axios.get('https://wstraining.bkn.go.id/oauth/', {
        //         headers: {
        //             authorization: `Bearer ${token}`
        //         }
        //     })
        //     .then(function(response) {
        //         console.log(response.data);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
    })
    .catch(function(error) {
        console.log(error);
    });