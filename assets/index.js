import { textMarshal } from 'https://cdn.jsdelivr.net/npm/text-marshal@0.0.2/+esm'

(function () {
    const phonenumber = document.getElementById("phonenumber");

    phonenumber.oninput = function (e) {
        let data = textMarshal({
            input: e.target.value,
            template: phonenumber.getAttribute("data-pattern"),
            disallowCharacters: [/[a-z]/],
        });

        phonenumber.value = data.marshaltext;
    }

    phonenumber.onchange = function (e) {
        const styles = {
            err: {
                text: "شماره اشتباه است!",
                color: "text-rose-600"
            },
            default: {
                text: "تستش کن!",
                color: "text-gray-950"
            },
            success: {
                text: "",
                color: "text-teal-900"
            }
        };
        const label = document.getElementById("lable");

        const regexes = [
            {
                validationRegex: /((0?9)|(\+?989))((32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41))\W?\d{4}\W?\d{3}/g,
                successText: "شماره ایرانسل"
            },
            {
                validationRegex: /((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96))\W?\d{4}\W?\d{3}/g,
                successText: "شماره همراه اول"
            },
            {
                validationRegex: /((0?9)|(\+?989))((20)|(21)|(22)|(23))\W?\d{4}\W?\d{3}/g,
                successText: "شماره رایتل"
            }
        ]

        let text = e.target.value
        if (text === "") {
            label.classList.remove(styles.success.color);
            label.classList.remove(styles.err.color);
            label.classList.add(styles.default.color);
            label.innerHTML = styles.default.text;
            return;
        }

        for (const operator of regexes) {
            let isOp = (new RegExp(operator.validationRegex)).test(text)
            if (isOp) {
                label.classList.remove(styles.err.color);
                label.classList.remove(styles.default.color);
                label.classList.add(styles.success.color);
                label.innerHTML = operator.successText;
                return;
            }

            label.classList.remove(styles.success.color);
            label.classList.remove(styles.default.color);
            label.classList.add(styles.err.color);
            label.innerHTML = styles.err.text;
        }

    }

})()



// let operators = [];
// let regexes = {
//     "irmci": "(14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)",
//     "mtn": "(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)",
//     "rightel": "(20)|(21)|(22)|(23)",
//     "talia": "(32)",
//     "telekish": "(34)",
//     "aptel": "(9910)|(9911)|(9913)|(9914)",
//     "samantel": "(9999)|(999)",
//     "shatel": "(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)"
// };
// const allOprators = "/((0?9)|(\\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\\W?\\d{3}\\W?\\d{4}/g";
// let code = "";

// document.getElementById("code").innerHTML = allOprators;

// function setCode() {
//     let prenumbers = "";
//     operators.forEach((operator) => {
//         prenumbers += regexes[operator] + "|";
//     })
//     code = `/((0?9)|(\\+?989))(${prenumbers.substring(0, prenumbers.length - 1)})\\W?\d{3}\\W?\d{4}/g`;
// }

// function select(value) {
//     code = "";
//     if (operators.includes(value)) {
//         const index = operators.indexOf(value);
//         if (index > -1) {
//             operators.splice(index, 1);
//         }
//         document.getElementById(value).classList.remove("select")
//     }
//     else {
//         operators.push(value)
//         document.getElementById(value).classList.add("select")
//     }
//     if (operators.length > 0) {
//         setCode();
//     }
//     else if (operators.length === 0) {
//         selectAll()
//     }


//     document.getElementById("code").innerHTML = code;
// }

// function selectAll() {
//     let elems = document.querySelectorAll(".select")
//     elems.forEach((elem) => {
//         elem.classList.remove("select");
//     });

//     operators = [];
//     code = allOprators;
//     document.getElementById("code").innerHTML = code;
// }

// function copyText() {

//     document.getElementById("copy").classList.remove("anim-shake");

//     var textToCopy = code;

//     var myTemporaryInputElement = document.createElement("input");
//     myTemporaryInputElement.type = "text";
//     myTemporaryInputElement.value = textToCopy;

//     document.body.appendChild(myTemporaryInputElement);

//     myTemporaryInputElement.select();
//     document.execCommand("Copy");

//     document.body.removeChild(myTemporaryInputElement);

//     document.getElementById("copy").classList.add("anim-shake");

// }
