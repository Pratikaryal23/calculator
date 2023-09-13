let first=''
let second=''
let operator=''
let result=''
let displaydata=document.getElementById('display')

function calculator(a){
if(operator.length===0){
    first+=a
    displaydata.value=first

}else{
second+=a
displaydata.value+=a
}
}
function operators(a)
{
    operator=a;
    displaydata.value=first+a
}
function Result(){
    switch(operator){
        case "+":
            // alert("hello i am bhoot")
            result =Number(first)+Number(second);
            break;
            case "-":
                result=Number(first)-Number(second);
                break;
                case "*":
                result =Number(first)*Number(second);
                break;
                case "/":
                    result=Number(first)/Number(second);
                    break;
                    default:
                        result="error"
                     }
                     console.log(result);
                     displaydata.value=result;
}
function clar(){
first=" ";
 second=" ";
operator=" ";
 displaydata.value=0;
}

function begin(){
    first=" ";
    second=" ";
    operator=" ";
    displaydata.value=0;
}










