import express = require("express");
import AuthBusiness = require("../app/business/AuthBusiness");

class AuthController {

    authorize(req: express.Request, res: express.Response): void {
        try {
            var code = req.body.code;
            var authBusiness = new AuthBusiness();
            authBusiness.authorize(code, (error, result) => {
                if (error) {
                    res.send({"error": error});
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log(e);
            res.send({"error": e});
        }
    }
}

export = AuthController;
