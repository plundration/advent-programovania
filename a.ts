import Pocketbase from 'pocketbase';
const adminPb = new Pocketbase('https://advent.gympos.sk/pb');

adminPb.admins.authWithPassword('sveltekitadmin@gmail.com', 'vmTPLGRD3seBfdP')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
