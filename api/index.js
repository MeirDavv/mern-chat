const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const jwt = require('jsonwebtoken');
const User = require('./models/User');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
jwtSecret = process.env.JWT_SECRET;

const app = express();

app.get('/test', (req, res) => {
    res.json('test ok');
})

app.post('/register', async(req,res) => {
    const {username, password} = req.body;
    const createdUser = await User.create({username, password});
    jwt.sign({userId: createdUser._id}, jwtSecret).then((err,token) => {
        if(err) throw err;
    });
});

app.listen(4040);

//DNfuXDhICBc5WjpB