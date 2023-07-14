const readline = require("readline-sync");

const tasks = [];

function addTask() {
  const indicator = readline.question("Nombre tarea: ");
  const description = readline.question("Descripcion: ");

  const task = {
    indicator,
    description,
    completed: false,
  };

  tasks.push(task);
  console.log("Tarea añadida.");
}

function removeTask() {
  const taskIndex = readline.questionInt("Índice de la tarea a eliminar: ");

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
    console.log("Tarea eliminada.");
  } else {
    console.log("Índice de tarea inválido.");
  }
}

function completeTask() {
  const taskIndex = readline.questionInt("Índice de la tarea a completar: ");

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].completed = true;
    console.log("Tarea completada.");
  } else {
    console.log("Índice de tarea inválido.");
  }
}

function main() {
  let exit = false;

  while (!exit) {
    console.log("\n--- Lista de Tareas ---");
    tasks.forEach((task, index) => {
      const status = task.completed ? "[X]" : "[ ]";
      console.log(
        `${index}: ${status} ${task.indicator} - ${task.description}`
      );
    });

    console.log("\n1. Añadir");
    console.log("2. Eliminar");
    console.log("3. Completar");
    console.log("4. Salir");

    const choice = readline.questionInt("Elige una opcion: ");

    switch (choice) {
      case 1:
        addTask();
        break;
      case 2:
        removeTask();
        break;
      case 3:
        completeTask();
        break;
      case 4:
        exit = true;
        break;
      default:
        console.log("Opción inválida.");
        break;
    }
  }

  console.log("Programa finalizado.");
}

main();
