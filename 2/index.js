// // TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

// // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// // TODO: Create a new object using the 'Developer' constructor

// // TODO: Call the 'introduction()' method on the new object
// function Developer(name, tech) {
//   this.name = name;
//   this.tech = tech;
//   this.introduction = () => {
//     console.log(`This is ${this.name} and they like ${this.tech}`);
//   };
// }

// const Angela = new Developer("Angela", "HTML");
// Angela.introduction();

// the below is the same as above
class Developer {
  constructor(name, tech) {
    this.name = name;
    this.tech = tech;
  }

  introduction() {
    console.log(`This is ${this.name} and they like ${this.tech}`);
  }
}

const kk = new Developer("kk", "HTML");
kk.introduction();
