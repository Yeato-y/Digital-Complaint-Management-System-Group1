import exppress from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './src/model/connect.js';

dotenv.config();

const app = exppress();


app.use(cors());
app.use(exppress.json());

app.get('/', (req, res) => {
    res.send('Digital Complaint Management System API');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});