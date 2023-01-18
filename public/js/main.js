let button = document.querySelectorAll("input");

button[0].addEventListener('click',()=>{
    document.querySelector("ul").firstChild.remove();
})

button[1].addEventListener('click',()=>{
    document.querySelector("ul").lastChild.remove();
})

button[2].addEventListener('click',()=>{
    let li = document.querySelector("ul").children;
    let rand = Math.floor(Math.random()*li.length);

    li[rand].remove();
})


let new_li = document.createElement("li");
new_li.innerText = "nouveau li !";

let les_li = document.querySelector("body").children[1].querySelectorAll("li");
console.log(les_li);

button[3].addEventListener('click',()=>{
    les_li[1].before(new_li);
    les_li[1].remove();
})




let bis_li = document.createElement("li");

button[5].addEventListener('click',()=>{
    bis_li.innerText = document.getElementById("replaceValue").value;

    les_li[2].before(bis_li);
    les_li[2].remove(); 
})