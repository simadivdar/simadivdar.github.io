function Color() {
    const colorTimers = [{
        color: "#471515",
        backgroundBody: "#FFF2F2",
        backgroundIconBtns: "#FFD9D9",
        backgroundOtherBtn: "#FF6E6E",
    }, {
        color: "#14401D",
        backgroundBody: "#F2FFF5",
        backgroundIconBtns: "#D9FAE1",
        backgroundOtherBtn: "#AAF0B9",
    }, {
        color: "#153047",
        backgroundBody: "#F2F9FF",
        backgroundIconBtns: "#D9EEFF",
        backgroundOtherBtn: "#B0DAFF",
    }
    ]
    return colorTimers;
}
const iconTimers = [
    {
        imgTag: "<path d='M31 16.4998C31.0001 15.1751 30.6243 13.8775 29.9162 12.7579C29.2081 11.6382 28.1969 10.7425 27 10.1748V8.99978C26.9991 7.7112 26.5834 6.45714 25.8144 5.42318C25.0454 4.38922 23.9639 3.63031 22.7301 3.25875C21.4962 2.88719 20.1755 2.92273 18.9635 3.36011C17.7514 3.79749 16.7123 4.61346 16 5.68728C15.2877 4.61346 14.2486 3.79749 13.0366 3.36011C11.8245 2.92273 10.5038 2.88719 9.26992 3.25875C8.03607 3.63031 6.95462 4.38922 6.18561 5.42318C5.41659 6.45714 5.00089 7.7112 5 8.99978V10.1748C3.80292 10.7424 2.79149 11.6381 2.08326 12.7577C1.37502 13.8773 0.999062 15.175 0.999062 16.4998C0.999062 17.8246 1.37502 19.1222 2.08326 20.2419C2.79149 21.3615 3.80292 22.2572 5 22.8248V22.9998C5.00089 24.2884 5.41659 25.5424 6.18561 26.5764C6.95462 27.6103 8.03607 28.3693 9.26992 28.7408C10.5038 29.1124 11.8245 29.0768 13.0366 28.6395C14.2486 28.2021 15.2877 27.3861 16 26.3123C16.7123 27.3861 17.7514 28.2021 18.9635 28.6395C20.1755 29.0768 21.4962 29.1124 22.7301 28.7408C23.9639 28.3693 25.0454 27.6103 25.8144 26.5764C26.5834 25.5424 26.9991 24.2884 27 22.9998V22.8248C28.196 22.2558 29.2064 21.3598 29.9143 20.2405C30.6222 19.1211 30.9986 17.8242 31 16.4998ZM11 26.9998C10.0131 26.9992 9.0613 26.6338 8.32753 25.9739C7.59377 25.314 7.12986 24.4061 7.025 23.4248C7.3475 23.4756 7.67353 23.5007 8 23.4998H9C9.26522 23.4998 9.51957 23.3944 9.70711 23.2069C9.89464 23.0194 10 22.765 10 22.4998C10 22.2346 9.89464 21.9802 9.70711 21.7927C9.51957 21.6051 9.26522 21.4998 9 21.4998H8C6.82165 21.4978 5.68187 21.0797 4.78175 20.3192C3.88162 19.5588 3.279 18.5048 3.08019 17.3434C2.88138 16.1819 3.09916 14.9876 3.69512 13.971C4.29107 12.9545 5.2269 12.1811 6.3375 11.7873C6.53183 11.7157 6.69954 11.5862 6.818 11.4164C6.93646 11.2465 6.99998 11.0444 7 10.8373V8.99978C7 7.93892 7.42143 6.9215 8.17157 6.17136C8.92172 5.42121 9.93914 4.99978 11 4.99978C12.0609 4.99978 13.0783 5.42121 13.8284 6.17136C14.5786 6.9215 15 7.93892 15 8.99978V18.5373C13.9052 17.5437 12.4785 16.9953 11 16.9998C10.7348 16.9998 10.4804 17.1051 10.2929 17.2927C10.1054 17.4802 10 17.7346 10 17.9998C10 18.265 10.1054 18.5194 10.2929 18.7069C10.4804 18.8944 10.7348 18.9998 11 18.9998C12.0609 18.9998 13.0783 19.4212 13.8284 20.1714C14.5786 20.9215 15 21.9389 15 22.9998C15 24.0607 14.5786 25.0781 13.8284 25.8282C13.0783 26.5784 12.0609 26.9998 11 26.9998ZM24 21.4998H23C22.7348 21.4998 22.4804 21.6051 22.2929 21.7927C22.1054 21.9802 22 22.2346 22 22.4998C22 22.765 22.1054 23.0194 22.2929 23.2069C22.4804 23.3944 22.7348 23.4998 23 23.4998H24C24.3265 23.5007 24.6525 23.4756 24.975 23.4248C24.8929 24.1935 24.5897 24.922 24.1022 25.522C23.6147 26.122 22.9638 26.568 22.2282 26.8058C21.4926 27.0436 20.7038 27.0632 19.9573 26.8621C19.2108 26.6611 18.5386 26.248 18.022 25.6729C17.5053 25.0977 17.1664 24.3852 17.0463 23.6215C16.9261 22.8578 17.0298 22.0756 17.3449 21.3696C17.66 20.6637 18.1729 20.0641 18.8215 19.6435C19.4702 19.2229 20.2269 18.9993 21 18.9998C21.2652 18.9998 21.5196 18.8944 21.7071 18.7069C21.8946 18.5194 22 18.265 22 17.9998C22 17.7346 21.8946 17.4802 21.7071 17.2927C21.5196 17.1051 21.2652 16.9998 21 16.9998C19.5215 16.9953 18.0948 17.5437 17 18.5373V8.99978C17 7.93892 17.4214 6.9215 18.1716 6.17136C18.9217 5.42121 19.9391 4.99978 21 4.99978C22.0609 4.99978 23.0783 5.42121 23.8284 6.17136C24.5786 6.9215 25 7.93892 25 8.99978V10.8373C25 11.0444 25.0635 11.2465 25.182 11.4164C25.3005 11.5862 25.4682 11.7157 25.6625 11.7873C26.7731 12.1811 27.7089 12.9545 28.3049 13.971C28.9008 14.9876 29.1186 16.1819 28.9198 17.3434C28.721 18.5048 28.1184 19.5588 27.2183 20.3192C26.3181 21.0797 25.1784 21.4978 24 21.4998ZM7.5 15.9998C7.23478 15.9998 6.98043 15.8944 6.79289 15.7069C6.60536 15.5194 6.5 15.265 6.5 14.9998C6.5 14.7346 6.60536 14.4802 6.79289 14.2927C6.98043 14.1051 7.23478 13.9998 7.5 13.9998C8.16203 13.9965 8.79601 13.7321 9.26414 13.2639C9.73227 12.7958 9.99672 12.1618 10 11.4998V10.4998C10 10.2346 10.1054 9.98021 10.2929 9.79268C10.4804 9.60514 10.7348 9.49978 11 9.49978C11.2652 9.49978 11.5196 9.60514 11.7071 9.79268C11.8946 9.98021 12 10.2346 12 10.4998V11.4998C12 12.6933 11.5259 13.8379 10.682 14.6818C9.83807 15.5257 8.69348 15.9998 7.5 15.9998ZM25.5 14.9998C25.5 15.265 25.3946 15.5194 25.2071 15.7069C25.0196 15.8944 24.7652 15.9998 24.5 15.9998C23.3065 15.9998 22.1619 15.5257 21.318 14.6818C20.4741 13.8379 20 12.6933 20 11.4998V10.4998C20 10.2346 20.1054 9.98021 20.2929 9.79268C20.4804 9.60514 20.7348 9.49978 21 9.49978C21.2652 9.49978 21.5196 9.60514 21.7071 9.79268C21.8946 9.98021 22 10.2346 22 10.4998V11.4998C22.0033 12.1618 22.2677 12.7958 22.7359 13.2639C23.204 13.7321 23.838 13.9965 24.5 13.9998C24.7652 13.9998 25.0196 14.1051 25.2071 14.2927C25.3946 14.4802 25.5 14.7346 25.5 14.9998Z' fill='#471515'/>",
        pTag: "Focus",
        imgLink: "./image/State=Focus.png"
    }, {
        imgTag: "<path d='M10 7V3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7ZM15 8C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8ZM19 8C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2C18.7348 2 18.4804 2.10536 18.2929 2.29289C18.1054 2.48043 18 2.73478 18 3V7C18 7.26522 18.1054 7.51957 18.2929 7.70711C18.4804 7.89464 18.7348 8 19 8ZM31 15V16C30.9993 17.2715 30.5142 18.495 29.6434 19.4215C28.7726 20.3481 27.5815 20.908 26.3125 20.9875C25.6237 22.9139 24.4634 24.6372 22.9375 26H26C26.2652 26 26.5196 26.1054 26.7071 26.2929C26.8946 26.4804 27 26.7348 27 27C27 27.2652 26.8946 27.5196 26.7071 27.7071C26.5196 27.8946 26.2652 28 26 28H4C3.73478 28 3.48043 27.8946 3.29289 27.7071C3.10536 27.5196 3 27.2652 3 27C3 26.7348 3.10536 26.4804 3.29289 26.2929C3.48043 26.1054 3.73478 26 4 26H7.0625C5.78816 24.8718 4.76726 23.4865 4.06704 21.9352C3.36682 20.384 3.00316 18.702 3 17V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H26C27.3261 10 28.5979 10.5268 29.5355 11.4645C30.4732 12.4021 31 13.6739 31 15ZM25 12H5V17C5.00406 18.8772 5.53448 20.7157 6.53101 22.3066C7.52753 23.8975 8.95023 25.1771 10.6375 26H19.3625C20.6229 25.384 21.7402 24.5107 22.6423 23.4364C23.5445 22.362 24.2114 21.1105 24.6 19.7625C24.6139 19.7397 24.6225 19.7141 24.625 19.6875C24.8763 18.8139 25.0025 17.909 25 17V12ZM29 15C28.9993 14.3802 28.8066 13.7758 28.4485 13.27C28.0904 12.7641 27.5844 12.3816 27 12.175V17C27.0008 17.628 26.9506 18.2551 26.85 18.875C27.4705 18.6917 28.015 18.3127 28.4025 17.7946C28.79 17.2765 28.9996 16.647 29 16V15Z' fill='#153047'/>",
        pTag: "Short Break",
        imgLink: "./image/State=Short Break.png"
    }, {
        imgTag: "<path d='M10 7V3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7ZM15 8C15.2652 8 15.5196 7.89464 15.7071 7.70711C15.8946 7.51957 16 7.26522 16 7V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8ZM19 8C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2C18.7348 2 18.4804 2.10536 18.2929 2.29289C18.1054 2.48043 18 2.73478 18 3V7C18 7.26522 18.1054 7.51957 18.2929 7.70711C18.4804 7.89464 18.7348 8 19 8ZM31 15V16C30.9993 17.2715 30.5142 18.495 29.6434 19.4215C28.7726 20.3481 27.5815 20.908 26.3125 20.9875C25.6237 22.9139 24.4634 24.6372 22.9375 26H26C26.2652 26 26.5196 26.1054 26.7071 26.2929C26.8946 26.4804 27 26.7348 27 27C27 27.2652 26.8946 27.5196 26.7071 27.7071C26.5196 27.8946 26.2652 28 26 28H4C3.73478 28 3.48043 27.8946 3.29289 27.7071C3.10536 27.5196 3 27.2652 3 27C3 26.7348 3.10536 26.4804 3.29289 26.2929C3.48043 26.1054 3.73478 26 4 26H7.0625C5.78816 24.8718 4.76726 23.4865 4.06704 21.9352C3.36682 20.384 3.00316 18.702 3 17V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H26C27.3261 10 28.5979 10.5268 29.5355 11.4645C30.4732 12.4021 31 13.6739 31 15ZM25 12H5V17C5.00406 18.8772 5.53448 20.7157 6.53101 22.3066C7.52753 23.8975 8.95023 25.1771 10.6375 26H19.3625C20.6229 25.384 21.7402 24.5107 22.6423 23.4364C23.5445 22.362 24.2114 21.1105 24.6 19.7625C24.6139 19.7397 24.6225 19.7141 24.625 19.6875C24.8763 18.8139 25.0025 17.909 25 17V12ZM29 15C28.9993 14.3802 28.8066 13.7758 28.4485 13.27C28.0904 12.7641 27.5844 12.3816 27 12.175V17C27.0008 17.628 26.9506 18.2551 26.85 18.875C27.4705 18.6917 28.015 18.3127 28.4025 17.7946C28.79 17.2765 28.9996 16.647 29 16V15Z' fill='#153047'/>",
        pTag: "Long Break",
        imgLink: "./image/State=Long Break.png"
    }
]
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
var sec = 60;
colorTimers = Color();
document.addEventListener("click", function (e) {
    if (e.target.id == "btn-set" || e.target.classList == "menu-item") {
        document.getElementById("menu").style.display = "block";
    }
    else {
        document.getElementById("menu").style.display = "none";
    }
    if (e.target.id == "log-set" || e.target.classList[0] == "setting-items" || e.target.tagName == "INPUT" || e.target.tagName == "LABEL") {
        document.getElementById("setting").style.display = "block";
        document.getElementById("menu").style.display = "none";
    }
    else {
        document.getElementById("setting").style.display = "none";
    }
});
const Setting = document.getElementById("setting");
Setting.addEventListener("click", function () {
    setColorInput(count);
})
const btnNoSet = document.getElementById("noDisplay");
btnNoSet.addEventListener("click", function () {
    Setting.style.display = "none";
});
const btnStart = document.getElementById("btn-start");
const minute = document.getElementById("minute");
const btnNext = document.getElementById("btn-next");
btnNext.addEventListener("click", addNextDesign);
let count = 0;
let countJump = 0;
function addNextDesign() {
    sec = 60;
    if (!document.getElementById("auto-resume").checked) {
        btnStart.addEventListener("click", Start);
    }
    setCount();
    setValueTimer();
    changeContentTimer();
}
function setCount() {
    let quantityCycle = parseInt(document.getElementById("quantityCycle").value);
    if (countJump != (quantityCycle + quantityCycle - 2)) {
        if (count != 0) {
            count = 0;
        }
        else {
            count = 1;
        }
        countJump++;
    }
    else {
        count = 2;
        countJump = -1;
    }
    return count;
}
function setColorInput() {
    const Input = document.querySelectorAll("input[type=checkbox]");
    Input.forEach(function changeColorbtn(item, index) {
        if (Input[index].checked) {
            Input[index].nextElementSibling.style.backgroundColor = colorTimers[count].backgroundOtherBtn;
        }
        else {
            Input[index].nextElementSibling.style.backgroundColor = "#ccc";
        }
    });
}
setColorInput(count);
function setValueTimer() {
    const quantityFocus = document.getElementById("quantityFocus").value;
    const quantityShort = document.getElementById("quantityShort").value;
    const quantityLong = document.getElementById("quantityLong").value;
    const quantity = [quantityFocus, quantityShort, quantityLong];
    setTimer(quantity[count], 0)
}
function changeContentTimer() {
    setColorInput(count);
    colorTimers = Color();
    if (document.body.classList.contains("dark-mode")) {
        let changeColorDark = colorTimers[count].backgroundIconBtns;
        colorTimers[count].backgroundIconBtns = colorTimers[count].color;
        colorTimers[count].color = changeColorDark;
        Setting.style.backgroundColor = "black";
        document.getElementById("menu").style.backgroundColor = "black";
    }
    else {
        Setting.style.backgroundColor = colorTimers[count].backgroundBody;
        document.getElementById("menu").style.backgroundColor = colorTimers[count].backgroundBody;
    }
    if (document.getElementById("set-sound").checked && btnStart.value == "Stop" && count == 0) {
        document.getElementById("myAudioShortBreakStart").play();
    }
    else if (document.getElementById("set-sound").checked && btnStart.value == "Stop" && count == 1) {
        document.getElementById("myAudioShortBreakEnd").play();
    }
    else if (document.getElementById("set-sound").checked && btnStart.value == "Stop" && count == 2) {
        document.getElementById("myAudioLongBreakEnd").play();
    }

    document.body.style.color = colorTimers[count].color;
    document.body.style.backgroundColor = colorTimers[count].backgroundBody;
    const btn = document.getElementsByClassName("btn");
    for (let i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = colorTimers[count].backgroundIconBtns;
    }
    btn[1].style.backgroundColor = colorTimers[count].backgroundOtherBtn;
    document.getElementById("icon").style.backgroundColor = colorTimers[count].backgroundIconBtns;
    document.getElementById("imageIcon").innerHTML = iconTimers[count].imgTag;
    document.getElementById("pIcon").innerHTML = iconTimers[count].pTag;
    let link = document.querySelector("link[rel~='icon']");
    link.href = iconTimers[count].imgLink;
    let title = document.querySelector("title");
    title.innerHTML = "pomo" + "  " + iconTimers[count].pTag;
    changeColorSvg(colorTimers);
}
function changeColorSvg(colorTimers) {
    const Svg = document.querySelectorAll("path");
    Svg.forEach(function changeColorSvg(item, index) {
        Svg[index].setAttribute("fill", colorTimers[count].color);
    });
}
btnStart.addEventListener("click", Start);
let timerInterval;
const svgStart = document.getElementById("svg-start");
function Start() {
    if (document.getElementById("set-sound").checked) {
        document.getElementById("myAudioStart").play();
    }
    timerInterval = setInterval(timer, 1000);
    btnStart.removeEventListener("click", Start);
    btnStart.addEventListener("click", Stop);
    btnStart.value = "Stop";
    svgStart.innerHTML = "<path d='M27 6V26C27 26.5304 26.7893 27.0391 26.4142 27.4142C26.0391 27.7893 25.5304 28 25 28H20.5C19.9696 28 19.4609 27.7893 19.0858 27.4142C18.7107 27.0391 18.5 26.5304 18.5 26V6C18.5 5.46957 18.7107 4.96086 19.0858 4.58579C19.4609 4.21071 19.9696 4 20.5 4H25C25.5304 4 26.0391 4.21071 26.4142 4.58579C26.7893 4.96086 27 5.46957 27 6ZM11.5 4H7C6.46957 4 5.96086 4.21071 5.58579 4.58579C5.21071 4.96086 5 5.46957 5 6V26C5 26.5304 5.21071 27.0391 5.58579 27.4142C5.96086 27.7893 6.46957 28 7 28H11.5C12.0304 28 12.5391 27.7893 12.9142 27.4142C13.2893 27.0391 13.5 26.5304 13.5 26V6C13.5 5.46957 13.2893 4.96086 12.9142 4.58579C12.5391 4.21071 12.0304 4 11.5 4Z' fill='#471515'/>";
    changeColorSvg(colorTimers);
    minute.style.fontWeight = "bolder";
}
function timer() {
    setValueTimer();
    var min = parseInt(minute.innerHTML) - 1;
    sec--;
    setTimer(min, sec);
    if (min <= 0 && sec == 0) {
        clearInterval(timerInterval);
        if (document.getElementById("set-noti").checked) {
            const toast = document.getElementById('toast');
            toast.querySelector('.toast-body').innerHTML = "Finish Timer " + iconTimers[count].pTag + " ... ";
            toast.querySelector('.toast-body').style.color = colorTimers[count].backgroundBody;
            if (document.body.classList.contains("dark-mode")) {
                toast.querySelector('.toast-body').style.backgroundColor = "black";
            }
            else {
                toast.querySelector('.toast-body').style.backgroundColor = colorTimers[count].color;
            }
            toast.classList.add('visible');
            document.getElementById("myAlarm").play();
        }
        if (document.getElementById("auto-resume").checked) {
            addNextDesign();
            Start();
        }

    }
    if (sec == 0) {
        min--;
        if (min >= 0) {
            sec = 59;
        }
    }
}
function Stop() {
    clearInterval(timerInterval);
    btnStart.removeEventListener("click", Stop);
    btnStart.addEventListener("click", Start);
    btnStart.value = "Start";
    svgStart.innerHTML = "<path d='M22 13C21.9992 13.3439 21.9104 13.6818 21.7419 13.9816C21.5734 14.2814 21.3309 14.533 21.0375 14.7125L3.03749 25.7C2.73766 25.89 2.3914 25.9939 2.0365 26.0006C1.68159 26.0072 1.33169 25.9162 1.02499 25.7375C0.713758 25.5667 0.454302 25.3152 0.273924 25.0095C0.093547 24.7037 -0.00108208 24.355 -6.18584e-06 24V1.99996C-0.00108208 1.64496 0.093547 1.29623 0.273924 0.990471C0.454302 0.684709 0.713758 0.433218 1.02499 0.26246C1.33169 0.0837584 1.68159 -0.00725329 2.0365 -0.000640198C2.3914 0.00597289 2.73766 0.109956 3.03749 0.29996L21.0375 11.2875C21.3309 11.4669 21.5734 11.7185 21.7419 12.0183C21.9104 12.3181 21.9992 12.6561 22 13Z' fill='#471515'/>";
    changeColorSvg(colorTimers);
    // document.getElementById("myAudio").pause();
    minute.style.fontWeight = "normal";
}
const btnDarkMode = document.getElementById("darkMode");
btnDarkMode.addEventListener("click", function activeDarkMode() {
    document.body.classList.toggle("dark-mode");
    changeContentTimer();
});
function setTimer(min, sec) {
    if (min < 10 && sec < 10) {
        minute.innerHTML = "0" + min + "<br>" + "0" + sec;
        document.querySelector("title").innerHTML = "pomo   " + iconTimers[count].pTag + "  " + "0" + min + ":" + "0" + sec;
    }
    else if (min < 10) {
        minute.innerHTML = "0" + min + "<br>" + sec;
        document.querySelector("title").innerHTML = "pomo   " + iconTimers[count].pTag + "  " + "0" + min + ":" + sec;

    }
    else if (sec < 10) {
        minute.innerHTML = min + "<br>" + "0" + sec;
        document.querySelector("title").innerHTML = "pomo   " + iconTimers[count].pTag + "  " + min + ":" + "0" + sec;

    }

    else {
        minute.innerHTML = min + "<br>" + sec;
        document.querySelector("title").innerHTML = "pomo   " + iconTimers[count].pTag + "  " + min + ":" + sec;

    }
}
document.addEventListener('click', function () {
    toast.classList.remove('visible');
});
