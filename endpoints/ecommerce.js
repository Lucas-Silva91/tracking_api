const express = require ('express');
const router = express.Router();
const Account = require ('../model/account')

router.get('', async (req, res, next)=>{
    try {
        const account = await Account.find()
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json(error)
    }
});


module.exports = router