'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all merchants
 *
 *
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns MerchantListResponse
 **/
exports.getMerchants = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/merchants?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific merchant
 *
 *
 * token String Merchant token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns merchant_response_model
 **/
exports.getMerchantsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/merchants/' + token,
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
 * Lists the stores associated with a specific merchant
 *
 *
 * token String Merchant token
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns StoreListResponse
 **/
exports.getMerchantsTokenStores = function (token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/merchants/' + token + '/stores?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Creates a merchant
 *
 *
 * body Merchant_model  (optional)
 * returns merchant_response_model
 **/
exports.postMerchants = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "active": body.active,
            "contact": body.contact,
            "contact_email": body.contact_email,
            "longitude": body.longitude,
            "latitude": body.latitude,
            "address1": body.address1,
            "address2": body.address2,
            "city": body.city,
            "state": body.state,
            "province": body.province,
            "zip": body.zip,
            "phone": body.phone,
            "country": body.country,
            "token": body.token,
            "partial_auth_flag": body.partial_auth_flag
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/merchants',
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
 * Updates a specific merchant
 *
 *
 * token String Merchant token
 * body Merchant_update_model  (optional)
 * returns merchant_response_model
 **/
exports.putMerchantsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "active": body.active,
            "contact": body.contact,
            "contact_email": body.contact_email,
            "longitude": body.longitude,
            "latitude": body.latitude,
            "address1": body.address1,
            "address2": body.address2,
            "city": body.city,
            "state": body.state,
            "province": body.province,
            "zip": body.zip,
            "phone": body.phone,
            "country": body.country,
            "partial_auth_flag": body.partial_auth_flag
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/merchants/' + token,
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

