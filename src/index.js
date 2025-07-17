import express from 'express';
import masjidRoutes from './routes/masjidRoutes.js';
import masjidUsers from './routes/masjidUsers.js';
import masjidEvents from './routes/masjidEvents.js';


const app = express();
app.use(express.json());
app.use(masjidRoutes);
app.use(masjidUsers);
app.use(masjidEvents);

app.get('/', (req, res) => {
    res.send('Hello world');
});


app.listen(3000, () =>{
    console.log('Server ready at localhost:3000');
});