import App from './app/app';

const app: App = new App({
  port: 3000, // default port to listen
});

// starting server and listening for request on port 3000
app.startServer();