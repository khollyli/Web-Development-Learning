function createCheckbox() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}

function deleteCheckbox() {
    const target = document.querySelector('.delete');
    target.remove();
}