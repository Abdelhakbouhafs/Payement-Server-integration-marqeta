'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Queries velocity controls
 *
 *
 * card_product String Card product token. Use \"null\" to get velocity controls that are not associated with any card product. (optional)
 * user String User token. Use \"null\" to get velocity controls that are not associated with any user. (optional)
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * returns VelocityControlListResponse
 **/
exports.getVelocitycontrols = function (card_product, user, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/velocitycontrols?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific velocity control
 *
 *
 * token String Velocity control token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns velocity_control_response
 **/
exports.getVelocitycontrolsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: 'http://localhost:8080/v3/velocitycontrols/' + token,
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
 * Queries a user's velocity control balances
 *
 *
 * user_token String User token
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * force_dto String  (optional)
 * returns VelocityControlBalanceListResponse
 **/
exports.getVelocitycontrolsUserUsertokenAvailable = function (user_token, count, start_index, fields, sort_by, force_dto) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/velocitycontrols/user/' + user_token + '/available?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Creates a velocity control
 *
 *
 * body Velocity_control_request Velocity control object
 * returns velocity_control_response
 **/
exports.postVelocitycontrols = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "association": body.association,
            "merchant_scope": body.merchant_scope,
            "usage_limit": body.usage_limit,
            "approvals_only": body.approvals_only,
            "include_purchases": body.include_purchases,
            "include_withdrawals": body.include_withdrawals,
            "include_transfers": body.include_transfers,
            "include_cashback": body.include_cashback,
            "include_credits": body.include_credits,
            "currency_code": body.currency_code,
            "amount_limit": body.amount_limit,
            "velocity_window": body.velocity_window,
            "active": body.active
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/velocitycontrols',
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
 * Updates a specific velocity control
 *
 *
 * token String Velocity control token
 * body Velocity_control_update_request Velocity control object
 * returns velocity_control_response
 **/
exports.putVelocitycontrolsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "association": body.association,
            "merchant_scope": body.merchant_scope,
            "usage_limit": body.usage_limit,
            "approvals_only": body.approvals_only,
            "include_purchases": body.include_purchases,
            "include_withdrawals": body.include_withdrawals,
            "include_transfers": body.include_transfers,
            "include_cashback": body.include_cashback,
            "include_credits": body.include_credits,
            "currency_code": body.currency_code,
            "amount_limit": body.amount_limit,
            "velocity_window": body.velocity_window,
            "active": body.active
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/velocitycontrols/' + token,
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

