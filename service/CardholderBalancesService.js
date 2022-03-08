'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns account balances for a cardholder
 *
 *
 * token String User or Business token
 * returns cardholder_balances
 **/
exports.getBalancesToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/balances/' + token,
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
 * Returns a merchant-specific account balance
 *
 *
 * token String User or Business token
 * count Integer Number of restrictions to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * returns cardholder_msa_balance
 **/
exports.getBalancesTokenMsas = function (token, count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/balances/' + token + '/msas?count=' + count + '&start_index=' + start_index + '&sort_by=name',
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

