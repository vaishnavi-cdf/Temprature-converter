const ferinput = document.getElementById("box-2-input");
const celinput = document.getElementById("box-1-input");
const submitbutton = document.getElementById("submit-button");
const box1heading = document.getElementById("box-1-heading");
const box2heading = document.getElementById("box-2-heading")
submitbutton.addEventListener("click", ()=>{
    // const fahrenheit=parseFloat(ferinput.value);
    const celvalue = celinput.value;
    const fervalue = ferinput.value;
    console.log(celvalue);
    console.log(fervalue);
    converttemp(celvalue,fervalue);
})
function converttemp(celvalue,fervalue){
    if(celvalue!=""){
        box1heading.innerHTML = "Fahrenheit temperature"
        const toferanite = (celvalue*9/5)+32;
        console.log(toferanite);
        celinput.value = toferanite;
    }
    if(fervalue!=""){
        box2heading.innerHTML =" Celsius 1temperature";
        const tocelcious = (fervalue-32)*5/9;
        console.log(tocelcious);
        ferinput.value = tocelcious;
    }

}