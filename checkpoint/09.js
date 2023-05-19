const { BinarySearchTree } = require("../DS");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

9️⃣ ***** EJERCICIO 9 ***** - buscandoAlDoctor() 9️⃣ 

Agrega un nuevo método llamado buscandoAlDoctor al árbol binario. Este recibirá como parámetro un ID que
pertenece a un doctor. Debe devolver el nodo que representa al doctor buscado. 
Cada nodo es un objeto con las propiedades: id, nombre, edad y especialidad.

📝 EJEMPLO 📝
Dado el siguiente árbol (solo mostramos el id pero los demás datos si están):
               13
            /      \
          7         24
        /          /   \
       6         16     27
     /                    \
    3                     45
     \
      4

(INPUT) ➡ 45
(OUTPUT) ➡ Toda la información de este doctor.

(INPUT) ➡ 5
(OUTPUT) ➡ null, ya que no existe.

REQUISITOS
🟢 La función debe retornar el nodo completo que representa al doctor encontrado.
🟢 La función debe retornar null si no lo encuentra.
*/

BinarySearchTree.prototype.buscandoAlDoctor = function (id) {
  // Tu código aquí:
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = BinarySearchTree;
