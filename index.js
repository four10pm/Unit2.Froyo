// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
// When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

  // create a conditional where IF vanilla, it pushes +1 to Vanilla: 0, etc. 
  // function: for each item in STRINGARRAY, check the flavor & add it to the correct key in object FROYO 

//   function froyoOrder1(flavors) {
//     for (i=0; i<flavors.length; i++ ) {
//         if (flavors[i] === "vanilla") {
//             froyo.Vanilla ++;
//         } else if (flavors[i] === "strawberry") {
//             froyo.Strawberry ++;
//         } else if (flavors[i] === "coffee") {
//             froyo.Coffee ++;
//         }
//         return froyo;
//     }
//   }
//   console.log(froyoOrder1(flavors));
const userInputString = prompt(
    "Please enter your choice of fro-yo flavors, separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee,chocolate"
  );

// console.log(userInputString);

const flavors = userInputString.split(","); 
console.log (flavors);

const froyo = {
    Vanilla: 0,
    Strawberry: 0,
    Coffee: 0,
  };

// function froyoTest() {
//     for (i=0; i<flavors.length; i++ ) {
//     if (flavors[i] === "vanilla") {
//         froyo.Vanilla ++;
//     } else if (flavors[i] === "strawberry") {
//         froyo.Strawberry ++; 
//     } else if (flavors[i] === "coffee") {
//         froyo.Coffee ++;
//     }
//     }
//     return froyo;
// }
// console.log(froyoTest(flavors));
// console.table(froyo);
 
function froyoOrder(flavors) {
    for (const key in flavors) {
        if (flavors[key] === "vanilla") {
            froyo.Vanilla ++; 
        } else if (flavors[key] === "strawberry") {
            froyo.Strawberry ++; 
        } else if (flavors[key] === "coffee") {
            froyo.Coffee ++;
        } else if (froyo.Other >= 1) {
            froyo.Other ++;
        } else {
            froyo.Other = 1;
        }
  };
  return froyo;
}
console.log(froyoOrder(flavors));
console.table(froyo);

// const count = {};
// for (let key of flavors) {
//     if (count[key]) {
//         count[key] += 1;
//     } else {
//         count[key] = 1;
//     }
// }

// console.table(count);

