'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns a list of Program ACH funding sources
 *
 *
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * fields String Comma delimited list of fields to return (e.g. field_1,field_2,..) (optional)
 * sort_by String Sort order (optional)
 * returns ACHListResponse
 **/
exports.getAllACHFundingSources = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/program/ach?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a user ACH account
 *
 *
 * funding_source_token String Funding account token
 * returns ach_response_model
 **/
exports.getFundingsourcesAchFundingsourcetoken = function (funding_source_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/ach/' + funding_source_token,
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
 * Returns the dollar amounts used to verify the ACH account
 *
 *
 * funding_source_token String Funding account token
 * returns ach_verification_model
 **/
exports.getFundingsourcesAchFundingsourcetokenVerificationamounts = function (funding_source_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/ach/' + funding_source_token + '/verificationamounts',
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
 * Lists all addresses for a business
 *
 *
 * business_token String Business token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns CardholderAddressListResponse
 **/
exports.getFundingsourcesAddressesBusinessBusinesstoken = function (business_token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/addresses/business/' + business_token,
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
 * Returns a user address for a funding source
 *
 *
 * funding_source_address_token String Funding source address token
 * returns CardholderAddressResponse
 **/
exports.getFundingsourcesAddressesFundingsourceaddresstoken = function (funding_source_address_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/addresses/' + funding_source_address_token,
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
 * Lists all addresses for a user
 *
 *
 * user_token String User token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns CardholderAddressListResponse
 **/
exports.getFundingsourcesAddressesUserUsertoken = function (user_token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/addresses/user/' + user_token,
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
 * Lists all funding sources for a business
 *
 *
 * business_token String Business token
 * type String Type, such as a payment card or ACH (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns FundingAccountListResponse
 **/
exports.getFundingsourcesBusinessBusinesstoken = function (business_token, type, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/business/' + business_token + '?type=type',
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
 * Returns a specific payment card
 *
 *
 * funding_source_token String Funding token
 * returns payment_card_response_model
 **/

exports.getFundingsourcesPaymentcardFundingsourcetoken = function (funding_source_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/paymentcard/' + funding_source_token,
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
 * Returns a specific program funding source
 *
 *
 * token String Program funding source token
 * returns program_funding_source_response
 **/
exports.getFundingsourcesProgramToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/program/' + token,
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
 * Returns a gateway program funding source
 *
 *
 * token String Gateway program funding source token
 * returns gateway_program_funding_source_response
 **/
exports.getFundingsourcesProgramgatewayToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/programgateway/' + token,
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
 * Lists all funding sources for a user
 *
 *
 * user_token String User token
 * type String Type, such as a payment card or ACH (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns FundingAccountListResponse
 **/
exports.getFundingsourcesUserUsertoken = function (user_token, type, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fundingsources/user/' + user_token + '?type=' + type,
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
 * Registers an ACH funding source
 *
 *
 * body Ach_model  (optional)
 * returns ach_response_model
 **/
exports.postFundingsourcesAch = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "account_number": body.account_number,
            "routing_number": body.routing_number,
            "name_on_account": body.name_on_account,
            "account_type": body.account_type,
            "bank_name": body.bank_name,
            "verification_override": body.verification_override,
            "verification_notes": body.verification_notes,
            "user_token": body.user_token,
            "business_token": body.business_token,
            "is_default_account": body.is_default_account
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fundingsources/ach',
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
 * Registers an ACH funding source through a partner
 *
 *
 * body Ach_partner_request_model  (optional)
 * returns ach_response_model
 **/
exports.postFundingsourcesAchPartner = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "idempotentHash": body.idempotentHash,
            "token": body.token,
            "partner_account_link_reference_token": body.partner_account_link_reference_token,
            "partner": body.partner,
            "user_token": body.user_token,
            "business_token": body.business_token,
            "is_default_account": body.is_default_account
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fundingsources/ach/partner',
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
 * Creates an account holder address for a funding source
 *
 *
 * body Card_holder_address_model  (optional)
 * returns CardholderAddressResponse
 **/
exports.postFundingsourcesAddresses = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "user_token": body.user_token,
            "business_token": body.business_token,
            "token": body.token,
            "first_name": body.first_name,
            "last_name": body.last_name,
            "address_1": body.address1,
            "address_2": body.address2,
            "city": body.city,
            "state": body.state,
            "zip": body.zip,
            "country": body.country,
            "phone": body.phone,
            "is_default_address": body.is_default_account,
            "active": body.active,
            "postal_code": body.postal_code
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fundingsources/addresses',
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
 * Registers a payment card funding source
 *
 *
 * body Token_request  (optional)
 * returns payment_card_response_model
 **/
exports.postFundingsourcesPaymentcard = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "user_token": body.user_token,
            "business_token": body.business_token,
            "account_number": body.account_number,
            "cvv_number": body.cvv_number,
            "exp_date": body.exp_date,
            "zip": body.zip,
            "postal_code": body.postal_code,
            "is_default_account": body.is_default_account
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fundingsources/paymentcard',
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
 * Creates a program funding source
 *
 *
 * body Program_funding_source_request  (optional)
 * returns program_funding_source_response
 **/
exports.postFundingsourcesProgram = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "active": body.active,
            "token": body.token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fundingsources/program',
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
 * Registers an ACH funding source for a program
 *
 *
 * body Base_ach_request_model  (optional)
 * returns base_ach_response_model
 **/
exports.postFundingsourcesProgramAch = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "account_number": body.account_number,
            "routing_number": body.routing_number,
            "name_on_account": body.name_on_account,
            "account_type": body.account_type,
            "bank_name": body.bank_name,
            "verification_override": body.verification_override,
            "verification_notes": body.verification_notes,
            "is_default_account": body.is_default_account
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fundingsources/program/ach',
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
 * Creates a gateway program funding source
 *
 *
 * body Gateway_program_funding_source_request  (optional)
 * returns gateway_program_funding_source_response
 **/
exports.postFundingsourcesProgramgateway = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "url": body.url,
            "token": body.token,
            "active": body.active,
            "basic_auth_username": body.basic_auth_username,
            "basic_auth_password": body.basic_auth_password,
            "timeout_millis": body.timeout_millis,
            "custom_header": body.custom_header,
            "use_mtls": body.use_mtls
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fundingsources/programgateway',
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
 * Verifies a bank account as a funding source
 *
 *
 * funding_source_token String
 * body Ach_verification_model  (optional)
 * returns ach_response_model
 **/
exports.putFundingsourcesAchFundingsourcetoken = function (funding_source_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "verify_amount1": body.verify_amount1,
            "verify_amount2": body.verify_amount2,
            "active": body.active
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/fundingsources/ach/funding_source_token',
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
 * Updates the account holder address for a funding source
 *
 *
 * funding_source_address_token String Funding source address token
 * body Card_holder_address_update_model  (optional)
 * returns CardholderAddressResponse
 **/
exports.putFundingsourcesAddressesFundingsourceaddresstoken = function (funding_source_address_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "first_name": body.first_name,
            "last_name": body.last_name,
            "address_1": body.address1,
            "address_2": body.address2,
            "city": body.city,
            "state": body.state,
            "zip": body.zip,
            "country": body.country,
            "phone": body.phone,
            "is_default_address": body.is_default_account,
            "active": body.active,
            "postal_code": body.postal_code
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/fundingsources/addresses/' + funding_source_address_token,
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
 * Updates a specific payment card
 *
 *
 * funding_source_token String Funding account token
 * body Token_update_request Payment card
 * returns payment_card_response_model
 **/
exports.putFundingsourcesFundingsourcetoken = function (funding_source_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "exp_date": body.exp_date,
            "active": body.active,
            "is_default_account": body.is_default_account
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/fundingsources/paymentcard/' + funding_source_token,
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
 * Configures a default funding source
 *
 *
 * funding_source_token String Funding account
 * returns payment_card_response_model
 **/
exports.putFundingsourcesFundingsourcetokenDefault = function (funding_source_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'put',
            url: Base_url + 'v3/fundingsources/' + funding_source_token + '/default',
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
 * Updates a specific program funding source
 *
 *
 * token String Program funding source token
 * body Program_funding_source_update_request  (optional)
 * returns program_funding_source_response
 **/
exports.putFundingsourcesProgramToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "active": body.active
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/fundingsources/program/' + token,
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
 * Updates a specific gateway program funding source Custom headers
 *
 *
 * token String Gateway program funding source token
 * body Gateway_program_custom_header_update_request  (optional)
 * returns gateway_program_funding_source_response
 **/
exports.putFundingsourcesProgramgatewayCustomHeaderToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "custom_header": body.custom_header
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/fundingsources/programgateway/customheaders/' + token,
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
 * Updates a specific gateway program funding source
 *
 *
 * token String Gateway program funding source token
 * body Gateway_program_funding_source_update_request  (optional)
 * returns gateway_program_funding_source_response
 **/
exports.putFundingsourcesProgramgatewayToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "url": body.url,
            "active": body.active,
            "basic_auth_username": body.basic_auth_username,
            "basic_auth_password": body.basic_auth_password,
            "timeout_millis": body.timeout_millis,
            "custom_header": body.custom_header,
            "use_mtls": body.use_mtls
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/fundingsources/programgateway/' + token,
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

