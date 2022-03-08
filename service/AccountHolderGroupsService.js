'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists account holder groups
 *
 *
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * returns AccountHolderGroupListResponse
 **/
exports.getAccountholdergroups = function (count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/accountholdergroups?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific account holder group object
 *
 *
 * token String Account holder group token
 * returns account_holder_group_response
 **/
exports.getAccountholdergroupsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/accountholdergroups/' + token,
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
 * Creates an account holder group object
 *
 *
 * body Account_holder_group_request Account holder group object
 * returns account_holder_group_response
 **/
exports.postAccountholdergroups = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "config": {
                "real_time_fee_group_token": body.config.real_time_fee_group_token,
                "kyc_required": body.config.kyc_required,  //  "ALWAYS"
                "is_reloadable": body.config.is_reloadable, //boolean
                "pre_kyc_controls": {
                    "enable_non_program_loads": body.config.pre_kyc_controls.enable_non_program_loads,
                    "cash_access_enabled": body.config.pre_kyc_controls.cash_access_enabled,
                    "international_enabled": body.config.pre_kyc_controls.international_enabled,
                    "balance_max": body.config.pre_kyc_controls.balance_max,
                    "is_reloadable_pre_kyc": body.config.pre_kyc_controls.is_reloadable_pre_kyc
                }
            }
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/accountholdergroups',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authenticator
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                var examples = {};
                examples['application/json'] = response.data
                if (Object.keys(examples).length > 0) {

                    resolve(examples[Object.keys(examples)[0]]);
                } else {
                    resolve();
                }
            })
            .catch(function (error) {
                resolve(error);
            });

    });
}


/**
 * Updates an account holder group object
 *
 *
 * body Account_holder_group_update_request Account holder group update object
 * token String
 * returns account_holder_group_response
 **/
exports.putAccountholdergroupsToken = function (body, token) {
    return new Promise(function (resolve, reject) {
        var axios = require('axios');
        var data = JSON.stringify({
            "name": body.name,
            "config": {
                "real_time_fee_group_token": body.config.real_time_fee_group_token,
                "kyc_required": body.config.kyc_required,   //  "ALWAYS",
                "is_reloadable": body.config.is_reloadable,
                "pre_kyc_controls": {
                    "enable_non_program_loads": body.config.pre_kyc_controls.enable_non_program_loads, // boolean
                    "cash_access_enabled": body.config.pre_kyc_controls.cash_access_enabled,
                    "international_enabled": body.config.pre_kyc_controls.international_enabled,
                    "balance_max": body.config.pre_kyc_controls.balance_max,
                    "is_reloadable_pre_kyc": body.config.pre_kyc_controls.is_reloadable_pre_kyc
                }
            }
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/accountholdergroups/' + token,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
            },
            data: data
        };

        axios(config)
        var examples = {};
        examples['application/json'] = response.data
        if (Object.keys(examples).length > 0) {

            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    })
        .catch(function (error) {
            resolve(error);
        });

}

