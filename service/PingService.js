'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns a heartbeat to the consumer
 * Tests if the Marqeta server is available and responsive.
 *
 * returns ping_response
 **/
exports.getPing = function () {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/ping',
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
 * Echo test for sending payload to server
 *
 *
 * body Echo_ping_request  (optional)
 * returns echo_ping_response
 **/
exports.postPing = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "payload": body.payload,
            "token": body.token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/ping',
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

