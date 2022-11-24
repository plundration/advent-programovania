import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import express from 'express';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '10000kb' }));

app.use((req, res, next) => {
    console.log('---------------------------------');
    console.log(`${req.method} -> ${req.originalUrl} :`)
    console.log(req.body);

    // if (req.url === 'something')
    //     bodyParser.raw({ type: 'application/json' })(req, res, next);
    // else
    //     bodyParser.json()(req, res, next);
});

app.use(cookieParser());

app.listen(4500, () => { });