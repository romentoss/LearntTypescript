export class Person {
    constructor(public name:string,
        public lastName:string,
        private address:string){}
        getAddress():string{
            return this.address;
        }
}


// export class Hero extends Person{
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string
//     ){
//         super(realName, "NY")
//     }
// }

export class Hero{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person
    ){
    }
}
const tony = new Person('Antonio','Estrella','NY');
const ironman = new Hero("pepito",45,"pepe",tony);

console.log(ironman);

// console.log(ironman.getAddress());