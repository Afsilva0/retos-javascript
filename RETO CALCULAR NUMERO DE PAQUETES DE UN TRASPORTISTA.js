export default function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!

  const NOMBRE_ID = 0;
  const PAQUETE_GESTIONA = 1;
  const ARRAY_SUBORDINADS = 2;

  const calcular = (carriers, carrierID, total) => {
    carriers.forEach((trasportista) => {
      if (trasportista[NOMBRE_ID] === carrierID) {
        total += trasportista[PAQUETE_GESTIONA];
        if (trasportista[ARRAY_SUBORDINADS].length !== 0) {
          trasportista[ARRAY_SUBORDINADS].forEach((subordinado) => {
            total += calcular(carriers, subordinado, 0);
          })
        }
      }
    })
    return total;
  }
 
  return calcular(carriers, carrierID, 0);
}