//Name: Syed Muhammad Hammad Ahmed

//8-11_ConcatenatingStrings_Prompts_IFStatements_ComparisonOperators pdf
//1)
// var name1=prompt("Enter Your Name: ")
// alert("Hi, "+name1)

//2)
// var city = prompt("Enter Your city: ")
// if (city == "Karachi" || city == "karachi") {
//     alert("Welcome To The City of Lights")
// }
// else {
//     document.write("Welcome")
// }

//3)
// var gen = prompt("Enter Your Gender")
// if (gen == "male" || gen == "Male") {
//     alert("Good Morning Sir....")
// }
// else {
//     alert("Good Morning Maam....")

// }

//4)
// var color=prompt("Enter a Color: ")
// if(color=="red")
// {
//     alert("vehicles must stop")
// }
// else if(color=="green")
// {
//     alert("vehicles can move now")
// }
// else if(color=="yellow"){
//     alert("vehicles should get ready to move")
// }

//5)
// var max_age = prompt("Enter Max Age")
// var curr_age = prompt("Enter Current Age")
// if (curr_age <= max_age) {
//     alert("You are welcome")
// }
// else {
//     alert("You Are Not Allow")
// }

//6)
// var fuel=+prompt("Enter Remaining Fuel In Car (In Liter): ")
// var remian=0.25
// if(fuel<remian)
// {
// alert("Please refill the fuel in your car")
// }
// else{
//     alert("Your tank is full")
// }

//7)
// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }

//Yes Displayed

//8)
// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
//Yes Displayed

//9)
// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }
// Yes displayed

//10)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// Yes displayed

//11)
// if (true){
//     alert("True");
//    }
//    if (false){
//     alert("False");
//    }// Yes displayed
// if("car" < "cat"){
//     alert("car is smaller than cat");
//    }
// Yes displayed


//12)
// var item1 = prompt("Name Of Item: ")
// var item2 = prompt("Name Of Item2:")

// var price1 = +prompt("Enter Price of Item1:")
// var price2 = +prompt("Enter Price of Item2:")

// var quantity1 = +prompt("Enter Quantity of Item1:")
// var quantity2 = +prompt("Enter Quantity of Item2:")

// var charges = +prompt("Enter Shipping Charges: ")

// var total1 = price1 * quantity1
// var total2 = price2 * quantity2

// var total = total1 + total2
// var grand_total=total+charges
// var val = 2000

// document.write("Price of " + item1 + " is: " + price1)
// document.write("<br>Price of " + item2 + " is: " + price2)
// document.write("<br>Quantity of " + item1 + " is: " + quantity1)
// document.write("<br>Quantity of " + item2 + " is: " + quantity2)
// document.write("<br><br>Shipping Charges " + charges)
// document.write("<br>Total Cost of Your Order is " + grand_total)

// if (grand_total > val) {
//     var discount = grand_total / 10
//     var discount_bill = grand_total - discount
//     document.write("<br>Discounted Price is " + discount_bill)
// }

//13)
// let secretnumber = 4;
// let userguess = +prompt("Guess the secret number from (1-10) : ");

// if (userguess === secretnumber) {
//     document.write("Bingo! Correct answer");
// } else if (userguess === secretnumber + 1) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Fail, try again!");
// }

//14)
// var num=+prompt("Enter A Number:")
// if(num%3==0){
//     document.write("Number Is Divisble by 3")
// }
// else{
//     document.write("Number Is Not Divisble by 3")

// }

//15)
// var name1=prompt("Enter Team Name: ")
// var name2=prompt("Enter Team2 Name: ")


// var score1=+prompt("Enter Score of Team1: ")
// var score2=+prompt("Enter Score of Team2: ")

// if(score1===score2){
//     document.write("Match Tie")
// }
// if(score1>score2)
// {
//     document.write(name1+" Won The Match")
// }
// if(score1<score2)
// {
//     document.write(name2+" Won The Match")
// }

//16)
// var string="Hammad"
// var num=10
// var boolean1=true;

// if(typeof string==="string")
// {
//     document.write(string+" Is A String <br>")
// }
// else{
//     document.write(string+" is not a string")
// }
// if(typeof num==="number")
// {
//     document.write(num+" Is A Number <br>")
// }
// else{
//     document.write(num+" Is not a Number <br>")
// }
// if(typeof boolean1==="boolean")
// {
//     document.write(boolean1+" Is A Boolean <br>")
// }else{
//     document.write(boolean1+" Is Not Boolean <br>")
// }

//17)
// var number1=+prompt("Enter A Number: ")

// if(number1%2==0)
// {
//     document.write("Number is Even")
// }
// else{
//     document.write("Number is Odd")

// }

//18)
// var temp = +prompt("Enter a Temperature: ")
// if (temp > 40) {
//     document.write("It is too hot outside.")
// }
// else if (temp > 30) {
//     document.write("The Weather today is Normal.")
// }
// else if (temp > 20) {
//     document.write("Today's Weather is cool.")
// }
// else if (temp > 10) {
//     document.write("OMG! Today's weather is so Cool.")
// }

//19)
// var num1 = +prompt("Enter a First Number: ")
// var num2 = +prompt("Enter a Second Number: ")


// var choice = prompt("Please enter operator (+, -, *, /, %)")
// switch (choice) {
//     case "+": {
//         var add = num1 + num2
//         document.write("<br>Addition: " + add)
//         break;
//     }
//     case "-": {
//         var Subtraction = num1 - num2
//         document.write("<br>Subtraction: " + sub)
//         break;
//     }
//     case "*": {
//         var mul1 = num1 * num2
//         document.write("<br>Multiplication: " + mul1)
//         break;
//     }
//     case "/": {
//         var divide1 = num1 / num2
//         document.write("<br>Divison: " + divide1)
//         break;
//     }
//     default:
//         output = 'Invalid operator';
// }

//20)
// var day=prompt("Enter A day: ")
// if(day=="monday"||day=="tuesday"||day=="wednesday"||day=="thursday"||day=="friday")
// {
//     document.write("“It's a week day")
// }
// else if(day=="saturday")
// {
//     document.write("It's weekend")
// }
// else if(day=="sunday")
// {
//     document.write("Yay! It's a holiday")
// }

//21)
// var score=+prompt("Enter a Score")
// if(score>50)
// {
// document.write("You are Pass")
// }
// else{
//     document.write("Try Again!!!")
// }

//22)
// var num1 = +prompt("Enter  number1")
// var num2 = +prompt("Enter  number2")

// if (num1 == num2) {
//     document.write("Both are equal Number "+num1+" and "+num2)
// }
// else if (num1 > num2) {
//     document.write("The Greater Number of " + num1 + " And " + num2 + " is " + num1)
// }
// else if (num2 > num1) {
//     document.write("The Greater Number of " + num1 + " And " + num2 + " is " + num2)
// }

//23)
// var lang_code = prompt("Enter Language Code: ")
// if (lang_code == "hu") {
//     document.write("Helló Világ")
// }
// else if (lang_code == "ur") {
//     document.write("ہیلو دنیا")
// }
// else if (lang_code == "fr") {
//     document.write("Olá Mundo")
// }
// else{
//     document.write("Hello World!!")
// }

//24)
// var num=+prompt("Enter a Number: ")
// if(num>=0)
// {
//     document.write("It is a positive number")
// }
// else
// {
//     document.write("it is a negative number")
// }

//25)
// var num = +prompt("Enter a Number: ")
// var Noun1 = prompt("Enter a Noun: ")

// var result = num + " " + Noun1
// document.write(result)



// 2 pdf if else else if 
//1)
// var num=+prompt("Enter A Number:")
// if(num%3==0){
//     document.write("Number Is Divisble by 3")
// }
// else{
//     document.write("Number Is Not Divisble by 3")

// }

//2)
// var num=+prompt("Enter A Number:")
// if(num%2==0){
//     document.write("Number is Even")
// }
// else{
//     document.write("Number is Odd")

// }

//3)
// var age=+prompt("Enter a Age: ")
// if(age>18)
// {
//     document.write("Old Enough")
// }
// else{
//     document.write("Too Young")
// }


//4)
// var name1=prompt("Enter a Name: ")
// if(name1=="hammad")
// {
//     document.write(name1+" Welcome")
// }

//5)
// var choice = +prompt("Press 1 to check given number is divisible by 3 or not  Enter your choice: ")
// switch (choice) {
//     case 1:
//         var num = +prompt("Enter A Number:")
//         if (num % 3 == 0) {
//             document.write("Number Is Divisble by 3")
//         }
//         else {
//             document.write("Number Is Not Divisble by 3")

//         }
//         break;
// }

//6)
// var input1 = prompt("Enter a string: ")
// if (input1 >= 'A' && input1 <= 'Z') {
//     document.write('Uppercase Letter');
// } else if (input1 >= 'a' && input1 <= 'z') {
//     document.write('Lowercase Letter');
// } else if (!isNaN(input1)) {
//     document.write('Number');
// } else {
//     document.write('Input is not a number, uppercase letter or lower case letter');
// }

//7)
// var num1 = +prompt("Enter a First Number: ")
// var num2 = +prompt("Enter a Second Number: ")


// var choice = prompt("Please enter operator (+, -, *, /, %)")
// switch (choice) {
//     case "+": {
//         var add = num1 + num2
//         document.write("<br>Addition: " + add)
//         break;
//     }
//     case "-": {
//         var Subtraction = num1 - num2
//         document.write("<br>Subtraction: " + sub)
//         break;
//     }
//     case "*": {
//         var mul1 = num1 * num2
//         document.write("<br>Multiplication: " + mul1)
//         break;
//     }
//     case "/": {
//         var divide1 = num1 / num2
//         document.write("<br>Divison: " + divide1)
//         break;
//     }
//     default:
//         output = 'Invalid operator';
// }

//8)
// var time = +prompt("Enter time: ")
// if (time >= 0000 && time <= 1159) {
//     document.write("Good Morining")
// }
// else if (time >= 1200 && time <= 1700) {
//     document.write("Good Afternoon");
// } else if (time >= 1800 && time <= 2359) {
//     document.write("Good Evening");
// } else {
//     document.write("Invalid Time");
// }

//9)
// var year = +prompt("Enter a Year ");

// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     document.write(year + " is a leap year");
// } else {
//     document.write(year + " is not a leap year");
// }

//10)
// var password=prompt("Enter a Password: ")
// var pass="Hammad"
// if(password=="")
// {
//     alert("Please Enter Password")
// }
// else if(password===pass)
// {
//     document.write("You Enter Correct Password ")
// }
// else{
//     document.write("Incorrect Password!!! ")
// }

//11)
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }
// else{
//     document.write("You Are Not Fahad")
// }

//12)
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     document.write(greeting)
// } else {
//     greeting = "Good evening";
//     document.write(greeting)
// }

//13)
// var num1 = +prompt("Enter  number1")
// var num2 = +prompt("Enter  number2")

// if (num1 == num2) {
//     document.write("Both are equal Number "+num1+" and "+num2)
// }
// else if (num1 > num2) {
//     document.write("The Greater Number of " + num1 + " And " + num2 + " is " + num1)
// }
// else if (num2 > num1) {
//     document.write("The Greater Number of " + num1 + " And " + num2 + " is " + num2)
// }


//14)
// var num=+prompt("Enter a numbher: ")
// if(num>0)
// {
//     document.write("Number is positive...")
// }
// else if(num==0)
// {
//     document.write("Given Number is equal to zero")
// }
// else{
//     document.write("Number is negative number......")
// }

//15)
// var curr_time=prompt("Enter Current Hour: ")
// if(curr_time>=6 &&curr_time<=9)
// {
//     document.write("Breakfast is served..")
// }
// else if(curr_time>=11&&curr_time<=13)
// {
//     document.write("Time for lunch..")
// }
// else if(curr_time>=17 &&curr_time<=20)
// {
//     document.write("It's dinner time")
// }
// else{
//     document.write("Sorry, you'll have to  wait, or go get a snack.")
// }

//16)
// var string="Hammad"


// if(typeof string==="string")
// {
//     document.write(string+" Is A String <br>")
// }

// else if(typeof string=="number")
// {
//     document.write(string+" Is A Number <br>")
// }

// else if(typeof string==="boolean")
// {
//     document.write(string+" Is A Boolean <br>")
// }
// else{
//     document.write(string+" Is Not Boolean <br>")
// }



//17)
// var input1 = prompt("Enter a charcter: ")

// if (input1 == "a" || input1 == "e" || input1 == "i" || input1 == "o" || input1 == "u") {
//     document.write("Given character is vowels...")

// }
// else {
//     document.write("Given Character is not vowels")
// }

// if (10 !== 8) {
//     document.write(true);
//   }

//18)
// var monthnumber = prompt("Please enter a month number: ");

// switch(monthnumber) {
//   case "1":
//     alert("January")
//     break;
//   case "2":
//     alert("February")
//     break;
//   case "3":
//     alert("March")
//     break;
//   case "4":
//     alert("April")
//     break;
//   case "5":
//     alert("May")
//     break;
//   case "6":
//     alert("June")
//     break;
//   case "7":
//     alert("July")
//     break;
//     case "8":
//         alert("August")
//       break;
//     case "9":
//         alert("September")
//       break;
//     case "10":
//         alert("October")
//       break;
//     case "11":
//         alert("November")
//       break;
//     case "12":
//         alert("December")
//       break;
//     default:
//         alert("Not a valid month number")
//       break;
//   }

//20)
// var age=+prompt("Enter a Age: ")


// if(age<18)
// {
//    document.write("Too Young")
// }
// else{
//     document.write("Old Enough")

// }


// 3rd pdf variable for strings

//1)
// var username
//2)
// var myname="Hammad Ahmed"

//3)
// var title
// title="Hello World"
// alert(title)

//4)
// var nam1=prompt("Enter user name: ")
// var age=+prompt("Enter Age:")
// var uni=prompt("Enter University: ")
// var disciplane=prompt("Enter a diciplane: ")


// alert(nam1)
// alert(age)
// alert(uni)
// alert(disciplane)

//5)
// var text = "pizza\npizz\npiz\npi\np"
// alert(text);

//6)
// var numChildren = 0;
// var partnerName = "";
// var geoLocation = "";
// var jobTitle = "";


// numChildren = prompt("How many children do you have: ");
// partnerName = prompt("What is your partner name: ");
// geoLocation = prompt("Where do you live: ");
// jobTitle = prompt("What is your job title:");

// alert("You will be a " + jobTitle + " in " + geoLocation + " and Married to " + partnerName + " With " + numChildren + " kids")



//7)
// var email=""
// var emailaddress="abc@xyz.com"
// var result=email+emailaddress
// alert(result)

//8)
// var book="A smarter way to learn JavaScript"
// alert("I am trying to learn form a book "+book)

//9)
// let name1 = 'Ali Khan';
// let age = 17;
// let university = 'SSUET';
// let course = 'Mobile & Cloud Computing, Module A';
// document.write('My name is ' + name1 + ', I am ' + age + ' years old. I study in ' + university + ' and I take ' + course + ' classes.')

//10)
// document.write("<h1>Yay!. I can write HTML Content Thorugh JAVASCRIPT</h1>")



//variable for numbers pdf

//1)
// var age
// age=17
// alert("I am "+age+" Year old")

//2)
// let visit = 10;
// alert("You have visited this site " + visit + " times");

//3)
// var year=2002
// document.write("My Birth Year is"+year)
// document.write("<br>Data type of My Birth Year is ",typeof(year))

//4)
// let visitorName = "John Doe";
// let productTitle = "T-shirt";
// let quantity = 5;
// alert(visitorName + " ordered " + quantity+ " " + productTitle + " on XYZ Clothing store.");

//4 variable name legal && illegal name pdf

//1)
// var a=5, b=10, c=15

//2 )
//Legal variables
// var myName;
// var _myName;
// var my_Name;
// var myName123;
// var $myName;

//Illegal variables
// var 1name;
// var 2myName;
// var #myName;
// var !myName;
// var my Name;

//3)
// document.write("<ol><h1>Rules for naming JS variable</h1><li>Variable names can only contain:letter , numbers ,underscores, and dollar signs.</li><li>Variables must begin with a letter, underscore or dollar sign</li><li>Variable names are case sensitive </li><li>Variable names should not be JS <u>keywords</u> </li> </ol>")


// 5_7 math experssion pdf

//1)
// var num1=+prompt("Enter a Number: ")
// var num2=+prompt("Enter a Number: ")
// var result=num1+num2
// document.write("The Sum of "+num1+" and "+num2+" is "+result)

//2)
// var num1=+prompt("Enter a Number: ")
// var num2=+prompt("Enter a Number: ")
// var result=num1-num2
// document.write("The Subtraction of "+num1+" and "+num2+" is "+result)

// var num1=+prompt("Enter a Number: ")
// var num2=+prompt("Enter a Number: ")
// var result=num1*num2
// document.write("The Multiplication of "+num1+" and "+num2+" is "+result)

// var num1=+prompt("Enter a Number: ")
// var num2=+prompt("Enter a Number: ")
// var result=num1/num2
// document.write("Remainder of Dividing "+num1+" and "+num2+" is "+result)

//3)
// var num
// document.write("Value after variable declaration is: "+ num)
// num=60
// document.write("<br>Initial value: "+ num)
// num++
// document.write("<br>Value after increment: "+ num)
// num=num+7
// document.write("<br>Value after adding 7: "+ num)
// num--
// document.write("<br>Value after decrement: "+ num)
// num%=3
// document.write("<br>The remainder is: "+num)


//4)

// var ticket = 600
// var ticketQuantity= +prompt("How many tickets do you want to purchase")
// var totalPrice=ticketQuantity*ticketPrice
// document.write("Total cost to buy "+ticketQuantity+" tickets to a movie is "+totalCost+" PKR")

//5)
// var num=+prompt("Enter a Number To Show its Muliplication Table: ")

// document.write("Multiplication Table of " + num+"<br>")
// for (let i = 1; i <= 10; i++) {
//     let result = num * i;
//     document.write("<br>",num," * ",i," = ",result,"<br>")

// }

// 6)
// var celciusTemp=24
// var fahrenheitConverter=(celciusTemp* 9/5)+32
// var fahrenheitTemp= 75.2
// var celciusConverter=(fahrenheitTemp-32)* 5/9
// document.writeln(celciusTemp+"&deg;C is "+fahrenheitConverter+"&deg;F <br>")
// document.writeln(fahrenheitTemp+"&deg;F is "+celciusConverter+"&deg;C")

//7)

// document.write("Shopping Car")
// var item1 = prompt("Name Of Item: ")
// var item2 = prompt("Name Of Item2:")

// var price1 = +prompt("Enter Price of Item1:")
// var price2 = +prompt("Enter Price of Item2:")

// var quantity1 = +prompt("Enter Quantity of Item1:")
// var quantity2 = +prompt("Enter Quantity of Item2:")

// var charges = +prompt("Enter Shipping Charges: ")

// var total1 = price1 * quantity1
// var total2 = price2 * quantity2

// var total = total1 + total2
// var grand_total = total + charges


// document.write("Price of " + item1 + " is: " + price1)
// document.write("<br>Price of " + item2 + " is: " + price2)
// document.write("<br>Quantity of " + item1 + " is: " + quantity1)
// document.write("<br>Quantity of " + item2 + " is: " + quantity2)
// document.write("<br><br>Shipping Charges " + charges)
// document.write("<br>Total Cost of Your Order is " + grand_total+" PKR")



//8)
// var totalMarks= +prompt("Enter the Total Marks: ")
// var obtainedMarks= +prompt("Enter The Marks You Have Obtained")
// var percentage= (obtainedMarks/totalMarks) *100
// document.write("Total Marks: "+totalMarks)
// document.write("<br>Obtained Marks: "+obtainedMarks)
// document.write("<br>Percentage: "+percentage+"%")



//9)
// var dollars=10
// var riyals=25
// var pkrCurrency= (10*229) + (25*61)
// document.write("<h2>Currency in PKR</h2>")
// document.write("Total currency in PKR is <b>"+pkrCurrency+"</b>")

//10)
// var num=20
// var calculate=num+5*10/2
// document.write(calculate)

//11)
// var currentYear=2023
// var birthYear= 2002
// var age=currentYear-birthYear
// document.write("<h2>Age Calculator</h2>")
// document.write("<br> Current Year: "+currentYear)
// document.write("<br>Birth Year: "+birthYear)
// document.write("<br>They are either "+age+" or "+ ++age +" years old")



//12)
// var radius=26
// var circumference= 2 * 3.142 * radius**2  
// var area= 3.142 * radius**2
// document.write("<h2>The Geometrizer</h2>")
// document.write("Radius of a circle: "+radius)
// document.write("<br>The circumference is: "+circumference)
// document.write("<br>The area is: "+area)

//13)
// var a=25
// document.write("Result: <br> The value of a is: "+a+"<br>.............................<br>" )
// document.write("The value of ++a is: "+ ++a +"<br>Now the value of a is: "+a+"<br><br>")
// document.write("The value of a++ is: "+ a++ +"<br>Now the value of a is: "+a+"<br><br>")
// document.write("The value of --a is: "+ --a +"<br>Now the value of a is: "+a+"<br><br>")
// document.write("The value of a-- is: "+ a-- +"<br>Now the value of a is: "+a+"<br><br>")

//14)
// var a=2, b=1
// var result= --a - --b + ++b + b--  
// //document.write("--a; "+ --a +"<br>")
// // document.write("--a - --b; "+ --a - --b +"<br>")
// // document.write("--a - --b + ++b; "+ --a - --b + ++b +"<br>")
// // document.write("--a - --b + ++b + b--; "+ --a - --b + ++b + b-- +"<br>")
// document.write("a is: "+a + "<br>")
// document.write("b is: "+b + "<br>")
// document.write("result is: "+result + "<br>")
// //Variables
// var a = 2;
// var b = 1;

//Output at each stage
//--a; 
//Output: 1

//--a - --b;
//Output: 1

//--a - --b + ++b;
//Output: 2

//--a - --b + ++b + b--;
//Output: 3

//Result
// var result = --a - --b + ++b + b--;
// console.log(result);
//Output: 3

//15)
// var favSnack="KitKat"
// var currentAge=21
// var maxAge=70
// var consumptionPerDay= 3
// var lifeTimeSupply= (maxAge-currentAge)*365*2 
// document.write("<h2>The Lifetime Supply Calculator</h2>")
// document.write("Favourite Snack: "+favSnack +"<br>")
// document.write("Current Age: "+currentAge +"<br>")
// document.write("Estimated Maximum Age: "+maxAge +"<br>")
// document.write("Amount of snacks per day: "+consumptionPerDay +"<br>")
// document.write("You will need "+lifeTimeSupply+" "+favSnack+" to last you untill the ripe old age of "+maxAge +"<br>")



