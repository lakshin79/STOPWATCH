
let task = document.querySelector("#task")
let description = document.querySelector("#description")
const btn = document.getElementById("btn")
let table = document.getElementById("table")
let form = document.getElementById("form")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let i;
let sec=0,min=0,hr=0;


function start1(){
    if(task.value.length<1 || description.value.length<1){
        alert("Fill all fields");
        return;
    }
    i = setInterval(counter,500);
    
    start.removeEventListener('click',start1)
    start.textContent='STOP';
    start.style='color:red';
    start.addEventListener("click",stop1)
}
function stop1(){
        table.innerHTML+=`<tr>
        <td>${task.value}</td>
        <td>${description.value}</td>
        <td>${hr} Hrs : ${min} Minutes : ${sec} Seconds</td>
        </tr>
        `
        clearInterval(i)
        task.value=""
        description.value=""
        sec=0,min=0,hr=0;
        document.getElementById("count").innerHTML=`${hr} Hrs:${min} Minutes:${sec} Seconds`
        start.removeEventListener('click',stop1)
        start.textContent='START'
        start.style='color:green';
        start.addEventListener("click",start1)
}
start.addEventListener('click',start1)

function reset1(){
    clearInterval(i)
    task.value=""
    description.value=""
    sec=0,min=0,hr=0;
    document.getElementById("count").innerHTML=`${hr} Hrs : ${min} Minutes : ${sec} Seconds`
    start.textContent='START'
    start.style='color:green';
}

reset.addEventListener("click",reset1)

function counter(){
    sec=sec+1;
    if(sec==60){
        sec=0;
        min+=1;
    }
    if(min==60){
        min=0;
        hr==1;
    }
    document.getElementById("count").innerHTML=`${hr} Hrs : ${min} Minutes : ${sec} Seconds`
}



