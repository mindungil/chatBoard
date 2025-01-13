import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT;

app.get('/', (req: Request, res:Response) => {
    res.send("hello this is back-end server");
})

app.listen(port, () => {
    console.log("this server is running at http://localhost:3001");
})