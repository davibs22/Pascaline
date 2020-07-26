var resultTEMP = 0
var equationTEMP = ""
var theme = "night"


function functionAC() {
    resultTEMP = 0
    equationTEMP = ""
    document.getElementById("equation").innerHTML = equationTEMP
    document.getElementById("result").innerHTML = resultTEMP
}

function functionClick1() {
    equationTEMP += "1"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick2() {
    equationTEMP += "2"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick3() {
    equationTEMP += "3"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick4() {
    equationTEMP += "4"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick5() {
    equationTEMP += "5"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick6() {
    equationTEMP += "6"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick7() {
    equationTEMP += "7"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick8() {
    equationTEMP += "8"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick9() {
    equationTEMP += "9"
    document.getElementById("equation").innerHTML = equationTEMP
}
function functionClick0() {
    equationTEMP += "0"
    document.getElementById("equation").innerHTML = equationTEMP
}

function myFunction(event) {
    var x = event.which || event.keyCode;
     switch (x) {
        case 49:
            functionClick1()
            break;
        case 50:
            functionClick2()
            break;
        case 51:
            functionClick3()
            break;
        case 52:
            functionClick4()
            break;
        case 53:
            functionClick5()
            break;
        case 54:
            functionClick6()
            break;
        case 55:
            functionClick7()
            break;
        case 56:
            functionClick8()
            break;
        case 57:
            functionClick9()
            break;
        case 48:
            functionClick0()
            break;
        }
}

function themeMod() {
    if (theme == "night") {
        themeDay()
    } else if (theme == "day") {
        themeNight()
    }
}
function themeDay() {
    var elem = document.getElementById("buttonTheme");
    var id = setInterval(frame, 10);   
    var pos = 37;
    function frame() {
        if (pos == 54) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
        }
    }
    appDay()
    theme = "day"
}
function themeNight() {
    var elem = document.getElementById("buttonTheme");
    var id = setInterval(frame, 10);   
    var pos = 54;
    function frame() {
        if (pos == 37) {
            clearInterval(id);
        } else {
            pos--; 
            elem.style.top = pos + 'px'; 
        }
    }
    appNight()
    theme = "night"
}

function appDay() {
    document.getElementById("buttonTheme").style.backgroundColor = "#555A60";
    document.getElementById("buttonThemeContent").style.backgroundColor = "#F4AB41";
    document.getElementById("background").className = "background-day";
    document.getElementById("buttonACNoSpace").className = "button-1-day";
    document.getElementById("button+/-Space").className = "button-2-day space-button";
    document.getElementById("button%Space").className = "button-2-day space-button";
    document.getElementById("button/Space").className = "button-3-day space-button";
    document.getElementById("button9Space").className = "button-2-day space-button";
    document.getElementById("button8Space").className = "button-2-day space-button";
    document.getElementById("button7NoSpace").className = "button-2-day";
    document.getElementById("buttonxSpace").className = "button-3-day space-button";
    document.getElementById("button4NoSpace").className = "button-2-day";
    document.getElementById("button5Space").className = "button-2-day space-button";
    document.getElementById("button6Space").className = "button-2-day space-button";
    document.getElementById("button-Space").className = "button-3-day space-button";
    document.getElementById("button1NoSpace").className = "button-2-day";
    document.getElementById("button2Space").className = "button-2-day space-button";
    document.getElementById("button3Space").className = "button-2-day space-button";
    document.getElementById("button+Space").className = "button-3-day space-button";
    document.getElementById("button0NoSpace").className = "button-2-day";
    document.getElementById("button.Space").className = "button-2-day space-button";
    document.getElementById("button=Space").className = "button-4-day space-button";
}
function appNight() {
    document.getElementById("buttonTheme").style.backgroundColor = "#F4AB41";
    document.getElementById("buttonThemeContent").style.backgroundColor = "#151F22";
    document.getElementById("background").className = "background-night";
    document.getElementById("buttonACNoSpace").className = "button-1";
    document.getElementById("button+/-Space").className = "button-2 space-button";
    document.getElementById("button%Space").className = "button-2 space-button";
    document.getElementById("button/Space").className = "button-3 space-button";
    document.getElementById("button9Space").className = "button-2 space-button";
    document.getElementById("button8Space").className = "button-2 space-button";
    document.getElementById("button7NoSpace").className = "button-2";
    document.getElementById("buttonxSpace").className = "button-3 space-button";
    document.getElementById("button4NoSpace").className = "button-2";
    document.getElementById("button5Space").className = "button-2 space-button";
    document.getElementById("button6Space").className = "button-2 space-button";
    document.getElementById("button-Space").className = "button-3 space-button";
    document.getElementById("button1NoSpace").className = "button-2";
    document.getElementById("button2Space").className = "button-2 space-button";
    document.getElementById("button3Space").className = "button-2 space-button";
    document.getElementById("button+Space").className = "button-3 space-button";
    document.getElementById("button0NoSpace").className = "button-2";
    document.getElementById("button.Space").className = "button-2 space-button";
    document.getElementById("button=Space").className = "button-4 space-button";
}
