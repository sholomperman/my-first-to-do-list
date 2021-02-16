let addToDoButton = document.querySelector("#addToDo")
let toDoContainer = document.querySelector("#toDoContainer")
let inputField = document.querySelector("#inputField")



function makeAList(){
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

    const even = document.querySelectorAll(".paragraph-styleing:nth-child(even)")
    even.forEach(i => {
        i.style.backgroundColor = "lightgreen";
    });
}

window.addEventListener("keyup", checkKeyPress,)


function checkKeyPress(e) {
    if (e.keyCode == "13"){
        makeAList()
    }
}

addToDoButton.addEventListener("click", ()=>{
    makeAList()
})

