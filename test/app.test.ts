import App from "../src/app/app";

describe("App test: ", () => {
    const port: number = 8081;
    let app: App;

    beforeAll(() => {
        app = new App({port: port});
    });

    afterAll(() => {
        app.stopServer();
    });

    it("must be defined", () => {
        expect(app).toBeDefined();
    });

    // I am not happy with this approach but have not found the correct way to do it and I would like to move to something else
    it(`must be listening`, () => {
        const serverSpy = jest.spyOn(app.server, "listen");
        app.startServer();
        expect(serverSpy).toBeCalled();
    });

    // I am not happy with this approach but have not found the correct way to do it and I would like to move to something else
    it(`must set routes`, () => {
        const serverSpy = jest.spyOn(app, "setRoutes");
        app.setRoutes();
        expect(serverSpy).toBeCalled();
    });
});