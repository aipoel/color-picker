const result = document.querySelector('.result');
const rgbValue = document.querySelector('.rgb-value');
const teks = document.querySelector('.teks');

const red = document.querySelector('input[name=red-points]');
const green = document.querySelector('input[name=green-points]');
const blue = document.querySelector('input[name=blue-points]');

function change(r, g, b) {
    if (red.value <= 80 && green.value <= 80 && blue.value <= 80) {
        teks.style.color = 'white';
    } else {
        teks.style.color = 'black';
    }
}

function hex(r) {
    let letter;
    let first = r % 16;
    let sec = Math.floor(r / 16) % 16;

    function convert(numb) {
        if (numb >= 10) {
            switch (numb) {
                case 10:
                    letter = 'A';
                    break;
                case 11:
                    letter = 'B';
                    break;
                case 12:
                    letter = 'C';
                    break;
                case 13:
                    letter = 'D';
                    break;
                case 14:
                    letter = 'E';
                    break;
                case 15:
                    letter = 'F';
                    break;
            }
        } else letter = numb.toString();
        return letter;
    }

    let hex1 = convert(first);
    let hex2 = convert(sec);
    return hex2 + hex1;
}

function rgbCooler() {
    let rv = red.value;
    let gv = green.value;
    let bv = blue.value;
    let rgb = 'rgb(' + rv + ', ' + gv + ', ' + bv + ')';
    result.style.backgroundColor = rgb;
    rgbValue.value = rgb;
    let hexR = hex(rv);
    let hexG = hex(gv);
    let hexB = hex(bv);
    document.querySelector('.hex-value').value = '#' + hexR + hexG + hexB;
    change(rv, gv, bv);
}
red.addEventListener('input', rgbCooler);
green.addEventListener('input', rgbCooler);
blue.addEventListener('input', rgbCooler);

const copyBtn = document.querySelectorAll('button[type=button]');

copyBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.previousElementSibling.select();
        document.execCommand('copy');
        e.target.nextElementSibling.style.display = 'block';
        e.target.nextElementSibling.style.color = rgbValue.value;
        setTimeout(function () {
            e.target.nextElementSibling.style.display = 'none';
        }, 1000);
    });
});