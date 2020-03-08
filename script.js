const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
const ids = {
  TODO_ID: "todo-"
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0
let uncheckedCount = 0

function createTodoItem(value) {
  const todoItem = document.createElement('li')
  const todoText = document.createElement('span')
  const todoDelete = document.createElement('button')
  const checkbox = document.createElement('input')
  
  todoText.className = classNames.TODO_TEXT
  todoItem.className = classNames.TODO_ITEM
  todoDelete.className =  classNames.TODO_DELETE
  todoDelete.append("-")
  todoDelete.onclick = deleteTodo
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.setAttribute('type', 'checkbox')
  checkbox.onchange =  changeCheckBox
  todoItem.id = ids.TODO_ID + itemCount
  
  todoText.append(value)
  todoItem.appendChild(todoText)
  todoItem.appendChild(checkbox)
  todoItem.appendChild(todoDelete)
  


  return todoItem

}
function updateCountSpan(newValue) {
  let countSpanValue = Number(itemCountSpan.innerText)


  if (isNaN(countSpanValue)) return


  itemCountSpan.innerText = String(countSpanValue + newValue)




}
function updateCheckedCountSpan(newValue) {

  let uncheckedCountSpanValue = Number(uncheckedCountSpan.innerText)
  
  if (isNaN(uncheckedCountSpanValue)) return
  
  uncheckedCountSpan.innerText = String(uncheckedCountSpanValue + newValue)


}
function changeCheckBox() {
  if(this.checked) {
    updateCheckedCountSpan(-1)
  }else {
    updateCheckedCountSpan(1)
  }

}
function deleteTodo() {
  const checkbox = this.parentNode.childNodes[1]
  console.log(checkbox.checked)
  if(!checkbox.checked)
    updateCheckedCountSpan(-1)
 
  this.parentNode.remove()
  updateCountSpan(-1)
  
}

function newTodo() {


  const todoItem = createTodoItem("fuck you !")
  list.appendChild(todoItem)
  updateCountSpan(1)
  updateCheckedCountSpan(1)

}
