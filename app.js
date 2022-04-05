console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let button = document.getElementById("button");

button.addEventListener("click", fetchRequest)

function fetchRequest(){
    let image = document.querySelector("img")
    let input = document.querySelector("#generate").innerHTML
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=YOURAPIKEY&s=")
        .then((result) =>{
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        })

}