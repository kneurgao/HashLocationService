import express = require("express");
import UserController = require("./../../controllers/UserController");

var router = express.Router();

class UserRoutes {
    private _userController: UserController;

    constructor() {
        this._userController = new UserController();
    }

    get routes(): express.Router {
        var controller = this._userController;
        router.get("/self", controller.self);
        router.get("/self/media/recent", controller.selfMediaRecent);
        router.get("/self/media/liked", controller.selfMediaLiked);

        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;
