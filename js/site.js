//take user input and print numbers to the page
function printNumbers() {
    let startNum = parseInt(document.getElementById("numOne").value);
    let endNum = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(startNum, endNum);
    displayData(numbers);
}

//gets the range of numbers
function getRange(startNum, endNum) {
    let numberArray = [];
    for (let index = startNum; index <= endNum; index++) {
        numberArray.push(index);
    }
    return numberArray;
}

//displays the numbers of the page

function displayData(numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //ImportNode
    //clear the table
    resultsBody.innerHTML = "";

    //loop over every element in the numbers array
    //get the value and write it to the page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        //return an array of columns from the template
        let cols = dataRow.querySelectorAll("td");

        //loop over the columns
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[i + colIndex];
            if (value % 3 == 0 && value % 5 == 0) {
                cols[colIndex].classList.add("fizzbuzz")
                cols[colIndex].textContent = "FizzBuzz";
            } else if (value % 3 == 0) {
                cols[colIndex].classList.add("fizz")
                cols[colIndex].textContent = "Fizz";
            } else if (value % 5 == 0) {
                cols[colIndex].classList.add("buzz")
                cols[colIndex].textContent = "Buzz";
            } else {
                cols[colIndex].classList.add("value")
                cols[colIndex].textContent = value;

            }
            //Note: td's use textContent to set content


            //add the row to the page
            resultsBody.appendChild(dataRow);
        }


    }
}