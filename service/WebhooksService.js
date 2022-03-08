'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns a list of webhook configurations
 *
 *
 * active Boolean Return only active webhook configurations (optional)
 * count Integer Number of reward programs to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns WebhookResponseModelListResponse
 **/
exports.getWebhooks = function (active, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/webhooks?active=' + active + '&count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a webhook configuration
 *
 *
 * token String Webhook token
 * returns webhook_response_model
 **/
exports.getWebhooksToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/webhooks/' + token,
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
 * Creates a webhook configuration
 *
 *
 * body Webhook_request_model  (optional)
 * returns webhook_response_model
 **/
exports.postWebhooks = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "active": body.active,
            "config": body.config,
            "events": body.event
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/webhooks',
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
 * Replays an event to a webhook
 *
 *
 * token String Webhook token
 * event_type String Event type
 * event_token String Event token
 * no response value expected for this operation
 **/
exports.postWebhooksTokenEventtypeEventtoken = function (token, event_type, event_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'post',
            url: Base_url + 'v3/webhooks/' + token + '/businesstransition/' + event_token,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
            }
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}


/**
 * Pings a webhook
 * Endpoints must respond with a 200 status code.
 *
 * token String Ping a webhook
 * returns webhook_ping_model
 **/
exports.postWebhooksTokenPing = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'post',
            url: Base_url + 'v3/webhooks/' + token + '/ping',
            headers: {
                'Content-Type': 'application/json',
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
 * Updates a specific webhook configuration with custom headers
 *
 *
 * token String Webhook token
 * body WebhookUpdateCustomHeaderRequest  (optional)
 * returns webhook_response_model
 **/
exports.putWebhooksCustomHeadersToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "custom_header": body.custom_header
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/webhooks/customheaders/' + token,
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
 * Updates a specific webhook configuration
 *
 *
 * token String Webhook token
 * body Webhook_base_model  (optional)
 * returns webhook_response_model
 **/
exports.putWebhooksToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "active": body.active,
            "config": body.config,
            "events": body.events
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/webhooks/' + token,
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

