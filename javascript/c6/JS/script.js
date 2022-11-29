
// 1.Напишете празен p таг во HTML и со помош на Javascript внесете краток Lorem ipsum текст во него

var paragraph = document.getElementsByTagName("p");
console.log(paragraph);

 // 2.Во HTML креирајте копче (-) па потоа span со вредност 0 и уште едно копче (+) --> исто како на сликата
 // На клик на (-) бројката да се намалува
 // На клик на (+) бројката да се зголемува
 // Бројката не смее да отиде под нула и над десет

 var button_minus = document.querySelector("minus");
 var counter = document.querySelector("counter");
 var button_plus = document.querySelector("plus");
 counter = 0;

 console.log(button.id);

 button_minus.addEventListener("click", function(){
     counter -= 1;
     if (counter <= 0){
         counter = 0;
     }
     counter.innerHTML = counter;
 });


 button_plus.addEventListener("click", function(){
    counter += 1;
    if(counter >= 10){
        counter = 10;
    }
    counter.innerHTML = counter;
});


 // 3.Во HTML напишете празна ul (unordered) list --> исто како на сликата
// во Javascript пополнете ја со имиња на пет програмски јазици (по избор)

var list = document.getElementsByClassName("list-item");
var pro_language = ["Python", "Go", "Javascript", "Java", "C"];
console.log(list);

for(var i=0; i < list.length; i++) {
    list[i].innerHTML = pro_language[i];
}

4.Во HTML линкувајте слика со помош на img тагот
на клик на сликата, сменете го src-от во некоја друга слика

var button = document.querySelector("button");
var image = document.getElementById("image");

button.addEventListener("click", function(){
    image.src = "https://cdn.allthings.how/wp-content/uploads/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo-759x427.png?width=800"});

console.log("images");







