//1/

// let button = document.querySelector("button");
// console.log(button);

// button.addEventListener("click", () => {
// fetch('https://api.chucknorris.io/jokes/random')
//     .then((response) => response.json())
//     .then((json) => {
//             let informationbox = document.createElement("div");
//             document.body.appendChild(informationbox);
//             let paragraph= document.createTextNode(json.value);
//             informationbox.appendChild(paragraph);
//         })
// });

let Categorieslist = document.createElement("select");
document.body.appendChild(Categorieslist);
function createCategories(){
    let optionNone = document.createElement("option");
    Categorieslist.appendChild(optionNone);
    optionNone.innerHTML = "none"
    fetch('https://api.chucknorris.io/jokes/categories')
        .then((response) => response.json())
        .then((json) => {
        for(i=0;i<10;i++){
            const options = document.createElement("option");
            options.innerHTML= json[i];
            console.log(options.value);
            Categorieslist.appendChild(options);
        }
        });
    
}
createCategories();

select.add



