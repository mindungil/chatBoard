import express from 'express'
import cors from 'cors';
import bodyparser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send("hello this is server");
})

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
})

//endpoint 정의
// route ->  /route/board/ .... => api 호출
//