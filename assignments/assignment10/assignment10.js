//q1 and q2
var companyData =
{
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "first name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raise eligible": "true"
        },
        {
            "first name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raise eligible": "true"
        },
        {
            "first name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raise eligible": "false"
        }
    ]
};

console.log(companyData);

//q3
const newEmployee = {
    "first name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise eligible": "false"
};

companyData['employees'].push(newEmployee);
console.log(companyData);

//q4
let totalSalary = 0;
for (let i = 0; i < companyData.employees.length; i++) {

    let salary = companyData.employees[i].salary;
    totalSalary += salary;

}
console.log('the total salary is $' + totalSalary);

//q5
for (let i = 0; i < companyData.employees.length; i++) {

    let raiseEligible = companyData.employees[i]["raise eligible"];
    if (raiseEligible === 'true') {
        let salary = companyData.employees[i].salary;

        companyData.employees[i].salary = salary;
        raiseEligible = 'false';
        console.log(companyData.employees[i]["first name"] + "'s salary was originally $" + salary + ' but is now $' + salary * 1.1 + ', and their raise eligibility is now ' + raiseEligible);

    }
}

//q6
let employee = companyData.employees;
for (let i = 0; i < employee.length; i++) {

    employee[i].wfh = 'false';

    if (employee[i]["first name"] === 'Anna' || employee[i]["first name"] === 'Sam') {
        employee[i].wfh = 'true';
    }

    console.log(employee[i]["first name"] + "'s work from home status is " + employee[i].wfh);
}
