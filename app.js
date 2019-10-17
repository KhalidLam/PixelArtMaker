// colorPicker , form & table
const myColor = document.getElementById('colorPicker');
const form  = document.getElementById('sizePicker');
const myTable = document.getElementById("pixelCanvas");

// height and width 
var height  = document.getElementById('inputHeight');
var width   = document.getElementById('inputWidth');

// run makeGrid when the submit clicked
form.addEventListener('submit', makeGrid);

// add color when a cell is clicked
myTable.addEventListener('click', addColor);


function addColor(evt){
    // add color to cell 
    var cell = evt.target;
    
    // check if the clicked point is a TD tag 
    if (cell.nodeName == "TD"){
        cell.style.cssText = 'background-color: '+ myColor.value;
    }
    
}

function resetTable(){

    while(myTable.rows.length > 0){ 
        document.querySelector('tr').remove();
    }

}

function createTable(){

    for (var r = 1; r <= height.value; r++) {
        var newRow = document.createElement('tr');

        for (var c = 1; c <= width.value; c++) {

            var newCol = document.createElement('td');
            // set id to each td ( rc11 := row 1 column 1 )
            newCol.setAttribute('id', "rc"+r+c);
            newRow.appendChild(newCol);

        }

        myTable.appendChild(newRow);
    }

}

function makeGrid(event) {
    
    // cancel the form action
    event.preventDefault();

    // reset table if its not empty
    if ( myTable.rows.length > 0 ) resetTable(); 
    
    // create table rows and columns
    createTable();


    // remove Event Listener after creating the table
    // form.removeEventListener('submit', createTable);    
}




var scope = "kijf";
function check(){
    var scope = "ee";
    function f(){
        return scope;
    }
    return f;
}

console.log(check())