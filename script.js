var input=''
function getNum(num){
    input += num;
    var inputElement = document.getElementById('input-box')
    inputElement.value=input
}
function calculate(){
    var inputElement = document.getElementById('input-box')
    var value= inputElement.value
    var result= eval(value)
    inputElement.value=result
}
function cls() {
    var inputElement = document.getElementById('input-box');
    inputElement.value = "";
    input=""
}
function del() {
    var inputElement = document.getElementById('input-box');
    var inputValue = inputElement.value;

    if (inputValue.length > 0) {
        
        inputElement.value = inputValue.slice(0, -1);
        input = inputValue.slice(0, -1);
    }
}
 
    
