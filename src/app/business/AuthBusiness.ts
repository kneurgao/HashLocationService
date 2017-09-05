var FormData = require('form-data');
import IAuthBusiness = require("./interfaces/AuthBusiness");
import Constants = require("../../config/constants/Constants");

var accessDetails = require("../../config/constants/AccessDetails");

class AuthBusiness implements IAuthBusiness {

    constructor() {
    }

    authorize(code: string, callback: (error: any, result: any) => void) {
        var form = new FormData();
        form.append('client_id', Constants.CLIENT_ID);
        form.append('client_secret', Constants.CLIENT_SECRET);
        form.append('grant_type', Constants.GRANT_TYPE);
        form.append('redirect_uri', Constants.REDIRECT_URI);
        form.append('code', code);

        var url = "https://api.instagram.com/oauth/access_token";

        form.submit(url, function (err, res) {
            // res – response object (http.IncomingMessage)  //
            console.log('err=' + JSON.stringify(err));
            console.log('statusCode=' + res.statusCode);

            res.on('data', function (response) {
                console.log('response=' + response);
                accessDetails.access(JSON.parse(response));

                callback(null, accessDetails.access().user);
            });

            res.resume();
        });
    }

}

Object.seal(AuthBusiness);
export = AuthBusiness;
