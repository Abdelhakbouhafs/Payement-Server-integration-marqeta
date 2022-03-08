'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all businesses
 *
 *
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * business_name_dba String Business name DBA (optional)
 * business_name_legal String Business name legal (optional)
 * search_type String Search type (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns BusinessCardHolderListResponse
 **/
exports.getBusinesses = function (count, start_index, business_name_dba, business_name_legal, search_type, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/businesses?count=' + count + '&start_index=' + start_index + '&business_name_dba=' + business_name_dba + '&business_name_legal=' + business_name_legal + '&sort_by=-lastModifiedTime',
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
 * Lists all children of a parent business
 *
 *
 * parent_token String Token of parent business
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns UserCardHolderListResponse
 **/
exports.getBusinessesParenttokenChildren = function (parent_token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/businesses/' + parent_token + '/children?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific business
 *
 *
 * token String Business token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns business_card_holder_response
 **/
exports.getBusinessesToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/businesses/' + token,
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
 * Lists business notes
 *
 *
 * token String Business token
 * start_index Integer Start index (optional)
 * count Integer Number of notes to retrieve (optional)
 * created_by String Created by (optional)
 * created_by_user_role String Comma-delimited list of created by user roles (optional)
 * include_private Boolean Include private notes and private fields in note response (optional)
 * search_type String Search type (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns CardHolderNoteListResponse
 **/
exports.getBusinessesTokenNotes = function (token, start_index, count, created_by, created_by_user_role, include_private, search_type, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/businesses/' + token + '/notes?start_index=' + start_index + '&count=' + count + '&created_by=' + created_by + '&include_private=' + include_private + '&sort_by=-lastModifiedTime',
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
 * Returns a specific business proprietor's SSN
 *
 *
 * token String Business token
 * full_ssn Boolean  (optional)
 * returns ssn_response_model
 **/
exports.getBusinessesTokenSsn = function (token, full_ssn) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/businesses/' + token + '/ssn?full_ssn=' + full_ssn,
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
 * Creates a business
 *
 *
 * body Business_cardholder  (optional)
 * returns business_card_holder_response
 **/
exports.postBusinesses = function (body) {
    return new Promise(function (resolve, reject) {

        var data = JSON.stringify({
            "incorporation": {
                "state_of_incorporation": body.incorporation.state_of_incorporation,
                "stock_symbol": body.incorporation.stock_symbol,
                "is_public": body.incorporation.is_public,
                "address_registered_under": {
                    "zip": body.incorporation.address_registered_under.zip,
                    "country": body.incorporation.address_registered_under.country,
                    "address2": body.incorporation.address_registered_under.address2,
                    "city": body.incorporation.address_registered_under.city,
                    "address1": body.incorporation.address_registered_under.address1,
                    "state": body.incorporation.address_registered_under.state,
                    "postal_code": body.incorporation.address_registered_under.postal_code
                },
                "name_registered_under": body.incorporation.name_registered_under,
                "incorporation_type": body.incorporation.incorporation_type  // data format "LLC"
            },
            "metadata": {
                "key": body.metadata.key
            },
            "notes": body.notes,
            "attestation_date": body.attestation_date,// data format "2000-01-23T04:56:07.000+00:00",
            "international_office_locations": body.international_office_locations,
            "account_holder_group_token": body.account_holder_group_token,
            "password": body.password,
            "business_type": body.business_type,
            "proprietor_or_officer": {
                "phone": body.proprietor_or_officer.phone,
                "dob": body.proprietor_or_officer.dob, //  data format "2000-01-23T04:56:07.000+00:00",
                "last_name": body.proprietor_or_officer.last_name,
                "middle_name": body.proprietor_or_officer.middle_name,
                "alternative_names": body.proprietor_or_officer.alternative_names,
                "title": body.proprietor_or_officer.title,
                "first_name": body.proprietor_or_officer.first_name,
                "email": body.proprietor_or_officer.email,
                "identifications":
                    {
                        "type": body.proprietor_or_officer.identifications.type, // data format "SSN","PASSPORT"
                        "expiration_date": body.proprietor_or_officer.identifications.expiration_date, //  data format "2000-01-23T04:56:07.000+00:00",
                        "value": body.proprietor_or_officer.identifications.value
                    },
                "home": {
                    "zip": body.proprietor_or_officer.home.zip,
                    "country": body.proprietor_or_officer.home.country,
                    "address2": body.proprietor_or_officer.home.address2,
                    "city": body.proprietor_or_officer.home.city,
                    "address1": body.proprietor_or_officer.home.address1,
                    "state": body.proprietor_or_officer.home.state,
                    "postal_code": body.proprietor_or_officer.home.postal_code
                },
                "ssn": body.proprietor_or_officer.ssn
            },
            "in_current_location_since": body.in_current_location_since,// data format "2000-01-23T04:56:07.000+00:00",
            "attestation_consent": body.attestation_consent,
            "general_business_description": body.general_business_description,
            "website": body.website,
            "attester_title": body.attester_title,
            "active": body.active,
            "attester_name": body.attester_name,
            "office_location": {
                "zip": body.office_location.zip,
                "country": body.office_location.country,
                "address2": body.office_location.address2,
                "city": body.office_location.city,
                "address1": body.office_location.address1,
                "state": body.office_location.state,
                "postal_code": body.office_location.postal_code
            },
            "beneficial_owner1": {
                "phone": body.beneficial_owner1.phone,
                "dob": body.beneficial_owner1.dob,// data format "2000-01-23T04:56:07.000+00:00",
                "last_name": body.beneficial_owner1.last_name,
                "middle_name": body.beneficial_owner1.middle_name,
                "title": body.beneficial_owner1.title,
                "first_name": body.beneficial_owner1.first_name,
                "home": {
                    "zip": body.beneficial_owner1.home.zip,
                    "country": body.beneficial_owner1.home.country,
                    "address2": body.beneficial_owner1.home.address2,
                    "city": body.beneficial_owner1.home.city,
                    "address1": body.beneficial_owner1.home.address1,
                    "state": body.beneficial_owner1.home.state,
                    "postal_code": body.beneficial_owner1.home.postal_code
                },
                "ssn": body.beneficial_owner1.ssn
            },
            "ip_address": body.ip_address,
            "history": body.history,
            "business_name_legal": body.business_name_legal,
            "duns_number": body.duns_number,
            "identifications":
                {
                    "type": body.identifications.type,//  data format  "SSN" , "PASSPORT"
                    "expiration_date": body.identifications.expiration_date,
                    "value": body.identifications.value
                }
            ,
            "token": body.token,
            "date_established": body.date_established, // data format "2000-01-23T04:56:07.000+00:00",
            "phone": body.phone,
            "taxpayer_id": body.taxpayer_id,
            "business_name_dba": body.business_name_dba,
            "proprietor_is_beneficial_owner": body.proprietor_is_beneficial_owner,
            "primary_contact": {
                "extension": body.primary_contact.extension,
                "full_name": body.primary_contact.full_name,
                "phone": body.primary_contact.phone,
                "mobile": body.primary_contact.mobile,
                "title": body.primary_contact.title,
                "department": body.primary_contact.department,
                "fax": body.primary_contact.fax,
                "email": body.primary_contact.email
            }
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/businesses',
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
 * Returns a specific business
 *
 *
 * body DDARequest  (optional)
 * returns business_cardholder
 **/
exports.postBusinessesLookup = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "dda": body.dda
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/businesses/lookup',
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
 * Creates a note for a business
 *
 *
 * token String Business token
 * body Cardholder_note_request_model  (optional)
 * returns cardholder_note_response_model
 **/
exports.postBusinessesTokenNotes = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "description": body.description,
            "created_by": body.created_by,
            "created_by_user_role": body.created_by_user_role,// data format "USER",
            "private": body.private
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/businesses/' + token + '/notes',
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
 * Updates a specific business
 *
 *
 * token String Business token
 * body Business_card_holder_update Business object
 * returns business_cardholder
 **/
exports.putBusinessesToken = function (token, body) {
    return new Promise(function (resolve, reject) {

        var data = JSON.stringify({
            "token": body.token,
            "active": body.active,
            "notes": body.notes,
            "ip_address": body.ip_address,
            "password": body.password,
            "phone": body.phone,
            "metadata": {},
            "account_holder_group_token": body.account_holder_group_token,
            "identifications": body.identifications,
            "business_name_legal": body.business_name_legal,
            "business_name_dba": body.business_name_dba,
            "office_location": body.office_location,
            "in_current_location_since": body.in_current_location_since, // data format "2022-03-06T08:21:43.541Z",
            "website": body.website,
            "date_established": body.date_established, // data format "2022-03-06T08:21:43.541Z",
            "general_business_description": body.general_business_description,
            "history": body.history,
            "business_type": body.business_type,
            "international_office_locations": body.international_office_locations,
            "taxpayer_id": body.taxpayer_id,
            "duns_number": body.duns_number,
            "primary_contact": body.primary_contact,
            "incorporation": body.incorporation,
            "proprietor_or_officer": body.proprietor_or_officer,
            "beneficial_owner1": body.beneficial_owner1,
            "attester_name": body.attester_name,
            "attestation_consent": body.attestation_consent,
            "attester_title": body.attester_title,
            "attestation_date": body.attestation_date, // data format "2022-03-06T08:21:43.541Z",
            "proprietor_is_beneficial_owner": body.proprietor_is_beneficial_owner
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/businesses/' + token,
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
 * Updates a specific note for a business
 *
 *
 * token String Business token
 * notes_token String Notes token
 * body Cardholder_note_update_request_model  (optional)
 * returns cardholder_note_response_model
 **/
exports.putBusinessesTokenNotesNotestoken = function (token, notes_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "description": body.description
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/businesses/' + token + '/notes/' + notes_token,
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

