//false operators:
// In JS, there are 5 types of operators that are false: 0, "", undefined, null and NaN

//Boolean Logic

// const hasDriverLicence = true;  //A
// const hasGoodVision = false;  //B
// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);
// console.log(!hasDriverLicence);

// if(hasDriverLicence && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive!')
// }

//Task

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy");
} else {
    console.log("Koalas win the trophy");
}