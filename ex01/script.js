let rulescontainer = document.querySelector(".rulescontent");
let unorderlist = document.createElement("ul");
let button = document.querySelector("#rulesbutton");
console.log(unorderlist);
let selectedUl =  rulescontainer.appendChild(unorderlist);

button.addEventListener("click", function(){
    fetch("becode.json")
    .then(response => response.json())
    .then((json) => {   
        for(i=0;i<4;i++){
            const ruleslist = document.createElement("li");
            console.log(ruleslist.textContent = json[i]);
            unorderlist.appendChild(ruleslist)
        }
    });
});
