function checkMultiple(number){
    if(number % 15 ==0){
        return true;
    }else{
        return false;
    }

}
const numberList = document.getElementById("numberList");
let numberListOne = 0;
let numberListTwo = 100;

for(let number = numberListOne; number <=numberListTwo; Number++){
    if(checkMultiple(number)){
        numberList.innerHTML += `<li>...</li>`;
    }else{
        numberList.innerHTML += `<li>${number}</li>`;
    }
}