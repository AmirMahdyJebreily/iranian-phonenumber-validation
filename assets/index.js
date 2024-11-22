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




