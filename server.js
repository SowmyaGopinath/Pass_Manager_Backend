import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if(err)
        console.log(err);
    console.log('Server listening on ', port);
})