// enums
import { Color, Direction } from '../types';
import { ThingsInLife } from '../types';

// interface
function printRGB(color: Color): Color {
  return color;
}

console.log(printRGB(Color.Red));
console.log(printRGB(Color.Green));

function printThngsInLife(things: ThingsInLife): string {
  return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}

console.log(
  printThngsInLife({ colorOfPen: Color.Blue, keyboardArrow: Direction.Left })
);
