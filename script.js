const quadro = document.getElementById('board');
const sidebar = document.getElementById('sidebar');
const button = document.getElementById('closeSidebar');

function createNote() {
    console.log("ok");
    var nota = document.createElement("div");

    nota.classList.add("nota");
    quadro.appendChild(nota);
}

function showSidebar() {
    if(sidebar.classList.contains("hidden")) {
        button.innerHTML = "<<<";
        sidebar.classList.remove("hidden");
    } else if (!sidebar.classList.contains("hidden")) {
        button.innerHTML = ">>>";
        sidebar.classList.add("hidden");
    } 
}

