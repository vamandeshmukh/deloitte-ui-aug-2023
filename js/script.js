
const empList = [
    { eid: 101, firstName: 'Sonu', salary: 90000 },
    { eid: 102, firstName: 'Monu', salary: 98000 },
    { eid: 103, firstName: 'Tonu', salary: 95000 },
    { eid: 104, firstName: 'Ponu', salary: 99000 }
];

empList.forEach(e => console.log(e.eid, e.firstName, e.salary));

// display this data in the HTML table 

const empData = document.getElementById('emp-data');

// // solution 1 - using string concat looping  
let temp = '';

empList.forEach((emp) => {
    console.log(emp);
    temp += `<tr> 
    <td>${emp.eid}</td>
    <td>${emp.firstName}</td>
    <td>${emp.salary}</td>
    </tr>`;
});

console.log(temp);
empData.innerHTML = temp;
// empData.textContent = temp;

// solution 2 - using createElement and appendChild methods
// empList.forEach((emp) => {
//     console.log(emp);
//     const row = document.createElement('tr');
//     row.innerHTML = `<td>${emp.eid}</td><td>${emp.firstName}</td><td>${emp.salary}</td>`;
//     empData.appendChild(row);
// });



// another example
// const blogData = document.getElementById('blog-data');
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(resp => resp.json())
//     .then(resp => {
//         resp.forEach(elem => {
//             console.log(elem);
//             const para = document.createElement('p');
//             para.innerHTML = elem.title;
//             blogData.appendChild(para);
//         });
//     });
