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
    
}



