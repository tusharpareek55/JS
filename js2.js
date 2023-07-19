// TYPES OF FUNTIONS


// named funtion
function iseven(){
    var num = 5 
    if(num%2==0){
        return true
    }
    return false
}

function iseven(num){ 
    if(num%2==0){
        return true
    }
    return false
}

//pass by reference 

function objfun(obj){
    obj.name="Tushar"
}

// anonymous

is_odd = function (){
    var num = 5 
    if(num%2==0){
        return false
    }
    return true
}


//immediately invoked

var fun = function iszerp(){
    var num = 5 
    if(num==0){
        return true
    }
    return false
}()

var obj = {
    name:"rahul"
}
objfun(obj)
console.log(obj.name)


//arrow 

var a = ((number)=>{
    console.log(number)
})(5)

//short callbacks
arr = [1,2,3,4]
var res=arr.find(item=>item==1)
console.log(res)


//GENERATOR

function* gen(){
    var index=0
    while(true){yield index++}
}

const g = gen()
console.log(g.next().value);
console.log(g.next().value);


// new function

const s = sum = Function('numa','numb','return numa + numb');
console.log(sum(10,20))

// First-class functions are functions that are treated as variables. They can also be parsed into other functions as arguments.

const Person = {
    play:(name) => {
        return `Hey ${name} is playing`;
    },
    dance:(name) => {
        return `${name} can dance`
    },
    walk:(name) => {
        return `I am sure ${name} can walk `
    },
}
 
console.log(Person.play("Chibueze"));
console.log(Person.dance("Chibueze"));
console.log(Person.walk("Chibueze"));








