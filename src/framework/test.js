const arr1 = [
    {key:'code',title:'编号',groupKey:'personal',groupTitle:'学籍信息'},
    {key:'name',title:'姓名',groupKey:'personal',groupTitle:'学籍信息'},
    {key:'gender',title:'性别',groupKey:'personal',groupTitle:'学籍信息'},
    {key:'school',title:'学校',groupKey:'normal',groupTitle:'个人信息'}];

const result = [
    {key:'normal',title:'学籍信息',children:[
        {key:'school',title:'学校',groupKey:'normal',groupTitle:'个人信息'}
    ]},
    {key:'personal',title:'个人信息',children:[
        {key:'code',title:'编号',groupKey:'personal',groupTitle:'学籍信息'},
        {key:'name',title:'姓名',groupKey:'personal',groupTitle:'学籍信息'},
        {key:'gender',title:'性别',groupKey:'personal',groupTitle:'学籍信息'}
    ]}
];

arr1.reduce((pre,cur) => {
    pre.push(cur);
},[]);






// const arr2 = arr1.map((item) => {
//     if (item.key === 'name' || item.key === 'gender') {
//         return {...item, group:'personal',title:'个人信息'};
//     }
//     return {...item, group:'normal',title:'学籍信息'};
// });

// const arr3 = arr2.reduce((pre,cur) => {
//     pre[cur.group] = pre[cur.group] || [];
//     pre['title'] = cur.title;
//     pre[cur.group].push(cur);
//     return pre;
// },[]);
// console.log('finally: ',arr3);

// //返回第n项
// function fibonacci(n) {
//     let num1 = 1,num2 = 1,sum;
//     for (let i = 0; i < n; i ++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return sum;
// }
//
// //返回斐波那契数列的每一项
// function fibonacciArr(n) {
//     let num1 = 1,num2 = 1,sum;
//     const arr = [1,1];
//     for(let i = 1; i < n; i ++) {
//         sum = num2 + num1;
//         num1 = num2;
//         num2 = sum;
//         arr.push(sum);
//     }
//     return arr;
// }
// //递归的返回第n项,递归需要堆栈，数字过大内存不够浏览器会出现假死现象
// function fibonacciRecursive(n) {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }
//
// const fibonaciClosure=function(){
//     const memo=[0,1];
//     const fib=function(n){
//         let result=memo[n];
//         if(typeof result !== 'number'){
//             result=fib(n-1)+fib(n-2);
//         }
//         return result;
//     };
//     return fib;
// }();
//

// const cache = [];
// function fibonaci(n) {
//     if (cache[n] !== undefined) {
//         return cache[n];
//     }
//     if (n <= 2) {
//         cache[n] = 1;
//         return 1;
//     }
//     cache.push(fibonaci(n - 1) + fibonaci(n -2));
//     return cache[n];
// }

// function Point(x,y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.say = function () {
//     console.log("value is: ",this.x,this.y,this);
// };
// function PointChild() {
//
// }
// Point.call(PointChild);
//
// let pc = new PointChild(2,3);
// // console.log(pc.say());
//
//
//
//
// let obj = new Point(1,2);
// // console.log(obj.say());
//
// class Parent {
//     // constructor(x,y){
//     //     this.x = x;this.y = y;console.log(new.target)
//     // }
//     say(x,y) {
//         console.log("value is: ",x,y);
//     }
//     static eat(x) {
//         console.log("value is: ",x,y);
//     }
// }
// class Children extends Parent{
//     constructor(x,y){
//         super();
//         console.log(super.say(x,y))
//     }
// }
//
// let ChildInstance = new Children('a','b');
// // console.log(ChildInstance.say())
//

// class A {
//     constructor() {
//         this.x = 1;
//     }
//     s() {
//         console.log(this.x);
//     }
// }
//
// class B extends A {
//     constructor() {
//         super();
//         this.x = 2;
//     }
//     m() {
//         super.s();
//     }
// }
//
// let b = new B();
// b.m();

// function test() {
//     let a = 0;
//     for (let i = 0; i < 10; i ++) {
//         if (i === 5) {
//             a = i;
//         }
//     }
//     console.log('a=',a);
// }
// test();