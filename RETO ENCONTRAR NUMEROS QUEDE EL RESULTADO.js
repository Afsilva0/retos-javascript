export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!

  let resultado = []
  let encontrado = false;

  for (let i = 0; i <= numbers.length && !encontrado; i++) {
    for (let j = 0; j <= numbers.length && !encontrado; j++) {
      let suma = numbers[i] + numbers[j];
      if (i !== j && suma === result) {
        resultado[0] = numbers[i];
        resultado[1] = numbers[j];
        encontrado = true;
      }
    }

  }

  return resultado.length !== 0 ? resultado : null;
}