const PRODUCTION_URL = process.env.BASE_URL;
const MARQETA_USERNAME = process.env.USERNAME || '2eed86a3-52e4-4a93-b9c9-a4de8dd08710';
const MARQETA_PASSWORD = process.env.PASSWORD || '3af47fbd-f358-481d-a2dd-9cf737c8c4c1';
const SENDBOX_URL = "https://sandbox-api.marqeta.com/";


var AUTH = 'Basic ' + Buffer.from(MARQETA_USERNAME + ':' + MARQETA_PASSWORD).toString('base64');

module.exports = {
    base_url: PRODUCTION_URL || SENDBOX_URL,
    authenticator: AUTH
}
