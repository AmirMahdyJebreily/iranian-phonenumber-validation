let operators = [];
let regexes = {
    "irmci": "(14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)",
    "mtn": "(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)",
    "rightel": "(20)|(21)|(22)|(23)",
    "talia": "(32)",
    "telekish": "(34)",
    "aptel": "(9910)|(9911)|(9913)|(9914)",
    "samantel": "(9999)|(999)",
    "shatel": "(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)",
    "anarestan": "(94)"
};
const allOprators = "/((09)|(\\+989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998)|(94)).?\\d{3}.?\\d{4}/g";
let code = "";

function setCode() {
    let prenumbers = "";
    operators.forEach((operator) => {
        prenumbers += regexes[operator] + "|";
    })
    code = `/((09)|(\+989))(${prenumbers.substring(0, prenumbers.length - 1)}).?\d{3}.?\d{4}/g`;
}

function select(value) {
    if (operators.includes(value)) {
        const index = operators.indexOf(value);
        if (index > -1) {
            operators.splice(index, 1);
        }
        document.getElementById(value).classList.remove("select")
    }
    else {
        operators.push(value)
        document.getElementById(value).classList.add("select")
    }
    if (operators.length > 0) {
        setCode();
    }
    else if (operators.length === 0) {
        selectAll()
    }


    document.getElementById("code").innerHTML = code;
}

function selectAll() {
    let elems = document.querySelectorAll(".select")
    elems.forEach((elem) => {
        elem.classList.remove("select");
    });


    code = allOprators;
    document.getElementById("code").innerHTML = code;
}

function copyText() {

    document.getElementById("copy").classList.remove("anim-shake");

    var textToCopy = code;

    var myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;

    document.body.appendChild(myTemporaryInputElement);

    myTemporaryInputElement.select();
    document.execCommand("Copy");

    document.body.removeChild(myTemporaryInputElement);

    document.getElementById("copy").classList.add("anim-shake");

}