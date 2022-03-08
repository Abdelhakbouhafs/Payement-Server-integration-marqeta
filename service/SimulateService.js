'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Simulates an authorization
 *
 *
 * body Auth_request_model  (optional)
 * returns simulation_response_model
 **/
exports.postSimulateAuthorization = function (body) {
    return new Promise(function (resolve, reject) {

        var data = JSON.stringify({
            "network_fees": body.network_fees,
            "webhook": body.webhook,
            "card_token": body.card_token,
            "amount": body.amount,
            "cash_back_amount": body.cash_back_amount,
            "mid": body.mid,
            "is_pre_auth": body.is_pre_auth,
            "pin": body.pin,
            "card_options": body.card_options,
            "card_acceptor": body.card_acceptor,
            "transaction_options": body.transaction_options
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/authorization',
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
 * Simulates an authorization advice transaction
 *
 *
 * body Authorization_advice_model  (optional)
 * returns simulation_response_model
 **/
exports.postSimulateAuthorizationAdvice = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "amount": body.amount,
            "network_fees": body.network_fees,
            "webhook": body.webhook,
            "original_transaction_token": body.original_transaction_token,
            "transaction_options": body.transaction_options
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/authorization/advice',
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
 * Simulates a clearing/settlement transaction
 *
 *
 * body ClearingModel  (optional)
 * returns simulation_response_model
 **/
exports.postSimulateClearing = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "force_post": body.force_post,
            "amount": body.amount,
            "webhook": body.webhook,
            "mid": body.mid,
            "card_acceptor": body.card_acceptor,
            "is_refund": body.is_refund,
            "network_fees": body.network_fees,
            "original_transaction_token": body.original_transaction_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/clearing',
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
 * Simulates the creation of direct deposit
 *
 *
 * body DirectDepositRequest Direct deposit simulate request model
 * returns DepositDepositResponse
 **/
exports.postSimulateDirectdeposits = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "account_number": body.account_number,
            "company_discretionary_data": body.company_discretionary_data,
            "amount": body.amount,
            "settlement_date": body.settlement_date,
            "individual_name": body.individual_name,
            "type": body.type,
            "company_identification": body.company_identification,
            "earlyPayEligible": body.earlyPayEligible,
            "token": body.token,
            "standard_entry_class_code": body.standard_entry_class_code,
            "individual_identification_number": body.individual_identification_number,
            "company_name": body.company_name,
            "company_entry_description": body.company_entry_description
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/directdeposits',
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
 * Simulates a financial request (PIN debit) transaction with optional cash back
 *
 *
 * body Financial_request_model Financial request model
 * returns simulation_response_model
 **/
exports.postSimulateFinancial = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "amount": body.amount,
            "card_token": body.card_token,
            "pin": body.pin,
            "mid": body.mid,
            "cash_back_amount": body.cash_back_amount,
            "is_pre_auth": body.is_pre_auth,
            "card_acceptor": body.card_acceptor,
            "transaction_options": body.transaction_options,
            "webhook": body.webhook
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/financial',
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
 * Simulates a financial advice transaction
 *
 *
 * body Authorization_advice_model Financial advice request model
 * returns simulation_response_model
 **/
exports.postSimulateFinancialAdvice = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "amount": body.amount,
            "network_fees": body.network_fees,
            "webhook": body.webhook,
            "original_transaction_token": body.original_transaction_token,
            "transaction_options": body.transaction_options
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/financial/advice',
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
 * Simulates a balance inquiry
 *
 *
 * body Balance_inquiry_request_model Balance inquiry request model
 * returns simulation_response_model
 **/
exports.postSimulateFinancialBalanceinquiry = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "network_fees": body.network_fees,
            "webhook": body.webhook,
            "account_type": body.account_type,
            "card_token": body.card_token,
            "pin": body.pin,
            "mid": body.mid,
            "card_acceptor": body.card_acceptor
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/financial/balanceinquiry',
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
 * Simulates an orignal credit transaction
 *
 *
 * body Orignalcredit_request_model Orignal Credit request model
 * returns simulation_response_model
 **/
exports.postSimulateFinancialOriginalcredit = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "transactionPurpose": body.transactionPurpose,
            "amount": body.amount,
            "card_token": body.card_token,
            "mid": body.mid,
            "screening_score": body.screening_score,
            "card_acceptor": body.card_acceptor,
            "type": body.type,
            "sender_data": body.sender_data,
            "webhook": body.webhook
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/financial/originalcredit',
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
 * Simulates an ATM withdrawal transaction
 *
 *
 * body Withdrawal_request_model ATM withdrawal request model
 * returns simulation_response_model
 **/
exports.postSimulateFinancialWithdrawal = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "account_type": body.account_type,
            "card_token": body.card_token,
            "pin": body.pin,
            "mid": body.mid,
            "amount": body.amount,
            "card_acceptor": body.card_acceptor,
            "webhook": body.webhook
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/financial/withdrawal',
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
 * Simulates a reversal transaction
 *
 *
 * body ReversalModel  (optional)
 * returns simulation_response_model
 **/
exports.postSimulateReversal = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "amount": body.amount,
            "webhook": body.webhook,
            "find_original_window_days": body.find_original_window_days,
            "is_advice": body.is_advice,
            "network_fees": body.network_fees,
            "original_transaction_token": body.original_transaction_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/simulate/reversal',
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

