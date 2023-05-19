const { LinkedList } = require("../DS");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

8️⃣ ***** EJERCICIO 8 ***** - pacienteEnMayorEspera() 8️⃣

Para lograr agilizar el orden de atención de los pacientes necesitamos que construyas una función que nos
permita encontrar qué paciente es el que más tiempo a estado en espera. Esta función debe ser un método 
de nuestra lista enlazada.

Cada nodo (paciente) en su {value} tiene un objeto con dos propiedades: 
 - **nombre**: nombre del paciente.
 - **espera**: cantidad  de segundos (número) transcurridos desde el inicio del día.

📝 EJEMPLO 📝
(INPUT) ➡ Head ➡ ({nombre: "Franco", espera: 123})
                ➡ ({nombre: "Martin", espera: 5235}) 
                ➡ ({nombre: "Lucía", espera: 2344}) 
                ➡ ({nombre: "Marta", espera: 1423})

(OUTPUT) ➡ {nombre: "Martin", espera: 5235}

REQUISITOS:
🟢 Devolver al paciente que ha estado esperando más tiempo en la lista.
🟢 Devolver null si la lista está vacía.

*/

LinkedList.prototype.pacienteEnMayorEspera = function () {
  // Tu código aquí
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = LinkedList;
