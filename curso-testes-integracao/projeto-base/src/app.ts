import express, {Request, Response} from "express"
const app = express();

app.get("/health", (req: Request, res: Response)=> res.send("ok!!"))


app.get("/numbers", (req: Request, res: Response)=> res.send([1, 2, 3, 4, 5]))

export default app