const { LinkedList } = require("../DS");

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

7️⃣ ***** EJERCICIO 07 ***** - pacientesConMasDeUnaEnfermedad() 7️⃣ 

Necesitamos darle mayor prioridad a los pacientes que tienen más de una enfermedad. Para esto necesitamos que
agregues un nuevo método a la LinkedList. Este método debe crear y devolver una nueva LinkedList.

Esta nueva LinkedList debe contener solo a aquellos pacientes que posean más de una enfermedad.
Cada nodo (paciente) contiene las propiedades: id, nombre, enfermedad (esta ultima es un array con las enfermedades). 

📝 EJEMPLO 📝 
(INPUT) ➡ LinkedList {[{id: 1, nombre: 'María', enfermedad: ['Bronquitis']},
            {id: 2, nombre: 'Lucas', enfermedad: ['Neumonía', 'Hipertensión']}]}

(OUTPUT) ➡ LinkedList { array: [{id: 2, nombre: 'Lucas', enfermedad: ['Neumonía', 'Hipertensión']}] }

REQUISITOS
 🟢 Devolver una nueva lista de los pacientes que tienen más de una enfermedad.
 🟢 Si no hay pacientes con más de una enfermedad, devolver una lista vacía.
*/

LinkedList.prototype.pacientesConMasDeUnaEnfermedad = function (lista) {
  // Tu código aquí:
  
  var newLista = new LinkedList();
  var current = this.head;

  while(current !== null){
    if(current.value.enfermedad.length > 1){
      newLista.add(current.value);}
      current = current.next;
  }

  return newLista;
  
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = LinkedList;
