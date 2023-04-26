import express from 'express';

// Create a new express app instance
const app: express.Application = express();
// set  port, listen for requests
const port: number = 3000;

// catch all request
app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("Entering the server");
  console.log(req.method);
  // jumping to the next middleware
    next();
});

// basic get hello world response
app.get('/', (req: express.Request, res: express.Response) => {
  console.log("Entering to root");
  res.send(`Hello World!`);
});

app.get('/col', (req: express.Request, res: express.Response) => {
  console.log("Entering to col");
  res.send(`Hello from Col`);
});

// start server
app.listen(port, () => {
    console.log(`TypeScript express project listening at http://localhost:${port}`)
})