// const str = ["happy ending", 'the end']; 
// const targetLetter = "n";
// let count = 0;
// let char = str[1];
// // console.log(char);
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === targetLetter) {
//         count++;
//     }
// }

// console.log(`${targetLetter} found ${count} times in ${str}`)
// console.log('n is:', count)


// task 1 
const nam= 'ononno';
const target = 'o';

let total= 0;
for(i = 0; i < nam.length; i++){
    if(nam[i] === target){
        total=total+1;
    }
}
// console.log(total);

// task 2 

const cheakName = 'Amaar Nam Arfin';
const target1= 'a';
const target2= 'A';

let totalCount= 0 ;
for(i=0; i< cheakName.length; i++){
    if (cheakName[i]=== target1){
        totalCount++;
    }
    else if (cheakName[i]=== target2){
        totalCount++;
    }
}
console.log(`ei name e total A ba a ache ${totalCount} bar`)
