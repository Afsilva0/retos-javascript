export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!

  const OPEN = "(";
  const CLOSE = ")";
  const VOID = "()";

  let regalos = letter.split(" ");

  const validarRegalo = (regalo) => {
    if (regalo === VOID) {
      return false;
    }

    let primerCaracter = regalo.substr(0, 1);
    let ultimoCaracter = regalo.substr(regalo.length - 1, regalo.length);

    if (primerCaracter === OPEN) {
      if (ultimoCaracter === CLOSE) {
        let restante = regalo.substr(1, regalo.length - 2);
        return validarRegalo(restante);
      }

      return false;
    }

    if (ultimoCaracter === CLOSE) {
      if (primerCaracter === OPEN) {
        let restante = regalo.substr(1, regalo.length - 2);
        return validarRegalo(restante);
      }

      return false;
    }
    return !(regalo.includes("(") || regalo.includes("("));
  };

  return regalos.every((regalo) => validarRegalo(regalo));
}


/*
*Refactorizado 
*
*/

export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!

  const OPEN = "(";
  const CLOSE = ")";
  const VOID = "()";

  let regalos = letter.split(" ");
  const validarRegalo = (regalo) => {
    if (regalo === VOID) {
      return false;
    }

    const length = regalo.length;
    const isPrimerCaracterOpen = regalo.substr(0, 1) === OPEN;
    const isUltimoCaracterClose = regalo.substr(length - 1, length) === CLOSE;

    if (
      isPrimerCaracterOpen  && isUltimoCaracterClose ||
      isUltimoCaracterClose  && isPrimerCaracterOpen
    ) {
      let restante = regalo.substr(1, length - 2);
      return validarRegalo(restante);
    }

    return !(regalo.includes("(") || regalo.includes("("));
  };

  return regalos.every((regalo) => validarRegalo(regalo));
}