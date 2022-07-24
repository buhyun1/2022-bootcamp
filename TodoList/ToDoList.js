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

// view  공부
