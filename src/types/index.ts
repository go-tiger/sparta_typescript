import exp from 'constants';

export enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

export enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

export interface ThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

// type ThingsInLifeType = {
//   colorOfPen: Color;
//   keyboardArrow: Direction;
// };

export interface MyInterface {
  value: string | number | string[] | number[] | boolean | boolean[];
}

export interface MyInterfaceG<T = string> {
  value: T;
}

export type User = {
  email: string;
  name: string;
};

export enum Status {
  Initiated = 'Initiated',
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
}

export interface Order {
  buyer: string;
  orderStatus: Status;
}
