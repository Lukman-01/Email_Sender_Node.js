const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { sendMail} = require("./Resourses/emailrequirement");
const { eMessage} = require("./Resourses/emailTemplete")
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/',async(req,res) => {
    const {name, email, subject, message} = req.body;
    try{
        if (!name && !email && !subject && !message)
            return res.json("Incomplete data");

        await sendMail({
            name,
            email,
            subject,
            message: await eMessage(name, email, subject, message)
        })
        
        res.status(201).json({message: "Your email is sent"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Your email is not sent"});
    }
})

app.listen(4000, () => {
    console.log("Server is listening.")
}) 