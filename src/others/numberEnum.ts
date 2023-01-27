enum Color {
	Red = 123,
	Green,
	Blue
}
console.log("---------");

const myColor: Color = Color.Red;
console.log(myColor);

const youColor: Color = Color.Blue;
console.log(youColor);

console.log("---------");

console.log(Color["Red"]);
console.log(Color["Green"]);

console.log("---------");

console.log(Color[0]);
console.log(Color[1]);
console.log(Color[2]);

console.log("---------");

console.log(Color);