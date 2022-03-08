'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all bulk issuance requests
 *
 *
 * count Integer Number of requests to retrieve (optional)
 * start_index Integer Start index (optional)
 * sort_by String Sort order (optional)
 * returns BulkCardOrderListResponse
 **/
exports.getBulkissuances = function (count, start_index, sort_by) {
    return new Promise(function (resolve, reject) {

        var config = {
            method: 'get',
            url: Base_url + 'v3/bulkissuances?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a bulk issuance request
 *
 *
 * token String Bulk issuance token
 * returns bulk_issuance_response
 **/
exports.getBulkissuancesToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/bulkissuances/' + token,
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
 * Creates a bulk issuance request for cards
 *
 *
 * body Bulk_issuance_request  (optional)
 * returns bulk_issuance_response
 **/
exports.postBulkissuances = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "fulfillment": {
                "shipping": {
                    "care_of_line": body.fulfillment.care_of_line,
                    "method": body.fulfillment.method, // data format  "LOCAL_MAIL",
                    "return_address": {
                        "zip": body.fulfillment.return_address.zip,
                        "country": body.fulfillment.return_address.country,
                        "address2": body.fulfillment.return_address.address2,
                        "city": body.fulfillment.return_address.city,
                        "phone": body.fulfillment.return_address.phone,
                        "address1": body.fulfillment.return_address.address1,
                        "last_name": body.fulfillment.return_address.last_name,
                        "state": body.fulfillment.return_address.state,
                        "middle_name": body.fulfillment.return_address.middle_name,
                        "postal_code": body.fulfillment.return_address.postal_code,
                        "first_name": body.fulfillment.return_address.first_name
                    },
                    "recipient_address": {
                        "zip": body.fulfillment.recipient_address.zip,
                        "country": body.fulfillment.recipient_address.country,
                        "address2": body.fulfillment.recipient_address.address2,
                        "city": body.fulfillment.recipient_address.city,
                        "phone": body.fulfillment.recipient_address.phone,
                        "address1": body.fulfillment.recipient_address.address1,
                        "last_name": body.fulfillment.recipient_address.last_name,
                        "state": body.fulfillment.recipient_address.state,
                        "middle_name": body.fulfillment.recipient_address.middle_name,
                        "postal_code": body.fulfillment.recipient_address.postal_code,
                        "first_name": body.fulfillment.recipient_address.first_name
                    }
                },
                "card_fulfillment_reason": body.card_fulfillment_reason,// data format "NEW",
                "card_personalization": {
                    "images": {
                        "carrier": {
                            "message_1": body.card_personalization.images.carrier.message_1,
                            "name": body.card_personalization.images.carrier.name
                        },
                        "signature": {
                            "name": body.card_personalization.signature.name
                        },
                        "carrier_return_window": {
                            "name": body.card_personalization.carrier_return_window.name
                        },
                        "card": {
                            "name": body.card_personalization.card.name,
                            "thermal_color": body.card_personalization.card.thermal_color
                        }
                    },
                    "carrier": {
                        "message_file": body.card_personalization.carrier.message_file,
                        "logo_file": body.card_personalization.carrier.logo_file,
                        "message_line": body.card_personalization.carrier.message_line,
                        "template_id": body.card_personalization.carrier.template_id,
                        "logo_thumbnail_file": body.card_personalization.carrier.logo_thumbnail_file
                    },
                    "text": {
                        "name_line_2": {
                            "value": body.card_personalization.text.name_line_2.value
                        },
                        "name_line_1": {
                            "value": body.card_personalization.text.name_line_1.value
                        },
                        "name_line_3": {
                            "value": body.card_personalization.text.name_line_3.value
                        }
                    },
                    "perso_type": body.card_personalization.perso_type   // data format "EMBOSS"
                }
            },


            "expedite": body.expedite,
            "card_product_token": body.card_token,
            "card_allocation": body.card_allocation,
            "user_association": {
                "single_inventory_user_token": body.user_association.single_inventory_user_token,  //data format "false",
                "single_inventory_user": body.user_association.single_inventory_user,// Boolean  false
            },
            "name_line_1_numeric_postfix": body.name_line_1_numeric_postfix,// Boolean false,
            "name_line_1_random_postfix": body.name_line_1_random_postfix,//false,
            "expiration_offset": {
                "unit": body.unit,// data fomrat "YEARS",
                "value": body.value // data format 5
            }
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/bulkissuances',
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

