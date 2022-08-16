'use strict'
export default class Infor{
    constructor(firstname,lastname,username,password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }
}
export class todoLists {
    constructor(task,owner,isDone){
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}