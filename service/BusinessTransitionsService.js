'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns transitions for a given business
 *
 *
 * business_token String Business token
 * count Integer Number of business transitions to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns BusinessTransitionListResponse
 **/
exports.getBusinesstransitionsBusinessBusinesstoken = function (business_token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {

        var config = {
            method: 'get',
            url: Base_url + 'v3/businesstransitions/business/' + business_token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-id',
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
 * Returns a business transition
 *
 *
 * token String Transition token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns BusinessTransitionResponse
 **/
exports.getBusinesstransitionsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/businesstransitions/' + token,
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
 * Creates a business transition
 *
 *
 * body BusinessTransitionRequest  (optional)
 * returns BusinessTransitionResponse
 **/
exports.postBusinesstransitions = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "reason_code": body.reason_code,  //  data format  "00",
            "reason": body.reason,
            "business_token": body.business_token,
            "idempotentHash": body.idempotentHash,
            "channel": body.channel,// "API",
            "token": body.token,
            "status": body.status // "UNVERIFIED"
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/businesstransitions',
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

