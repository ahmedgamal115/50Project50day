const addOne = document.querySelector("#addOne")
const notes = document.querySelector(".notes")
const noteInNotes = document.querySelectorAll(".note .content p")


let noteArr = []

if(localStorage.getItem("userNotes")){
    noteArr = (JSON.parse(localStorage.getItem("userNotes")))
    noteArr.map((text)=>{
        notes.innerHTML += `
                <div class="note">
                    <div class="controller">
                        <i id="edit" class="fa-solid fa-pen-to-square"></i>
                        <i id="delete" class="fa-solid fa-trash"></i>
                    </div>
                    <div class="content">
                        <p>${text}</p>
                    </div>
                    <textarea name="content" id="editContent" class="editContent hidden" cols="50" rows="10"></textarea>
                </div>
        `
    })
}

addOne.addEventListener("click",()=>{
    notes.innerHTML += `
            <div class="note">
                <div class="controller">
                    <i id="edit" class="fa-solid fa-pen-to-square"></i>
                    <i id="delete" class="fa-solid fa-trash"></i>
                </div>
                <div class="content">
                    <p></p>
                </div>
                <textarea name="content" id="editContent" class="editContent hidden" cols="50" rows="10"></textarea>
            </div>
    `
    const noteInNotes = document.querySelectorAll(".note .content p")
    
    const deleteBtn = document.querySelectorAll("#delete")
    
    noteArr.push(noteInNotes[noteInNotes.length - 1].innerText)
    localStorage.setItem("userNotes",JSON.stringify(noteArr))
    editNote()
    DeleteNote()
})

const editNote = () =>{
    const notes = document.querySelectorAll('#edit')
    notes.forEach((note,idx)=>{
        note.addEventListener('click', (event) => {
            if (event.target.id === 'edit') {
                const note = event.target.closest('.note')
                const content = note.querySelector('.content')
                const paragrph = note.querySelector('.content p')
                const editContent = note.querySelector('.editContent')
                content.classList.toggle('hidden')
                editContent.classList.toggle('hidden')
                editContent.value = noteArr[idx]
                editContent.addEventListener('change',(e)=>{
                    noteArr[idx] = e.target.value
                    paragrph.innerText = e.target.value
                })
                localStorage.removeItem("userNotes")
                localStorage.setItem("userNotes",JSON.stringify(noteArr))
            }
        })
    })
}
const DeleteNote = () =>{
    const deleteBtn = document.querySelectorAll('#delete')
    deleteBtn.forEach((del,indx)=>{
        del.addEventListener('click', (event) => {
            if (event.target.id === 'delete') {
                const note = event.target.closest('.note')
                noteArr.splice(indx, 1);
                note.remove()
                localStorage.removeItem("userNotes")
                localStorage.setItem("userNotes",JSON.stringify(noteArr))
            }
        })
    })
}

editNote()
DeleteNote()
