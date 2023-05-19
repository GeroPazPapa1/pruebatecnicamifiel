/* 5️⃣ ***** EJERCICIO 5 ***** - ordenarInstrumentos 5️⃣

Antes de cada cirujía el médico necesita tener una lista con todos los instrumentos quirúrjicos. Te pedimos que
crees una función que nos ayude a ordenar estos instrumentos. La función recibirá un arreglo de instrumentos.
Tendrás que crear un algoritmo de ordenamiento que permita ordenar todos los instrumentos de forma alfabética
y ascendente. Es decir, de la A a la Z.

📝 EJEMPLO 📝
(INPUT) ➡ ['bisturí', 'espéculos', 'abrebocas', 'diapasones']
(OUTPUT) ➡ ['abrebocas', 'bisturí', 'diapasones', 'espéculos']

REQUISITOS
🟢 Si lo que se recibe por parámetro no es un arreglo la función debe devolver un string que diga: "Debe recibir un array de strings".
🟢 En caso de recibir un array vacío, la función debe retornar "El array no debe estar vacio".
⛔️ No puedes utilizar el método SORT.
*/

function ordenarInstrumentos(instrumentos) {
  // Tu código aquí:
  
    if (!Array.isArray(instrumentos)) {
      return "Debe recibir un array de strings";
    }
  
    if (instrumentos.length === 0) {
      return "El array no debe estar vacio";
    }
  
    const instruOrdenado = instrumentos.slice();
  
    for (let i = 0; i < instruOrdenado.length - 1; i++) {
      for (let j = 0; j < instruOrdenado.length - i - 1; j++) {
        if (instruOrdenado[j] > instruOrdenado[j + 1]) {
          const temp = instruOrdenado[j];
          instruOrdenado[j] = instruOrdenado[j + 1];
          instruOrdenado[j + 1] = temp;
        }
      }
    }
  
    return instruOrdenado;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  ordenarInstrumentos,
};
