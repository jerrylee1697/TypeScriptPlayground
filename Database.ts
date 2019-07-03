// Load SDK for JavaScript
var AWS = require('aws-sdk');

// Set region
AWS.config.update({region: 'us-west-2'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: 'yyyy-xx-xx'});

// Getting Batches from Database
var params = {
    RequestItems: {
        'TABLE_NAME': {
            Keys: [
                {'KEY_NAME': {N: 'KEY_VALUE_1'}},
                {'KEY_NAME': {N: 'KEY_VALUE_2'}},
                {'KEY_NAME': {N: 'KEY_VALUE_3'}}
            ],
            ProjectionExpression: 'KEY_NAME, ATTRIBUTE'
        }
    }
};

ddb.batchGetItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        data.Responses.TABLE_NAME.forEach(function(element, index, array) {
            console.log(element);
        });
    }
});