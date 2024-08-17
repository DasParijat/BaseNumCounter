let canCopy = false;
const LIST_LIMIT = 10000;

function setBase(){
    // getting base number input
    let bnInput = document.getElementById('basenum');
    baseNumber = +bnInput.value;

    // base num can't be under 1
    if (baseNumber < 1) {
        baseNumber = 1;
    }

    return baseNumber;
}

function setRange(){
    // getting range min input
    let rangeInput = document.getElementById('rangemin');
    let rangeMin = +rangeInput.value;

    // getting range max input
    rangeInput = document.getElementById('rangemax');
    let rangeMax = +rangeInput.value;

    // Make sure rangeMax doesn't exceed rangeMin
    if (rangeMax < rangeMin + 1) {
        rangeMax = rangeMin;
    }

    // Makes sure list doesn't exceed limit
    if ((rangeMax - rangeMin) > LIST_LIMIT) {
        rangeMax = rangeMin + LIST_LIMIT - 1;

        // Indicates to user the changes made
        alert("Max range has been limited to " + rangeMax);
        document.getElementById('rangemax').value = rangeMax
    }

    return {rangeMin, rangeMax};
}

function decToBaseNum(num, base){
    let bnOutput = '';

    // Calculations
    if (base > 1) {
        // handles a base num NOT 1
        while (num > 0) {
            bnOutput = (num % base) + bnOutput;
            num = Math.floor(num / base);
        }

    } else {
        // handles a base num OF 1
        for (let i = 0; i < num; i++) {
            bnOutput = bnOutput + '0';
        }

    }

    return bnOutput || '0';
}

function count(base, {rangeMin, rangeMax}){
    let copyText = ''
    let curNum     

    // set up table
    const resultTable = document.getElementById('resultContainer');
    resultTable.innerHTML = `
        <tr>
            <th>(Base 10)</th>
            <th>Base ${base}</th>
        </tr>
    `;

    for (let i = rangeMin; i < rangeMax + 1; i++) {
        // get result for current number
        curNum = i;
        result = decToBaseNum(curNum, base);

        // create table row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>(${curNum})</td>
            <td>${result}</td>
        `;
        
        resultTable.appendChild(row);

        // Add onto text that'll be copied onto clipboard
        copyText += result;
        if (curNum != rangeMax) {
            copyText += ', ';
        }
      }
    
    // Copy results into clipboard
    if (canCopy) {
        navigator.clipboard.writeText(copyText);
    }
}

function setCanCopy() {
    canCopy = !canCopy;
}

function submitButton() {
    count(setBase(), setRange());
}
