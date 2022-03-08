'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists cards by the last 4 digits
 *
 *
 * last_four String Last four digits of card number
 * count Integer Number of cards to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns CardListResponse
 **/
exports.getCards = function (last_four, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cards?count=' + count + '&start_index=' + start_index + '&last_four=last_four&sort_by=-lastModifiedTime',
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
 * Returns a card's metadata
 *
 *
 * barcode String Barcode
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns card_response
 **/
exports.getCardsBarcodeBarcode = function (barcode, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cards/barcode/' + barcode,
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
 * Returns a specific card - PAN visible
 *
 *
 * card_hash String Card Hash
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * show_cvv_number Boolean  (optional)
 * returns card_response
 **/
exports.getCardsCardHashShowpan = function (card_hash, fields, show_cvv_number) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cards/' + card_hash + '/showpanbyhash?show_cvv_number=' + show_cvv_number,
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
 * Returns a merchant onboarding card
 *
 *
 * merchant_token String Merchant token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns card_response
 **/
exports.getCardsMerchantMerchanttoken = function (merchant_token, fields) {
    return new Promise(function (resolve, reject) {

        var config = {
            method: 'get',
            url: Base_url + 'v3/cards/merchant/' + merchant_token,
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
 * Returns a specific card - PAN visible
 *
 *
 * merchant_token String Merchant token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * show_cvv_number Boolean  (optional)
 * returns card_response
 **/
exports.getCardsMerchantMerchanttokenShowpan = function (merchant_token, fields, show_cvv_number) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cards/merchant/' + merchant_token + '/showpan?show_cvv_number=' + show_cvv_number,
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
 * Returns a specific card
 *
 *
 * token String Card token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * expand String Object to expand (optional)
 * returns card_response
 **/
exports.getCardsToken = function (token, fields, expand) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cards/' + token,
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
 * Returns a specific card - PAN visible
 *
 *
 * token String Card token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * show_cvv_number Boolean  (optional)
 * returns card_response
 **/
exports.getCardsTokenShowpan = function (token, fields, show_cvv_number) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cards/' + token + '/showpan?show_cvv_number=' + show_cvv_number,
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
 * Lists all cards for a specific user
 *
 *
 * token String User token
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns CardListResponse
 **/
exports.getCardsUserToken = function (token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/cards/user/' + token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Creates a card
 *
 *
 * body Card_request  (optional)
 * show_cvv_number Boolean Show CVV (optional)
 * show_pan Boolean Show PAN (optional)
 * returns card_response
 **/
exports.postCards = function (body, show_cvv_number, show_pan) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_product_token": body.card_product_token,
            "expedite": body.expedite,
            "metadata": {},
            "expiration_offset": {
                "unit": body.expiration_offset.unit,  //  data format "YEARS",
                "value": body.expiration_offset.value, // 5
            },
            "token": body.token,
            "user_token": body.user_token,
            "fulfillment": {
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
                "card_fulfillment_reason": body.fulfillment.card_fulfillment_reason, // data format "NEW",
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
                }
            },
            "reissue_pan_from_card_token": body.reissue_pan_from_card_token,
            "new_pan_from_card_token": body.new_pan_from_card_token,
            "translate_pin_from_card_token": body.translate_pin_from_card_token,
            "activation_actions": {
                "swap_digital_wallet_tokens_from_card_token": body.activation_actions.swap_digital_wallet_tokens_from_card_token,
                "terminate_reissued_source_card": body.activation_actions.terminate_reissued_source_card, // data format true
            },
            "bulk_issuance_token": body.bulk_issuance_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/cards?show_cvv_number=' + show_cvv_number + '&show_pan=' + show_pan,
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
 * Returns user and card tokens for the specified PAN
 *
 *
 * body Pan_request  (optional)
 * returns pan_response
 **/
exports.postCardsGetbypan = function (body) {
    return new Promise(function (resolve, reject) {

        var data = JSON.stringify({
            "pan": body.pan,
            "cvv_number": body.cvv_number,
            "expiration": body.expiration_date
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/cards/getbypan',
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
 * Creates a merchant onboarding card
 *
 *
 * merchant_token String Merchant token
 * body Merchant_card_request  (optional)
 * returns card_response
 **/
exports.postCardsMerchantMerchanttoken = function (merchant_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_product_token": body.card_product_token,
            "expedite": body.expedite,
            "metadata": {},
            "expiration_offset": {
                "unit": body.expiration_offset.unit, // data format  "YEARS",
                "value": body.expiration_offset.value, // 5
            }
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/cards/merchant/' + merchant_token,
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
 * Updates a specific card
 *
 *
 * token String Card token
 * body Card_update_request  (optional)
 * returns card_response
 **/
exports.putCardsToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "card_product_token": body.card_product_token,
            "expedite": body.expedite,
            "metadata": {},
            "expiration_offset": {
                "unit": body.expiration_offset.unit,  //  data format "YEARS",
                "value": body.expiration_offset.value, // 5
            },
            "token": body.token,
            "user_token": body.user_token,
            "fulfillment": {
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
                "card_fulfillment_reason": body.fulfillment.card_fulfillment_reason, // data format "NEW",
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
                }
            },
            "reissue_pan_from_card_token": body.reissue_pan_from_card_token,
            "new_pan_from_card_token": body.new_pan_from_card_token,
            "translate_pin_from_card_token": body.translate_pin_from_card_token,
            "activation_actions": {
                "swap_digital_wallet_tokens_from_card_token": body.activation_actions.swap_digital_wallet_tokens_from_card_token,
                "terminate_reissued_source_card": body.activation_actions.terminate_reissued_source_card, // data format true
            },
            "bulk_issuance_token": body.bulk_issuance_token
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/cards/' + token,
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

