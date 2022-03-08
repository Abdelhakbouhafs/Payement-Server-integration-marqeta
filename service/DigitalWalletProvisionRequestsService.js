'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Validates and creates Android-specific provisioning request data
 *
 *
 * body Digital_wallet_android_pay_provision_request  (optional)
 * returns digital_wallet_android_pay_provision_response
 **/
exports.postDigitalwalletprovisionrequestsAndroidpay = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_token": body.card_token,
            "device_type": body.device_type,
            "provisioning_app_version": body.provisioning_app_version,
            "wallet_account_id": body.wallet_account_id,
            "device_id": body.device_id
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/digitalwalletprovisionrequests/androidpay',
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
 * Validates Apple certificates and creates Apple-specific provisioning request data
 *
 *
 * body Digital_wallet_apple_pay_provision_request  (optional)
 * returns digital_wallet_apple_pay_provision_response
 **/
exports.postDigitalwalletprovisionrequestsApplepay = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_token": body.card_token,
            "device_type": body.device_type,
            "provisioning_app_version": body.provisioning_app_version,
            "certificates": body.certificates,
            "nonce": body.nonce,
            "nonce_signature": body.nonce_signature
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/digitalwalletprovisionrequests/applepay',
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
 * Validates and creates Samsung-specific provisioning request data
 *
 *
 * body Digital_wallet_samsung_pay_provision_request  (optional)
 * returns digital_wallet_samsung_pay_provision_response
 **/
exports.postDigitalwalletprovisionrequestsSamsungpay = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_token": body.card_token,
            "device_type": body.device_type,
            "provisioning_app_version": body.provisioning_app_version,
            "wallet_user_id": body.wallet_user_id,
            "device_id": body.device_id
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/digitalwalletprovisionrequests/samsungpay',
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
 * Validates and creates a generic push provisioning request data for adding a card to a digital wallet that is not ApplePay, GooglePay or SamsungPay.
 *
 *
 * body Digital_wallet_x_pay_provision_request  (optional)
 * returns digital_wallet_x_pay_provision_response
 **/
exports.postDigitalwalletprovisionrequestsXPay = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_token": body.card_token,
            "device_type": body.device_type,
            "provisioning_app_version": body.provisioning_app_version,
            "wallet_account_id": body.wallet_account_id,
            "device_id": body.device_id,
            "token_requestor_id": body.token_requestor_id
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/digitalwalletprovisionrequests/xpay',
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

