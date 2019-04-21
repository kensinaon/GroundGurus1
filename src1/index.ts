import { Person } from "./helper/index";

const log = (message: string)=>{
    console.log(message);
}

const person1 = new Person({firstname: "Ken", lastname: "Sina-on"});
log(person1.displayName());