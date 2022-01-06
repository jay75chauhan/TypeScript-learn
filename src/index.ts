//basic types

let id: number = 50000;
let cpm: string = "jay";
let is: boolean = false;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let idsany: any[] = [1, 2, 3, 4, 5, "kk", false, false, false, false, false];

console.log("id: ", id);

//Tuple types-

let person: [number, string, boolean] = [2, "gg", true];
console.log("id: ", person);

//Tuple array

let emplo: [number, string][] = [
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
];

//union

let pid: string | number;

pid = "hh";

//Enum

enum Enum1 {
  up,
  down,
  right,
  left,
}

console.log(Enum1.up);

enum Enum2 {
  up = 1,
  down,
  right,
  left,
}

//object

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 34,
  name: "ff",
};

//type  assertions

let cid: any = 2;

// let cutomert = <number>cid

let cutomert = cid as number;

//strictFunctionTypes

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(2, 2));

function what(message: string | number): void {
  console.log(message);
}

what(7);

// interface

interface whatInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: whatInterface = {
  id: 1,
  name: "user1",
};

//type

type Point = number | string;

var ert: Point = "ee";

interface Mathfunctions {
  (X: number, Y: number): number;
}

const addnum: Mathfunctions = (X: number, Y: number): number => x + Y;

interface whatInterf {
  id: number;
  name: string;
  register(): string;
}

//class

class Person implements whatInterf {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.id} ${this.name} is now registered`;
  }
}

const jay = new Person(3, "jjj");

class emo extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emopo = new emo(2, "df", "d");

// generic

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 3, 4, 44]);
let stringArray = getArray<string>([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
]);
