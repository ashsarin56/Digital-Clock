let box=document.querySelector(".container");

function time(){
    let c = new Date();
    let meridiem="AM";
    console.log(c);
    let hrs = c.getHours();
    if(hrs>=12){
        hrs-=12;
        meridiem="PM";
    }
    let mins=c.getMinutes();
    let seconds=c.getSeconds();
    if(mins<10){
       let x="0"+mins;
       mins=x;
    }
    if(hrs<10){
        let y="0"+hrs;
        hrs=y;
    }
    if(seconds<10){
        let z="0"+seconds;
        seconds=z;
    }
     box.innerHTML=hrs+":"+mins+":"+seconds+" "+meridiem;
    console.log(hrs,mins,seconds)
}
setInterval(time,1000);