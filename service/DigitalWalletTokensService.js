'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns digital wallet tokens
 *
 *
 * count Integer Number of digital wallet tokens to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * start_date String Start date (yyyy-MM-dd) (optional)
 * end_date String End date (yyyy-MM-dd) (optional)
 * pan_reference_id String PAN reference ID (optional)
 * token_reference_id String Token reference ID (optional)
 * correlation_id String Correlation ID (optional)
 * token_type String Comma-delimited list of digital wallet token types to display e.g. DEVICE_SECURE_ELEMENT | MERCHANT_CARD_ON_FILE | DEVICE_CLOUD_BASED | ECOMMERCE_DIGITAL_WALLET | PSEUDO_ACCOUNT (optional)
 * token_requestor_name String Comma-delimited list of digital wallet token wallet providers to display e.g. APPLE_PAY | ANDROID_PAY| SAMSUNG_PAY | MICROSOFT_PAY | VISA_CHECKOUT | FACEBOOK | NETFLIX | UNKNOWN (optional)
 * state String Comma-delimited list of digital wallet token states to display e.g. REQUESTED | REQUEST_DECLINED | TERMINATED | SUSPENDED | ACTIVE (optional)
 * embed String Embed (optional)
 * returns DigitalWalletTokenListResponse
 **/
exports.getDigitalwallettokens = function (count, start_index, fields, sort_by, start_date, end_date, pan_reference_id, token_reference_id, correlation_id, token_type, token_requestor_name, state, embed) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/digitalwallettokens?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime&embed=user',
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
 * Returns a list of digital wallet tokens for the specified card
 *
 *
 * card_token String Card token
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * returns DigitalWalletTokenListResponse
 **/
exports.getDigitalwallettokensCardCardtoken = function (card_token, count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/digitalwallettokens/card/' + card_token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a specific digital wallet token
 *
 *
 * token String Digital wallet token
 * returns digital_wallet_token
 **/
exports.getDigitalwallettokensToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/digitalwallettokens/' + token,
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
 * Returns a specific digital wallet token PAN visible
 *
 *
 * token String Digital wallet token
 * returns digital_wallet_token
 **/
exports.getDigitalwallettokensTokenShowtokenpan = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/digitalwallettokens/' + token + '/showtokenpan',
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

