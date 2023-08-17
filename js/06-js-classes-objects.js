
// OOP in JS 

// class, obeject of the class, inheritance 

class Employee {

    eid;
    firstName;
    salary;

    constructor(eid, firstName, salary) {
        this.eid = eid;
        this.firstName = firstName;
        this.salary = salary;
    }

    printEmpData = () => {
        console.log(this.eid, this.firstName, this.salary);
    };

    // printEmpData() {
    //     console.log(this.eid, this.firstName, this.salary);
    // };

}

// java 
// Employee obj = new Employee();

// JS 
const obj = new Employee();
obj.printEmpData();

const obj2 = new Employee(101, 'Sonu', 90000.50);
obj2.printEmpData();

