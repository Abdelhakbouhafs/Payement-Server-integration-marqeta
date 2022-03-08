'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all MCC groups
 *
 *
 * mcc String MCC (optional)
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * returns MCCGroupListResponse
 **/
exports.getMccgroups = function (mcc, count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/mccgroups?mcc=' + mcc + '&count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific MCC group
 *
 *
 * token String MCC group token
 * returns mcc_group_model
 **/
exports.getMccgroupsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/mccgroups/' + token,
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
 * Creates an MCC group
 *
 *
 * body Mcc_group_model MCC group
 * returns mcc_group_model
 **/
exports.postMccgroups = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "mccs": body.mccs,
            "name": body.name,
            "active": body.active,
            "config": body.config,
            "token": body.token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/mccgroups',
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
 * Updates an MCC group
 *
 *
 * body Mcc_group_update_model MCC group
 * token String
 * returns mcc_group_update_model
 **/
exports.putMccgroupsToken = function (body, token) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "mccs": body.mccs,
            "name": body.name,
            "active": body.active,
            "config": body.config
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/mccgroups/' + token,
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

