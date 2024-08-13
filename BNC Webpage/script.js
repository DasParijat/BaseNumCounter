let baseNumber = 1;

function SetBase(){
    var bnInput = document.getElementById('basenum');
    baseNumber = +bnInput.value;

    if (baseNumber < 1) {
        baseNumber = 1;
    }

    console.log(baseNumber);
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