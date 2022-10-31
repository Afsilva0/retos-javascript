export default function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
   // ['📷', '⚽️'] sería así ['****', '*📷*', '*⚽️*', '****']

  const ENVOLTORIO = '*';

  let tamanioRegalo = gifts[0].length + 2;

  let resultado = [];

  resultado.push(''.padStart(tamanioRegalo, ENVOLTORIO));

  gifts.forEach((regalo) => {
    resultado.push(
      regalo.padStart(regalo.length + 1, ENVOLTORIO).padEnd(regalo.length + 2, ENVOLTORIO)
      );
  });

  resultado.push(''.padStart(tamanioRegalo, ENVOLTORIO));

  return resultado;
}