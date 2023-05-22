import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class NotFound extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "NotFound");
  }

  configureRoutes(): express.Application {

    // route handling for 404 not found error
    this.app.use("*", (req, res) => {
      res.status(404).send("Not Found");
    });

    return this.app;
  }
}