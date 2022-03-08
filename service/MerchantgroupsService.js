'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns a Merchant Group
 *
 *
 * token String Merchant Group token
 * returns merchant_group_response
 **/
exports.getMerchantGroup = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/merchantgroups/' + token,
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
 * Lists all Merchant Groups
 *
 *
 * mid String mid (optional)
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * returns MerchantGroupListResponse
 **/
exports.getMerchantGroups = function (mid, count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/merchantgroups?mid=' + mid + '&count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Creates a merchant group
 *
 *
 * body Merchant_group_request  (optional)
 * returns merchant_group_response
 **/
exports.postMerchantGroup = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "mids": body.mids,
            "active": body.active
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/merchantgroups',
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
 * Updates an Merchant Group
 *
 *
 * body Merchant_group_update_request Merchant Group
 * token String
 * returns merchant_group_response
 **/
exports.putMerchantGroupsToken = function (body, token) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "mids": body.mids,
            "active": body.active
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/merchantgroups/' + token,
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

