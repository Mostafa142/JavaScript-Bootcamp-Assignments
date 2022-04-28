function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        zName = zName.split(" ");
        return `${zName[0] + " " + zName[1][0].toUpperCase()}.`
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        return ` Your Age Is ${zAge.split(" ")[0]},`
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry[0] + zCountry[1].toUpperCase()}`
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return namePattern(zName) + ageWithMessage(zAge) + countryTwoLetters(zCountry);
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



//   ________________________________


var itsMe = () => {
    return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function



//   ________________________________




var urlCreate = (protocol, web, tld) => {
    return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



//   ________________________________



checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(3000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


//   ________________________________


function specialMix(...data) {

    let result = 0;
    let calc = 0;

    for (let i = 0; i < data.length; i++) {


        typeof data[i] === "boolean" ? result += data[i] : !isNaN(parseInt(data[i])) ? result += parseInt(data[i]) : calc += 1

        calc === data.length ? result = `All Is Strings` : undefined;



    }
    return result
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


