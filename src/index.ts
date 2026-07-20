import express, { type Request, type Response } from 'express';

const app = express();
const port = 3000;

// An Express middleware that parses request's payload
// make the data available in 'req.body' object
app.use(express.json()); 

app.get('/', (req: Request, res: Response) => {
 res.status(200).json({
    message: "successful",
    service: "myapi001",
    isActive: true
 });
});

app.listen(port, () => {
 console.log(`🚀 Server running on http://localhost:${port}`);
});

export default app