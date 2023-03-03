let input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const notescontainer =document.querySelector(".inputlist");

btn.addEventListener("click", function(e){
    let noteItem = input.value;
    if(noteItem){
    const li = document.createElement("li");
    li.textContent = noteItem;
    notescontainer.appendChild(li);
    input.value = "";
    }
})