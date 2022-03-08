'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all offers
 *
 *
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns OfferListResponse
 **/
exports.getOffers = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/offers?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific offer
 *
 *
 * token String Offer token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns offer_response_model
 **/
exports.getOffersToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/offers/' + token,
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
 * Creates an offer
 *
 *
 * body Offer_model  (optional)
 * returns offer_response_model
 **/
exports.postOffers = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "end_date": body.end_date,
            "campaign_token": body.campaign_token,
            "reward_amount": body.reward_amount,
            "purchase_amount": body.purchase_amount,
            "name": body.name,
            "active": body.active,
            "reward_trigger_amount": body.reward_trigger_amount,
            "currency_code": body.currency_code,
            "token": body.token,
            "start_date": body.start_date
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/offers',
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
 * Updates an offer
 *
 *
 * token String Offer token
 * body Offer_update_model  (optional)
 * returns offer_response_model
 **/
exports.putOffersToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "active": body.active,
            "name": body.name,
            "start_date": body.start_date,
            "end_date": body.end_date
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/offers/' + token,
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

