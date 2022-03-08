'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all users
 *
 *
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * search_type String Search type (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns UserCardHolderListResponse
 **/
exports.getUsers = function (count, start_index, search_type, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({});

        var config = {
            method: 'get',
            url: Base_url + "v3/users?count=" + count + "&start_index=" + start_index,
            headers: {
                'Content-type': 'application/json',
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
                console.log(error);
            });


    });
}

/**
 * Returns a client access token
 *
 *
 * token String Client access token
 * application_token String  (optional)
 * returns client_access_token_response
 **/
exports.getUsersAuthClientaccesstokenToken = function (token, application_token) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "application_token": application_token,
            "card_token": token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/clientaccesstoken',
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
 * Lists all children of a parent user
 *
 *
 * parent_token String Token of parent cardholder
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns UserCardHolderListResponse
 **/
exports.getUsersParenttokenChildren = function (parent_token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/users/' + parent_token + '/children?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Lists all users who match a phone number
 *
 *
 * phone_number String Phone number
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns UserCardHolderListResponse
 **/
exports.getUsersPhonenumberPhonenumber = function (phone_number, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/users/phonenumber/' + phone_number + '?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
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
 * Returns a specific user
 *
 *
 * token String User token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns user_card_holder_response
 **/
exports.getUsersToken = function (token, fields) {
    return new Promise(function (resolve, reject) {

        var config = {
            method: 'get',
            url: Base_url + 'v3/users/' + token,
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
 * Lists cardholder notes
 *
 *
 * token String User token
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
exports.getUsersTokenNotes = function (token, start_index, count, created_by, created_by_user_role, include_private, search_type, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/users/' + token + '/notes?start_index=' + start_index + '&count=' + count + '&include_private=' + include_private + '&sort_by=-lastModifiedTime',
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
 * Returns a specific user's SSN
 *
 *
 * token String User token
 * full_ssn Boolean  (optional)
 * returns ssn_response_model
 **/
exports.getUsersTokenSsn = function (token, full_ssn) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/users/' + token + '/ssn?full_ssn=' + full_ssn,
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
 * Creates a user
 *
 *
 * body Card_holder_model  (optional)
 * returns user_card_holder_response
 **/
exports.postUsers = function (body) {
    return new Promise(async function (resolve, reject) {

        var data = JSON.stringify({
            "country": body.country,
            "metadata": {
                "key": body.metadata || null
            },
            "notes": body.notes || null,
            "gender": body.gender,
            "city": body.city,
            "birth_date": body.birth_date,
            "account_holder_group_token": body.account_holder_group_token || null,
            "ssn": body.ssn || null,
            "id_card_expiration_date": body.id_card_expiration_date,
            "password": body.password,
            "company": body.company || null,
            "state": body.state,
            "first_name": body.first_name,
            "email": body.email,
            "honorific": body.honorific || null,
            "address2": body.address2 || null,
            "passport_expiration_date": body.passport_expiration_date,
            "address1": body.address1,
            "active": true,
            "last_name": body.last_name,
            "ip_address": body.ip_address,
            "middle_name": body.middle_name || null,
            "corporate_card_holder": false,
            "identifications": body.identifications,
            "nationality": body.nationality,
            "phone": body.phone,
            "passport_number": body.passport_number,
            "id_card_number": body.id_card_number || null,
            "postal_code": body.postal_code,
            "uses_parent_account": false,
            "parent_token": body.parent_token || null
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users?api_key=%2Facceptedcountries',
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
 * Updates a user password
 *
 *
 * body Password_update_model Password update object
 * no response value expected for this operation
 **/
exports.postUsersAuthChangepassword = function (body) {

    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "new_password": body.new_password,
            "current_password": body.current_password
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/changepassword?api_key=%2Facceptedcountries',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator,
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
 * Creates a client access token
 *
 *
 * body Client_access_token_request  (optional)
 * returns client_access_token_response
 **/
exports.postUsersAuthClientaccesstoken = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "application_token": body.application_token,
            "card_token": body.card_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/clientaccesstoken',
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
 * Logs in a user
 *
 *
 * body Login_request_model User login object (optional)
 * returns login_response_model
 **/
exports.postUsersAuthLogin = function (body) {
    return new Promise(function (resolve, reject) {

        var data = JSON.stringify({
            "email": body.email,
            "password": body.password
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/login?api_key=%2Facceptedcountries',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator,
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
                reject("Error user login");
            });
    });
}


/**
 * Logs out a user
 *
 *
 * no response value expected for this operation
 **/
exports.postUsersAuthLogout = function () {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/logout?api_key=%2Facceptedcountries',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator,
            }
        };

        axios(config)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject("Can't logout retry");
            });

    });
}


/**
 * Creates a one-time token
 *
 *
 * body One_time_request_model One-time object (optional)
 * returns access_token_response
 **/
exports.postUsersAuthOnetime = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "email": body.email,
            "password": body.password,
            "user_token": body.user_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/onetime',
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
 * Generates a reset password email
 *
 *
 * body Reset_user_password_email_model  (optional)
 * no response value expected for this operation
 **/
exports.postUsersAuthResetpassword = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "email": body.email
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/resetpassword',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error);
            });
    });
}


/**
 * Resets a user password
 *
 *
 * token String Reset password verification token
 * body Reset_user_password_model  (optional)
 * no response value expected for this operation
 **/
exports.postUsersAuthResetpasswordToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "user_token": body.user_token,
            "new_password": body.new_password
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/resetpassword/' + token,
            headers: {
                'Content-Type': 'application/json',
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
 * Generates an email verification request
 *
 *
 * no response value expected for this operation
 **/
exports.postUsersAuthVerifyemail = function () {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({});

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/verifyemail',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
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
 * Verifies the email token
 *
 *
 * token String Email verification token
 * no response value expected for this operation
 **/
exports.postUsersAuthVerifyemailToken = function (token) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({});

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/auth/verifyemail/' + token,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
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
 * Lists all users
 *
 *
 * body User_card_holder_search_model  (optional)
 * count Integer Number of users to retrieve (optional)
 * start_index Integer Start index (optional)
 * search_type String Search type (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns UserCardHolderListResponse
 **/
exports.postUsersLookup = function (body, count, start_index, search_type, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "ssn": body.ssn,
            "dda": body.dda,
            "first_name": body.first_name,
            "last_name": body.last_name,
            "phone": body.phone,
            "email": body.email
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/lookup?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime',
            headers: {
                'Content-Type': 'application/json',
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
 * Creates a note for the cardholder
 *
 *
 * token String User token
 * body Cardholder_note_request_model  (optional)
 * returns cardholder_note_response_model
 **/
exports.postUsersTokenNotes = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "description": body.description,
            "created_by": body.created_by,
            "created_by_user_role": body.created_by_user_role,
            "private": body.private
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/users/' + token + '/notes',
            headers: {
                'Content-Type': 'application/json',
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
 * Updates a specific user
 *
 *
 * token String User token
 * body UserCardHolderUpdateModel User object
 * returns card_holder_model
 **/
exports.putUsersToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "country": body.country,
            "metadata": {
                "key": body.metadata || null
            },
            "notes": body.notes || null,
            "gender": body.gender,
            "city": body.city,
            "birth_date": body.birth_date,
            "account_holder_group_token": body.account_holder_group_token || null,
            "ssn": body.ssn || null,
            "id_card_expiration_date": body.id_card_expiration_date,
            "password": body.password,
            "company": body.company || null,
            "state": body.state,
            "first_name": body.first_name,
            "email": body.email,
            "honorific": body.honorific || null,
            "address2": body.address2 || null,
            "passport_expiration_date": body.passport_expiration_date,
            "address1": body.address1,
            "active": true,
            "last_name": body.last_name,
            "ip_address": body.ip_address,
            "middle_name": body.middle_name || null,
            "corporate_card_holder": false,
            "identifications": body.identifications,
            "nationality": body.nationality,
            "phone": body.phone,
            "passport_number": body.passport_number,
            "id_card_number": body.id_card_number || null,
            "postal_code": body.postal_code,
            "uses_parent_account": false,
            "parent_token": body.parent_token || null
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/users/' + token,
            headers: {
                'Content-Type': 'application/json',
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
 * Updates a specific note for a cardholder
 *
 *
 * token String User token
 * notes_token String Notes token
 * body Cardholder_note_update_request_model  (optional)
 * returns cardholder_note_response_model
 **/
exports.putUsersTokenNotesNotestoken = function (token, notes_token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "description": body.description
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/users/' + token + '/notes/' + notes_token,
            headers: {
                'Content-Type': 'application/json',
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

