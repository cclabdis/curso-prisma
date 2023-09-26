import express, {Request, Response} from "express"
const app = express();

app.get("/health", (req: Request, res: Response)=> res.send("ok!!"))

export default app