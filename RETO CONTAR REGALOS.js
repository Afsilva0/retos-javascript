export default function listGifts(letter) {
  // ¡Tú puedes!

  let dicionarioRegalos = {};
  let regalos = letter.split(" ");

  regalos.forEach((regalo) => {
    if (!(regalo.includes("_") || regalo === "")) {
      dicionarioRegalos[regalo] = 0;
    }
  });

  const verificarRegalos = (regalo) => {
    if (!(regalo.includes("_") || regalo === "")) {
      dicionarioRegalos[regalo] += 1;
    }
  };

  regalos.forEach((regalo) => {
    verificarRegalos(regalo);
  });

  return dicionarioRegalos;
}