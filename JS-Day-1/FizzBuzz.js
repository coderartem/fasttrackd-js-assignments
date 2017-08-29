
const fizzBuzz = (counter,printEmAll,message="")=>{

    if(!counter){
        return message;
    }else{
    message += counter +": "+temp(counter,printEmAll)+"\n";
    return fizzBuzz(--counter,printEmAll,message);
    }
}

const temp = (counter,printEmAll,i=0,msg="")=>{

    if(i===printEmAll.length){
        return msg;
    }
    if(printEmAll[i]){
        if(counter%i===0){
            msg+=printEmAll[i];
        }
    }
    return temp(counter,printEmAll,++i,msg);
}

const printEmAll = [undefined,undefined,'fizz',undefined,'buzz',undefined,undefined,'wut'];
console.log(fizzBuzz(100,printEmAll));