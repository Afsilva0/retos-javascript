export default function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!

  let respuesta = false;

  for (let key in store) {
    if (store[key] === product) {
      return (respuesta = true);
    }

    if (typeof store[key] === "object") {
      respuesta = contains(store[key], product);
    }
  }

  return respuesta;
}
