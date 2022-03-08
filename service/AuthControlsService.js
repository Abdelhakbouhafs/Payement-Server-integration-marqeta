'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all global auth control exceptions for the program
 *
 *
 * card_product String Card product token. Use \"null\" to get auth controls that are not associated with any card product. (optional)
 * user String User token. Use \"null\" to get auth controls that are not associated with any user. (optional)
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * returns AuthControlListResponse
 **/
exports.getAuthcontrols = function (card_product, user, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/authcontrols?card_product=' + card_product + '&user=' + user + '&count=' + count + '&start_index=0&sort_by=-lastModifiedTime',
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
 * Lists all auth control exempted MIDs for the program
 *
 *
 * card_product String Card product token. Use \"null\" to get auth controls that are not associated with any card product. (optional)
 * user String User token. Use \"null\" to get auth controls that are not associated with any user. (optional)
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Field by which to sort the returned items. Use any field in the model, or system fields lastModifiedTime or createdTime. (optional)
 * returns AuthControlExemptMidsListResponse
 **/
exports.getAuthcontrolsExemptmids = function (card_product, user, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/authcontrols/exemptmids?card_product=' + card_product + '&user=' + user + '&count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
            headers: {
                'Accept': 'application/json'
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
 * Returns a specific auth control exemptmids
 *
 *
 * token String Auth control token
 * returns auth_control_exempt_mids_response
 **/
exports.getAuthcontrolsExemptmidsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/authcontrols/exemptmids/' + token,
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
 * Returns a specific auth control exception
 *
 *
 * token String Auth control token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns auth_control_response
 **/
exports.getAuthcontrolsToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/authcontrols/' + token,
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
 * Creates an auth control exception
 *
 *
 * body Auth_control_request Auth control object
 * returns auth_control_response
 **/
exports.postAuthcontrols = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "association": {
                "card_product_token": body.association.card_product_token,
                "user_token": body.association.user_token
            },
            "merchant_scope": {
                "mcc_group": body.merchant_scope.mcc_group,
                "mid": body.merchant_scope.mid,
                "mcc": body.merchant_scope.mcc
            },
            "start_time": body.start_time,//  dateformat : "2022-03-03T07:56:36.915Z",
            "end_time": body.end_time, //                 "2022-03-03T07:56:36.915Z",
            "active": body.active
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/authcontrols',
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
 * Creates an auth control for exempting MIDs
 *
 *
 * body Auth_control_exempt_mids_request Auth control exempt MID object
 * returns auth_control_exempt_mids_response
 **/
exports.postAuthcontrolsExemptmids = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "association": {
                "card_product_token": body.association.card_product_token,
                "user_token": body.association.user_token
            },
            "mid": body.mid,
            "merchant_group_token": body.merchant_group_token,
            "start_time": body.start_time,   //  date format "2022-03-03T07:56:36.921Z",
            "end_time": body.end_time,                    // "2022-03-03T07:56:36.921Z"
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/authcontrols/exemptmids',
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
 * Updates the status an auth control exemptmids
 *
 *
 * token String Auth control token
 * body Auth_control_exempt_mids_update_request  (optional)
 * no response value expected for this operation
 **/
exports.putAuthcontrolsExemptmidsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "active": body.active
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/authcontrols/exemptmids/' + token,
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
 * Updates an auth control exception
 *
 *
 * token String Auth control token
 * body Auth_control_update_request Auth control object
 * returns auth_control_response
 **/
exports.putAuthcontrolsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "association": {
                "card_product_token": body.association.card_product_token,
                "user_token": body.association.user_token
            },
            "merchant_scope": {
                "mcc_group": body.merchant_scope.mcc_group,
                "mid": body.merchant_scope.mid,
                "mcc": body.merchant_scope.mcc
            },
            "start_time": body.start_time, // date format "2022-03-06T08:21:43.483Z",
            "end_time": body.end_time,       // "2022-03-06T08:21:43.483Z",
            "active": body.active
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/authcontrols/' + token,
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

