

let x= document.getElementById("counter");
let count = 0;

function reset() {
   count = 0;
   document.getElementById("counter").innerHTML = count;
}

function increment() {
   count++;
   x.innerHTML = count;
}

function decrement() {
   count--;
   x.innerHTML = count;
}

