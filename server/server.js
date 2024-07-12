import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './db/db.js';
import morgan from 'morgan';
dotenv.config(); 

const app = express();

app.use(express.json());
app.use(cors()); 
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Welcome to EduVibe API');
})

const PORT = process.env.PORT || 5000;

connect().then(()=>{
    try{
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    }
    catch(err){
        console.log(err);
    }
})
.catch(err => console.log(err));

