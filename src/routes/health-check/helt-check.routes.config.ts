import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class HealtCheck extends CommonRoutesConfig {

  private static ROUTE_HEALTH_PREFIX = '/health';

  constructor(app: express.Application) {
    super(app, "HealtCheck");
  }

  configureRoutes(): express.Application {
    this.app.route(`${HealtCheck.ROUTE_HEALTH_PREFIX}`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send("SUCCESS");
        });

    return this.app;
  }
}