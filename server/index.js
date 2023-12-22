const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); // accessing back from front different ips
require('dotenv').config();
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const imageDownloader = require('image-downloader');

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = 'jejfjwjebfjbfi3no1n2dk' //random string

app.use(express.json()) // json parser to get name, email from req.body
app.use(cookieParser())
app.use('/uploads', express.static(__dirname+'/uploads'))
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}))

mongoose.connect(process.env.MONGO_URL)
app.get('/test', (req, res) => {
    res.json('test ok');
})

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(userDoc)
    } catch(e) {
        res.status(422).json(e);
    }
})

app.post('/login',async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({email})
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if(passOk){
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(userDoc)
            })
        } else {
            res.json('password not ok')
        }
    } else {
        res.json('not found')
    }

} )

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, user) => {
            if(err) throw err;
            const {name, email, _id} = await User.findById(user.id);
            res.json({name, email, _id})
        })
    } else {
        res.json(null);
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async (req, res) => {
    const {link} = req.body;
    const newName = 'photo' + Date.now() + '.png';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName
    })
    res.json(newName);
})

app.listen(4000);