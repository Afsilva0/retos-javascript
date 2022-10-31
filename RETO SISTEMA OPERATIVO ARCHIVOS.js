export default function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes
  let dicionarioArchivos = new Map();

  files.forEach((value) => {
    if (dicionarioArchivos.has(value)) {
      const cantidadActual = dicionarioArchivos.get(value);
      const total = cantidadActual + 1;
      const name = `${value}(${total})`;
      dicionarioArchivos.set(name, total)
      dicionarioArchivos.set(value, total)
    } else {
      dicionarioArchivos.set(value, 0)
    }
  });

  return [...dicionarioArchivos.keys()];
}