// Write your solution in this file!

const employee ={
    name:{},
    streetAddress:{}
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee,[key]:value};
    newObj[key]=value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj1 = {...employee}
    delete newObj1[key];
    return newObj1;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}


