'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all real-time fee groups
 *
 *
 * count Integer Number of real-time fee groups to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns RealTimeFeeGroupListResponse
 **/
exports.getRealtimefeegroups = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/realtimefeegroups?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a specific real-time fee group
 *
 *
 * token String Real-time fee group token
 * returns real_time_fee_group
 **/
exports.getRealtimefeegroupsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/realtimefeegroups/' + token,
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
 * Creates a real-time fee group
 *
 *
 * body Real_time_fee_group_create_request  (optional)
 * returns real_time_fee_group
 **/
exports.postRealtimefeegroups = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "token": body.token,
            "active": body.active,
            "fee_tokens": body.fee_tokens
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/realtimefeegroups',
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
 * Updates a specific real-time fee group
 *
 *
 * token String Real-time fee group token
 * body Real_time_fee_group_request  (optional)
 * returns real_time_fee_group
 **/
exports.putRealtimefeegroupsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "token": body.token,
            "active": body.active,
            "fee_tokens": body.fee_tokens
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/realtimefeegroups/' + token,
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

