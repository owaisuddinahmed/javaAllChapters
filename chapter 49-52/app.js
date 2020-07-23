function submitItems(){
    var first = document.getElementById("f_name")
    var last = document.getElementById("l_name")
    var email = document.getElementById("mail")
    var phonenumb = document.getElementById("phone")
    var gend = document.getElementById("gender")
    document.write("Your name is : " +first.value+ " " +last.value+ " <br>")
    document.write("Your email is : " +email.value+ " <br>")
    document.write("Your phone# is : " +phonenumb.value+ " <br>")
    document.write("Your gender is :"+gend.value)
}

function expandPara(){
    var exp = document.getElementById("para")
    para.innerHTML = "A republic in S Asia, on the Arabian Sea: the Union of Pakistan, formed in 1947, comprised West and East Pakistan; East Pakistan gained independence as Bangladesh in 1971 and West Pakistan became Pakistan; a member of the Commonwealth from 1947, it withdrew from 1972 until 1989; contains the fertile plains of the Indus valley rising to mountains in the north and west Official language: Urdu. Official religion: Muslim. Currency: rupee. Capital: Islamabad. Pop: 193 238 868 (2013 est). Area: 801 508 sq km (309 463 sq miles) a former republic in S Asia consisting of the provinces of West Pakistan and East Pakistan (now Bangladesh), 1500 km (900 miles) apart: formed in 1947 from the predominantly Muslim parts of India"
}

var rIndex,
table = document.getElementById("table");
            
// check the empty input
function checkEmptyInput()
{
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;

    if(fname === ""){
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }
    else if(lname === ""){
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    else if(age === ""){
        alert("Age Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row
function addHtmlTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = age;
    // call the function to set the event to the new row
    selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{
    
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          // get the seected row index
          rIndex = this.rowIndex;
          document.getElementById("fname").value = this.cells[0].innerHTML;
          document.getElementById("lname").value = this.cells[1].innerHTML;
          document.getElementById("age").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;
   if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;
    table.rows[rIndex].cells[2].innerHTML = age;
  }
}

function removeSelectedRow()
{
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
}