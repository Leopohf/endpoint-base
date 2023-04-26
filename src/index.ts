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

// endpoint to add two values
app.get('/add/:a/:b', (req: express.Request, res: express.Response) => {
  console.log("Entering to add");
  let ans = Number.parseFloat(req.params.a) + Number.parseFloat(req.params.b);
  res.send(`${req.params.a} + ${req.params.b} = ${ans}`);
});

// endpoint to sub two values
app.get('/sub/:a/:b', (req: express.Request, res: express.Response) => {
  console.log("Entering to sub");
  let ans = Number.parseFloat(req.params.a) - Number.parseFloat(req.params.b);
  res.send(`${req.params.a} - ${req.params.b} = ${ans}`);
});

// endpoint to multiply two values
app.get('/mul/:a/:b', (req: express.Request, res: express.Response) => {
  console.log("Entering to mul");
  let ans = Number.parseFloat(req.params.a) * Number.parseFloat(req.params.b);
  res.send(`${req.params.a} * ${req.params.b} = ${ans}`);
});

// endpoint to divide two values
app.get('/div/:a/:b', (req: express.Request, res: express.Response) => {
  console.log("Entering to div");
  let ans = Number.parseFloat(req.params.a) / Number.parseFloat(req.params.b);
  res.send(`${req.params.a} / ${req.params.b} = ${ans}`);
});

// endpoint to calculate square root
app.get('/sqrt/:a', (req: express.Request, res: express.Response) => {
  console.log("Entering to sqrt");
  let ans = Math.sqrt(Number.parseFloat(req.params.a));
  res.send(`sqrt(${req.params.a}) = ${ans}`);
});

// endpoint to calculate power
app.get('/pow/:a/:b', (req: express.Request, res: express.Response) => {
  console.log("Entering to pow");
  let ans = Math.pow(Number.parseFloat(req.params.a), Number.parseFloat(req.params.b));
  res.send(`${req.params.a} ^ ${req.params.b} = ${ans}`);
});

// start server
app.listen(port, () => {
    console.log(`TypeScript express project listening at http://localhost:${port}`)
})