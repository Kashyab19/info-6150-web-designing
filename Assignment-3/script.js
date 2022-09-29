//Serial Number 3

var addNewStudentButton = document.getElementById('add');
var tableId = document.getElementById('myTable');
const table = document.querySelectorAll("table");
console.log(table);
var rowCounter = table[0].childNodes[1].children.length;
const checkBoxes = document.querySelectorAll('input[type = "checkbox"]');
console.log(checkBoxes)

var submitButton = document.getElementById('button');
var checkBoxesCounted =0;

const dropDownRow = document.querySelectorAll(".dropDownTextArea");
var dropDownImage = document.querySelectorAll("img");

submitButton.disabled = true;
var rowCounter = table[0].childNodes[1].children.length;
var rowCounterToAddEditColumn = rowCounter;
console.log(rowCounter)
if(rowCounter>0){
  rowCounter = rowCounter -1;
  rowCounter = rowCounter/2;
}

function calculateRowCounterOnAddition(){
  rowCounter+=1;
  console.log(rowCounter);
  rowCounterToAddEditColumn+=2;
}

function calculateRowCounterOnDeletion(){
  rowCounter>0 ? rowCounter -=1 : rowCounter;
  console.log(rowCounter);  
  rowCounterToAddEditColumn-=2;
}

addNewStudentButton.onclick = function() {
    var extraRow = tableId.insertRow();
    var extraRowCount = rowCounter+1;
    var extraExtraRow = tableId.insertRow();
    var newestCell = extraExtraRow.insertCell();
    
    extraRow.innerHTML = `<tr>
                              <td><input type="checkbox"/><br /><br /><img src="down.png" width="25px" /></td>
                              <td>Student ${rowCounter+1}</td>
                              <td>Teacher ${rowCounter+1}</td>
                              <td>Approved</td>
                              <td>Fall</td>
                              <td>TA</td>
                              <td>12345</td>
                              <td>100%</td>
                              <td></td>
                           </tr>`;
    
    newestCell.innerHTML = `<tr class="dropDownTextArea"><td colspan="8">
                              Advisor:<br /><br />
                              Award Details<br />
                              Summer 1-2019(TA)<br />
                              Budget Number: <br />
                              Tuition Number: <br />
                              Comments:<br /><br /><br />
                              Award Status:<br /><br /><br />
                            </td></tr>`;
    
    extraExtraRow.classList.add("dropDownTextArea");
    extraExtraRow.style.display="none";

    var checkboxOfExtraRow = extraRow.children[0].children[0];
    var toggleButtonofExtraRow = extraRow.children[0].children[3];

    checkboxOfExtraRow.onchange = function(){
      var grandParentNode = this.parentElement.parentElement;
      var siblingOfGrandParentNode = grandParentNode.nextElementSibling;
      console.log(siblingOfGrandParentNode);
    
      this.checked? checkBoxesCounted++ : checkBoxesCounted--;
      checkBoxesCounted>0? submitButton.disabled = false : submitButton.disabled = true;  
    
      if(this.checked){
        isChecked(grandParentNode, siblingOfGrandParentNode);
      }
      else{
        isUnChecked(grandParentNode); 
        columnAdded = 1; 
      } 
    }
    toggleButtonofExtraRow.onclick = function(){
      var siblingOfGrandParentNodeOfImage = this.parentElement.parentElement.nextElementSibling;
  
      siblingOfGrandParentNodeOfImage.style.display === "block" ? siblingOfGrandParentNodeOfImage.style.display = "none" : siblingOfGrandParentNodeOfImage.style.display = "block";
    }

    console.log(extraRow);
    calculateRowCounterOnAddition();
    window.alert("The records of student " + extraRowCount + " has been inserted");
    
}

//Serial Number 2

for(i=0; i< dropDownRow.length;i++){
  dropDownRow[i].style.display = "none";
    
}

for(i=0; i<dropDownImage.length;i++){
  dropDownImage[i].onclick = function(){
    var siblingOfGrandParentNodeOfImage = this.parentElement.parentElement.nextElementSibling;

    siblingOfGrandParentNodeOfImage.style.display === "block" ? siblingOfGrandParentNodeOfImage.style.display = "none" : siblingOfGrandParentNodeOfImage.style.display = "block"
    
  }
}


for(i=0; i<checkBoxes.length; i++){
  console.log(checkBoxes.length)
  checkBoxes[i].onchange = function(){
    
    var grandParentNode = this.parentElement.parentElement;
    var siblingOfGrandParentNode = grandParentNode.nextElementSibling;
    console.log(siblingOfGrandParentNode);
   
  
    this.checked? checkBoxesCounted++ : checkBoxesCounted--;
    checkBoxesCounted>0? submitButton.disabled = false : submitButton.disabled = true;  
    
    if(this.checked){
      isChecked(grandParentNode, siblingOfGrandParentNode, i);
    }
    else{
      isUnChecked(grandParentNode); 
    }
  }
}

var columnAdded = 0;
function isChecked(grandParentNode, siblingOfGrandParentNode, i)
{ 
  grandParentNode.style.backgroundColor = "yellow";
  submitButton.style.background = "orange";
  grandParentNode.children[8].innerHTML = `<button>Delete</button>`;
  console.log(grandParentNode.children[8]);
  if(columnAdded == 0){
    var header = table[0].childNodes[1].children[0].insertCell();
    header.innerHTML = `<th>EDIT</th>`;
    header.style.color = "white";
    header.style.background = "#a7c942";
    header.classList.add("edit-col")
    for(ctr=1; ctr<rowCounterToAddEditColumn; ctr+=2){
      table[0].childNodes[1].children[ctr].insertCell();
      console.log(table[0].childNodes[1].children[ctr]);
      columnAdded =1;
    }  
  } 
  grandParentNode.children[9].innerHTML = `<button>Edit</button>`;

  grandParentNode.children[8].firstChild.onclick = function(){
    console.log("Delete")
    grandParentNode.style.display = "none";
    siblingOfGrandParentNode.style.display = "none";
    submitButton.style.background = "grey";
    calculateRowCounterOnDeletion();
    
  }

  grandParentNode.children[9].firstChild.onclick = function(){
    console.log("Edit")
    window.prompt("Edit your details");
  }
}

function isUnChecked(grandParentNode){
  grandParentNode.style.backgroundColor = "white";
      submitButton.style.background = "grey";
      grandParentNode.children[8].innerHTML = "";
      console.log(columnAdded);
      if(columnAdded == 1){
        for(ctr=1; ctr<rowCounterToAddEditColumn; ctr+=2){
          console.log(table[0].childNodes[1].children[ctr]);
        }
      }
}

//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

