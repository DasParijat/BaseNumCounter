// Base Number Counter - JS Version

let canCopy = false;
const LIST_LIMIT = 10000;

function warnChange(alertMessage, id, newValue) {
    alert(alertMessage);
    document.getElementById(id).value = newValue;
}

function setBase(){
    // getting base number input
    let bnInput = document.getElementById('basenum');
    baseNumber = +bnInput.value;

    // base num can't be under 1
    if (baseNumber < 1) {
        baseNumber = 1;
        warnChange("Base number has to be above 0", 'basenum', 1);
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
        warnChange("Due to max range being less than min range, it has been set equal to min",
             'rangemax', rangeMax);
    }

    // Makes sure list doesn't exceed limit
    if ((rangeMax - rangeMin) > LIST_LIMIT) {
        rangeMax = rangeMin + LIST_LIMIT - 1;
        warnChange(("No list exceeds length of 10k. Max range has been limited to " + rangeMax),
         'rangemax', rangeMax);

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
            bnOutput += '0';
        }

    }

    return bnOutput || '0';
}

function count(base, {rangeMin, rangeMax}){
    let copyText = ''; 

    // set up table
    const resultTable = document.getElementById('resultContainer');
    resultTable.innerHTML = `
        <tr>
            <th>(Base 10)</th>
            <th>Base ${base}</th>
        </tr>
    `;

    // make table/list
    for (let i = rangeMin; i < rangeMax + 1; i++) {
        // get result for current number 'i'
        result = decToBaseNum(i, base);

        // create table row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>(${i})</td>
            <td>${result}</td>
        `;
        resultTable.appendChild(row);

        // Add onto text that'll be copied onto clipboard
        copyText += result;
        if (i != rangeMax) {
            copyText += ', ';
        }
      }
    
    // Copy results into clipboard
    if (canCopy) {
        navigator.clipboard.writeText(copyText);
        alert("Copied list");
    }
}

function setCanCopy() {
    canCopy = !canCopy;
}

function submitButton() {
    count(setBase(), setRange());
}
