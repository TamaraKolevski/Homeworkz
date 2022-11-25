// Имате две низи:
// var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
// var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
// направете нова низа во која што ќе ги ставите сите имиња кој двете низи ги делат (Jill, Kate)

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var _partFollowers = ["Kate", "Jill"];

for (var i = 0; i < JohnFollowers.length; i++) {
}
for (var j = 0; j < JaneFollowers.length; j++) {
}
if (JohnFollowers[i] === JaneFollowers[j]) {
}
console.log(_partFollowers);

// 2. Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
// output во конзолата :
// #
// ##
// ###
// ####
// #####
// ######

var hashtag = "";
var Mario_tower = "#";
for (var i = 0; i < 6; i++) {
    hashtag += Mario_tower;
    console.log(hashtag);
}


// 3. Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18")
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

var _numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = 0;
for (var i = 0; i < _numbers.length; i++) {
    for (var j = 0; j < _numbers.length; j++) {
        result = _numbers[i] * _numbers[j];
        console.log(`${_numbers[i]} * ${_numbers[j]} = ${result}`);
    }
 }