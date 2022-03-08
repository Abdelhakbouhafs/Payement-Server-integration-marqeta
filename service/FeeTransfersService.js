'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns a fee transfer
 *
 *
 * token String
 * returns fee_transfer_response
 **/
exports.getFeetransfersToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/feetransfers/' + token,
            headers: {
                'Accept': 'application/json',
                'Authorization': authenticator
            }
        };
        axios(config)
            .then(function (response) {
                var examples = {};
                examples['application/json'] = response.data;

                if (Object.keys(examples).length > 0) {

                    resolve(examples[Object.keys(examples)[0]]);
                } else {
                    resolve();
                }
            })
            .catch(function (error) {

                reject(error);
            });
    });
}


/**
 * Creates a fee transfer
 *
 *
 * body Fee_transfer_request  (optional)
 * returns fee_transfer_response
 **/
exports.postFeetransfers = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "tags": body.tags,
            "fees": body.fees,
            "token": body.token,
            "user_token": body.user_token,
            "business_token": body.business_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/feetransfers',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                var examples = {};
                examples['application/json'] = response.data;

                if (Object.keys(examples).length > 0) {

                    resolve(examples[Object.keys(examples)[0]]);
                } else {
                    resolve();
                }
            })
            .catch(function (error) {

                reject(error);
            });
    });
}

