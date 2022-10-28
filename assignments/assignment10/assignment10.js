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
            "salary": "40000",
            "raise eligible": "true"
        },
        {
            "first name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": "18500",
            "raise eligible": "true"
        },
        {
            "first name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": "21200",
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
    "salary": "25600",
    "raise eligible": "false"
};

companyData['employees'].push(newEmployee);
console.log(companyData);

//q4
let totalSalary = 'the total salary is $';
for (let i = 0; i < companyData.length; i++) {
    console.log("hello" + i);
}
// console.log(totalSalary);