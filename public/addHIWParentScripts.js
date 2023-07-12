const axios = require('axios');
const listData = require('./payloadHIWParent.json');
async function postData(){
  for(let data of listData){
    await axios({
      method: 'post',
      url: 'https://gen-dev.bytez.pro/api/how-it-works-parent/localizations',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    })
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
  
  }
}

postData();