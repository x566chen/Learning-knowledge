// let + constant
const player = 'bobby';
let experience = 100;
let wizardLevel = false;
if (experience >90){
	let wizardLevel = true;
}

//const can not be updated
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
const { player, experience } = obj;
let {wizardLevel} = obj;

//object properties
//if properties=value

const a = "Simon";
const b = true;
const c = {};
const obj = {
	a,
	b,
	c
}

//Template strings
const name = "Sally";
const age = 34;
const pet = "horse";
//const greeting = "Hello" + name + "you seem to be doing" + greeting + "!";
const greetingBest = 'Hello ${name} you seem to be ${age-10}. What a lovely ${pet}.'

function greet(name = '', age =30, pet = 'cat'){
    return 'Hello $(name) you seem to be $(age - 10). What a lovely $(pet).'
};

//arrow functions

function add(a,b){
	return a+b;
}

const add = (a,b) => {
	return a +b ;
}

//or(one line)
const add = (a,b) => a +b ;

//compose

const compose = (f,g) => (a) => f(g(a));
const sum = (sum) => num + 1;
compose(sum, sum)(5); //7

// Avoiding Side Effects, functional purity.





