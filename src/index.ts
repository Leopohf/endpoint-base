import express from 'express';

// Create a new express app instance
const app: express.Application = express();
// set  port, listen for requests
const port: number = 3000;

// basic get hello world response
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`Hello World!`);
});

// start server
app.listen(port, () => {
    console.log(`TypeScript express project listening at http://localhost:${port}`)
})