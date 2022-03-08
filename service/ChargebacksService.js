'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * List all chargebacks
 *
 *
 * count Integer Number of chargebacks to retrieve (optional)
 * start_index Integer Start index (optional)
 * network_reference_id String Network reference ID (optional)
 * transaction_token String Transaction token (optional)
 * amount String Amount (optional)
 * states String Comma-delimited list of chargeback states to display e.g. INITIATED | REPRESENTMENT | PREARBITRATION | ARBITRATION | CASE_WON | CASE_LOST | NETWORK_REJECTED | WITHDRAWN | WRITTEN_OFF_ISSUER | WRITTEN_OFF_PROGRAM (optional)
 * sort_by String Sort order (optional)
 * network_case_id String  (optional)
 * returns ChargebackListResponse
 **/
exports.getChargebacks = function (count, start_index, network_reference_id, transaction_token, amount, states, sort_by, network_case_id) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/chargebacks?count=' + count + '&start_index=' + start_index + '&network_reference_id=' + network_reference_id + '&transaction_token=' + transaction_token + '&amount=' + amount + '&states=' + states + '&sort_by=-lastModifiedTime',
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
 * Lists all chargeback transitions that are related to a chargeback
 *
 *
 * chargeback_token String Chargeback token
 * count Integer Number of transitions to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * returns ChargebackTransitionListResponse
 **/
exports.getChargebacksChargebacktokenTransitions = function (chargeback_token, count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/chargebacks/' + chargeback_token + '/transitions?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific chargeback
 *
 *
 * token String
 * returns chargeback_response
 **/
exports.getChargebacksToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/chargebacks/' + token,
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
 * Returns a specific chargeback transition
 *
 *
 * token String Chargeback transition token
 * returns chargeback_transition_response
 **/
exports.getChargebacksTransitionsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/chargebacks/transitions/' + token,
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
 * Creates a chargeback allocation acknowledgement
 *
 *
 * body Chargeback_request  (optional)
 * returns chargeback_response
 **/
exports.postChargebackAllocationAcknowledgment = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "reason_description": body.reason_description, // data format "SERVICE_NOT_PROVIDED_MERCHANDISE_NOT_RECEIVED",
            "reason_code": body.reason_code,
            "token": body.token,
            "transaction_token": body.transaction_token,
            "amount": body.amount,
            "memo": body.memo,
            "credit_user": body.credit_user, // data format  true,
            "channel": body.channel, // data format "GATEWAY"
        });


        var config = {
            method: 'post',
            url: Base_url + 'v3/chargebacks/allocationacknowledgement',
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
 * Creates a chargeback
 *
 *
 * body Chargeback_request  (optional)
 * returns chargeback_response
 **/
exports.postChargebacks = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "reason_description": body.reason_description, // data format "SERVICE_NOT_PROVIDED_MERCHANDISE_NOT_RECEIVED",
            "reason_code": body.reason_code,
            "token": body.token,
            "transaction_token": body.transaction_token,
            "amount": body.amount,
            "memo": body.memo,
            "credit_user": body.credit_user, // data format  true,
            "channel": body.channel, // data format "GATEWAY"
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/chargeback',
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
 * Creates a chargeback transition
 *
 *
 * body Chargeback_transition_request  (optional)
 * returns chargeback_transition_response
 **/
exports.postChargebacksTransitions = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "state": body.state, // "REPRESENTMENT",
            "chargeback_token": body.chargeback_token,
            "reason": body.reason,
            "amount": body.amount
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/chargebacks/transitions',
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
 * Updates chargeback data
 *
 *
 * token String
 * body ChargebackUpdateRequest  (optional)
 * returns chargeback_response
 **/
exports.putChargebacksToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "reason_code": body.reason,
            "reason_description": body.reason_description
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/chargebacks/' + token,
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
 * Grants provisional credit
 *
 *
 * token String
 * returns chargeback_response
 **/
exports.putChargebacksTokenGrantprovisionalcredit = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'put',
            url: Base_url + 'v3/chargebacks/' + token + '/grantprovisionalcredit',
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
 * Reverses provisional credit
 *
 *
 * token String
 * returns chargeback_response
 **/
exports.putChargebacksTokenReverseprovisionalcredit = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'put',
            url: Base_url + 'v3/chargebacks/' + token + '/reverseprovisionalcredit',
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

