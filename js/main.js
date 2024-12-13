let btns = document.querySelectorAll('.btn');
let result = document.querySelector('#value');
let count = 0 ;



btns.forEach(function(btn){
 btn.addEventListener('click',function(e){
    if(e.target.classList.contains('increase')){
        count++;
        result.innerHTML = count;
    }else if(e.target.classList.contains('decrease')){
        count--;
        result.innerHTML = count;
    }else if(e.target.classList.contains('reset')){
       count = 0;
       result.innerHTML = count;
    }

    if(count > 0){
        result.style.color="green";
    }
    if(count < 0){
        result.style.color="red";
    }
    if(count === 0){
        result.style.color="black";
    }
 });
});




















