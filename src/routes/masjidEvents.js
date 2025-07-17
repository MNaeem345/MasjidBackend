import { Router } from "express";

const router = Router();


//create masjid events
router.post('/events', (req, res)=>{
    res.status(501).json({error:'Not Implemented'});
});


//list masjid events
router.get('/events', (req, res) =>{
    res.status(501).json({error:'Not Implemented'});
});




export default router;