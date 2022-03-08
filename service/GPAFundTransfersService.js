'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 *
 * ddaAcctNum String
 * no response value expected for this operation
 **/
exports.getGpaTokenFromBankAccountNumber = function (ddaAcctNum) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/eft/depositaccount/' + ddaAcctNum,
            headers: {
                'Accept': 'application/json',
                'Authorization': authenticator
            }
        };
        axios(config)
            .then(function (response) {

                resolve(response.data);
            })
            .catch(function (error) {

                reject(error);
            });
    });
}

