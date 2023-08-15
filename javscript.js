//Using 'const' instead of 'let' for variables that don't change.
const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = (new Function('return ' + string))() ||"";
                input.value = string;
            } catch (error) {
                // Handle the error gracefully if the expression is invalid
                input.value = 'Error';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})