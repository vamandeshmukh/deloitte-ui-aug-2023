
// JS object 

// JS array 
const empList = [];

// JS object 
const empData = {
    eid: 101,
    firstName: 'Sonu',
    salary: 90000.50,
    isMarried: false,
    phones: [9876543210, 6789012345],
    address: { street: 'Abids road', city: 'Hyderabad', pin: 500001 },
    role: 'Developer',
    getSalary: function () { console.log(this.salary); }
};

console.log(empData.firstName);
console.log(empData.address.city);