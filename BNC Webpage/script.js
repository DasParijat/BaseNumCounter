let baseNumber = 1;
let rangeMin;
let rangeMax;

function setBase(){
    var bnInput = document.getElementById('basenum');
    baseNumber = +bnInput.value;

    if (baseNumber < 1) {
        baseNumber = 1;
    }

    console.log(baseNumber);
}

function setRange(){
    var rangeInput = document.getElementById('rangemin');
    rangeMin = +rangeInput.value;

    rangeInput = document.getElementById('rangemax');
    rangeMax = +rangeInput.value;

    if (rangeMax < rangeMin) {
        rangeMax = rangeMin;
    }

    console.log(rangeMin);
    console.log(rangeMax);
}

function decToBaseNum(num){
    let bnOutput = '';

    if (baseNumber > 1) {
        while (num > 0) {
            bnOutput = (num % baseNumber) + bnOutput;
            num = Math.floor(num / baseNumber);
        }
    } else {
        // handles a base num of 1
        for (let i = 0; i < num; i++) {
            bnOutput = bnOutput + '0';
        }
    }

    return bnOutput || '0';
}

function count(){
    var curNum 
    console.clear()
    for (let i = rangeMin; i < rangeMax + 1; i++) {
        curNum = i + (rangeMin - 1);
        console.log(decToBaseNum(curNum))
      }
}

function submitButton() {
    setBase();
    setRange();
    count();
}