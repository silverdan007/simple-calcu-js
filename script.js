console.log('hello world');
var digit1 = 'new';
document.getElementById('display').innerHTML = '';
var intr = '';


function calc(){
    var str = intr;
    digit1 = Number(intr);
    intr = '';
    document.getElementById('display').innerHTML = str;
    str = '';
    

    return digit1
}

function add(){
    intr = '';
    var x = Number(document.getElementById("display").innerHTML);
    if (digit1 === 'new'){
        calc();
    }else{
        digit1 += x;
        document.getElementById('display').innerHTML = digit1;
        return digit1;
    }
}
function sub(){
    intr = '0';
    if (digit1 === 'new'){
        x = Number(document.getElementById('display').innerHTML);
        digit1 = x
        document.getElementById('display').innerHTML = intr;
        console.log(digit1+ 'Annnn');
        return digit1;
    }else{
        digit1 -= Number(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = String(digit1);
        console.log(digit1 +'nan');

    }
    
    
    
}
function display1(){
    intr += '1';
    document.getElementById('display').innerHTML = intr;
    return intr;
}
function display2(){
    intr += '2'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display3(){
    intr += '3'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display4(){
    intr += '4'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display5(){
    intr += '5'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display6(){
    intr += '6'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display7(){
    intr += '7'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display8(){
    intr += '8'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display9(){
    intr += '9'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function display0(){
    intr += '0'
    document.getElementById('display').innerHTML = intr;
    return intr
}
function displaydec(){
    if (intr.includes('.')){
        document.getElementById('display').innerHTML = intr;
        return intr
    }
    else{
        intr += '.'
        document.getElementById('display').innerHTML = intr;
        return intr
    }
    
}

function clearEntry(){
    intr = ''
    document.getElementById('display').innerHTML = 0
}
// display4()
// display3()
// display1()
// display2()
// display0()
// display9()
// display7()
// display8()
// display5()

console.log(digit1 + 'wttf');





