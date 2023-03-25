var ops = ["+", "-", "/", "*"];
var cal = document.getElementById("calc");

function addNum(nu){
    cal.value += nu;
    console.log(cal.value);
}

function lear(){
    cal.value = "";
    console.log(cal.value);    
}

function addOp(operator){
    if(ops.includes(operator)){
        if(cal.value.endsWith(`+`)||cal.value.endsWith(`-`)||cal.value.endsWith(`*`)||cal.value.endsWith(`/`)) {
            return alert(`Incorrect input!`);
        }else{
            cal.value += operator;
        }
    }else{
        console.log('no');
    }
}

function calculate(){
    if(cal.value.endsWith(`+`)||cal.value.endsWith(`-`)||cal.value.endsWith(`*`)||cal.value.endsWith(`/`)){
        return alert(`Incorrect input!`);
    }else{
        if(cal.value.startsWith(`+`)||cal.value.startsWith(`-`)||cal.value.startsWith(`*`)||cal.value.startsWith(`/`)){
            return alert(`Incorrect input!`);
        }else{
            var result = eval(cal.value);
            cal.value = result;
        }
    }
}