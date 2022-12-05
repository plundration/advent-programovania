import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

try {
    const userParams = {
        username: 'daklfj',
        email: 'fajd@jfakl.com',
        password: 'palino01',
        passwordConfirm: 'palino01',
        name: 'meno',
        emailVisibility: false,
    };
    
    await pb.collection('users').create(userParams);

} catch (err) {
    console.log(err);
}