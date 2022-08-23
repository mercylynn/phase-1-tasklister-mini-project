document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener('submit',(e) => 
  {
    e.preventDefault()
    handleTodo(e.target.new_task.value)
  })

  function handleTodo(todo){
    let li=document.createElement('li')
    let btn=document.createElement('button')
    btn.addEventListener('click',handleDelete)
    btn.textContent= ' X '
    li.textContent= ` ${todo} `
    li.appendChild(btn)
    //console.log(btn)
    document.querySelector('#list').appendChild(li)
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }
});



  