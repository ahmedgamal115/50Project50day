const express = require('express')
const app = express()
const path = require('path')
const nodemailer = require("nodemailer")
const bodyParser = require('body-parser')
const session = require('express-session')

app.use(express.static('public'))
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('trust proxy', 1)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { sameSite: "strict" }
}))


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "auctionlive0@gmail.com",
      pass: "gdfy hwcx tpuq druw",
    },
});
async function main(email) {
    let randomCode = Math.floor(Math.random() * 500000) +100000
    // send mail with defined transport object
    await transporter.sendMail({
      from: 'auctionlive0@gmail.com',
      to: email,
      subject: "Hello ✔",
      text: "Hello world?",
      html: `<b>Validation Code <h1>${randomCode}</h1></b>`,
    });
    return randomCode
}

app.post('/sendmail',(req,res)=>{
    const {email} = req.body
    try {
        main(email).then((randomCode)=>{
            req.session.code = randomCode
            console.log("Code Sended")
            res.send({"code":randomCode})

        })
    } catch (error) {
        console.log(error)
    }
})
app.post('/varifyCode',(req,res)=>{
    const {currentCode} = req.body
    console.log(currentCode)
    console.log(req.session.code)
    if(currentCode == req.session.code){
        res.send("200")
    }else{
        res.send("400")
    }
})


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.get('/Varify',(req,res)=>{
    res.sendFile(path.join(__dirname,'/varify.html'))
})


app.listen('3000',()=>{
    console.log('http://localhost:3000/')
})