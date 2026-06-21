let count = 0;

function createListItem() {
    const checkbox = document.createElement("INPUT");
    const label = document.createElement("label");
    const div = document.createElement("div");
    const text = document.querySelector(".textBox").value;
    if (!text) return;

    checkbox.setAttribute("type", "checkbox");
    label.setAttribute("id", "item" + count);
    div.setAttribute("id", "itemBox" + count);

    checkbox.addEventListener("change", () => div.remove());

    // document.querySelector(".list").append(div);
    // document.getElementById("itemBox" + count).append(checkbox);
    // document.getElementById("itemBox" + count).append(label);
    
    div.append(checkbox, label);
    document.querySelector(".list").append(div);
    
    document.getElementById("item" + count).textContent = text;
    document.querySelector(".textBox").value = "";
    count++;
}

var txtBox = document.querySelector(".textBox");
txtBox.addEventListener('keypress', function(event) {
    if (event.key === "Enter") createListItem();
});