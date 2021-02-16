let addToDoButton = document.querySelector("#addToDo")
let toDoContainer = document.querySelector("#toDoContainer")
let inputField = document.querySelector("#inputField")



addToDoButton.addEventListener("click", function(){
    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styleing")
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";


    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })

})








// console.log(inputField)
