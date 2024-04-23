import mongoose from "../config/dbconfig.js";


const appSchema = new mongoose.Schema({
    name: String,
    password: String,
    icon: String,
    // Add additional fields like created date, last modified date if needed
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    apps: [appSchema]
}, { collection: 'passwordmanager' });

const passwordmanager = mongoose.model('passwordmanager', userSchema);

export default passwordmanager;

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String,
    
//     apps: [
//         {
//             name: String,
//             password: String,
//             icon: String
//             // metadata: Map
//         }
//     ]
// }, {collection: 'passwordmanager'});

// const passwordmanager = mongoose.model('passwordmanager',userSchema);

// export default passwordmanager;