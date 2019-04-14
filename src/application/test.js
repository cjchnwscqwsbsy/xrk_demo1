function Person(){}
function Person2(){}
Person.prototype={
    constructor:Person,
    name:'jkwu',
    age:'22',
    sayName:function(){
        console.log('result:',this.name);
    }
};
Person2.prototype.name='zhangsan';

let p1 = new Person(), p2 = new Person();
console.log(p1.constructor);
console.log(p2.constructor);


// console.log(Person.prototype.constructor === Object);
// console.log(Person2.prototype.constructor === Object);
// console.log(Person2.prototype.constructor === Person2);
// console.log(Person2.prototype.constructor);
// console.log(Person.prototype);