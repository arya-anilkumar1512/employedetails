function register(){
  
    employee={empname:empna.value,employeeid:empid.value,employeedes:empde.value,employeejo:empjo.value}
    if(employee.employeeid in localStorage) {
        alert('emplyee already exists')
    }
    else{
        localStorage.setItem(employee.employeeid,JSON.stringify(employee))
    alert("Details saved successfully")
    }
}


function searchEmp(){
    key=search.value
    if(key in localStorage){
        emp=JSON.parse(localStorage.getItem(key))
        result.innerHTML=`<p> Employee Name is ${emp.empname}</p>
        <p> Employee ID is ${emp.employeeid}</p>
        <p> Employee Designation is ${emp.employeedes}</p>
        <p> Employee Job Level is ${emp.employeejo}</p>`

    }
    else{
        result.value=''
        alert('Employee doesnot exists')
    }
}