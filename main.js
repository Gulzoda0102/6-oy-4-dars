const from = document.getElementById("form");
const input = document.getElementById("input");
const btnMinus = document.getElementById("minus");
const btnPlyus = document.getElementById("plyus");
const soz = document.getElementById("text");


let count = 0;
from.addEventListener("submit", function(refreshBolma){
    refreshBolma.preventDefault();

    const inputningQiymati = Number(input.value);

    console.log(typeof inputningQiymati);

    count = inputningQiymati
    soz.textContent = count;
    // soz.textContent = inputningQiymati;

    input.value = "";
    
})
btnPlyus.addEventListener("click", function() {
    count++;
    console.log(count);
    soz.textContent = count;
    
})
btnMinus.addEventListener("click", function() {
    count--;
    console.log(count);
    soz.textContent = count;
})

colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value;
    soz.style.color = colorPicker.value;
});
// from.addEventListener("submit" ,(gulzoda)=>{
// gulzoda.preventDefault();




// const inputningQiymati = input.value;

// console.log(inputningQiymati);

// input.value = "";

// })


// const knopka = document.getElementById("btn")

// console.log(knopka);

// knopka.addEventListener("click", function(e) {
//     console.log("BUtton bosildi");
//     const newTag =  document.createElement("h1")
//     newTag.textContent = "Bosildi";
//     document.body.appendChild(newTag);

    

// }