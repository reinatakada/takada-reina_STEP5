const textInput = document.getElementById("textInput");
const displayButton = document.getElementById("displayButton");
const colorButton = document.getElementById("colorButton");
const displayArea = document.getElementById("displayArea");
const tableBody = document.getElementById("tableBody");
const count = document.getElementById("count");

let addCount = 0;
let colorIndex = 0;
const colors = ["lightblue", "lightgreen", "lightcoral"];

displayButton.addEventListener("click", function () {
    const inputValue = textInput.value;

    if (inputValue === "") {
        alert("入力値が空です。");
        return;
    }

    displayArea.textContent = inputValue;
    displayArea.classList.toggle("highlight");

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${inputValue}</td>
        <td><button class="deleteButton">削除</button></td>
    `;

    tableBody.appendChild(tr);

    if (tableBody.children.length > 3) {
        tableBody.firstElementChild.remove();
    }

    addCount = tableBody.children.length;
    count.textContent = addCount;

    if (addCount >= 3) {
        displayButton.style.display = "none";
    }

    const deleteButton = tr.querySelector(".deleteButton");

    deleteButton.addEventListener("click", function () {
        tr.remove();

        addCount = tableBody.children.length;
        count.textContent = addCount;

        if (addCount < 3) {
            displayButton.style.display = "inline-block";
        }
    });
});

colorButton.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});

for (let i = 1; i <= 5; i++) {
    console.log(`ループ回数:${i}`);
}