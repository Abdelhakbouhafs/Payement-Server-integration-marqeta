'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Creates new direct deposit account for cardholder.
 *
 *
 * body Direct_deposit_account_request Create direct deposit account for cardholder
 * returns direct_deposit_account_response
 **/
exports.createAccount = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "user_token": body.user_token,
            "business_token": body.business_token,
            "type": body.type,
            "allow_immediate_credit": body.allow_immediate_credit,
            "token": body.token,
            "customer_due_diligence": body.customer_due_diligence
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/depositaccounts',
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
 * Creates new transition for a direct deposit account.
 *
 *
 * body Direct_deposit_account_transition_request Create transition for direct deposit account
 * returns direct_deposit_account_transition_response
 **/
exports.createTransition = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "account_token": body.account_token,
            "state": body.state,
            "channel": body.channel,
            "reason": body.reason,
            "token": body.token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/depositaccounts/transitions',
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
 * Get direct deposit account transition list for card holder.
 *
 *
 * token String Get CDD info for a specific DDA token
 * returns customer_due_diligence_response
 **/
exports.getCDDInfo = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/depositaccounts/' + token + '/cdd',
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
 * Get direct deposit account.
 *
 *
 * token String Get specific direct deposit account
 * returns direct_deposit_account_response
 **/
exports.getDirectDepositAccount = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/depositaccounts/' + token,
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
 * Get direct deposit account transition.
 *
 *
 * token String Get specific direct deposit account transition
 * returns direct_deposit_account_transition_response
 **/
exports.getDirectDepositAccountTransition = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/depositaccounts/transitions/' + token,
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
 * Get direct deposit account transition list for card holder.
 *
 *
 * user_token String Get direct deposit account transition list for user
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * returns direct_deposit_account_transition_response
 **/
exports.getTransitionList = function (user_token, count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/depositaccounts/' + user_token + '/transitions?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * List all specific direct deposit accounts.
 *
 *
 * token String Get specific direct deposit account
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * state String Direct deposit account status (optional)
 * returns DirectDepositAccountListResponse
 **/
exports.getUserDirectDepositAccounts = function (token, count, start_index, sort_by, state) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/depositaccounts/user/' + token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime&state=' + state,
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
 * Get User for Plain Text Account Number
 *
 *
 * account_number String Get user associated with direct deposit account number
 * returns direct_deposit_account_response
 **/
exports.getUserForDirectDepositAccount = function (account_number) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/depositaccounts/account/' + account_number + '/user',
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
 * Update direct deposit account.
 *
 *
 * body DepositAccountUpdateRequest Update direct deposit account
 * token String
 * returns direct_deposit_account_response
 **/
exports.update = function (body, token) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "allow_immediate_credit": body.allow_immediate_credit
        });

        var config = {
            method: 'put',
            url: 'http://localhost:8080/v3/depositaccounts/' + token,
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
 * Update CDD answers for Direct Deposit Account
 *
 *
 * body Customer_due_diligence_update_response Update CDD answers
 * token String
 * cddtoken String
 * returns customer_due_diligence_response
 **/
exports.updateCDDInfo = function (body, token, cddtoken) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "answer": body.answer
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/depositaccounts/' + token + '/cdd/' + cddtoken,
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

