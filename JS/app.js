// p4 part Create arrays for the lab first part in the javascript
const todoList = {
    todo: "clone repo for starter code", status: "completed",
}
console.log(todoList)

const secondtodoList = {
    secondtodo: "Linking HTML file to the Css file", status:"started",
}
console.log(secondtodoList)

let completedTodos =[]

// p5 for adding todolist object status point
let newtodoList = ["todo = clone repo for starter code", "status = completed"];

let todoListLength = todoList.length;


for(let i = 0; i < todoList.length; i++){
    let item = newtodoList[i];

    if(newtodoList[i] <= 0) {
        todoListLength = completed;
        break;
    }
}
