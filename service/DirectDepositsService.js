'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all direct deposits
 *
 *
 * count Integer Number of direct deposits to retrieve (optional)
 * start_index Integer Start index (optional)
 * reversed_after_grace_period Boolean Reversed after grace period (optional)
 * user_token String User token (optional)
 * business_token String Business token (optional)
 * direct_deposit_state String Direct deposit state (optional)
 * start_settlement_date String Start settlement date (optional)
 * end_settlement_date String End settlement date (optional)
 * sort_by String Sort order (optional)
 * returns DirectDepositListResponse
 **/
exports.getDirectdeposits = function (count, start_index, reversed_after_grace_period, user_token, business_token, direct_deposit_state, start_settlement_date, end_settlement_date, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/directdeposits?count=' + count + '&start_index=' + start_index + '&reversed_after_grace_period=' + reversed_after_grace_period + '&user_token=' + user_token + '&direct_deposit_state=' + direct_deposit_state + '&sort_by=-lastModifiedTime',
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
 * Returns an account and routing number which can be used for direct deposit
 *
 *
 * user_or_business_token String
 * returns deposit_account
 **/
exports.getDirectdepositsAccountsUserorbusinesstoken = function (user_or_business_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/directdeposits/accounts/' + user_or_business_token,
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
 * Returns a direct deposit entry
 *
 *
 * token String
 * returns DepositDepositResponse
 **/
exports.getDirectdepositsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/directdeposits/' + token,
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
 * Returns a list of direct deposit transitions
 *
 *
 * count Integer Number of direct deposit transitions to retrieve (optional)
 * user_token String User token (optional)
 * business_token String Business token (optional)
 * direct_deposit_token String Direct deposit token (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * states String Comma-delimited list of direct deposit states to display e.g. PENDING | REVERSED | APPLIED | REJECTED  (optional)
 * returns DirectDepositTransitionListResponse
 **/
exports.getDirectdepositsTransitions = function (count, user_token, business_token, direct_deposit_token, start_index, sort_by, states) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/directdeposits/transitions?count=' + count + '&user_token=' + user_token + '&business_token=' + business_token + '&direct_deposit_token=' + direct_deposit_token + '&start_index=' + start_index + '&sort_by=-createdTime&states=' + states,
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
 * Returns a direct deposit transition
 *
 *
 * token String
 * returns DirectDepositTransitionResponse
 **/
exports.getDirectdepositsTransitionsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/directdeposits/transitions/' + token,
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
 * Creates a direct deposit transition
 *
 *
 * body DirectDepositTransitionRequest  (optional)
 * returns DirectDepositTransitionResponse
 **/
exports.postDirectdepositsTransitions = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "direct_deposit_token": body.direct_deposit_token,
            "reason_code": body.reason_code,
            "reason": body.reason,
            "idempotentHash": body.idempotentHash,
            "channel": body.channel,
            "state": body.state,
            "token": body.token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/directdeposits/transitions',
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
 * Updates a specific direct deposit account
 *
 *
 * user_or_business_token String User or business token
 * body Deposit_account_update_request Deposit account update request
 * returns deposit_account
 **/
exports.putDirectdepositsAccountsUserorbusinesstoken = function (user_or_business_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "allow_immediate_credit": body.allow_immediate_credit
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/directdeposits/accounts/' + user_or_business_token,
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

