var button = document.getElementById('button');
var input = document.getElementById('input');  
// input 수정
var list = document.getElementById('list');
var cnt = 0;  

button.addEventListener('click', clickButton);

function clickButton() {
    var todoelement = document.createElement('li');
    todoelement.setAttribute("id", "li"+cnt);
    todoelement.innerHTML = input.value;
    todoelement.innerHTML += "<button type='button' onclick='removetodolist("+cnt+")'>삭제</button>";
    list.appendChild(todoelement);
    cnt++;

    todoelement.addEventListener('click', function(){   
        todoelement.style.textDecoration = "line-through";
    })
    todoelement.addEventListener('dblclick', function(){
        list.removeChild(todoelement);
    })
}

function removetodolist(todoId) {
    var todoList = document.getElementById('li'+cnt);
    list.removeChild(todoList);
}

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});

// button.addEventListener('click', clickButton);

// function clickButton() {
//     var todoelement = document.createElement('li');
//     todoelement.setAttribute("id", "li"+cnt);
    
//     // 수정사항 1) 
//     const todoValue = input.value;
//     todoelement.innerHTML = "<span class='todo-text'>" + todoValue + "</span> ";
//     todoelement.innerHTML += "<input class='todo-input' value='" + todoValue + "'/> ";
//     todoelement.innerHTML += "<button type='button' onclick='modifytodolist("+cnt+")'>수정</button> ";
//     todoelement.innerHTML += "<button type='button' onclick='removetodolist("+cnt+")'>삭제</button>";
    
//     list.appendChild(todoelement);
//     cnt++;


// ...(생략)...


// // 수정사항 2) todo 리스트 수정 기능 
// // 함수연결은?
// function modifytodolist(todoId) {
//     const todoList = document.getElementById('li'+todoId);
//     const todoInput =  todoList.getElementsByClassName( 'todo-input')[0];
//     const todoValue =  todoList.getElementsByClassName( 'todo-text')[0];
    
//     todoValue.innerHTML = todoInput.value;
// }