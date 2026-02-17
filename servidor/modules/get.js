const API_URL = "http://localhost:3000/todos";

async function taskGet() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error al obtener tareas");
    }

    const data = await response.json();

    return data.slice().reverse().slice(0, 5);
    ;
}

function renderTasks(tareas, container) {

    container.innerHTML = "";

    tareas.forEach(tarea => {

        const card = document.createElement("div");
        card.classList.add("task-card");

        card.innerHTML = `
            <h3>${tarea.titulo}</h3>
            <p>${tarea.descripcion}</p>
            <div class="task-buttons">
                <button class="btn edit" data-id="${tarea.id}">Editar</button>
                <button class="btn delete" data-id="${tarea.id}">Borrar</button>
            </div>
            `;

        container.appendChild(card);
    });
}

export { taskGet, renderTasks };
