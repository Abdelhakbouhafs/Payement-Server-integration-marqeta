'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all auto reloads for the program
 *
 *
 * card_product String Card product token (optional)
 * user_token String User token (optional)
 * business_token String Business token (optional)
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * returns AutoReloadListResponse
 **/
exports.getAutoreloads = function (card_product, user_token, business_token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/autoreloads?card_product=' + card_product + '&user_token=' + user_token + '&count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific auto reload object
 *
 *
 * token String Auto reload token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns auto_reload_response_model
 **/
exports.getAutoreloadsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/autoreloads/' + token,
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
 * Creates an auto reload object
 *
 *
 * body Auto_reload_model Auto reload object
 * returns auto_reload_response_model
 **/
exports.postAutoreloads = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "order_scope": {
                "gpa": {
                    "trigger_amount": body.order_scope.gpa.trigger_amount,
                    "reload_amount": body.order_scope.gpa.reload_amount
                },
                "msa": {
                    "campaign_token": body.order_scope.msa.campaign_token,
                    "trigger_amount": body.order_scope.msa.trigger_amount,
                    "reload_amount": body.order_scope.msa.reload_amount
                }
            },
            "active": body.active,
            "association": {
                "card_product_token": body.association.card_product_token,
                "business_token": body.association.business_token,
                "user_token": body.association.user_token
            },
            "funding_source_address_token": body.funding_source_address_token,
            "currency_code": body.currency_code,
            "token": body.token,
            "funding_source_token": body.funding_source_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/autoreloads',
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
 * Updates a specific auto reload object
 *
 *
 * body Auto_reload_update_model Auto reload object
 * token String
 * returns auto_reload_response_model
 **/
exports.putAutoreloadsToken = function (body, token) {
    return new Promise(function (resolve, reject) {

        var data = JSON.stringify({
            "order_scope": {
                "gpa": {
                    "trigger_amount": body.order_scope.gpa.trigger_amount,
                    "reload_amount": body.order_scope.gpa.reload_amount
                },
                "msa": {
                    "campaign_token": body.order_scope.msa.campaign_token,
                    "trigger_amount": body.order_scope.msa.trigger_amount,
                    "reload_amount": body.order_scope.msa.reload_amount
                }
            },
            "active": body.active,
            "association": {
                "card_product_token": body.association.card_product_token,
                "business_token": body.association.business_token,
                "user_token": body.association.user_token
            },
            "funding_source_address_token": body.funding_source_address_token,
            "currency_code": body.currency_code,
            "token": body.token,
            "funding_source_token": body.funding_source_token
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/autoreloads/' + token,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });


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

