// Describe base class Entity that can store name
// Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user
// Add example of usage of these classes, e.g., create some instances, display data related to them
// Push code to repo “sweet sugar”

class Entity {
  constructor(options) {
    this.name = options.name;
  }
}

class User extends Entity {
  constructor(options) {
    super(options);
    this.age = options.age;
  }
  sayName() {
    console.log(` I am ${this.name} and my age is ${this.age}`);
  }
}

class Box extends User {
  stuff = ["ruler", "compass"];
  showStuff() {
    console.log(this.stuff);
  }
}

const user = new Box({ name: "Chico", age: 22 });

class Stuff {
  constructor(options) {
    this.item = options.item;
  }
}

const item = new Stuff({ item: "pen" });
const item1 = new Stuff({ item: "pencil" });

user.stuff.push(item.item, item1.item);
console.log(user);
user.sayName();
user.showStuff();
