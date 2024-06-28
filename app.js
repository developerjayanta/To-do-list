let input = document.querySelector(".main #input-box");
let btn = document.querySelector("#btn");
let newul = document.querySelector(".ullist");

console.log(input);

btn.addEventListener("click", ()=>{
    if(input.value === ''){
        alert("please enter any task");
    } else {
        let newtask = document.createElement("li");
        newtask.innerHTML = input.value;
        newul.appendChild(newtask);
       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
       newtask.appendChild(span);
    }
   input.value = "";
   savedata();
})

newul.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", newul.innerHTML);
}

function showTask(){
    newul.innerHTML = localStorage.getItem("data");
}
showTask();