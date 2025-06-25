import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('This is working?');
});

app.get('/about', (req: Request, res: Response) => {
    res.send('About page');
});

app.post('/echo', (req: Request, res: Response) => {
    res.json({ received: req.body });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});