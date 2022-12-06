import PocketBase from 'pocketbase';

const pb = new PocketBase('https://advent.gympos.sk/pb');

const userParams = {
    username: 'daklfj',
    email: 'fajd@jfakl.com',
    password: 'palino01',
    passwordConfirm: 'palino01',
    name: 'meno',
    emailVisibility: false,
};

await pb.collection('users').create(userParams);