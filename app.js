// .................................DATE METHODS(CHAPTERS 31-34)...........................................



// var a = new Date();
// console.log(a);


// var b = ["January","February","March","April","May","June","July","August","September","October","November","December"]

// alert("Current Month =  " + b[a.getMonth()])


// var b = a.toDateString();
// var c = b.slice(0,3);
// console.log(c)


// var d = a.getDay();
// console.log(d);

// if (d === 0 || d===6){
//     alert("It's Funday")
// }
// else{
//     alert("Working Day")
// }


// var e = a.getDate();
// console.log(e);
// if(e > 15 && e <=31){
//     alert("Last days of the month")
// }
// else if (e <= 15 && e>0){
//     alert("First fifteen days of the month")
// }


// var d = a.getTime();
// console.log(d);
// console.log(Math.floor(d /  60000))
// document.write("Current Time " +a + "<br>" + "Elapsed miliseconds since January-01-1970: " + d + "<br>" + "Elapsed Minutes since January-01-1970 : " + Math.floor(d /  60000))


// var e = a.getHours();
// console.log(e);
// if(e > 12 && e <=24){
//     alert("It's PM")
// }
// else if (e >= 0 && e <=12){
//     alert("It's AM")
// }



// var a = new Date();
// console.log(a)

// a.setMonth(11),a.setDate(31), a.setHours(00), a.setMinutes(00), a.setSeconds(00);
// console.log(a)


// var a = new Date()
// console.log(a);
// var b = new Date("06/18/2015");
// console.log(b);
// var c = a.getTime() - b.getTime();
// console.log(c);
// var d = c/(1000 * 3600 * 24);
// console.log(d);
// var e = Math.round(d);
// console.log(e)

// document.write(e + " Days have passed since 1<sup>st</sup> Ramadan, 2015");



// var a = new Date();
// console.log(a);
// var b = new Date("01/01/2015");
// console.log(b);
// var c = a.getTime() - b.getTime();
// console.log(c);
// var d = c/ 1000;
// console.log(d)

// document.write("On reference Date " + a + " , " + d + " seconds had passed since beginning of 2015");



// var a = new Date();
// console.log(a);

// var b = new Date();
// b.setHours(b.getHours()+1);
// console.log(b);

// document.write("Current Date : " + b + "<br>" + "1 hour ago, it was : " + a)


// var a = new Date();
// console.log(a);
// var b = new Date();
// b.setFullYear(b.getFullYear()-100);
// console.log(b);

// alert("Current Date : " + a);
// alert("100 years back it was : " + b)



// var a = new Date();
// var b = a.getFullYear();
// console.log(b);
// var c = parseInt(prompt("Enter your age"));
// var d = b-c;
// alert("Your age is " + c + "\n" + "Your birth Year is "  + d);



// var a = "ABC Customer"
// var date = new Date();
// var b = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var units = 450;
// var charges = 17;
// var lateCharges = 350;

// document.write("<h1>K-ELECTRIC BILL</h1> Customer Name : " + a + "<br>" + "Month : " + b[date.getMonth()] + "<br>" + "Number of units : "+ units +"<br>" + "Charges per unit : " + charges + "<br>" + 
// "<br> <br> Net Amount Payable in Due Date : " + units*charges + "<br>" + "Late Payment Charges : " +  lateCharges + "<br>" +"Gross Amount Payable (after Due Date) : " + (units*charges+lateCharges) );









// ......................................FUNCTION(CHAPTERS 35-38)...........................................




// function currentDate (){
//     a = new Date()
//     alert(a)
// }

// currentDate()



// function fullName(){
//     var a = prompt("Enter your First Name")
//     var b = prompt("Enter your Last Name")
//     var c = a + " " + b
//     alert(c)
// }

// fullName()



// function add(){
//     var a = parseFloat(prompt("Enter any number"))
//     var b =  parseFloat(prompt("Enter any number"))
//     var c = a+b
//     alert(c)
// }

// add()




// function cal(num1 , operator ,num2){
//     if(operator === "+"){
//         return num1 + num2
//     }
//     else if (operator=="-"){
//         return num1-num2
//     }
//     else if (operator=="*"){
//         return num1*num2
//     }
//     else if (operator=="/"){
//         return num1 / num2
//     }
//     else{
//         alert("Please Enter Correct Operator")
//     }

// }

// var a = cal(parseFloat(prompt("Enter First Number")), prompt("Enter Operator +,-,*,/","+"), parseFloat(prompt("Enter Second Number")))
// alert(a)



// function square(a){
//     var b = a*a;
//     return b
// }
// var c = square(prompt("Enter any number"));
// alert(c)



// function fact(number){
//     factorial = 1;
//     if(number>1){
//         for (i =2;i<=number;i++)
//         factorial = factorial*i
//     }
//     return factorial
// }

// var a = fact(parseInt(prompt("Enter any number")));
// alert(a)



// function count(){
//     var num1=parseFloat((prompt("Enter beginning number")));
//     var num2=parseFloat((prompt("Enter ending number")));

//     if(num1 < num2){
//         for (i=num1;i<=num2;i++)
//         document.write(i + "<br>")
//     }
//     else{
//         alert("Ending number is smaller than beginning number please enter numbers in order")
//     }
// }
// count()
  


// function cal(base,per){
//     var base = parseFloat(prompt("Enter base"));
//     var per  = parseFloat(prompt("Enter perpendicular"));
//     var hyp = square()
//     function square(){
//          var a = Math.sqrt((base*base) + (per*per)) 
//          return a
//     }

//     return hyp

// }

// var a = cal();
// alert("Hypotenuse of a right angle triangle is : " + a)





// function area(width,height){
//     var a = width*height
//     return a
// }
// var b = area(prompt("Enter width"),prompt("Enter height"));
// alert(b)


// function palindrome(a) {
//     var rep = /[\W_]/g;
//     var b = a.toLowerCase().replace(rep, '');
//     var c = b.split('').reverse().join(''); 
//     return c === b;
//   }

// var d = palindrome(prompt("Enter to check whether it's a palindrome or not"));
// alert(d)



// function capitalizeWord(words) {
//     var separateWord = words.toLowerCase().split(' ');
//     for (var i = 0; i < separateWord.length; i++) {
//        separateWord[i] = separateWord[i].charAt(0).toUpperCase()+separateWord[i].substring(1);
//     }
//     return separateWord.join(' ');
//  }

//  var a = capitalizeWord(prompt('Enter any word'));
//  alert(a)




// function longestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }

// var a = longestWord(prompt('Enter any word'));
// alert(a)




// function letteroccur(word,letter){
//     var a = word.toLowerCase();
//     var b = letter.toLowerCase()
//     var c = 0;
//     for (i = 0;i<a.length;i++){
//         if (a.charAt(i)==b){
//             c+=1;
//         }
//     }
//    return c 

// }

// var a = letteroccur(prompt("Enter any word"),prompt('Enter letter'));
// alert(a)



// function cicrumofCircle(radius){
//     var a = 2*radius*(22/7)

//     return a

// }
// var a = cicrumofCircle(parseFloat(prompt('Enter radius of a circle')));
//  a = a.toFixed(2)
// alert("The circumference is : " + a)




// function areaofCircle(radius){
//     var pai = 22/7;
//     var a = pai*radius*radius
//     return a
// }

// var a = areaofCircle(parseFloat(prompt('Enter radius of a circle')));
// a = a.toFixed(2)
// alert("The area of a circle is : " + a)






// .........................FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS(CHAPTERS 38 -42).................. 




// function power (a,b){
//     var c = Math.pow(a,b)
//     return c 
// }
// var a = power(parseInt(prompt('Enter any number')),parseInt(prompt('Enter Power of that number')));
// alert(a)



// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

// var a = leapyear(prompt('enter year'));
// alert (a)



// function areaofTriangle(){
//         var a = parseFloat(prompt("Enter a"));
//         var b = parseFloat(prompt("Enter b"));
//         var c = parseFloat(prompt("Enter c"));
//         var d =  ( a + b + c ) / 2;
//         var e =  Math.sqrt(d*((d-a)*(d-b)*(d-c)))
//         return e
// }
// var x = areaofTriangle();
// alert(x)


// function mainFunc(){
//     var a = parseFloat((prompt('Enter numbers of first subject max 100')));
//     var b = parseFloat((prompt('Enter numbers of second subject max 100')))
//     var c = parseFloat((prompt('Enter numbers of third subject max 100')));
//     var z = a+b+c;
//     var e = 300;
//     function avg(){
//         var d = (z)/3
//         alert("Avg marks is : "+ d)
//         return d
        
//     }
//     var x = avg()
//     function per(){
//         var y = (z/e)*100
//         alert('Percentage : ' + y)
//         return y
//     } 
//     var w = per()
//     return w

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
// }
// var a = mainFunc()
// console.log(a)                                        




// function ind () {
//     var word = prompt('Enter any word');
//     var character = prompt('Enter character to find the Index of it')

//     for (i = 0; i < word.length; i++) {
//       if (word[i] === character) {
//         return i;
//       }
//     }
  
//     return -1;
// }
// var a = ind();
// alert(a)




// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// var a = disemvowel(prompt('Enter sentence'));
// alert(a)






// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());





// function distance(){
//     var a = parseFloat(prompt('Enter distance between two cities in Km'));
//     function meter(){
//         var b = a*1000;
//         alert('Distance in meters is : ' + b)
//         return b
//     }
//     function feet(){
//         var c = a*3281;
//         alert('Distance in feet is : ' + c)
//         return c 
//     }
//     function inches(){
//         var d = a*39370;
//         alert('Distance in inches is : ' + d);
//         return d 
//     }
//     function centi(){
//         var e = a*100000;
//         alert('Distance in centimeter is : ' + e)
//         return e 
//     }
//     meter();
//     feet();
//     inches();
//     centi()
//     return a

// }
// var a = distance()
// console.log(a)




// .................................one question remaining...............................



// function cash(){
//     var a = parseInt(prompt('Please Enter Amount for Withdraw : '));
//     document.write('You will have ' + Math.floor(a/100) + " hundred Notes and " + Math.floor((a%100)/50)+ " Fifty Notes and " + (((a%100)%50)/10)+ "Ten notes <br>" + "Remaining amount is : " + (((a%100)%50)%10)); 


// }
// cash()


