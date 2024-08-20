document.addEventListener("DOMContentLoaded", () => {
    const tasklist = document.getElementById("tasklist");
    let selectedtask = null;

    // Function to handle task item click
    const handleTaskClick = (event) => {
        if (selectedtask) {
            selectedtask.classList.remove('selected');
        }
        selectedtask = event.currentTarget;
        selectedtask.classList.add('selected');
    };

    document.getElementById("addtask").addEventListener("click", () => {
        const textoarea = prompt("Ingrese el nombre de la tarea:");
        if (textoarea) {
            const nuevatarea = document.createElement("li");
            nuevatarea.textContent = textoarea;
            nuevatarea.addEventListener("click", handleTaskClick);
            tasklist.appendChild(nuevatarea);
        }
    });

    document.getElementById("deletetask").addEventListener("click", () => {
        if (selectedtask) {
            tasklist.removeChild(selectedtask);
            selectedtask = null;
        } else {
            alert("No se ha seleccionado ninguna tarea para eliminar");
        }
    });

    document.getElementById("edittask").addEventListener("click", () => {
        if (selectedtask) {
            const nuevotexto = prompt("Modificar la tarea", selectedtask.textContent);
            if (nuevotexto) {
                selectedtask.textContent = nuevotexto;
            }
        } else {
            alert("Seleccione una tarea para modificar");
        }
    });
});