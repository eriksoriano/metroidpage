// **********************************************************************************************************
//         change the color of an item using .style     DONE
// **********************************************************************************************************

const changeSamusText = document.querySelector("#spaceSuites");
console.log(changeSamusText); // it works 

// // // Using the Style Property 
changeSamusText.style.background = "#202020"
changeSamusText.style.color = "orange" // actual HW task, but i added more stuff
changeSamusText.style.padding = "1rem"
changeSamusText.style.fontSize = "4rem"
changeSamusText.style.borderRadius = "2rem"
changeSamusText.style.border = "1px solid";




// **********************************************************************************************************
//    Change the font size of an element using .setProperty --   DONE
// **********************************************************************************************************

const hoverText = document.querySelector("#hoverExplainTxt");
console.log(hoverExplainTxt); // it works 

hoverText.style.setProperty('color', 'orange');
hoverText.style.setProperty('font-size', '1.5rem'); // actual HW task, but i added more stuff




// *********************************************************************************************************
//     Add a class to an HTML tag with .setAttribute, and change some property with that class.  DONE
// **********************************************************************************************************

const addClasstoDiv = document.querySelector("#addClassHere");
console.log(addClasstoDiv); // it works 

addClasstoDiv.setAttribute('class', 'para-style') // now that class is added, we will edit properties below

addClasstoDiv.style.setProperty('font-family', 'Share Tech Mono, monospace');
addClasstoDiv.style.setProperty('padding', '1rem');
addClasstoDiv.style.setProperty('margin', '1rem');


addClasstoDiv.style.setProperty('color', 'greenyellow');
addClasstoDiv.style.setProperty('font-size', '2rem');

addClasstoDiv.style.setProperty('background-color', 'black');
addClasstoDiv.style.setProperty('border-radius', '2rem');
addClasstoDiv.style.setProperty('border', '1px solid');








// *********************************************************************************************************
//            Create an empty paragraph and add some content with Javascript.   DONE
// **********************************************************************************************************
const thisNewPara = document.querySelector("#newP");
console.log(thisNewPara);
thisNewPara.innerHTML = "Throughout her adventures in the galaxy, Samus Aran has utilized many suits like the ones mentioned above, but also has been aided a few times by the following ones:";

thisNewPara.style.setProperty('color', 'white'); // should be white as per styling from div, but i wanted it white so
thisNewPara.style.setProperty('font-size', '1.5rem'); // actual HW task, but i added more stuff
// thisNewPara.style.setProperty('font-family', 'roboto');



// *********************************************************************************************************
//            Create an array and display the content on the page.   DONE
// **********************************************************************************************************


const mySuitArray = [
    "GRAVITY SUIT",
    " PHAZON SUIT",
    " VARIA SUIT",
    "FUSION SUIT",
    "METROID SUIT"
];
console.log(mySuitArray);

const showmySuitArray =document.querySelector("#showArray"); // actual HW task, but i added more stuff
showmySuitArray.innerHTML = mySuitArray;

showmySuitArray.style.setProperty('color', 'orange');
showmySuitArray.style.setProperty('font-size', '1.3rem'); 
showmySuitArray.style.setProperty('text-align', 'center'); 





// *********************************************************************************************************
//          Create a button and add an event listener to change the background of a section or div.    DONE
// **********************************************************************************************************

const changeDivColor = document.querySelector('#changeColorBro');
console.log(changeDivColor);

changeDivColor.innerHTML = "CLICK HERE TO CHANGE COLORS";

changeDivColor.style.setProperty('color', 'greenyellow');
changeDivColor.style.setProperty('font-size', '1rem'); // actual HW task, but i added more stuff
changeDivColor.style.setProperty('background-color', '#202020');
changeDivColor.style.setProperty('border-radius', '2rem');
changeDivColor.style.setProperty('padding', '1rem');
changeDivColor.style.setProperty('margin', 'auto');
changeDivColor.style.setProperty('border', '1px solid');
changeDivColor.style.setProperty('display', 'block'); 





changeDivColor.addEventListener('click', function () {  // **** start of function *****
  changeDivColor.style.setProperty('color', 'greenyellow');
  

  // Better add a class so you can remove it later
  if (changeDivColor.classList.contains('clicked')) {
    changeDivColor.classList.remove('clicked')

    changeDivColor.style.setProperty('background-color', '#202020');
    addClasstoDiv.style.setProperty('background-color', '#202020');
    addClasstoDiv.style.setProperty('color', 'greenyellow');
    showmySuitArray.style.setProperty('color', 'orange');


  } else {
    changeDivColor.classList.add('clicked')
    changeDivColor.style.setProperty('background-color', 'greenyellow');
    changeDivColor.style.color = "black";
    addClasstoDiv.style.setProperty('background-color', 'black');
    addClasstoDiv.style.setProperty('color', 'orange');
    showmySuitArray.style.setProperty('color', 'greenyellow');





  }
})   // **** end of function *****



// *********************************************************************************************************
//         START OF FOUR  NODAL to the four main suites    DONE
// **********************************************************************************************************


// ==================== Modal LIGHT ====================

const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})
 
modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})

const lightsuitTxt = document.querySelector("#lightsuittxt");
console.log(lightsuitTxt);

lightsuitTxt.innerHTML = "This suit grants the player full immunity against dark matter and dark enemies";
// lightsuitTxt.style.setProperty('padding-bottom', '2rem');




// ==================== Modal 1 POWER ====================

const modalButton1 = document.querySelector('.jsModalButton1')
const modalCloseButton1 = document.querySelector('.jsModalClose1')
const modalOverlay1 = document.querySelector('.modal-overlay1')

modalButton1.addEventListener('click', event => {
  document.body.classList.add('modal-is-open1')
})

modalCloseButton1.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open1')
})

modalOverlay1.addEventListener('click', event => {
  if (!event.target.closest('.modal1')) {
    document.body.classList.remove('modal-is-open1')
  }
})

const powerSuitTxt = document.querySelector("#powertxt");
console.log(powerSuitTxt);

powerSuitTxt.innerHTML = "The iconic Power suit is Samus' signature look; as she appears in most games, always ready to kick ass.";
// powerSuitTxt.style.setProperty('padding-bottom', '2rem');





// ==================== Modal 2 ZERO ====================

const modalButton2 = document.querySelector('.jsModalButton2')
const modalCloseButton2 = document.querySelector('.jsModalClose2')
const modalOverlay2 = document.querySelector('.modal-overlay2')

modalButton2.addEventListener('click', event => {
  document.body.classList.add('modal-is-open2')
})

modalCloseButton2.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open2')
})

modalOverlay2.addEventListener('click', event => {
  if (!event.target.closest('.modal2')) {
    document.body.classList.remove('modal-is-open2')
  }
})

const zeroSuitTxt = document.querySelector("#zerotxt");
console.log(zeroSuitTxt);

zeroSuitTxt.innerHTML = "Samus sheds her signature look for a sexier and more comfortable attire; this allows her to jump and kick";
// zeroSuitTxt.style.setProperty('padding-bottom', '2rem');



// ==================== Modal 3 dark ====================

const modalButton3 = document.querySelector('.jsModalButton3')
const modalCloseButton3 = document.querySelector('.jsModalClose3')
const modalOverlay3 = document.querySelector('.modal-overlay3')

modalButton3.addEventListener('click', event => {
  document.body.classList.add('modal-is-open3')
})

modalCloseButton3.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open3')
})

modalOverlay3.addEventListener('click', event => {
  if (!event.target.closest('.modal3')) {
    document.body.classList.remove('modal-is-open3')
  }
})

const darkSuitTxt = document.querySelector("#darktxt");
console.log(darkSuitTxt);

darkSuitTxt.innerHTML = "The Dark Suit allows samus to navigate through dark aether and reduce damage due to toxic atmosphere and pressure.";
// darkSuitTxt.style.setProperty('padding-bottom', '2rem');




// *********************************************************************************************************
//          END OF FOUR  NODAL to the four main suites   DONE
// **********************************************************************************************************







// *********************************************************************************************************
//   Select one of the 3 elements implemented in class and integrate it into your page. (Slide Panel, Modal,
//   or Random background). If you use the random background you can apply it to any section.
//   It does not have to be the whole background.
// **********************************************************************************************************








// // alert("this is js")
// // Console log lets you Output values to aid debugging
// console.log("this is a log")
// //Javascript joke...(🙄)
// console.log('b' + 'a' + +('a') + 'a')

// // Creating multiple variables at a time =================
// const car = "Ferrari",
//     color = "yellow",
//     model = "2022"

// // Outputing the content of a variable on a string ================
// const year="2021"
// console.log(year + " " + typeof year)

// // difference between using const and let ================
// const add = 0
// console.log(add) // 0
// // I can use let here to change the values later
// let num1 = 300
// let num2 = 50
// // I'm changing the value of num2. 
// num2 = 40
// // I use const here because I always want this to be the sum of num1 + num2
// const sum = num1 + num2
// console.log(sum)

// // You have to divide every function into simple steps.
// function nmakePhoneCall() {
//     // Look for phone, 
//     // get phone,
//     // unlock phone,
//     // open phone app,
//     // look for name in phone book,
//     // make call
// }

// // ===================Using parameters and arguments ================
// function eatVeggies(veggie){
//     console.log("I'm eating a " + veggie)
// }
// // The broccoli is the value of the veggie parameter
// eatVeggies("broccoli")

// function eatMoreVeggies(){
//   // In this case I'm adding a variable inside the function and I'm nou using parameters. 
//     let veggie = "carrot"
//     console.log("I'm eating a " + veggie)
// }

// // The function does not have parameters so you don't add anything in the ()
// eatMoreVeggies()
// // I'm using the previous function and changing the vegetable here
// eatVeggies("kale")

// // Adding multiple parameters on a function 
// function eatManyVeggies(veg1, veg2, veg3){
//     console.log("I'm eating a " + veg1 + ", a " + veg2 + " and a " + veg3)
// }
// eatManyVeggies("broccoli", "carrot", "cucumber")

// // ============= Using Retun ===============
// function eatSomeVeggies(veggie){
//     return "potato"
// }
// console.log(eatSomeVeggies())

// // don;t add anything after return because it will not work.
// function add2(num) {
//     return num + 2 
//     console.log("this is a log")
//   }
// // print the result of the function. The number you add + 2
// console.log(add2(4))

// // Different ways to create a Function ===============
// // The Function Expression 
// const myFunctionExpression = function () { 
//     console.log('This is a function expression!') 
//   }
//   myFunctionExpression() 

// // The Arrow Function
// const myArrowFunction = (num1, num2) => {
//     console.log(num1 + num2)
// }
// myArrowFunction(3,5)
// // Simplified arrow function when you just have a return.
// const myNewArrowFunction = (num1, num2) => num1 + num2

// console.log(myNewArrowFunction(4, 7))

// // ============= OBJECTS ===============
// const myDog = {
//     name: 'Bernie',
//     color: 'brown and white',
//     breed: 'St. Bernard',
//     weight: '150lb'
//     }
// // Getting the value of objects
// console.log(myDog.color)
// // You can create a variable and call the object and the key to get the value. 
// const dogName = myDog.name
// console.log(dogName)

// // ================== Using the DOM =================
// // Getting diferent properties of the DOM 
// console.log(document)
// // This is the html head 
// console.log(document.head)
// // This is the document html 
// console.log(document.body)

// // Getting the HTML elements with Javascript
// // These 2 do the same thing. querySelector is the newer way to do it. 
// const useIdName = document.getElementById("bestIceCream")
// const useIdSelector = document.querySelector("#bestIceCream")
// console.log(useIdName)
// console.log(useIdSelector)

// /* These 2 do the same thing. querySelector is the newer way to do it. 
// There is a difference though: getElementsByClassName will select all instances
// and querySelector will only select the first one. */
// const selecClassName = document.getElementsByClassName("plainIceCream")
// const selecClass = document.querySelector(".plainIceCream")
// console.log(selecClassName)
// console.log(selecClass)

// /* These 2 do the same thing. querySelector is the newer way to do it. 
// There is a difference though: getElementsByTagName will select all instances
// and querySelector will only select the first one. */
// const selectTagName = document.getElementsByTagName('p') // basically same as line 142
// const selectTag = document.querySelector('p')
// console.log(selectTagName)
// console.log(selectTag)

// // Selecting data attributes 
// const selectDataAttribute = document.querySelector("[data-type='fruityIceCream']")
// console.log(selectDataAttribute)

// // Use querySelectorAll when you want to select all instances. 
// const selectAllp = document.querySelectorAll("p")
// console.log(selectAllp)

// // querySelector always selects the first instance 
// const selectBox = document.querySelector(".box")
// // with querySelector you can combine classes 
// // This one selects the first .box inside .section2
// const selectBox2 = document.querySelector(".section2 .box")
// console.log(selectBox)
// console.log(selectBox2)

// // ================== ARRAYS =========================

// const myArray = ["item1", "item2", "item3"]
// console.log(myArray)
// // You can create longer arrays by using different lines separated by a comma
// const myArrayLong = [
//     "item1",
//     "item2",
//     "item3",
//     "item4",
//     "item5"
// ]
// console.log(myArrayLong)
// // You can create arrays made up of other arrays // important for my mobile class
// const arrayArrays = [
//     [1, 2, 3],
//     [1, 2, 3]
//   ]
// console.log(arrayArrays)
// // Or arrays made of objects 
// const arrayObject = [
//     { firstName: 'Patricia', lastName: 'Sarmiento' },
//     { firstName: 'John', lastName: 'Doe' }
//   ]
// console.log(arrayObject)

// // Getting Values of an object using Arrays
// const fruitCount = {
//     apple: 28,
//     orange: 17,
//     pear: 54,
//     pineapple: 10,
//     banana: 2
//   }
// // I create a variable to get the object keys
//   const fruitKeys = Object.keys(fruitCount)
//   console.log(fruitKeys) 
// // I can create an array to get the object values 
//   const keysValues = Object.values(fruitCount)
//   console.log(keysValues) 
// // I can also output the object to get the object content
//   console.log(fruitCount) 

// // Getting the specific element on an array 
// // We have a few paragraphs on the html. Let's get them all
// const paragraphs = document.querySelectorAll( "p" )
// console.log(paragraphs)
// // I want to target only the first one, so I target the array I just created and select the element position in the array
// const firstParagraph = paragraphs[ 1 ]
// // Let's do something with this first paragraph 
// // Add a CSS classes =============================================================
// // firstParagraph.classList.add("red" ,"padding")
// // Replace the existing html content 
// // firstParagraph.innerHTML = "I have been replaced!!"

// // Count the number of elements on an array (zero based array)
// function countArray(){
// console.log("The total number of paragraphs is : " + paragraphs.length);
// }
// countArray()

// // Calculate the last paragraph automatically 
// // Why -1? because we are dealing with a zero based array 
// const lastParagraph = paragraphs[paragraphs.length -1]
// console.log(lastParagraph)
// // Add some content to the last paragraph ======================================================
// lastParagraph.innerHTML = "<b>I'm the last <br> paragraph</b>"

// // changing the names of the array elements 
// const myNewArray = ["item1", "item2", "item3"]
// // Changing the content of an array item by targetting its position
// myNewArray[0] = "I'm different"
// // Addign a new element to the array by specifying its position.
// // If the position is a bigger number than the array length, empty array elements will be created. 
// myNewArray[9] = "I'm new"
// myNewArray[4] = ""
// myNewArray[7] = "I'm new too"
// console.log(myNewArray)
// // console.log("Array length " + myNewArray.length)

// // Array Methods 
// const shopphingList = ["eggs", "milk", "cheese", "apples", "grapes", "strawberries", "tomatoes", "bread"]
// // getting the index of a value 
// const applePos = shopphingList.indexOf("apples")
// // Adding a value at the beginning 
// shopphingList.unshift("butter", "flour")
// // adding an item at the end 
// shopphingList.push("lettuce", "broccoli")
// // Removing an item from the beginning 
// shopphingList.shift()
// // Removing an item from the end 
// shopphingList.pop()
// // Adding removing with splice
// shopphingList.splice(2, 0, "beans", "peppers")
// // Removing items with splice
// shopphingList.splice(2, 3)


// console.log(applePos)
// console.log(shopphingList)

// // Now let's display the content of the shopping list on the html page
// // Target a div on the html page where we want to display the list
// const myList = document.querySelector("#shoppingList")
// // Then display the array on the html tag
// myList.innerHTML = shopphingList

// // Make a copy of the array using "slice"
// const myOtherList = shopphingList.slice()
// // Let's try to display this one a little better 
// // Target another p tag
// const myFormattedList = document.querySelector("#formattedShoppingList")
// // Lets add an element at the beginning to make the arrays different.
// myOtherList.unshift("detergent")
// // Display the array on the p tag separated by <br> tags
// // myFormattedList.innerHTML = myOtherList
// myFormattedList.innerHTML = myOtherList.join("<br>")
// // Add some css too 
// myFormattedList.classList.add("shopping")

// console.log(myOtherList)

// //======================= FOR Loops =============================
// function loopCount(){
//   console.log("this is a loop")
// }
// // This loop will run 5 times, while i is smaller than 5.
// for (let i = 0; i < 3; i++) {
//     loopCount()
//     // I want to see how many times this is logged
//     const timesLooped = i + 1
//   console.log('The function has run ' + timesLooped + ' times')
//   }

// // // Using if/else inside loops 
// // // EWe have this variable with dollar bills values
// const dollarBills = [1, 5, 20, 50, 100, 500, 1000, 2000];

// for (let i = 0; i < dollarBills.length; i++) {
//   // this variable get the value of each element of the array
//   const num = dollarBills[i]
//   if (num < 101) {
//     console.log(num + ' is a valid dollar bill!')
//   }
//   else{
//     console.log(num + ' is NOT a valid dollar bill!')
//   }
// }

// // Using a for..of loop
// for (let item of dollarBills) {
//   if (item < 101) {
//     console.log(item + ' is a valid dollar bill!')
//   }
//   else{
//     console.log(item + ' is NOT a valid dollar bill!')
//   }
// }

// // Using a forEach loop 
// dollarBills.forEach(function(bill){
//   if (bill < 101) {
//     console.log(bill + ' is a valid dollar bill!')
//   }
//   else{
//     console.log(bill + ' is NOT a valid dollar bill!')
//   }
// })

// // forEach loop simplified with an arrow function
// dollarBills.forEach(bill => {
//   if (bill < 101) {
//     console.log(bill + ' is valid!')
//   }
//   else{
//     console.log(bill + ' is NOT valid !')
//   }
// })

// // Using the foreach loop to add a class to all the elements on an array
// // The paragraphs array was declared on line 194 using querySelectorAll 
// paragraphs.forEach(paragraph => paragraph.classList.add("blue"))
// // or using for of
// for (paragraph of paragraphs) {
//   paragraph.classList.add('blue')
// }

// // // ==============Javascript and CSS ==================
// // // First select an element on the page 
// const blackSection = document.querySelectorAll('button')
// console.log(blackSection)
// // // Using the Style Property 
// blackSection.style.background = "#000"
// blackSection.style.color = "#fff"
// blackSection.style.padding = "1rem"
// blackSection.style.fontSize = "2rem"
// // // Using the setProperty 
// blackSection.style.setProperty('font-size', '3rem')
// // // Using the setAttribute
// blackSection.setAttribute('data-block', 'dark')


// // ================== EVENT LISTENERS ==================
// // Let's get the button on the HTML
// const myButton = document.querySelector('button')
// // Add an event listener for when we click the button
// myButton.addEventListener('click', function () {
  // Change some CSS
  // myButton.style.background = "#000"
  // myButton.style.color = "#fff"
  // myButton.style.fontSize = "2rem"
  // Better add a class so you can remove it later
  // if (myButton.classList.contains('clicked')) {
  //   myButton.classList.remove('clicked')
  //   myButton.style.background = "green"

  // } else {
  //   myButton.classList.add('clicked')
  // }
  // Or even shorter by using toggle
  // myButton.classList.toggle('clicked')
// })

// const myHover = document.querySelector('p')

// myHover.addEventListener('mouseover', () => {
//   myHover.style.background = "#000"

// })