const container = document.querySelector(".container")

const careers = ["student", "dreamer" ,"web developer", "content Creator ","Freelancer"];

let careerIndex = 0;

container.innerHTML = `
    <h1>I am a ${careers[careerIndex]}</h1>
`;