import PocketBase from 'pocketbase';

const pb = new PocketBase('https://localhost:8090');

try {
    await pb.collection('users').create({
        email: 'matouinhell@gmail.com',
        password: 'palino01',
        passwordConfirm: 'palino01',
    });
} catch (err) {
    console.log(err);
}