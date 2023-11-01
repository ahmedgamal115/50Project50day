const todosContent = document.querySelector('.todos')
const input = document.querySelector('.content input')

const getTasks = ()=>{
    fetch('http://localhost:3000/getAllTasks',{
        method:'GET',
        headers:{
            "Content-Type": "application/json",
        },
    })
    .then((res)=>res.json())
    .then((data)=>{
        todosContent.innerHTML = ''
        data.map((x)=>{
            todosContent.innerHTML += 
            `
            <div class="todo ${x.complete ? "complete" : ""}" >
                ${x.todo}
            </div>
            `
        })
        const todos = document.querySelectorAll('.todo')
        todos.forEach((todo)=>{
            todo.addEventListener('click',()=>{
                if(todo.classList.contains('complete')){
                    fetch('http://localhost:3000/updateComplete',{
                        method:'POST',
                        headers:{
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            todo: todo.innerText,
                            complete: false
                        })
                    })
                }else{
                    fetch('http://localhost:3000/updateComplete',{
                        method:'POST',
                        headers:{
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            todo: todo.innerText,
                            complete: true
                        })
                    })
                }
                todo.classList.toggle('complete')
            })
            todo.addEventListener('contextmenu',(e)=>{
                e.preventDefault()
                fetch('http://localhost:3000/deleteTodos',{
                    method:'POST',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        todo: todo.innerText,
                    })
                })
                getTasks()
            })
        })
    })
}

getTasks()




input.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        fetch('http://localhost:3000/setTask',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                task: e.target.value
            })
        })
        .then((res)=>res.text())
        .then((data)=>{
            console.log(data)
            if(data === 'Task added'){
                getTasks()
                input.value = ''
            }
        })
    }
})