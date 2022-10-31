export default function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!

  const UNCENTIMO = 1;
  const DOSCENTIMOS = 2;
  const CINCOCENTIMOS = 5;
  const DIEZCENTIMOS = 10;
  const VEINTECENTIMOS = 20;
  const CINCUENTACENTIMOS = 50;

  let valueChange = change;
  let respuesta = [0, 0, 0, 0, 0, 0];
  let cambioMonedas = new Map([
    [UNCENTIMO, 0],
    [DOSCENTIMOS, 1],
    [CINCOCENTIMOS, 2],
    [DIEZCENTIMOS, 3],
    [VEINTECENTIMOS, 4],
    [CINCUENTACENTIMOS, 5],
  ]);

  let realizarOperacion = (TYPE) => {
    let valorCoints = Math.floor(valueChange / TYPE);
    valueChange = valueChange - TYPE * valorCoints;
    respuesta[cambioMonedas.get(TYPE)] = valorCoints;
  };

  if (valueChange / CINCUENTACENTIMOS >= 1) {
    realizarOperacion(CINCUENTACENTIMOS);
  }

  if (valueChange / VEINTECENTIMOS >= 1) {
    realizarOperacion(VEINTECENTIMOS);
  }

  if (valueChange / DIEZCENTIMOS >= 1) {
    realizarOperacion(DIEZCENTIMOS);
  }

  if (valueChange / CINCOCENTIMOS >= 1) {
    realizarOperacion(CINCOCENTIMOS);
  }

  if (valueChange / DOSCENTIMOS >= 1) {
    realizarOperacion(DOSCENTIMOS);
  }

  if (valueChange / UNCENTIMO >= 1) {
    realizarOperacion(UNCENTIMO);
  }

  return respuesta;
}


/*
*Refactorizado 
*
*/

export default function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!

  const UNCENTIMO = 1;
  const DOSCENTIMOS = 2;
  const CINCOCENTIMOS = 5;
  const DIEZCENTIMOS = 10;
  const VEINTECENTIMOS = 20;
  const CINCUENTACENTIMOS = 50;

  let valueChange = change;
  let respuesta = [0, 0, 0, 0, 0, 0];
  let cambioMonedas = new Map([
    [CINCUENTACENTIMOS, 5],
    [VEINTECENTIMOS, 4],
    [DIEZCENTIMOS, 3],
    [CINCOCENTIMOS, 2],
    [DOSCENTIMOS, 1],
    [UNCENTIMO, 0],
  ]);

  let realizarOperacion = (TYPE) => {
    if (valueChange / TYPE >= 1) {
      let valorCoints = Math.floor(valueChange / TYPE);
      valueChange = valueChange - TYPE * valorCoints;
      respuesta[cambioMonedas.get(TYPE)] = valorCoints;
    }
  };

  for (let key of cambioMonedas.keys()) {
    realizarOperacion(key);
  }

  return respuesta;
}
