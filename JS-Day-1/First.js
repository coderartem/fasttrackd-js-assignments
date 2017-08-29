 
const arr=[];  //can't do arr= ,couse it's constant, but elements can be changed (it's just an arr variable holds same address) 

const number=10;
arr.push(number);
const string = "SUP";
arr.push(string);
const boolean = true;
arr.push(boolean);
const func = (x,y)=>{
    x*y;
}

arr.push(func);

const object = {
    'key':"add",
    'value':func
}

for(let i=0; i<arr.length;i++){
    console.log( arr[i]);
}

const constructPerson = (name,age)=>{
    return{ // return an Object
    'name':name,
    'age':age
    }

    /*return{  //works too, takes key and duplicate it as a nme too
        name,
        age
    }*/
}

const Will = constructPerson('Will',32);
const Oliver = constructPerson('Oliver',52);
const Robert = constructPerson('Robert',24);

const people= [Will,Oliver,Robert];

console.log(people);

const printPeople = (...people)=>{    //  function should be defined before call, or will not work
    for(let i=0;i<people.length;i++){
        console.log(people[i])
    }
}

printPeople(...people);  //if pass just people array, the whole array will be a one element in the fuction, and array doesn't have properties of any it's element. With ...people array breaks to elements, and in function ...people restore it to array of arguments (elements of original array)

