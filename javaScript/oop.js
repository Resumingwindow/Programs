// object & object literals 

let input = 'name';     // if querry comming from the user 

let alian = {
    name:"shubham",
    tech:"JS",
    'work Exp':4

}
console.log(alian);
console.log(alian.name);
console.log(alian.tech);
// console.log(alian[tech]);
console.log(alian['work Exp']);
console.log(alian[input]);          //user querry

// complex object

let alianComp = {
    name:"shubham",
    tech:"JS",
    'work Exp':4,
    Laptop : { 
        cpu : 'i7',
        ram : 4,
        brand : 'Asus'
    }
}

    console.log(alianComp);
    console.log(alianComp.Laptop.brand);
    // ? mean if brand available it will print 
    console.log(alianComp.Laptop.brand?.length);

    // delete alianComp.Laptop;
    // console.log(alianComp);
    for(let key in alianComp){
        console.log(key, alianComp[key]);
    }
    for(let key in alianComp.Laptop){
        console.log(key, alianComp.Laptop[key]);
    }

    // Function Defination

    function greet(){
        console.log("Hello  World");
    }
greet();        //function call

    function ret(){
        return "Hello Shubh"
    }

    let rcv = ret();

    function ret(user){
        return `Hello ${user}`
    }
    let user = "shubham";
    ret(user);

    // Function expession
    let add = function(num1,num2){
        return num1+num2;
    }
    result = add(5,6);
    console.log(result);
    let sum = add
    result = sum(8,9)
    console.log(result);

    
    
    function greet(u){
        // console.log(user);
        console.log(`hello ${u}`);
    }
    let usr = "shubham";
    let strg = greet(usr);
    console.log(strg)
// Accessing global varible from fuction 
    function check(u){         
        
        // u is local variableof function  ur and user is global variable
        // ur is initialized after function defined and user is initialized before function
        console.log(user+ " "+ u + " from check");
        console.log(user);

    }
    let ur = "shubhArt";
    check(ur);

    // Arrow Function

    let Arrow = function(){
        console.log("hello shubh");
        return 1;
    }

    console.log(Arrow());

    let Arrow2 = ()=>{
        console.log("hello shubh");
        return 1;
    }

    console.log(Arrow2());

    let Arrow3 = (x)=>{
        console.log("hello shubh"+x);
        return 1;
    }

    console.log(Arrow3(user));

    let add2 =(num1,num2)=> num1+num2;  // converting add fun , no need of return 
    
    console.log(add2(5,6));

// Function + Object

let laptop2 =
{
    cpu: "i9",
    ram: 16,
    brand:"Asus",
    greet: function(){
        console.log("hello laptop "+ this.cpu +" "+ this.brand+" "+ this.ram);
    }
}

let laptop3 =
{

    cpu: "i7",
    ram: 16,
    brand:"Asus",
    greet: function(){
        console.log("hello laptop "+ this.cpu +" "+ this.brand+" "+ this.ram);
    },
    compare: function(other){           
        //this keyword refer to this object other is a variabale which will receive parameter passed
        // as object where cpu property should be exist.

        if(this.cpu>other.cpu){
            console.log(this)
        }else
        console.log(other);
    }
}


laptop3.compare(laptop2);  // function call


//construction function

function Alian(name , tech){
    this.name = name;
    this.tech = tech;
    this.work = function(){
        console.log("something else")
    }
}

let alian1 = new Alian('Shubham','js');

let alian2 = new Alian('Kiran','java');
console.log(alian1);
alian1.work();

//Arrays in js

let value = [5,7,8];
console.log(value.length);
value.push(7);
console.log(value);

console.log(value[2]);

let data = ['shubham','shikha','arti', 6,{tech : 'js'}, function(){console.log("shubhart");},]

console.log(data);




