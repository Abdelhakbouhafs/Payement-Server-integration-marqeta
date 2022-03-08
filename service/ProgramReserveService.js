'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 *
 * body Program_reserve_deposit_request  (optional)
 * no response value expected for this operation
 **/
exports.deposit = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "idempotentHash": body.idempotentHash,
            "token": body.token,
            "amount": body.amount,
            "currency_code": body.currency_code,
            "memo": body.memo,
            "tags": body.tags
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/programreserve/deposits',
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
 *
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * no response value expected for this operation
 **/
exports.getProgramReserveDeposits = function (count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/programreserve/deposits?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
            headers: {
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
 * Returns the latest balance in the program reserve account
 *
 *
 * returns program_reserve_account_balance
 **/
exports.getProgramreserveBalances = function () {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/programreserve/balances',
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
 * Returns a list of program reserve transactions (credits and debits)
 *
 *
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * body String Type (optional)
 * returns ProgramReserveTransactionListResponse
 **/
exports.getProgramreserveTransactions = function (count, start_index, sort_by, body) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/programreserve/transactions?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Credits or debits the program reserve account
 *
 *
 * body Program_reserve_transaction_request  (optional)
 * returns program_reserve_transaction_response
 **/
exports.postProgramreserveTransactions = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "idempotentHash": body.idempotentHash,
            "token": body.token,
            "amount": body.amount,
            "currency_code": body.currency_code,
            "memo": body.memo,
            "tags": body.tags,
            "type": body.type
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/programreserve/transactions',
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

