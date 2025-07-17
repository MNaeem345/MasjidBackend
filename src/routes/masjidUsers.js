import { Router } from "express";
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();


const router = Router();


//create prayer times
router.post('/users', (req, res)=>{
    res.status(501).json({error:'Not Implemented'});
});


//list prayer times
router.get('/users', async (req, res) =>{
    const allUser = await prisma.user.findMany();
    res.json(allUser);
});

//create admin acc
router.post('/adminaccount', (req, res)=>{
    res.status(501).json({error:'Not Implemented'});
});

router.get('/adminaccount', (req, res)=>{
    res.status(501).json({error:'Not Implemented'});
});


export default router;