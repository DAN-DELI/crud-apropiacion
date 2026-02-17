import {
    taskPost,
    taskGet,
    renderTasks
} from './modules/index.js';

const totalForm = document.getElementById('task-form');
const taskTitle = document.getElementById('titulo');
const taskDescription = document.getElementById('descripcion');
const tasksContainer = document.querySelector(".tasks-container");

totalForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await taskPost(
            taskTitle.value.trim(),
            taskDescription.value.trim()
        );

        // pedir lista actualizada
        const tareasActualizadas = await taskGet();

        // pintar lista
        renderTasks(tareasActualizadas, tasksContainer);

        alert("funciona?")

        totalForm.reset();

    } catch (error) {
        console.error(error);
        alert("Error al crear la tarea");
    }
});


document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Buscar las ultimas 5 tareass registradas
        const tareasRegistradas = await taskGet();
        // listar
        renderTasks(tareasRegistradas, tasksContainer);



    } catch (error) {
        console.error(error);
        alert("Error al mostrar tareas.");
    }
});
