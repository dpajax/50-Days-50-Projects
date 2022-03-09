const cards = document.querySelectorAll(".card");

const activeCard = document.querySelector(".active");



// cards.forEach((element)=>{
//     element.addEventListener("click", ()=>{
//         console.log(element.innerHTML + "was clicked")
//     })
// })  logging for each div of class .card

cards.forEach((element)=>{
    element.addEventListener("click", ()=>{
        cards.forEach((item)=>{
            item.classList.remove("active");
        })
        element.classList.add("active")
    })
})

// console.log("All cards:", cards)
// console.log("Active Card",activeCard)