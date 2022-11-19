import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import express from 'express';
import https from 'https';

import config from './config';

import admin from './admin';
import database from './database';

// Middleware as authentication!
// https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656301-set-up-authentication-middleware

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


// Authentication

app.post('/login', (req, res) => admin.login(req, res));
app.post('/logout', (req, res) => admin.logout(req, res));
app.post('/verifykey', (req, res) => admin.verifyKey(req, res));

// --------------
//  HTTPS server
// --------------

if (fs.existsSync(config.sslKeyPath) && fs.existsSync(config.sslCertPath)) {
    let options: https.ServerOptions = {
        key: fs.readFileSync(config.sslKeyPath),
        cert: fs.readFileSync(config.sslCertPath),
    };
    
    console.log('Obtained SSL keys');
    https.createServer(options, app).listen(config.port, () => {
        console.log(`HTTPS server started successfully, listening on port: ${config.port}`);
    });
} else {
    console.error('ERROR: Failed to open SSL keys!');
    app.listen(config.port, () => {
        console.log(`HTTP server started because of missing SSL keys, listening on port: ${config.port}`);
    });
}
