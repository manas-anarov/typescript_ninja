let charachter: string;
let age: number;
let isLoggedIn: boolean;


//age = 'luigi'
age = 30;

// isLoggedIn = 10;
isLoggedIn = false;


let ninjas: string[] = [];
// ninjas = ['youshi', 'mario'];
ninjas.push('shaun');


let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(true);
console.log(mixed);


let uid: string|number;
uid = '123';
uid = 123;



let ninjaOne: object;
ninjaOne = {name: 'yiushi', age: 30};


let ninjaTwo: {
	name: string,
	age: number,
	belt: string
};

ninjaOne = {name: 'yiushi', age: 30, belt: 'black'};
