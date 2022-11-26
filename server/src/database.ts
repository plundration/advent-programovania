import mysql from 'mysql';
import express from 'express';
import PocketBase from 'pocketbase';

import admin from './admin';
import secret from './secret';

module database {
    export const pb = new PocketBase('https://localhost:8090')
    pb.admins.authWithPassword(secret.pbEmail, secret.pbPassword);
}

export default database;