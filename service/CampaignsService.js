'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all campaigns
 *
 *
 * count Integer Number of items to retrieve. Recommended max is 10. (optional)
 * start_index Integer Indicates from what row to start returning data. Used in conjunction with count. (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Field on which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or CreatedTime. (optional)
 * returns CampaignListResponse
 **/
exports.getCampaigns = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/campaigns?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific campaign
 *
 *
 * token String Campaign token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns campaign_response_model
 **/
exports.getCampaignsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/campaigns/' + token,
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
 * Lists all stores associated with a campaign
 *
 *
 * token String Campaign token
 * count Integer Number of items to retrieve. Recommended max is 10. (optional)
 * start_index Integer Indicates from what row to start returning data. Used in conjunction with count. (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Field on which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or CreatedTime. (optional)
 * returns StoreListResponse
 **/
exports.getCampaignsTokenStores = function (token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/campaigns/' + token + '/stores?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Creates a campaign
 *
 *
 * body Campaign_model  (optional)
 * returns campaign_response_model
 **/
exports.postCampaigns = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "active": body.active,
            "name": body.name,
            "start_date": body.start_date, // data format "2022-03-06T08:21:43.562Z",
            "end_date": body.end_date, // data format "2022-03-06T08:21:43.562Z",
            "token": body.token,
            "store_tokens": body.store_tokens  // store_tokens [ "String","String","String","String", ...  ]
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/campaigns',
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
 * Updates a specific campaign
 *
 *
 * token String Campaign token
 * body Campaign_update_model  (optional)
 * returns campaign_response_model
 **/
exports.putCampaignsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "active": body.active,
            "name": body.name,
            "start_date": body.start_date, // data format "2022-03-06T08:21:43.562Z",
            "end_date": body.end_date, // data format "2022-03-06T08:21:43.562Z",
            "token": body.token,
            "store_tokens": body.store_tokens  // store_tokens [ "String","String","String","String", ...  ]
        });


        var config = {
            method: 'put',
            url: Base_url + 'v3/campaigns/' + token,
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

