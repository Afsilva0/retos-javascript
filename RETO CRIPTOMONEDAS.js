export default function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
  
    let posiblesOpciones = new Map();
  
    for (let i = 0; i <= prices.length - 1; i++) {
  
      let compra = prices[i];
  
      if (!posiblesOpciones.has(prices[i])) {
        posiblesOpciones.set(prices[i], { compra: 0, venta: 0, ganancia: 0 });
      }
  
      for (let j = 0; j <= prices.length - 1; j++) {
        let venta = prices[j];
        let genanciaActual = venta - compra;
        let { ganancia } = posiblesOpciones.get(prices[i])
  
        if (genanciaActual > ganancia && j > i) {
          posiblesOpciones.set(prices[i], { compra, venta, ganancia: venta - compra });
        }
      }
    }
  
    let ganancia = 0;
  
    let posibilidades = [...posiblesOpciones.values()]
  
    posibilidades.forEach((posibilidad) => {
      if (posibilidad.ganancia > ganancia) {
        ganancia = posibilidad.ganancia;
      }
    });
  
    return ganancia !== 0 ? ganancia: -1;
  }