const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const APIKEY = 'SRuciDUZawxkWp2AgLHr5ScKpMhrSeU5pUZ8LrHm'
var qustion = []

app.use(express.static(__dirname + '/home'))
app.use(express.static(__dirname + '/quiz'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const createQuestion = async(queryParams) => {
    await fetch(`https://quizapi.io/api/v1/questions?${queryParams}`,{
        headers:{
            'Content-Type': 'application/json',
        },
    })
    .then((res)=>res.json())
    .then((data)=>{
        qustion = data
    })
}

app.post('/getQuiz',(req,res)=>{
    const {catagory} = req.body
    if (catagory.toLowerCase() === "all") {
        const queryParams = new URLSearchParams({ 
            apiKey: APIKEY, 
            limit:10
        });
        createQuestion(queryParams)
        res.send({state:"Done"})
    }else{
        const queryParams = new URLSearchParams({ 
            apiKey: APIKEY, 
            limit:10,
            category:catagory
        });
        createQuestion(queryParams)
        res.send({state:"Done"})
    }
    
})
app.get('/getQuiz',(req,res)=>{
    res.send(qustion)
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/home/index.html')
})
app.get('/quiz',(req,res)=>{
    res.sendFile(__dirname + '/quiz/quiz.html')
})


app.listen('3000',()=>{
    console.log('http://localhost:3000/')
})