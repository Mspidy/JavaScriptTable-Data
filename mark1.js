let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let employees = [
    {
        name:'Prabhat',
        age:24,
        state: 'Bihar',
        country:'India'
    },
    {
        name:'Avi',
        age:22,
        state: 'UttarPradesh',
        country:'India'
    },
    {
        name:'Adi',
        age:26,
        state: 'Delhi',
        country:'India'
    },
    {
        name:'Nam',
        age:25,
        state: 'Maharastra',
        country:'India'
    },
    {
        name:'Ishita',
        age:21,
        state: 'Karatak',
        country:'India'
    }
]

let headers = ['Name','Age','State','Country'];

btnGet.addEventListener('click', ()=>{
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText =>{
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    employees.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text =>{
            let cell = document.createElement('th');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row)
    });
    myTable.appendChild(table);
});