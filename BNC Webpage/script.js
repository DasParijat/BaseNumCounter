
function setBase(){
    let bnInput = document.getElementById('basenum');
    baseNumber = +bnInput.value;

    if (baseNumber < 1) {
        baseNumber = 1;
    }

    console.log(baseNumber);
    return baseNumber;
}

function setRange(){
    let rangeInput = document.getElementById('rangemin');
    let rangeMin = +rangeInput.value;

    rangeInput = document.getElementById('rangemax');
    let rangeMax = +rangeInput.value;

    if (rangeMax < rangeMin + 1) {
        rangeMax = rangeMin;
    }

    console.log(rangeMin);
    console.log(rangeMax);
    return {rangeMin, rangeMax};
}

function decToBaseNum(num, base){
    let bnOutput = '';

    if (base > 1) {
        while (num > 0) {
            bnOutput = (num % base) + bnOutput;
            num = Math.floor(num / base);
        }
    } else {
        // handles a base num of 1
        for (let i = 0; i < num; i++) {
            bnOutput = bnOutput + '0';
        }
    }

    return bnOutput || '0';
}

function count(base, {rangeMin, rangeMax}){
    let curNum 
    console.clear()
    resultContainer.innerHTML = '';

    for (let i = rangeMin; i < rangeMax + 1; i++) {
        curNum = i + (rangeMin - 1);
        result = decToBaseNum(curNum, base);

        console.log(result);

        resultContainer.innerHTML += `Decimal: ${curNum}, Base ${base}: ${result}<br>`;
      }
}

function submitButton() {
    count(setBase(), setRange());
}