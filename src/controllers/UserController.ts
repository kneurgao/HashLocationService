import express = require("express");
import UserBusiness = require("../app/business/UserBusiness");

class UserController {

    self(req: express.Request, res: express.Response): void {
        try {
            var userBusiness = new UserBusiness();
            userBusiness.self((error, result) => {
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

    selfMediaRecent(req: express.Request, res: express.Response): void {
        try {
            var userBusiness = new UserBusiness();
            userBusiness.selfMediaRecent((error, result) => {
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

    selfMediaLiked(req: express.Request, res: express.Response): void {
        try {
            var userBusiness = new UserBusiness();
            userBusiness.selfMediaLiked((error, result) => {
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

export = UserController;
