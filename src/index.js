import express from 'express';
import masjidRoutes from './routes/masjidRoutes.js';


const app = express();
app.use(express.json());
app.use(masjidRoutes);

app.get('/', (req, res) => {
    res.send('Hello world');
});


app.listen(3000, () =>{
    console.log('Server ready at localhost:3000');
});