'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all digital wallet token transitions
 *
 *
 * token String Digital wallet token
 * count Integer Number of digital wallet transitions to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns DigitalWalletTokenTransitionListResponse
 **/
exports.getDigitalwallettokentransitionsDigitalwallettokenToken = function (token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/digitalwallettokentransitions/digitalwallettoken/' + token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-id',
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
 * Returns a digital wallet transition object
 *
 *
 * token String Digital wallet transition token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns digital_wallet_token_transition_response
 **/
exports.getDigitalwallettokentransitionsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/digitalwallettokentransitions/' + token,
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
 * Creates a digital wallet token transition
 *
 *
 * body Digital_wallet_token_transition_request  (optional)
 * returns digital_wallet_token_transition_response
 **/
exports.postDigitalwallettokentransitions = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "reason_code": body.reason_code,
            "token_reference_id": body.token_reference_id,
            "channel": body.channel,
            "digital_wallet_token": {
                "card_token": body.digital_wallet_token.card_token,
                "token": body.digital_wallet_token.token
            },
            "state": body.state,
            "reason": body.reason,
            "override_tsp_error": body.override_tsp_error
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/digitalwallettokentransitions',
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

