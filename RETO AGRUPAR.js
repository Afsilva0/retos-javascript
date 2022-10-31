export default function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!

  let respuesta = {};

  collection.forEach((value) => {
      if (typeof it === "function") {
      respuesta[it(value)] = []
    } else {
      respuesta[value[it]] = []
    }
  });


  collection.forEach((value) => {
    if (typeof it === "function") {
      respuesta[it(value)].push(value);
    } else {
      respuesta[value[it]].push(value);
    }
  });

  return respuesta;
}