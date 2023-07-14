const readline = require("readline-sync");

const tasks = [];

function addTask() {
  return new Promise((resolve, reject) => {
    const indicator = readline.question("Nombre Tarea: ");
    const description = readline.question("Descripcion: ");

    const task = {
      indicator,
      description,
      completed: false,
    };

    tasks.push(task);
    resolve("Tarea añadida.");
  });
}

function removeTask() {
  return new Promise((resolve, reject) => {
    const taskIndex = readline.questionInt("Índice de la tarea a eliminar: ");

    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks.splice(taskIndex, 1);
      resolve("Tarea eliminada.");
    } else {
      reject("Índice de tarea inválido.");
    }
  });
}

function completeTask() {
  return new Promise((resolve, reject) => {
    const taskIndex = readline.questionInt("Índice de la tarea a completar: ");

    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks[taskIndex].completed = true;
      resolve("Tarea completada.");
    } else {
      reject("Índice de tarea inválido.");
    }
  });
}

async function main() {
  let exit = false;

  while (!exit) {
    console.log("\n--- Lista de Tareas ---");
    tasks.forEach((task, index) => {
      const status = task.completed ? "[X]" : "[ ]";
      console.log(
        `${index}: ${status} ${task.indicator} - ${task.description}`
      );
    });

    console.log("\n1. Añadir ");
    console.log("2. Eliminar ");
    console.log("3. Completar ");
    console.log("4. Salir");

    const choice = readline.questionInt("Elige una opcion: ");

    try {
      switch (choice) {
        case 1:
          await addTask();
          break;
        case 2:
          await removeTask();
          break;
        case 3:
          await completeTask();
          break;
        case 4:
          exit = true;
          break;
        default:
          console.log("Opcion invalida.");
          break;
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  console.log("Programa finalizado.");
}

main();
