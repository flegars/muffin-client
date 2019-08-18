const axios = require('axios');
const BASE_ROUTE = 'http://127.0.0.1:8080/api/';

module.exports = class Services {

    getAction(route) {
        return axios.get(BASE_ROUTE + route);
    }

    postAction(route, msg, params) {
        axios.post(BASE_ROUTE + route, params )
        .then( function (response) { 
            console.log(response) 
            return msg;
        })
        .catch( function (error) {
            console.log(error);
         })
    }
}