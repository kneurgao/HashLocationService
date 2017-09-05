import Constants = require("../../config/constants/Constants");
import IUserBusiness = require("./interfaces/UserBusiness");

var Client = require('node-rest-client').Client;
var accessDetails = require("../../config/constants/AccessDetails");

class UserBusiness implements IUserBusiness {

    private client;

    constructor() {
        this.client = new Client();
    }

    self(callback: (error: any, result: any) => void) {
        var accessToken = accessDetails.access().access_token;

        var args = {
            path: {entity: 'users', operation: 'self'},
            // headers: HEADERS,
            parameters: {access_token: accessToken}
        };

        this.doGet(args, callback);
    }

    selfMediaRecent(callback: (error: any, result: any) => void) {
        var accessToken = accessDetails.access().access_token;

        var args = {
            path: {entity: 'users', operation: 'self/media/recent'},
            // headers: HEADERS,
            parameters: {access_token: accessToken}
        };

        this.doGet(args, callback);
    }

    selfMediaLiked(callback: (error: any, result: any) => void) {
        var accessToken = accessDetails.access().access_token;

        var args = {
            path: {entity: 'users', operation: 'self/media/liked'},
            // headers: HEADERS,
            parameters: {access_token: accessToken}
        };

        this.doGet(args, callback);
    }

    private doGet(args: any, callback: (error: any, result: any) => void) {
        this.client.get(Constants.API_URL, args, function (data, response) {
            console.log('response=' + JSON.stringify(data));   // Parsed response body as js object
            // console.log(response);       // Raw response
            callback(null, data);
        });
    }

}

Object.seal(UserBusiness);
export = UserBusiness;
