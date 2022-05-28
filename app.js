console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let image;
let input;

let button = document.getElementById("button");

button.addEventListener("click", fetchRequest)

//button.addEventListener("keypress", fetchRequest)
//want to add enter key event, unsure exactly how. 
        

image = document.querySelector("img")
input = document.querySelector("#generate")

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate"
const GIPHY_KEY = "0jqBxRw7Aj3jYeVBN4T6VF80r91rWLFY";

function fetchRequest(){
    let searchTerm = input.value //DTo: data transfer object
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`)
        .then((result) =>{
            return result.json();
        })
        .then((data) => {
            image.src = data.data.images.original.url;
        })
        .catch((err) => {
            console.error(err);
        })

}