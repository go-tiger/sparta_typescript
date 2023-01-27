import { Color } from "../types";

const myColor: Color.Red = Color.Red;
console.log(myColor);

const yourColor = Color.Green;
console.log(yourColor);

const chorock: Color = Color.Green;
console.log(chorock);

// const colorOfSky: Color.Blue = Color.Green;

const faveColor: Color.Red = Color.Red;
console.log(faveColor);


console.log("------------");

const faveColorAs: Color = "Red" as Color;
console.log(faveColorAs);

const imposterColor: Color = "Potato" as Color;
console.log(imposterColor);