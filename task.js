const str = ["happy ending", 'the end']; 
const targetLetter = "n";
let count = 0;
let char = str[1];
console.log(char);
for (let i = 0; i < str.length; i++) {
    if (str[i] === targetLetter) {
        count++;
    }
}

// console.log(`${targetLetter} found ${count} times in ${str}`)
// console.log('n is:', count)