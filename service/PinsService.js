'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Creates a new control token for a PIN
 * Creates a new control token for a PIN, for the specified card for PIN debit or ATM transactions,or to allow for a pin to be revealed to authorized callers.
 *
 * body Control_token_request  (optional)
 * returns control_token_response
 **/
exports.postPinsControltoken = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_token": body.card_token,
            "controltoken_type": body.controltoken_type
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/pins/controltoken',
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
 * Updates the PIN control token
 * Updates a PIN identified by its control token.
 *
 * body Pin_request  (optional)
 * no response value expected for this operation
 **/
exports.putPins = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "control_token": body.control_token,
            "pin": body.pin
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/pins',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
            },
            data: data
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
 * Updates the PIN-reveal control token
 * Reveals pin for card associated with given control token.
 *
 * body Pin_reveal_request  (optional)
 * no response value expected for this operation
 **/
exports.revealPins = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "control_token": body.control_token,
            "cardholder_verification_method": body.cardholder_verification_method
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/pins/reveal',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
            },
            data: data
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

