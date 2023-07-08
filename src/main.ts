import express, { Request, Response } from 'express';
import { auth } from '@test-workspace/auth';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Testing nx Node.js standalone project' });
});

app.get('/auth', (req: Request, res: Response) => {
  res.send(auth());
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
