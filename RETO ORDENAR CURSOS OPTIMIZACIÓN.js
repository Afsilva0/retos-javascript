export default function learn(time, courses) {
  // ¡No olvides compartir tu solución en redes!
  
  let totalConseguido = 0;
  let resultado = []

  for (let i = 0; i <= courses.length; i++) {
    for (let j = 0; j <= courses.length; j++) {
      let suma = courses[i] + courses[j];
      if (i !== j && suma <= time) {
        if (suma > totalConseguido) {
          totalConseguido = suma;
          resultado[0] = i;
          resultado[1] = j;
        }
      }
    }
  }
  
  return resultado.length === 0 ? null : resultado;
}