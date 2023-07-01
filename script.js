function Color(){
const colorTimers=[{
    color:"#471515",
    backgroundBody:"#FFF2F2",
    backgroundIconBtns:"#FFD9D9",
    backgroundOtherBtn:"#FF6E6E",
},{
    color:"#14401D",
    backgroundBody:"#F2FFF5",
    backgroundIconBtns:"#D9FAE1",
    backgroundOtherBtn:"#AAF0B9",
},{
    color:"#153047",
    backgroundBody:"#F2F9FF",
    backgroundIconBtns:"#D9EEFF",
    backgroundOtherBtn:"#B0DAFF",
}
]
return colorTimers;
}
const iconTimers=[
    {
        imgTag:"./image/ph_brain-fill.svg",
        pTag:"Focus"
    },{
        imgTag:"./image/ph_coffee.svg",
        pTag:"Short Break"
    },{
        imgTag:"./image/ph_coffee.svg",
        pTag:"Long Break"
    }
]
var sec=60;
/*for(let timer=0;timer<colorTimers.length;timer++){
    for(let color in colorTimers[timer]){
        console.log(colorTimers[timer][color]);
    }
}
for(let timer=0;timer<colorTimers.length;timer++){
    for(let icon in iconTimers[timer]){
        console.log(iconTimers[timer][icon]);
    }
}*/
const btnSet=document.getElementById("btn-set");
btnSet.addEventListener("click",displaySet);
function displaySet(){
    document.getElementById("setting").style.display = "block";
}
const btnNoSet=document.getElementById("noDisplay");
btnNoSet.addEventListener("click",delSet);
function delSet(){
    Setting=document.getElementById("setting");
    Setting.style.display="none";
}
const btnStart=document.getElementById("btn-start");
const minute=document.getElementById("minute");
const btnNext=document.getElementById("btn-next");
btnNext.addEventListener("click",addNextDesign);
let count=0;
let countJump=0;
function addNextDesign(){
    sec=60;
    btnStart.addEventListener("click",Start);
    setCount();
    console.log(count);
    setValueTimer();
    changeContentTimer();
    }
function setCount(){
    let quantityCycle=parseInt(document.getElementById("quantityCycle").value);
    if(countJump!=(quantityCycle+quantityCycle-2)){
        if(count!=0){
            count=0;
        }
        else{
            count=1;
        }
        countJump++;
        }
    else{
        count=2;
        countJump=-1;
       }
    return count;
}
function setValueTimer(){
    const quantityFocus=document.getElementById("quantityFocus").value;
    const quantityShort=document.getElementById("quantityShort").value;
    const quantityLong=document.getElementById("quantityLong").value;
    const quantity=[quantityFocus,quantityShort,quantityLong];
    minute.innerHTML=quantity[count] + "<br>" + "00" ;
}
function changeContentTimer(){
    colorTimers=Color();
    if(document.body.classList.contains("dark-mode")){
        console.log("yesss");
        let changeColorDark=colorTimers[count].backgroundIconBtns;
        colorTimers[count].backgroundIconBtns=colorTimers[count].color;
        colorTimers[count].color=changeColorDark;
    }
    const Svg=document.querySelectorAll("path")
    console.log(Svg);
    Svg.forEach(function changeColorSvg(item,index){
        Svg[index].setAttribute("fill",colorTimers[count].color); 
    });
    document.body.style.color=colorTimers[count].color;
    document.body.style.backgroundColor=colorTimers[count].backgroundBody;
    const btn=document.getElementsByClassName("btn");
    for(let i=0;i<btn.length;i++){
        btn[i].style.backgroundColor=colorTimers[count].backgroundIconBtns;
    }
    btn[1].style.backgroundColor=colorTimers[count].backgroundOtherBtn;
    document.getElementById("icon").style.backgroundColor=colorTimers[count].backgroundIconBtns;
    document.getElementById("imageIcon").src=iconTimers[count].imgTag;
    document.getElementById("pIcon").innerHTML=iconTimers[count].pTag;
}
btnStart.addEventListener("click",Start);
let timerInterval;
const imgStart=document.getElementById("img-start");
function Start() {
    timerInterval = setInterval(timer,1000);
    console.log("Started");
    btnStart.removeEventListener("click", Start);
    btnStart.addEventListener("click", Stop);
    btnStart.value = "Stop";
    imgStart.src="./image/ph_pause-fill.svg";
}
function timer() {
    setValueTimer();
    var min=parseInt(minute.innerHTML)-1;
    console.log(min);
    sec--;
    console.log("hii")
    if (min<=0 && sec==0) {
        console.log("hiiy");
        clearInterval(timerInterval);
        addNextDesign();
        Start();
    }
    minute.innerHTML=min +"<br>"+ sec;
    if (sec==0) {
        min--;
        if(min>=0){
        sec=59;
        }
    }
}
function Stop(){
    clearInterval(timerInterval);
    console.log("Stopped");
    btnStart.removeEventListener("click", Stop);
    btnStart.addEventListener("click", Start);
    btnStart.value = "Start";
    imgStart.src="./image/Vector.svg";
    imgStart.style.color="red";
}
const btnDarkMode=document.getElementById("darkMode");
btnDarkMode.addEventListener("click",activeDarkMode);
function activeDarkMode() {
    document.body.classList.toggle("dark-mode");
 }
