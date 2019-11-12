// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
	return arr.map(String);
}

console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]


// #2 Make an array of strings of the names
function namesOnly(arr) {
	var names = [];
	for (let key in arr) {
		let value = arr[key];
		names.push(value.name);
	}

	return names;
}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {
	var ages = [];
	
	for(let key in arr) {
		let value = arr[key];
		ages.push(value.age);
	}

	var oldAges = ages.filter(function(number) {
		return number >50;
	});

	return oldAges;
}
console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: [80, 100]
