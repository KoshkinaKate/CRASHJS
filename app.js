// // alert('Hello World');
// // dont really want to use it(above)

// // console.log('Hello World')
// // console.error('This is an error');
// // console.warn('This is a warning');

// let age = 30;
// age=31;
// console.log(age);
// // can not do the same with const, can not redirect const. 
// // use const unless you will reassigne it, must add value for const

// // String, Numbers, Boolean, Null, Undefined, (Symbol)

// const name = 'John';
// const aGe = 30;
// const isCool = true;
// const rating = 4.5;
// const x =null; 
// // variable but it is empty; null
// const y= undefined;
// let z; 
// // also considered undefined;

// console.log(typeof name);

// // Concatenation
// console.log('My name is ' + name +' and i am ' + age);
// // old way above;
// // Template String
// console.log(`My name is ${name} and I am ${age}`);


// const s ='Hello World'
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5).toLowerCase());
// console.log(s.split(''));

// const b = 'technology, computers, it , code';
// console.log(b.split(', '));

// /* Multi line comment*/

// // Arrays - variables that hold multiple values

// const numbers = new Array (1,2,3,4,5);
// console.log(numbers);


// const fruits = ['apples','oranges','pears', 10, true];
// fruits[3] = 'grapes';
// fruits.push('mangoes');
// // above - just to add to array;
// fruits.unshift('kiwi');
// // above - to add at the beggining of array
// console.log(fruits);
// console.log(fruits[1]);
// // console.pop(); pops last one off
// console.log(Array.isArray('hello'));
// // just to check if something like HELLO in Array;

// console.log(fruits.indexOf('oranges')); 
// // to check # on array;

// const person ={
//     firstName: 'Joe',
//     lastName: 'Doe',
//     age:30,
//     hobbies:['music', 'movies', 'sports'],
//     address:{
//         street:'50 main st',
//         city: 'Boston',
//         state:'MA'
//     }
// }
// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const { firstName, lastName, address: {city} } = person;
// console.log(city);

// person.email='john@gmail.com'
// console.log(person)
// // with added email

// // ----------------------

// const todos=[
//     {
//         id:1,
//         text:'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text:'Meeting with Boss',
//         isCompleted: true
//     },{
//         id:3,
//         text:'Dentist app',
//         isCompleted: false
//     },
// ]
// console.log(todos[1].text);

// // https://www.freeformatter.com/json-formatter.html

// const todoJSON= JSON.stringify(todos);
// console.log(todoJSON);
// // formatted array and ready to send to a server;

// // LOOPS
// // FOR
// for(let i=0; i<=10; i++){
//     console.log(i);
//     console.log(`For Loop Number:${1}`);
// }
// // WHILE
// let i=0;
// while(i < 10) {
//     console.log(`While Loop Number:${1}`);
//     i++;
// }
// // loop through the array
// for(let i=0; i< todos.length; i++){
//     console.log(todos[i].text);
// }
// for(let todo of todos){
//     console.log(todo.id);
// }
// // forEach, map, filter

// todos.forEach(function(todo){
// console.log(todo.text);
// })

// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);
// // ---------------------------CONDITIONALS

// const f = 4;
// const g = 11;

// if(f > 5 || g > 10){
//     console.log('f > 5 or g>10');
// }

// // }else if(f>10){
// //     console.log('f>10');
// // }else{
// //     console.log('f < 10')
// // }


// // ----------------------------
// const a = 11;
// const color =  a>10 ? 'red' : 'blue';
// console.log(color);

// // SWITCHES 
// const c =1;
// const calor =  c >10 ? 'red' : 'blue';
// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }
// // doesnt work for some reasons - double check;

// // --------------------

// function addNums(num1, num2){
//     console.log(num1 + num2);
// }

// // addNums(5,4);
// // or you can use default values function addNums(num1=1, num2=2) but then addNums(5,4) is priority;


// const addNum =(num3=2, num4=3)=> num3 + num4;
// console.log(addNum(5,5));

// //  OBJECT ORIENTED PROGRAMMING 
// // Constructor function
// // function Person(firstName, lastName, dob){
// //     this.firstName= firstName;
// //     this.lastName= lastName;
// //     // this.dob=dob; OR
// //     this.dob= new Date (dob);
// //     this.getBirthYear = function (){
// //         return this.dob.getFullYear();
// //     }
// //     this.getFullName = function(){
// //         return`${this.firstName} ${this.lastName}`;
// //     }
// // }
// // Person.prototype.getBirthYear = function(){
// //     return this.dob.getFullYear();
// // }
// // Person.prototype.getFullName = function(){
// //     return `${this.firstName} ${this.lastName}`;
// // }

// // Instantiate objet
// // const person1 = new Person('John','Doe','4-3-1980');
// // const person2 = new Person('Marie','Pum','4-7-1986');

// console.log(person2.dob)
// console.log(person2.dob.getFullYear());

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person1);




// // CLASS
// class Person{
//     constructor(firstName,lastName,dob){
//     this.firstName= firstName;
//     this.lastName= lastName;
//     this.dob= new Date (dob);

//     }
//     getBirthYear(){
//         return this.dob.getFullYear();

//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;

//     }
// }
// const person1 = new Person('John','Doe','4-3-1980');
// const person2 = new Person('Marie','Pum','4-7-1986');

// DOM-------------------------------


// SINGLE ELEMENT
// console.log(window);
// a lot of different functions, like alert etc

// console.log(documnet.getElementById('my-form'));
// const form = documnet.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector(`h1`));
// // above onlt first h1
// console.log(documnet.querySelectorAll('.item'));
// // selects all of them <li></li>
// console.log(document.getElementsByTagName('li'));


// console.log(documnet.querySelectorAll('.item'));
// items.forEach((item)=>console.log(item));

const ul = documnet.querySelector('.items');
ul.remove();

ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn =document.querySelector('.btn');
btn.computedStyleMap.background ='red';


const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('click');
    documnet.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML ='<h1>Hello</h1>'; 
});


// Make FORM ACTIVE

const myForm = documnet.querySelector('#my-form');
const nameInput = documnet.querySelector('#name');
const emailInput = documnet.querySelector('#email');
const msg = documnet.querySelector('.msg');
const userList = documnet.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter fields';

        setTimeout(()=> msg.remove(),3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createText;Node(`${nameInput.value} : ${emailInput.value}`))
        userList.List.appendChild(li);
        // Clear fields
        nameInput.value='';
        emailInput.value='';

   }
}