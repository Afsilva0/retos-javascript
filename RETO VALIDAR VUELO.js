export default function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!

  let sube = 0;
  let baja = 0;
  let error = false;

  for (let i = 0; i <= heights.length; i++) {
    let actual = heights[i];
    let siguiente = heights[i + 1];

    if (siguiente !== undefined) {
      if (actual < siguiente) {
        sube += 1;
        if (baja >= 1) {
          error = true;
        }
      } else if (actual > siguiente) {
        baja += 1;
      } else {
        return false;
      }
    }
  }

  return !error && baja !== 0;
}
