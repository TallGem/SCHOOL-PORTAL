var studentArr = [];


function addStudent(){
    if(studentName.value != ""){
        studentArr.push(studentName.value)
        studentName.value = ""
        document.getElementById("showEmptyErrorMessage").style.display ="none"
        displayItems();
        document.getElementById("noStudentRegistered").style.display = "none"

       
    }
    else{
        document.getElementById("showEmptyErrorMessage").style.display ="block"
        console.log("");   
    }
}


function displayItems(){
    document.getElementById("showEmptyErrorMessage").style.display = "none"
    document.getElementById("allButtons").style.display = "block"
    studentTable.innerHTML = ""
    studentTable.innerHTML = `
    <tr>
    <th>S/N</th>
    <th>Student Name</th>
    </tr>
    `
    for (i=0; i<studentArr.length; i++){
        studentTable.innerHTML += `
        <tr>
        <td>${i+1}</td>
        <td>${studentArr[i]}</td>
        </tr>
        `
    }

}

function editItems(){
    var newIndex = editedIndex.value;
    var newStudent = editedDetails.value;
    if(editedIndex.value!= "" && editedDetails!= "" ){
        if(studentArr.length > newIndex-1){
            studentArr.splice(newIndex-1, 1, newStudent)
        }
        else{
            alert(`index is only ${studentArr.length} long`)
        }
    } else{
        alert("please fill in the details")
    }
    displayItems();
}

function addItemsToTheStart(){
    var studentName = prompt("Enter the item to start")
    studentArr.unshift(studentName)
    displayItems();
}

function deleteFirstItems(){
    studentArr.shift()
    displayItems();
}

function deleteLastItem(){
    studentArr.pop()
    displayItems();
}

function deleteAnyItem(){
var startingIndex = Number(prompt("Enter the index number of the item you want to start deleting from"))
var numberOfItemsToDelete = Number(prompt("Number of items to delete"))
var confirmation = confirm("Are you sure you want to perform this operation")
if (confirmation){
    studentArr.splice(startingIndex-1, numberOfItemsToDelete)
    displayItems()
}
else{
    displayItems()
}

}

 function deleteAll(){
    var confirmation = confirm ("Are you sure you want to delete all")
    if(confirmation){
        studentArr.splice(0,studentArr.length)
        displayItems()

    }
    else{
        displayItems()
    }
 }





