const container = document.querySelector(".container")

const careers = ["student", "dreamer" ,"web developer", "content Creator ","Freelancer"];

let careerIndex = 0;
let characterIndex = 0;
updateText();

function updateText(){
    container.innerHTML = `
    <h1>I am a ${careers[careerIndex].slice(0,characterIndex)} </h1>
    `;
    characterIndex++;
    if(characterIndex === careers[careerIndex].length){
        
    }
    setTimeout(updateText, 400);
}