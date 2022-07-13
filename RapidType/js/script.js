const typingText = document.querySelector(".typing-text p");
inpField = document.querySelector(".wrapper .input-field")

let charIndex = 0;


function randomParagraph(){
    //getting random numbers 
    let randomIndex = Math.floor(Math.random() * paragraphs.length);
    //getting random paragraphs 
    paragraphs[randomIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    //focusing input field on keydown or click
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span")
    let typedChar = inpField.value.split("")[0]
    if (characters[charIndex] === typedChar){
        //if user types the correct thing then it'll add correct
        characters[charIndex].classList.add("correct");
    } else {
        //if user types the correct thing then it'll add incorrect
        characters[charIndex].classList.add("incorrect");
    }
    charIndex++; //add the amount of correct and incorrect character
}


randomParagraph();
inpField.addEventListener("input" , initTyping)