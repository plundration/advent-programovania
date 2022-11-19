import crypto from 'crypto';
import express from 'express';
import mysql from 'mysql';

import database from './database'

module admin {
    const default_exp_time = 3600000;
    let adminCookies: { key: string, expire: number }[] = [];

    // ---------
    //  Utility
    // ---------

    export function checkAdminKey(key: string) {
        if (!key) return false;

        let verified = false;

        for (let i = 0; i < adminCookies.length; i++) {
            if (adminCookies[i].key === key) {
                if (adminCookies[i].expire < Date.now()) {
                    console.log(`Removing old key ${key.substring(0, 5)}`);
                    adminCookies.splice(i);
                    verified = false;
                    break;
                }
                verified = true;
                break;
            }
        }
        console.log(`Key ${key.substring(0, 5)}... ${verified ? "" : "not"} allowed`);
        return verified;
    }

    function hash_password(username: string, password: string) {
        const hash = crypto.createHash('sha256').update(username).update(password).digest('base64');
        return hash;
    }

    function generateKey() {
        let key = crypto.randomBytes(48).toString('base64');
        adminCookies.push({ key: key, expire: Date.now() + default_exp_time });
        return key;
    }

    // ---------
    //  Exports
    // ---------

    export function login(req: express.Request, res: express.Response) {
        const hash = hash_password(req.body.username, req.body.password);
        database.sql.query('SELECT COUNT(*) FROM admins WHERE username=? AND hash=?', [req.body.username, hash], (err, result) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (result[0]['COUNT(*)'] > 0) {
                console.log(`Access key generated for user '${req.body.username}'`);
                res.send(generateKey());
            } else {
                console.log(`Wrong password '${req.body.password}' for user '${req.body.username}'`)
                res.sendStatus(401);
            }
        });
    };

    export function logout(req: express.Request, res: express.Response) {
        if (!checkAdminKey(req.body.key)) {
            res.sendStatus(401);
            return;
        }

        // drop the key from the list
        for (let i = 0; i < adminCookies.length; i++) {
            if (adminCookies[i].key == req.body.key) {
                adminCookies.splice(i);
                res.sendStatus(200);
                return;
            }
        }

        // if we didn't find any matching key
        res.sendStatus(404);
    };

    export function verifyKey(req: express.Request, res: express.Response) {
        res.sendStatus(checkAdminKey(req.body.key) ? 200 : 401);
    };

}

export default admin;