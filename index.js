import express from 'express';
import bodyParser from 'body-parser';
import { apiRouter } from './routes/index.js';
import './db.js';

const port = 3000
const app = express();
const router = express.Router();
apiRouter(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true}));

app.use('/api', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${3000}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${3000}`)
})