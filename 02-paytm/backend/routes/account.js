const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account, User } = require("../db");
const { default: mongoose } = require("mongoose");
const zod = require("zod");
const router = express.Router();


const transactionValidation = zod.object({
    to : zod.string().min(1),
    amount : zod.number().positive()
})

router.post("/transaction", authMiddleware, async (req, res) => {
	const session = await mongoose.startSession();
	session.startTransaction();
	const { to, amount } = req.body;
    const {success} = transactionValidation.safeParse(req.body);
    if(!success){
        return res.json({
            success : false,
            msg : "Enter valid amount/value"
        })
    }

	try {
		const account = await Account.findOne({
			accountId: req.userId,
		}).session(session);

		if (!amount || account.balance < amount) {
            await session.abortTransaction();
			return res.json({
				success: false,
				msg: "Insufficient funds",
			});
		}

        let toAccount;
        try{

            toAccount = await Account.findOne({
                accountId : to
            }).session(session)
        } catch(err){
            await session.abortTransaction();
            return res.json({
                success : false,
                msg : "Check details/ No account found",
                err : err.message
            })
        }

        await Account.updateOne({
            accountId : to
        },{
            $inc : {
                balance : amount
            }
        }).session(session);
        await Account.updateOne({
            accountId : req.userId
        },{
            $inc : {
                balance : -amount
            }
        }).session(session);
		await session.commitTransaction();

        res.json({
            success : true,
            msg : "Transaction successfully completed"
        })
	} catch (err) {
        await session.abortTransaction();
        return res.json({
            success : false,
            msg : "Error occured, please try later",
            err : err.message
        })
    } finally{
        session.endSession();
    }
});

router.get('/balance', authMiddleware, async(req, res) =>{
    
    try{
        const account = await Account.findOne({
            accountId : req.userId
        })

        res.json({
            success : true,
            balance : account.balance
        })

    }catch(err){
        return res.json({
            success : false,
            msg : "Debit amount/ cannot get account details",
            err : err.message
        })
    }
})

module.exports = router;
