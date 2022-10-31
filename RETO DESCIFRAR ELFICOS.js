export default function decodeNumber(symbols) {
  // ¡No olvides compartir tu solución en redes!

  let arrayCaracteres = Array.from(symbols);
  let dicionarioDecifrado = new Map([
    [".", 1],
    [",", 5],
    [":", 10],
    [";", 50],
    ["!", 100],
  ]);

  let respuesta = arrayCaracteres.reduce((total, caracter, index) => {
    let decifradoActual = dicionarioDecifrado.get(caracter);
    let decifradoPosterior = dicionarioDecifrado.get(
      arrayCaracteres[index + 1]
    );

    if (decifradoActual < decifradoPosterior) {
      return (total -= decifradoActual);
    } else {
      return (total += decifradoActual);
    }
  }, 0);

  return respuesta;
}
