const container = document.querySelector('.container')



let qustions = []
let userAnswers = []

if(localStorage.getItem('userAnswers')){
    userAnswers = JSON.parse(localStorage.getItem('userAnswers'))
}

const getQuiz = async ()=>{
    await fetch('http://localhost:3000/getQuiz',{
        method:"get",
        headers:{
            "Content-Type": "application/json",
        },
    })
    .then((res)=>res.json())
    .then((data)=>{
        qustions = data
        createQustions(data[userAnswers.length])
    })
}

const createQustions = (qustion)=>{
    container.innerHTML = 
    `
    <div class="content">
        <div class="qustion">
            ${qustion.question}
        </div>
        <div class="answers">
                ${qustion.answers.answer_a !== null ? 
                    `<div class="answer">
                        <input type="radio" name="answer" id="a">
                        <label>${qustion.answers.answer_a}</label>
                    </div>`
                    :''
                }
                ${qustion.answers.answer_b !== null ? 
                    `<div class="answer">
                        <input type="radio" name="answer" id="b">
                        <label>${qustion.answers.answer_b}</label>
                    </div>`
                    :''
                }
                ${qustion.answers.answer_c !== null ? 
                    `<div class="answer">
                        <input type="radio" name="answer" id="c">
                        <label>${qustion.answers.answer_c}</label>
                    </div>`
                    :''
                }
                ${qustion.answers.answer_d !== null ? 
                    `<div class="answer">
                        <input type="radio" name="answer" id="d">
                        <label>${qustion.answers.answer_d}</label>
                    </div>`
                    :''
                }
        </div>
        <button class="submit">Submit</button>
    </div>
    `
    const submitBtn = document.querySelector('.submit')
    const answers = document.querySelectorAll('.answer input')
    submitBtn.addEventListener('click',()=>{
        let arrayLenght = userAnswers.length
        if(arrayLenght !== 9){
            answers.forEach((answer)=>{
                if(answer.checked){
                    userAnswers.push(`answer_${answer.getAttribute('id')}_correct`)
                    localStorage.setItem('userAnswers',JSON.stringify(userAnswers))
                    createQustions(qustions[arrayLenght+1])
                }
            })
        }else{
            userAnswers.map((answer,idx)=>{
                userAnswers[idx] = qustions[idx].correct_answers[answer]
            })
            let correct = 0
            let inCorrect = 0
            userAnswers.filter((x)=>{
                x === 'false' ? 
                inCorrect++
                :
                    correct++
            })
            createResult(correct,inCorrect)
            localStorage.removeItem('userAnswers')
            setTimeout(() => {
                window.location.href = '/'
            }, 2000);
        }
    })
}

const createResult = (correct,incorrect)=>{
    container.innerHTML = 
    `
    <div class="results">
        <div class="correct">
            <div class="num">${correct}</div>
            <div class="title">Correct</div>
        </div>
        <div class="incorrect">
            <div class="num">${incorrect}</div>
            <div class="title">In correct</div>
        </div>
    </div>
    `
}

getQuiz().then(()=>{
    console.log(qustions)
})
