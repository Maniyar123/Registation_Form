const studentData=[]
var selectedRow=null;
//------------ password validation----------

function validatePassword(){
    var password=document.getElementById("pass").value;
    var confirmPassword=document.getElementById("conf").value;
    if(password!==confirmPassword){
       document.getElementById("alert").innerText="Confirm password not Matched";
       document.getElementById("alert").style.color="red";
        document.getElementById("but1").disabled=true;
        return false;
    }
    for(var i=0;i<password.length;i++){
        if(password[i]!==confirmPassword[i]){
            document.getElementById("alert").innerText=("password do not match at position"+(i+1));
        return false;
        }
    }
    document.getElementById("alert").innerText="password matched";
    document.getElementById("alert").style.color="green";
    // document.getElementById("but1").disabled=false;

    return true;
}


// ----------table div------
function table(){
    let table=document.getElementById("table").style.display="block";
    }


//------------form div---------
function form(){
    
    let form=document.getElementById("form")
    form.style.position="relative"
    form.style.left="10px";
    // document.getElementById("table").style.display=block;  
    
}



// --------submit button---------
    
    function fill(){
        // var fields=true;
    if(num.value.length>0&&fn.value.length>0&&ln.value.length>0&&em.value.length>0&&pass.value.length>0&&conf.value.length>0&&field.value.length>0 ){
        document.getElementById("but1").disabled=false; 
    }else{
        document.getElementById("but1").disabled=true;
    }
    }



    // ----------serial number validation---------------
    function data(){
        const sno = document.getElementById("num").value;
        const firstname = document.getElementById("fn").value;
        const lastname = document.getElementById("ln").value;
        const field = document.getElementById("field").value;
        const password = document.getElementById("pass").value;
        const c_password = document.getElementById("conf").value;
        
        
    
    function isSerialNumberUnique(serialNumber) {
        return studentData.every(data => data.serialNumber !== serialNumber);
    }
    if (!isSerialNumberUnique(sno)) {
        alert("Serial Number must be unique.");
        document.getElementById("but1").disabled=true;
    }
    studentData.push({
        serialNumber: sno,
        fName: firstname,
        lNumber:lastname ,
        Field: field,
        pass: password,
        c_pass: c_password,

    });
    }



// ----------table data submission through form----------

function onFormSubmit(){
var formData= readFormData();
if(selectedRow==null){
insertNewRecord(formData);
}else
updateRecord(formData)

resetForm();

}


function readFormData(){
    var formData={};
    formData["num"]=document.getElementById("num").value;
    formData["fn"]=document.getElementById("fn").value;
    formData["ln"]=document.getElementById("ln").value;
    formData["field"]=document.getElementById("field").value;
    formData["em"]=document.getElementById("em").value;
    formData["pass"]=document.getElementById("pass").value;
    formData["conf"]=document.getElementById("conf").value;
    return formData;
}

//--------------inserting values into table body-------------
function insertNewRecord(data){
    var table=document.getElementById("infor").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.num;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.fn;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.ln;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.field;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.em;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.pass;
    cell7=newRow.insertCell(6);
    cell7.innerHTML=data.conf;
    cell8=newRow.insertCell(7);
    cell8.innerHTML='<button onclick="onEdit(this)">Update</button>';
    cell9=newRow.insertCell(8);
    cell9.innerHTML='<button onclick="onDelete(this)">Delete</button>';
    }



// -----------reset form after submitting values.-------------------
function resetForm(){
    document.getElementById("num").value="";
    document.getElementById("fn").value="";
    document.getElementById("ln").value="";
    document.getElementById("field").value="";
    document.getElementById("em").value="";
    document.getElementById("pass").value="";
    document.getElementById("conf").value="";

    selectedRow=null;
}




// ---------table update and delete-------
function onEdit(td){
  selectedRow=td.parentElement.parentElement;
   document.getElementById("num").value=selectedRow.cells[0].innerHTML;
   document.getElementById("fn").value=selectedRow.cells[1].innerHTML;
   document.getElementById("ln").value=selectedRow.cells[2].innerHTML;
   document.getElementById("field").value=selectedRow.cells[3].innerHTML;
   document.getElementById("em").value=selectedRow.cells[4].innerHTML;
   document.getElementById("pass").value=selectedRow.cells[5].innerHTML;
   document.getElementById("conf").value=selectedRow.cells[6].innerHTML;
}
function onDelete(td){
    if (confirm('Are you sure to delete this record ?')) {
    row=td.parentElement.parentElement;
    document.getElementById("infor").deleteRow(row.rowIndex);
    resetForm();
}
}



// -------------update record/update button--------------
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.num;
    selectedRow.cells[1].innerHTML=formData.fn;
    selectedRow.cells[2].innerHTML=formData.ln;
    selectedRow.cells[3].innerHTML=formData.field;
    selectedRow.cells[4].innerHTML=formData.em;
    selectedRow.cells[5].innerHTML=formData.pass;
    selectedRow.cells[6].innerHTML=formData.conf;
}



// -------------main function-----------------
   function main(){
   
        fill()
        form()
        table()
        data()

    }