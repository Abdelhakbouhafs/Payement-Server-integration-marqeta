'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns details of a previous transfer
 *
 *
 * token String
 * returns peer_transfer_response
 **/
exports.getPeertransfersToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/peertransfers/' + token,
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
 * Returns all peer transfers for a user
 *
 *
 * user_or_business_token String User or business token
 * count Integer Number of transfers to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns peer_transfer_response
 **/
exports.getPeertransfersUserUserorbusinesstoken = function (user_or_business_token, count, start_index, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/peertransfers/user/' + user_or_business_token + '?count=' + count + '&start_index=' + start_index,
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
 * Returns received peer transfers for a user
 *
 *
 * user_or_business_token String User or business token
 * count Integer Number of transfers to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns peer_transfer_response
 **/
exports.getPeertransfersUserUserorbusinesstokenRecipient = function (user_or_business_token, count, start_index, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/peertransfers/user/' + user_or_business_token + '/recipient?count=' + count + '&start_index=' + start_index,
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
 * Returns sent peer transfers for a user
 *
 *
 * user_or_business_token String User or business token
 * count Integer Number of transfers to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns peer_transfer_response
 **/
exports.getPeertransfersUserUserorbusinesstokenSender = function (user_or_business_token, count, start_index, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/peertransfers/user/' + user_or_business_token + '/sender?count=' + count + '&start_index=' + start_index,
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
 * Performs a peer transfer from one user to another
 *
 *
 * body Peer_transfer_request  (optional)
 * returns peer_transfer_response
 **/
exports.postPeertransfers = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "amount": body.amount,
            "tags": body.tags,
            "memo": body.memo,
            "sender_user_token": body.sender_user_token,
            "recipient_user_token": body.recipient_user_token,
            "sender_business_token": body.business_token,
            "recipient_business_token": body.recipient_business_token,
            "currency_code": body.currency_code
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/peertransfers',
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

