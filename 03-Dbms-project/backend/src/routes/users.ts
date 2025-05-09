import { Router, Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma'
const client = new PrismaClient();
import zod from "zod";

const router = Router();

const signUpValidation = zod.object({
    username : zod.string().min(3).max(30).trim(),
    password  : zod.string().min(3),
    firstname : zod.string().min(3).max(30).trim(),
    lastname : zod.string().min(3).max(30).trim(),
});

router.post('/signup', async(req, res):Promise<any>=>{
    const {success} = signUpValidation.safeParse(req.body);
    if(!success){
        return res.json({
            success : false,
            msg : "Enter valid inputs"
        })
    }
    const {username, password, firstname, lastname} = req.body;
    try{
         await client.users.create({
            data : {
                username,
                password,
                firstname,
                lastname
            }
        })
        return res.json({
            msg : "Success"
        })
    }catch(e){
        return res.json({
            success : false,
            msg : "Invalid Username/ Account already exists"
        })

    }

})

export default router;