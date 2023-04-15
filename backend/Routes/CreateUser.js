const express = require ('express')
const router = express.Router()
const User = require("../models/User")

router.post( "/createruser", async( req, res)=>{
    try{
        await User.create({
            name:"jaishreemahakal",
            password: "jaishreemahakal@12356",
            email: "jaishreemakal@dumail.com",
            loaction: "QWerty WordsHeart"
        })
        res.json({success : true});
    } catch( error){
        console.log( error)
        res.json({success : false});
    }
});

module.exports = router;
