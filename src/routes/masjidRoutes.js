import { Router } from "express";

const router = Router();


//create prayer times
router.post('/prayertimes', (req, res)=>{
    res.status(501).json({error:'Not Implemented'});
});


//list prayer times
router.get('/prayertimes', (req, res) =>{
    res.status(501).json({error:'Not Implemented'});
});





export default router;
