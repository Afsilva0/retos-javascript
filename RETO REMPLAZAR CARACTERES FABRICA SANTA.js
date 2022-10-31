export default function canReconfigure(from, to) {
  // ¡No olvides compartir tu solución en redes!

  let actual = Array.from(from);
  let remplazo = Array.from(to);
  let dicionarioRemplazo = new Map();
  let respuesta = false;

  if (actual.length !== remplazo.length) {
    return respuesta;
  }

  let validarRemplazo = (current, asing) => {
    let respuesta = true;
    dicionarioRemplazo.forEach((value, key) => {
      if ((asing === value && current !== key)
        || (asing !== value && current === key)
      ) {
        return respuesta = false;
      }
    });
    return respuesta;
  }

  respuesta = actual.every((value, index) => {
    if (dicionarioRemplazo.size == 0) {
      dicionarioRemplazo.set(value, remplazo[index])

      return true;
    } else {
      if (dicionarioRemplazo.has(value)) {
        return validarRemplazo(value, remplazo[index]);
      } else {
        if (validarRemplazo(value, remplazo[index])) {
          dicionarioRemplazo.set(value, remplazo[index])
          return true;
        } else {
          return false;
        }
      }
    }
  });

  return respuesta;
}



/*
*Refactorizado 
*
*/
export default function canReconfigure(from, to) {
  // ¡No olvides compartir tu solución en redes!

  let actual = Array.from(from);
  let remplazo = Array.from(to);
  let dicionarioRemplazo = new Map();
  let respuesta = false;

  if (actual.length !== remplazo.length) {
    return respuesta;
  }

  let validarRemplazo = (current, asing) => {
    let respuesta = true;
    dicionarioRemplazo.forEach((value, key) => {
      if ((asing === value && current !== key)
        || (asing !== value && current === key)
      ) {
        return respuesta = false;
      }
    });
    return respuesta;
  }

  respuesta = actual.every((value, index) => {
    if (dicionarioRemplazo.size == 0) {
      dicionarioRemplazo.set(value, remplazo[index])

      return true;
    }

    if (dicionarioRemplazo.has(value)) {
      return validarRemplazo(value, remplazo[index]);
    }
    
    if (validarRemplazo(value, remplazo[index])) {
      dicionarioRemplazo.set(value, remplazo[index])
      return true;
    }
    return false;
  });

  return respuesta;
}