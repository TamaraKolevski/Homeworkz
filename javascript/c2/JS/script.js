// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa


    var favoriteRecipe = {
    title:  "Pancakes",
    servings: 1,
    ingredients: ["egg" , "flour" , "water" , "sugar " ]
};

    console.log(favoriteRecipe);  
    console.log(favoriteRecipe.title);
    console.log(favoriteRecipe.servings);
    
    
    var ingredients = [
        "egg" , "flour" , "water" , "sugar" 
    ];

    console.log(ingredients[0]);
    console.log(ingredients[1]);
    console.log(ingredients[2]);
    console.log(ingredients[3]);



// Create an array called programming languages (remember, variable names can't have empty spaces between words) and store 8 programming languages as strings.
// In the console, output the length of the array
// Remove the last item of the array
// Remove the third item of the array, and in its position, store another programming language (as a string)


var programming_languages = [

    "Javascript" , "Python" , "Go" , "Java" , "Kotlin" , "PHP" , "C#" , "Swift"
]

    console.log(programming_languages);
    console.log(programming_languages.length);
    var last_item = programming_languages.pop();
    console.log(programming_languages);
    var new_lang = programming_languages.splice(2,1, "SQL");
    console.log(programming_languages);
