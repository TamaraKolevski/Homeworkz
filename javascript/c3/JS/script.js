// THE HELLO WORLD EXERCISE (if statement)
// Create a variable called "code", that will hold a string (for example: "es" or "de" or "en")
// Based on the value of the variable "code", output in the console: "Hello World" in the language that the code is written. If it's es, write Hello World in Spanish. If it's de, write it in German... etc.

var code = "de";

if(code == "en") {
    console.log("Hello World English ");
} else if (code == "fr") {
    console.log("Bonjour Monde Francais ");
} else if(code == "de") {
    console.log("Hallo Welt in German ");
};


// SEASONS (if statement)
// Check if the season is Autumn, Winter, Spring or Summer. If the user types (via prompt):
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// Output the results in the console

var season=prompt("Enter a month");

if (season == "September" || season == "september" || season == "October" || season == "october" || season == "November" || season == "november") {
    console.log("The season is Autumn");
}
else if (season == "December" || season == "december" || season == "January" || season == "january" || season == "February" || season == "february") {
    console.log("The season is Winter"); 
}
else if (season == "March" || season == "march" || season == "April" || season == "april" || season == "May" || season == "may") {
    console.log("The season is Spring");
}
else if (season == "June" || season == "june" || season == "July" || season == "July" || season == "August" || season == "august") {
    console.log("The season is Summer");
}

// MUSICIANS (switch statement)
// Create a variable called "band_members_num" and store a number from 1 to 10 in it.
// Based on the number, output in the console what kind of a music group it is: If the number is 3 the output is "This band is a trio" etc...

var _band_members_num = "3"

switch (_band_members_num) {
    case "1" :
    console.log("This band is a 1");
        break;
    case "2" :
    console.log("This band is a 2");
        break;
    case "3" :
    console.log("This band is a 3");
        break;
    case "4" :
    console.log("This band is a 4");
        break;
    case "5" :
    console.log("This band is a 5");
        break;
    case "6" :
    console.log("This band is a 6");
        break;
    case "7" :
    console.log("This band is a 7");
        break;
    case "8" :
    console.log("This band is a 8");
        break;
    case "9" :
    console.log("This band is a 9");
        break;
    case "10" :
    console.log("This band is a 10");
        break;
    default: console.log("Unknown music group");

}




