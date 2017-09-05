import express = require("express");
import AuthController = require("./../../controllers/AuthController");

var router = express.Router();

class AuthRoutes {
    private _authController: AuthController;

    constructor() {
        this._authController = new AuthController();
    }

    get routes(): express.Router {
        var controller = this._authController;
        router.post("/authorize", controller.authorize);

        return router;
    }
}

Object.seal(AuthRoutes);
export = AuthRoutes;
