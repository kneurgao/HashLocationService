import express = require("express");
import HeroRoutes = require("./../HeroRoutes");
import SpartanRoutes = require("./../SpartanRoutes");
import AuthRoutes = require("../AuthRoutes");
import UserRoutes = require("../UserRoutes");

var app = express();

class BaseRoutes {

    get routes() {
        // app.use("/", new HeroRoutes().routes);
        // app.use("/", new SpartanRoutes().routes);
        app.use("/auth", new AuthRoutes().routes);
        app.use("/users", new UserRoutes().routes);
        return app;
    }

}

export = BaseRoutes;
