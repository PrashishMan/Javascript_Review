const addForm = document.querySelector(".add")
const list = document.querySelector(".todos")
const searchForm = document.querySelector(".search-form")


const filterTodos = (term) => {
    const todoArray = Array.from(list.children)
    todoArray.filter(item => !item.textContent.toLowerCase().includes(term))
    .forEach((todo) =>{
        todo.classList.add('filtered')
    })

    todoArray.filter(item => item.textContent.toLowerCase().includes(term))
    .forEach((todo) =>{
        todo.classList.remove('filtered')
    })

    return todoArray
}

const searchInput = searchForm.search

searchInput.addEventListener('keyup', e => {
    const searchKey = searchInput.value.trim()
    filterTodos(searchKey)
})
const generateTemplate = (todo) =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    if(todo.length){
        list.innerHTML += html
    }
    

}

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }     
})

addForm.addEventListener('submit', e =>{
    e.preventDefault()
    const todo = addForm.add.value.trim().toLowerCase()
    console.log(todo)
    generateTemplate(todo)
    addForm.reset()
})