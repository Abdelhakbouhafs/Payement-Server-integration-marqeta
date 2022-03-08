'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all card products
 *
 *
 * count Integer Number of items to retrieve. Count can be between 1 - 10 items. (optional)
 * start_index Integer Indicates from what row to start returning data. (optional)
 * sort_by String Sort order (optional)
 * returns CardProductListResponse
 **/
exports.getCardproducts = function (count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cardproducts?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a specific card product
 *
 *
 * token String Card product token
 * returns card_product_response
 **/
exports.getCardproductsToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cardproducts/' + token,
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
 * Creates a card product
 *
 *
 * body Card_product_request Card product object
 * returns card_product_response
 **/
exports.postCardproducts = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "active": body.active,
            "start_date": body.start_date,  //  "2022-03-06T08:21:43.582Z",
            "end_date": body.end_date, //"2022-03-06T08:21:43.582Z",
            "config": {
                "special": {
                    "merchant_on_boarding": body.config.special.merchant_on_boarding
                },
                "jit_funding": {
                    "programgateway_funding_source": {
                        "refunds_destination": body.config.jit_funding.programgateway_funding_source.refunds_destination,// "GATEWAY",
                        "always_fund": body.config.jit_funding.programgateway_funding_source.always_fund,// false,
                        "enabled": body.config.jit_funding.programgateway_funding_source.enabled, // false,
                        "funding_source_token": body.config.jit_funding.programgateway_funding_source.funding_source_token
                    },
                    "program_funding_source": {
                        "refunds_destination": body.config.jit_funding.program_funding_source.refunds_destination,
                        "enabled": body.config.jit_funding.program_funding_source.enabled,// false,
                        "funding_source_token": body.config.jit_funding.program_funding_source.funding_source_token
                    },
                    "paymentcard_funding_source": {
                        "refunds_destination": body.config.jit_funding.paymentcard_funding_source.refunds_destination, // "GATEWAY",
                        "enabled": body.config.jit_funding.paymentcard_funding_source.enabled
                    }
                },
                "transaction_controls": {
                    "require_card_not_present_card_security_code": body.config.transaction_controls.require_card_not_present_card_security_code,
                    "address_verification": {
                        "auth_messages": {
                            "decline_on_postal_code_mismatch": body.config.transaction_controls.address_verification.auth_messages.decline_on_postal_code_mismatch,
                            "decline_on_address_number_mismatch": body.config.transaction_controls.address_verification.auth_messages.decline_on_address_number_mismatch,
                            "validate": body.config.transaction_controls.address_verification.auth_messages.validate
                        },
                        "av_messages": {
                            "decline_on_postal_code_mismatch": body.config.transaction_controls.address_verification.av_messages.decline_on_postal_code_mismatch,
                            "decline_on_address_number_mismatch": body.config.transaction_controls.address_verification.av_messages.decline_on_address_number_mismatch,
                            "validate": body.config.transaction_controls.address_verification.av_messages.validate
                        }
                    },
                    "allow_network_load": body.config.transaction_controls.allow_network_load,
                    "allow_chip_fallback": body.config.transaction_controls.allow_chip_fallback,
                    "enable_credit_service": body.config.transaction_controls.enable_credit_service,
                    "allow_mcc_group_authorization_controls": body.config.transaction_controls.allow_mcc_group_authorization_controls,
                    "allow_first_pin_set_via_financial_transaction": body.config.transaction_controls.allow_first_pin_set_via_financial_transaction,
                    "always_require_pin": body.config.transaction_controls.always_require_pin,
                    "allow_network_load_card_activation": body.config.transaction_controls.allow_network_load_card_activation,
                    "quasi_cash_exempt_merchant_group_token": body.config.transaction_controls.quasi_cash_exempt_merchant_group_token,
                    "quasi_cash_exempt_mids": body.config.transaction_controls.quasi_cash_exempt_mids,
                    "accepted_countries_token": body.config.transaction_controls.accepted_countries_token,
                    "notification_language": body.config.transaction_controls.notification_language,
                    "ignore_card_suspended_state": body.config.transaction_controls.ignore_card_suspended_state,
                    "allow_gpa_auth": body.config.transaction_controls.allow_gpa_auth,
                    "allow_quasi_cash": body.config.transaction_controls.allow_quasi_cash,
                    "enable_partial_auth_approval": body.config.transaction_controls.enable_partial_auth_approval,
                    "strong_customer_authentication_limits": {
                        "sca_lvp_transactions_count_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_transaction_limit,
                        "sca_contactless_transaction_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_transaction_limit,
                        "sca_lvp_transactions_currency": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_transactions_currency,
                        "sca_contactless_transactions_count_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_transactions_count_limit,
                        "sca_contactless_transactions_currency": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_transactions_currency,
                        "sca_lvp_transaction_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_transaction_limit,
                        "sca_lvp_cumulative_amount_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_cumulative_amount_limit,
                        "sca_contactless_cumulative_amount_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_cumulative_amount_limit
                    },
                    "always_require_icc": body.config.transaction_controls.always_require_icc
                },
                "card_life_cycle": {
                    "activate_upon_issue": body.config.card_life_cycle.activate_upon_issue,
                    "expiration_offset": {
                        "unit": body.config.card_life_cycle.expiration_offset.unit,
                        "value": body.config.card_life_cycle.expiration_offset.value,
                        "min_offset": {
                            "unit": body.config.card_life_cycle.expiration_offset.min_offset.unit,
                            "value": body.config.card_life_cycle.expiration_offset.min_offset.value
                        }
                    },
                    "card_service_code": body.config.card_life_cycle.card_service_code,
                    "update_expiration_upon_activation": body.config.card_life_cycle.update_expiration_upon_activation
                },

                "digital_wallet_tokenization": {
                    "card_art_id": body.config.digital_wallet_tokenization.card_art_id,
                    "provisioning_controls": {
                        "in_app_provisioning": {
                            "address_verification": {
                                "validate": body.config.digital_wallet_tokenization.provisioning_controls.in_app_provisioning.address_verification.validate
                            },
                            "enabled": body.config.digital_wallet_tokenization.provisioning_controls.in_app_provisioning.enabled
                        },
                        "wallet_provider_card_on_file": {
                            "address_verification": {
                                "validate": body.config.digital_wallet_tokenization.provisioning_controls.wallet_provider_card_on_file.address_verification.validate
                            },
                            "enabled": body.config.digital_wallet_tokenization.provisioning_controls.wallet_provider_card_on_file.enabled
                        },
                        "manual_entry": {
                            "address_verification": {
                                "validate": body.config.digital_wallet_tokenization.provisioning_controls.manual_entry.address_verification.validate
                            },
                            "enabled": body.config.digital_wallet_tokenization.provisioning_controls.manual_entry.enabled
                        }
                    }
                },

                "clearing_and_settlement": {
                    "overdraft_destination": body.clearing_and_settlement.overdraft_destination
                },
                "poi": {
                    "other": {
                        "allow": body.poi.other.allow,
                        "card_presence_required": body.poi.other.card_presence_required,
                        "cardholder_presence_required": body.poi.other.cardholder_presence_required
                    },
                    "ecommerce": body.poi.ecommerce,
                    "atm": body.poi.atm
                },
                "fulfillment": {
                    "enable_offline_pin": body.fulfillment.enable_offline_pin,
                    "allow_card_creation": body.fulfillment.allow_card_creation,
                    "shipping": {
                        "care_of_line": body.fulfillment.shipping.care_of_line,
                        "method": body.fulfillment.shipping.method,  // data format "LOCAL_MAIL",
                        "return_address": {
                            "zip": body.fulfillment.shipping.return_address.zip,
                            "country": body.fulfillment.shipping.return_address.country,
                            "address2": body.fulfillment.shipping.return_address.address2,
                            "city": body.fulfillment.shipping.return_address.city,
                            "phone": body.fulfillment.shipping.return_address.phone,
                            "address1": body.fulfillment.shipping.return_address.address1,
                            "last_name": body.fulfillment.shipping.return_address.last_name,
                            "state": body.fulfillment.shipping.return_address.state,
                            "middle_name": body.fulfillment.shipping.return_address.middle_name,
                            "postal_code": body.fulfillment.shipping.return_address.postal_code,
                            "first_name": body.fulfillment.shipping.return_address.first_name
                        },
                        "recipient_address": {
                            "zip": body.fulfillment.shipping.recipient_address.zip,
                            "country": body.fulfillment.shipping.recipient_address.country,
                            "address2": body.fulfillment.shipping.recipient_address.address2,
                            "city": body.fulfillment.shipping.recipient_address.city,
                            "phone": body.fulfillment.shipping.recipient_address.phone,
                            "address1": body.fulfillment.shipping.recipient_address.address1,
                            "last_name": body.fulfillment.shipping.recipient_address.last_name,
                            "state": body.fulfillment.shipping.recipient_address.state,
                            "middle_name": body.fulfillment.shipping.recipient_address.middle_name,
                            "postal_code": body.fulfillment.shipping.recipient_address.postal_code,
                            "first_name": body.fulfillment.shipping.recipient_address.first_name
                        }
                    },
                    "all_zero_card_security_code": body.all_zero_card_security_code,
                    "payment_instrument": body.payment_instrument,
                    "pan_length": body.pan_length,
                    "card_personalization": {
                        "images": {
                            "carrier": {
                                "message_1": body.fulfillment.card_personalization.images.message_1,
                                "name": body.fulfillment.card_personalization.images.name
                            },
                            "signature": {
                                "name": body.fulfillment.card_personalization.signature.name
                            },
                            "carrier_return_window": {
                                "name": body.fulfillment.card_personalization.carrier_return_window.name
                            },
                            "card": {
                                "name": body.fulfillment.card_personalization.card.name,
                                "thermal_color": body.fulfillment.card_personalization.card.thermal_color
                            }
                        },
                        "carrier": {
                            "message_file": body.fulfillment.carrier.message_file,
                            "logo_file": body.fulfillment.carrier.logo_file,
                            "message_line": body.fulfillment.carrier.message_line,
                            "template_id": body.fulfillment.carrier.template_id,
                            "logo_thumbnail_file": body.fulfillment.carrier.logo_thumbnail_file
                        },
                        "text": {
                            "name_line_2": {
                                "value": body.fulfillment.text.name_line_2.value
                            },
                            "name_line_1": {
                                "value": body.fulfillment.text.name_line_1.value
                            },
                            "name_line_3": {
                                "value": body.fulfillment.text.name_line_3.value
                            }
                        },
                        "perso_type": body.fulfillment.perso_type, // data format "EMBOSS"
                    },
                    "package_id": body.package_id,
                    "uppercase_name_lines": body.uppercase_name_lines,
                    "bulk_ship": body.bulk_ship,
                    "fulfillment_provider": body.fulfillment_provider,
                    "bin_prefix": body.bin_prefix
                },
                "selective_auth": {
                    "sa_mode": 2,
                    "enable_regex_search_chain": false,
                    "dmd_location_sensitivity": 4
                }
            }
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/cardproducts',
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
 * Updates a specific card product
 *
 *
 * token String Card product token
 * body Card_product_update_model Card product object
 * returns card_product_response
 **/
exports.putCardproductsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "name": body.name,
            "active": body.active,
            "start_date": body.start_date,  //  "2022-03-06T08:21:43.582Z",
            "end_date": body.end_date, //"2022-03-06T08:21:43.582Z",
            "config": {
                "special": {
                    "merchant_on_boarding": body.config.special.merchant_on_boarding
                },
                "jit_funding": {
                    "programgateway_funding_source": {
                        "refunds_destination": body.config.jit_funding.programgateway_funding_source.refunds_destination,// "GATEWAY",
                        "always_fund": body.config.jit_funding.programgateway_funding_source.always_fund,// false,
                        "enabled": body.config.jit_funding.programgateway_funding_source.enabled, // false,
                        "funding_source_token": body.config.jit_funding.programgateway_funding_source.funding_source_token
                    },
                    "program_funding_source": {
                        "refunds_destination": body.config.jit_funding.program_funding_source.refunds_destination,
                        "enabled": body.config.jit_funding.program_funding_source.enabled,// false,
                        "funding_source_token": body.config.jit_funding.program_funding_source.funding_source_token
                    },
                    "paymentcard_funding_source": {
                        "refunds_destination": body.config.jit_funding.paymentcard_funding_source.refunds_destination, // "GATEWAY",
                        "enabled": body.config.jit_funding.paymentcard_funding_source.enabled
                    }
                },
                "transaction_controls": {
                    "require_card_not_present_card_security_code": body.config.transaction_controls.require_card_not_present_card_security_code,
                    "address_verification": {
                        "auth_messages": {
                            "decline_on_postal_code_mismatch": body.config.transaction_controls.address_verification.auth_messages.decline_on_postal_code_mismatch,
                            "decline_on_address_number_mismatch": body.config.transaction_controls.address_verification.auth_messages.decline_on_address_number_mismatch,
                            "validate": body.config.transaction_controls.address_verification.auth_messages.validate
                        },
                        "av_messages": {
                            "decline_on_postal_code_mismatch": body.config.transaction_controls.address_verification.av_messages.decline_on_postal_code_mismatch,
                            "decline_on_address_number_mismatch": body.config.transaction_controls.address_verification.av_messages.decline_on_address_number_mismatch,
                            "validate": body.config.transaction_controls.address_verification.av_messages.validate
                        }
                    },
                    "allow_network_load": body.config.transaction_controls.allow_network_load,
                    "allow_chip_fallback": body.config.transaction_controls.allow_chip_fallback,
                    "enable_credit_service": body.config.transaction_controls.enable_credit_service,
                    "allow_mcc_group_authorization_controls": body.config.transaction_controls.allow_mcc_group_authorization_controls,
                    "allow_first_pin_set_via_financial_transaction": body.config.transaction_controls.allow_first_pin_set_via_financial_transaction,
                    "always_require_pin": body.config.transaction_controls.always_require_pin,
                    "allow_network_load_card_activation": body.config.transaction_controls.allow_network_load_card_activation,
                    "quasi_cash_exempt_merchant_group_token": body.config.transaction_controls.quasi_cash_exempt_merchant_group_token,
                    "quasi_cash_exempt_mids": body.config.transaction_controls.quasi_cash_exempt_mids,
                    "accepted_countries_token": body.config.transaction_controls.accepted_countries_token,
                    "notification_language": body.config.transaction_controls.notification_language,
                    "ignore_card_suspended_state": body.config.transaction_controls.ignore_card_suspended_state,
                    "allow_gpa_auth": body.config.transaction_controls.allow_gpa_auth,
                    "allow_quasi_cash": body.config.transaction_controls.allow_quasi_cash,
                    "enable_partial_auth_approval": body.config.transaction_controls.enable_partial_auth_approval,
                    "strong_customer_authentication_limits": {
                        "sca_lvp_transactions_count_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_transaction_limit,
                        "sca_contactless_transaction_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_transaction_limit,
                        "sca_lvp_transactions_currency": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_transactions_currency,
                        "sca_contactless_transactions_count_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_transactions_count_limit,
                        "sca_contactless_transactions_currency": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_transactions_currency,
                        "sca_lvp_transaction_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_transaction_limit,
                        "sca_lvp_cumulative_amount_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_lvp_cumulative_amount_limit,
                        "sca_contactless_cumulative_amount_limit": body.config.transaction_controls.strong_customer_authentication_limits.sca_contactless_cumulative_amount_limit
                    },
                    "always_require_icc": body.config.transaction_controls.always_require_icc
                },
                "card_life_cycle": {
                    "activate_upon_issue": body.config.card_life_cycle.activate_upon_issue,
                    "expiration_offset": {
                        "unit": body.config.card_life_cycle.expiration_offset.unit,
                        "value": body.config.card_life_cycle.expiration_offset.value,
                        "min_offset": {
                            "unit": body.config.card_life_cycle.expiration_offset.min_offset.unit,
                            "value": body.config.card_life_cycle.expiration_offset.min_offset.value
                        }
                    },
                    "card_service_code": body.config.card_life_cycle.card_service_code,
                    "update_expiration_upon_activation": body.config.card_life_cycle.update_expiration_upon_activation
                },

                "digital_wallet_tokenization": {
                    "card_art_id": body.config.digital_wallet_tokenization.card_art_id,
                    "provisioning_controls": {
                        "in_app_provisioning": {
                            "address_verification": {
                                "validate": body.config.digital_wallet_tokenization.provisioning_controls.in_app_provisioning.address_verification.validate
                            },
                            "enabled": body.config.digital_wallet_tokenization.provisioning_controls.in_app_provisioning.enabled
                        },
                        "wallet_provider_card_on_file": {
                            "address_verification": {
                                "validate": body.config.digital_wallet_tokenization.provisioning_controls.wallet_provider_card_on_file.address_verification.validate
                            },
                            "enabled": body.config.digital_wallet_tokenization.provisioning_controls.wallet_provider_card_on_file.enabled
                        },
                        "manual_entry": {
                            "address_verification": {
                                "validate": body.config.digital_wallet_tokenization.provisioning_controls.manual_entry.address_verification.validate
                            },
                            "enabled": body.config.digital_wallet_tokenization.provisioning_controls.manual_entry.enabled
                        }
                    }
                },

                "clearing_and_settlement": {
                    "overdraft_destination": body.clearing_and_settlement.overdraft_destination
                },
                "poi": {
                    "other": {
                        "allow": body.poi.other.allow,
                        "card_presence_required": body.poi.other.card_presence_required,
                        "cardholder_presence_required": body.poi.other.cardholder_presence_required
                    },
                    "ecommerce": body.poi.ecommerce,
                    "atm": body.poi.atm
                },
                "fulfillment": {
                    "enable_offline_pin": body.fulfillment.enable_offline_pin,
                    "allow_card_creation": body.fulfillment.allow_card_creation,
                    "shipping": {
                        "care_of_line": body.fulfillment.shipping.care_of_line,
                        "method": body.fulfillment.shipping.method,  // data format "LOCAL_MAIL",
                        "return_address": {
                            "zip": body.fulfillment.shipping.return_address.zip,
                            "country": body.fulfillment.shipping.return_address.country,
                            "address2": body.fulfillment.shipping.return_address.address2,
                            "city": body.fulfillment.shipping.return_address.city,
                            "phone": body.fulfillment.shipping.return_address.phone,
                            "address1": body.fulfillment.shipping.return_address.address1,
                            "last_name": body.fulfillment.shipping.return_address.last_name,
                            "state": body.fulfillment.shipping.return_address.state,
                            "middle_name": body.fulfillment.shipping.return_address.middle_name,
                            "postal_code": body.fulfillment.shipping.return_address.postal_code,
                            "first_name": body.fulfillment.shipping.return_address.first_name
                        },
                        "recipient_address": {
                            "zip": body.fulfillment.shipping.recipient_address.zip,
                            "country": body.fulfillment.shipping.recipient_address.country,
                            "address2": body.fulfillment.shipping.recipient_address.address2,
                            "city": body.fulfillment.shipping.recipient_address.city,
                            "phone": body.fulfillment.shipping.recipient_address.phone,
                            "address1": body.fulfillment.shipping.recipient_address.address1,
                            "last_name": body.fulfillment.shipping.recipient_address.last_name,
                            "state": body.fulfillment.shipping.recipient_address.state,
                            "middle_name": body.fulfillment.shipping.recipient_address.middle_name,
                            "postal_code": body.fulfillment.shipping.recipient_address.postal_code,
                            "first_name": body.fulfillment.shipping.recipient_address.first_name
                        }
                    },
                    "all_zero_card_security_code": body.all_zero_card_security_code,
                    "payment_instrument": body.payment_instrument,
                    "pan_length": body.pan_length,
                    "card_personalization": {
                        "images": {
                            "carrier": {
                                "message_1": body.fulfillment.card_personalization.images.message_1,
                                "name": body.fulfillment.card_personalization.images.name
                            },
                            "signature": {
                                "name": body.fulfillment.card_personalization.signature.name
                            },
                            "carrier_return_window": {
                                "name": body.fulfillment.card_personalization.carrier_return_window.name
                            },
                            "card": {
                                "name": body.fulfillment.card_personalization.card.name,
                                "thermal_color": body.fulfillment.card_personalization.card.thermal_color
                            }
                        },
                        "carrier": {
                            "message_file": body.fulfillment.carrier.message_file,
                            "logo_file": body.fulfillment.carrier.logo_file,
                            "message_line": body.fulfillment.carrier.message_line,
                            "template_id": body.fulfillment.carrier.template_id,
                            "logo_thumbnail_file": body.fulfillment.carrier.logo_thumbnail_file
                        },
                        "text": {
                            "name_line_2": {
                                "value": body.fulfillment.text.name_line_2.value
                            },
                            "name_line_1": {
                                "value": body.fulfillment.text.name_line_1.value
                            },
                            "name_line_3": {
                                "value": body.fulfillment.text.name_line_3.value
                            }
                        },
                        "perso_type": body.fulfillment.perso_type, // data format "EMBOSS"
                    },
                    "package_id": body.package_id,
                    "uppercase_name_lines": body.uppercase_name_lines,
                    "bulk_ship": body.bulk_ship,
                    "fulfillment_provider": body.fulfillment_provider,
                    "bin_prefix": body.bin_prefix
                },
                "selective_auth": {
                    "sa_mode": 2,
                    "enable_regex_search_chain": false,
                    "dmd_location_sensitivity": 4
                }
            }
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/cardproducts/' + token,
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

