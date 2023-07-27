import App from "../src/app/app";

describe("App test: ", () => {
    const port: number = 3000;
    let app: App;

    beforeAll(() => {
        app = new App({port: port});
    });

    afterAll(() => {
        app.stop();
    })

    it("must be defined", () => {
        expect(app).toBeDefined();
    })
});