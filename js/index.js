let counter= document.querySelector('.counter');
const dwnBtn= document.querySelector('#lowerCountBtn');
const upBtn= document.querySelector('#addCountBtn');

let count = 0;

upBtn.addEventListener('click', incrementCount);
dwnBtn.addEventListener('click', decrementCount);

function incrementCount(){
    count++
    counter.innerHTML = count;
    if(count === 0){
        counter.style.color= 'white';
    }else if(count > 0){
        counter.style.color= 'green';
    }
}
function decrementCount(){ 
    count--
    counter.innerHTML = count;

    if(count < 0){
        counter.style.color= 'red';
    }
}