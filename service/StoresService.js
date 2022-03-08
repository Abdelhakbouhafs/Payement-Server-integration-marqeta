'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all stores
 *
 *
 * count Integer Number of stores to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..) (optional)
 * sort_by String Sort order (optional)
 * returns StoreListResponse
 **/
exports.getStores = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/stores?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a store specified by its MID
 *
 *
 * mid String Store MID
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns store_response_model
 **/
exports.getStoresMidMid = function (mid, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/stores/mid/' + mid,
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
 * Returns a specific store
 *
 *
 * token String Store token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leaveblank to return all fields. (optional)
 * returns store_response_model
 **/
exports.getStoresToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/stores/' + token,
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
 * Creates a store
 *
 *
 * body Store_model  (optional)
 * returns store_response_model
 **/
exports.postStores = function (body) {
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
            "partial_auth_flag": body.partial_auth_flag,
            "mid": body.mid,
            "network_mid": body.network_mid,
            "merchant_token": body.merchant_token,
            "partial_approval_capable": body.partial_approval_capable,
            "keyed_auth_cvv_enforced": body.keyed_auth_cvv_enforced
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/stores',
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
 * Updates a store
 *
 *
 * token String Store token
 * body Store_update_model  (optional)
 * returns store_response_model
 **/
exports.putStoresToken = function (token, body) {
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
            "partial_auth_flag": body.partial_auth_flag,
            "mid": body.mid,
            "network_mid": body.network_mid,
            "merchant_token": body.merchant_token,
            "partial_approval_capable": body.partial_approval_capable,
            "keyed_auth_cvv_enforced": body.keyed_auth_cvv_enforced
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/stores/' + token,
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

