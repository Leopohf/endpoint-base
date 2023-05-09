import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class HealtCheck extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "HealtCheck");
  }

  configureRoutes(): express.Application {
    this.app.route('/health')
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send("SUCCESS");
        });

    return this.app;
  }
}