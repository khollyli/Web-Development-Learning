let count = 0;

const textBox = document.querySelector(".textBox");

function createListItem(text = textBox.value) {
    const checkbox = document.createElement("INPUT");
    const label = document.createElement("label");
    const div = document.createElement("div");
    if (!text) return;

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    label.setAttribute("id", "item" + count);
    label.setAttribute("class", "handlee-regular");
    div.setAttribute("id", "itemBox" + count);

    checkbox.addEventListener("change", () => {
        div.remove();
        saveList();
    });

    // document.querySelector(".list").append(div);
    // document.getElementById("itemBox" + count).append(checkbox);
    // document.getElementById("itemBox" + count).append(label);
    
    div.append(checkbox, label);
    document.querySelector(".list").append(div);
    
    document.getElementById("item" + count).textContent = text;
    document.querySelector(".textBox").value = "";
    count++;
    saveList();
}

textBox.addEventListener('keypress', function(event) {
    if (event.key === "Enter") createListItem();
});

function saveList() {
    const items = [];
    document.querySelectorAll(".list label").forEach(label => {
        items.push(label.textContent);
    });
    localStorage.setItem("todoList", JSON.stringify(items));
}

function loadList() {
    const saved = localStorage.getItem("todoList");
    if (!saved) return;

    JSON.parse(saved).forEach(text => {
        createListItem(text);
    });
}

function clearList() {
    localStorage.removeItem("todoList");
    document.querySelector(".list").innerHTML = "";
    count = 0;
}

document.addEventListener("DOMContentLoaded", loadList);
