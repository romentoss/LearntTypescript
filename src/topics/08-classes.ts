export class Person {
   
    
    constructor(public name:string,private address:string){
      
    }

    getAddress():string{
       return this.address;
    }
}

const ironman = new Person("pepito","NY");

console.log(ironman);

console.log(ironman.getAddress());