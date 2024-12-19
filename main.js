let form = document.forms[0];
let result = document.querySelector('input[type="text"]');
let table = document.querySelector("table tbody");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = result.value;
    addToTable(text);
});

function addToTable(t) {
    while (table.firstElementChild) {
        table.firstElementChild.remove();
    }

    for (let i = 1; i <= 6; i++) {
        let tr = document.createElement('tr');
        let text = `
            <td><h${i}>h${i}</h${i}></td>
            <td><h${i}>${t}</h${i}></td>
        `;
        tr.innerHTML = text;
        table.appendChild(tr);
    }
}
