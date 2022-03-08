'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns an MSA order
 *
 *
 * token String Order token
 * returns msa_order_response
 **/
exports.getMsaordersToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/msaorders/' + token,
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
 * Lists all MSA unloads
 *
 *
 * count Integer Number of MSA unloads to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * user_token String User token (optional)
 * business_token String Business token (optional)
 * original_order_token String Original order token (optional)
 * returns MSAUnloadListResponse
 **/
exports.getMsaordersUnloads = function (count, start_index, sort_by, user_token, business_token, original_order_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/msaorders/unloads?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime&user_token=' + user_token + '&business_token=' + business_token + '&original_order_token=' + original_order_token,
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
 * Returns a specific MSA unload
 *
 *
 * unload_token String Unload token
 * returns msa_returns
 **/
exports.getMsaordersUnloadsUnloadtoken = function (unload_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/msaorders/unloads/' + unload_token,
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
 * Creates a merchant-specific account order
 *
 *
 * body Msa_order_request  (optional)
 * returns msa_order_response
 **/
exports.postMsaorders = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "campaign_token": body.campaign_token,
            "user_token": body.user_token,
            "business_token": body.business_token,
            "currency_code": body.currency_code,
            "purchase_amount": body.purchase_amount,
            "reward_amount": body.reward_amount,
            "reward_trigger_amount": body.reward_trigger_amount,
            "start_date": body.start_date,
            "end_date": body.end_date,
            "funding_source_token": body.funding_source_token,
            "funding_source_address_token": body.funding_source_address_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/msaorders',
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


/**
 * Returns an MSA order
 *
 *
 * body Msa_unload_request_model  (optional)
 * returns msa_returns
 **/
exports.postMsaordersUnloads = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "original_order_token": body.original_order_token,
            "amount": body.amount,
            "tags": body.tags,
            "memo": body.memo
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/msaorders/unloads',
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


/**
 * Updates a specific merchant-specific account order
 *
 *
 * token String Order token
 * body Msa_order_update_request  (optional)
 * returns msa_order_response
 **/
exports.putMsaordersToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "active": body.active,
            "start_date": body.start_date,
            "end_date": body.end_date
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/msaorders/' + token,
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

