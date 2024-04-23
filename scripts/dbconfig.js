import {MongoClient} from 'mongodb';

const uri = 'mongodb+srv://passwordadmin:dgrVGiyi3bohYxkf@cluster0.mxcry06.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('test');
        const passwordmanager = database.collection('passwordmanager');
        const query = {username: 'user1'};
        const user = await passwordmanager.findOne(query);
        console.log(user);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);


