import dayjs from 'dayjs';
import mysql from 'mysql';
import express from 'express';

import admin from './admin';

module database {
    export const sql: mysql.Connection = mysql.createConnection({
        socketPath: '/run/mysqld/mysqld.sock',
        user: 'root',
        dateStrings: true,
        database: 'advent',
    });

    sql.connect((err) => {
        if (err) throw err;
        console.log('Connected to SQL database');
    });
}

export default database;