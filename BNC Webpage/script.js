let baseNumber = 1;

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
    var rangeMin = +rangeInput.value;

    rangeInput = document.getElementById('rangemax');
    var rangeMax = +rangeInput.value;

    if (rangeMax < rangeMin) {
        rangeMax = rangeMin;
    }

    console.log(rangeMin);
    console.log(rangeMax);
}

function decToBaseNum(num){
    num = 10; // test number

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

    console.log(bnOutput);
    return bnOutput || '0';
}

function count(base, countMin, countMax){
    var curNum 
    for (let i = countMin; i < countMax; i++) {
        curNum = i + (countMin + 1);
        console.log(curNum);
      }
}

function submitButton() {
    setBase();
    setRange();
}