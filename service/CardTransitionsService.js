'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all card transitions
 *
 *
 * token String Card token
 * count Integer Number of card transitions to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns CardTransitionListResponse
 **/
exports.getCardtransitionsCardToken = function (token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cardtransitions/card/' + token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a card transition object
 *
 *
 * token String Card transition token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns card_transition_response
 **/
exports.getCardtransitionsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cardtransitions/' + token,
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
 * Creates a card transition object
 *
 *
 * body Card_transition_request  (optional)
 * returns card_transition_response
 **/
exports.postCardtransitions = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "card_token": body.card_token,
            "reason": body.reason,
            "reason_code": body.reason_code,
            "validations": {
                "user": {
                    "birth_date": body.validations.user.birth_date,
                    "phone": body.validations.user.phone,
                    "ssn": body.validations.user.ssn,
                    "random_name_line1_postfix": body.validations.user.random_name_line1_postfix
                }
            },
            "channel": body.channel,
            "state": body.state
        });
        var config = {
            method: 'post',
            url: Base_url + 'v3/cardtransitions',
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

