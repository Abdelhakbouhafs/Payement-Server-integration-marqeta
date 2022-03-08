'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all program transfers
 *
 *
 * count Integer Number of program transfers to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * user_token String User token (optional)
 * business_token String Business token (optional)
 * type_token String Program type token (optional)
 * returns ProgramTransferListResponse
 **/
exports.getProgramtransfers = function (count, start_index, fields, sort_by, user_token, business_token, type_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/programtransfers?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime&user_token=' + user_token,
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
 * Returns a specific program transfer
 *
 *
 * token String Program transfer token
 * returns program_transfer_response
 **/
exports.getProgramtransfersToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/programtransfers/' + token,
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
 * Lists all program transfer types
 *
 *
 * count Integer Number of program transfer types to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns ProgramTransferTypeListResponse
 **/
exports.getProgramtransfersTypes = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/programtransfers/types?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific program transfer type
 *
 *
 * type_token String Type token
 * returns program_transfer_type_reponse
 **/
exports.getProgramtransfersTypesTypetoken = function (type_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/programtransfers/types/' + type_token,
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
 * Transfers to a program funding source
 *
 *
 * body Program_transfer  (optional)
 * returns program_transfer_response
 **/
exports.postProgramtransfers = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "fees": body.fees,
            "token": body.token,
            "user_token": body.user_token,
            "business_token": body.business_token,
            "amount": body.amount,
            "type_token": body.type_token,
            "tags": body.tags,
            "memo": body.memo,
            "currency_code": body.currency_code
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/programtransfers',
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
 * Creates a program transfer type
 *
 *
 * body Program_transfer_type_request  (optional)
 * returns program_transfer_type_reponse
 **/
exports.postProgramtransfersTypes = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "program_funding_source_token": body.program_funding_source_token,
            "tags": body.tags,
            "memo": body.memo
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/programtransfers/types',
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
 * Updates a specific program transfer type
 *
 *
 * type_token String Type token
 * body Program_transfer_type_request  (optional)
 * returns program_transfer_type_reponse
 **/
exports.putProgramtransfersTypesTypetoken = function (type_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "program_funding_source_token": body.program_funding_source_token,
            "tags": body.tags,
            "memo": body.memo
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/programtransfers/types/' + type_token,
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

