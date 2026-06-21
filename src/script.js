var jsData = [
  {
    info: 'The <span class="font-bold text-emerald-400">querySelector()</span> method returns the first element that matches a CSS selector. To return all matches (not only the first), use the <span class="font-bold text-emerald-400">querySelectorAll()</span> instead. Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">getElementById()</span> method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">setAttribute()</span> method sets a new value to an attribute. If the attribute does not exist, it is created first.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">appendChild()</span> method appends a node (element) as the last child of an element.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">addEventListener()</span> method attaches an event handler to an element.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">removeEventListener()</span> method removes an event handler from an element.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">innerText</span> property sets or returns the text content of an element.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">innerHTML</span> property sets or returns the HTML content (inner HTML) of an element.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">map()</span> method creates a new array populated with the results of calling a provided function on every element in the calling array.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">filter()</span> method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">reduce()</span> method executes a user-supplied `reducer` callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">Array.from()</span> static method creates a new, shallow-copied Array instance from an iterable or array-like object.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">Object.values()</span> method returns an array of a given object\'s own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">destructuring assignment</span> syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">Null</span> type has exactly one value: null.',
  },
  {
    info: 'A variable that has not been assigned a value has the value <span class="font-bold text-emerald-400">undefined</span>.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">BigInt</span> type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.',
  },
  {
    info: '<span class="font-bold text-emerald-400">NaN</span> (`Not a Number`) is typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.',
  },
  {
    info: 'A  <span class="font-bold text-emerald-400">Symbol</span>  is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called `atoms`.',
  },
  {
    info: 'In computer science, an <span class="font-bold text-emerald-400">object</span> is a value in memory which is possibly referenced by an identifier.',
  },
  {
    info: 'In JavaScript, <span class="font-bold text-emerald-400">objects</span> can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Properties are identified using key values.',
  },
  {
    info: `<div>
            <textarea id="message" rows="5" class="block p-2.5 w-full text-sm text-slate-100 bg-slate-950/80 rounded-xl border border-slate-800 focus:ring-emerald-500 focus:border-emerald-500 mb-4 font-ff" placeholder="Write what you memorized here..."></textarea>
            <button onclick="alert('Congrats!!! 😁')" type="button" class="text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:opacity-90 font-bold rounded-full text-sm px-6 py-2.5 transition-all shadow-[0_4px_15px_rgba(52,211,153,0.2)] font-ff">If you learned this CLICK here</button>
         </div>`,
  },
  {
    info: '<span class="font-bold text-emerald-400">JSON</span> (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages. JSON builds universal data structures.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">constructor</span> method is a special method of a class for creating and initializing an object instance of that class.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">extends</span> keyword is used in class declarations or class expressions to create a class that is a child of another class.',
  },
  {
    info: 'The <span class="font-bold text-emerald-400">static</span> keyword defines a static method or property for a class, or a class static initialization block (see the link for more information about this usage). Neither static methods nor static properties can be called on instances of the class. Instead, they\'re called on the class itself.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Class fields</span> are public by default, but <span class="font-bold text-emerald-400">private class members</span> can be created by using a hash # prefix. The privacy encapsulation of these class features is enforced by JavaScript itself.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Encapsulation</span> is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a `blackbox` out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Inheritance</span> enables you to define a class that takes all the functionality from a parent class and allows you to add more. Using class inheritance, a class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability.',
  },
  {
    info: 'An object contains some properties and methods. We can hide them from the outer world through access modifiers. We can provide access only for required functions and properties to the other programs. This is the general procedure to implement <span class="font-bold text-emerald-400">abstraction</span> in OOPS.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Polymorphism</span> allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word `poly` means many and `morphs` means forms, So it means many forms.',
  },
  {
    info: 'A  <span class="font-bold text-emerald-400">data structure</span>  is a specialized format for organizing, processing, retrieving and storing data.',
  },
  {
    info: '<span class="font-bold text-emerald-400">CharAt()</span> It returns the character at the specified index.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Undeclared variables</span> are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. <span class="font-bold text-emerald-400">Undefined variables</span> are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Undefined</span> means a variable has been declared but has not yet been assigned a value. On the other hand, <span class="font-bold text-emerald-400">null</span> is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Dynamically Typed Language</span>: the variable can hold multiple types; like in JS a variable can take number, chars.',
  },
  {
    info: '<span class="font-bold text-emerald-400">Statically Typed Language</span>: the variable can hold only one type, like in Java, TypeScript a variable declared of string can take only set of characters and nothing else.',
  },
];

var btn = document.querySelector(".btn");
var section = document.querySelector(".section");
let lastNum = -1;
const getData = function () {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * jsData.length);
  } while (randomNum === lastNum); // Ensures you don't see the same tip twice

  lastNum = randomNum;
  section.innerHTML = jsData[randomNum].info;
};

btn.addEventListener("click", getData);
