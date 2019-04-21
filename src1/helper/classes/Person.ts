import {IPerson} from "../interfaces/IPerson";

class Person {
    constructor(private name: IPerson){
        this.name = name;
    }

    displayName(){
        return this.name.firstname + " " + this.name.lastname;
    }
}

export {
    Person
}