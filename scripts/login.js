import {users} from '../dummydata/userdata.js';

function validateUser(username) {
    console.log(username);
    const u = users.find(user => user.username === username);
    return u;
}

export {validateUser};

