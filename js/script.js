let form = document.getElementById("form");
let inputName = document.getElementById("name");
let author = document.getElementById("author");
let tbody = document.getElementById("tbody");
let select = document.getElementById("select");

let count = 1;
form.addEventListener('submit', function(e) {
    e.preventDefault();

    let tr = document.createElement('tr');
    tr.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputName.value}</td>
        <td>${select.value}</td>
        <td>${author.value}</td>
    `;
    tbody.appendChild(tr);
    
    inputName.value = '';
    select.value = 'Kitob turini tanlang';
    author.value = '';
    count++;
});