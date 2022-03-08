'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all push-to-card disbursements
 *
 *
 * count Integer Number of push-to-card disbursements to retrieve (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * returns PushToCardDisburseListResponse
 **/
exports.getPushtocardsDisburse = function (count, fields, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/pushtocards/disburse?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a specific push-to-card disbursement
 *
 *
 * token String Push-to-card disbursement token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns push_to_card_disbursement_response
 **/
exports.getPushtocardsDisburseToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: 'http://localhost:8080/v3/pushtocards/disburse/' + token,
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
 * Returns all push-to-card payment card details
 *
 *
 * user_token String User token
 * count Integer Number of push-to-card payment cards to retrieve (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * returns PushToCardListResponse
 **/
exports.getPushtocardsPaymentcard = function (user_token, count, fields, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/pushtocards/paymentcard?count=' + count + '&user_token=' + user_token + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a specific paymentcard object
 *
 *
 * token String Push-to-card token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns push_to_card_response
 **/
exports.getPushtocardsPaymentcardToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/pushtocards/paymentcard/' + token,
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
 * Initiates a push-to-card money disbursement
 *
 *
 * body Push_to_card_disburse_request  (optional)
 * returns push_to_card_disbursement_response
 **/
exports.postPushtocardsDisburse = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "tags": body.tags,
            "memo": body.memo,
            "token": body.token,
            "currency_code": body.currency_code,
            "amount": body.amount,
            "payment_instrument_token": body.payment_instrument_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/pushtocards/disburse',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html',
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


/**
 * Adds an external card to which funds will be pushed
 *
 *
 * body Push_to_card_request  (optional)
 * returns push_to_card_response
 **/
exports.postPushtocardsPaymentcard = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "address_1": body.address1,
            "address_2": body.address2,
            "city": body.city,
            "state": body.state,
            "postal_code": body.postal_code,
            "country": body.country,
            "token": body.token,
            "user_token": body.user_token,
            "name_on_card": body.name_on_card,
            "pan": body.pan,
            "cvv": body.cvv,
            "exp_date": body.exp_date()
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/pushtocards/paymentcard',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/html',
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

