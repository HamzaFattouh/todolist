let form = document.querySelector('.taskform');
let tasklist = document.querySelector('.tasklist');
form.onsubmit = function(e){
    e.preventDefault();
    let elements = e.target.elements;
    let name = elements["newtask"].value;
    tasklist.innerHTML += '<div class="task"><input type="checkbox" name="'+ name +'" onchange="done(this)" value="checked"/><label for="'+ name +'">'+ name +'</label></div>'
    document.querySelector('.newtasktext').value = "";
}

const done = function(checkbox){
    let label = checkbox.nextElementSibling;
    if(checkbox.value == "checked"){
        if(label.style.textDecoration == "line-through"){
            label.style.textDecoration = "none";  
        }
        else{
            label.style.textDecoration = "line-through";
        }
    }
    
}