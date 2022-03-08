'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns transactions
 *
 *
 * count Integer Number of transactions to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * start_date String Start date (yyyy-MM-dd | yyyy-MM-ddTHH:mm:ss.SS) (optional)
 * end_date String End date (yyyy-MM-dd | yyyy-MM-ddTHH:mm:ss.SS) (optional)
 * type String Comma-delimited list of transaction types to include (optional)
 * user_token String User token (optional)
 * business_token String Business token (optional)
 * acting_user_token String Acting user token (optional)
 * card_token String Card token (optional)
 * merchant_token String Merchant token (optional)
 * campaign_token String Campaign token (optional)
 * state String Comma-delimited list of transaction states to display e.g. PENDING | CLEARED | COMPLETION | DECLINED | ERROR | ALL (optional)
 * version String  (optional)
 * verbose Boolean  (optional)
 * returns TransactionModelListResponse
 **/
exports.getTransactions = function (count, start_index, fields, sort_by, start_date, end_date, type, user_token, business_token, acting_user_token, card_token, merchant_token, campaign_token, state, version, verbose) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/transactions?count=' + count + '&start_index=' + start_index + '&sort_by=-user_transaction_time&state=ALL',
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
 * Returns transactions for a specific funding account
 *
 *
 * funding_source_token String Funding account token
 * count Integer Number of transactions to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * start_date String Start date (yyyy-MM-dd) (optional)
 * end_date String End date (yyyy-MM-dd) (optional)
 * type String Comma-delimited list of transaction types to include (optional)
 * polarity String Type of transactions to retrieve: CREDIT or DEBIT (optional)
 * version String  (optional)
 * verbose Boolean  (optional)
 * returns TransactionModelListResponse
 **/
exports.getTransactionsFundingsourceFundingsourcetoken = function (funding_source_token, count, start_index, fields, sort_by, start_date, end_date, type, polarity, version, verbose) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/transactions/fundingsource/' + funding_source_token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-user_transaction_time',
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
 * Returns a transaction
 *
 *
 * token String Transaction token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * version String  (optional)
 * verbose Boolean  (optional)
 * returns transaction_model
 **/
exports.getTransactionsToken = function (token, fields, version, verbose) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/transactions/' + token,
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
 * Returns related transactions
 *
 *
 * token String Transaction token
 * count Integer Number of transactions to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * start_date String Start date (yyyy-MM-dd | yyyy-MM-ddTHH:mm:ss.SS) (optional)
 * end_date String End date (yyyy-MM-dd | yyyy-MM-ddTHH:mm:ss.SS) (optional)
 * type String Comma-delimited list of transaction types to include (optional)
 * state String Comma-delimited list of transaction states to display e.g. PENDING | CLEARED | COMPLETION | ALL (optional)
 * version String  (optional)
 * verbose Boolean  (optional)
 * returns TransactionModelListResponse
 **/
exports.getTransactionsTokenRelated = function (token, count, start_index, fields, sort_by, start_date, end_date, type, state, version, verbose) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/transactions/' + token + '/related?count=' + count + '&start_index=' + start_index + '&sort_by=-user_transaction_time&state=ALL',
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

