export default function canMouseEat(direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀

  const RATON = "m";
  const COMIDA = "*";
  const UP = "up";
  const DOWN = "down";
  const RIGHT = "right";
  const LEFT = "left";

  let posicionRatonX = 0;
  let posicionRatonY = 0;

  game.forEach((value, index) => {
    let busca = value.indexOf(RATON);
    if (busca !== -1) {
      posicionRatonY = index;
      posicionRatonX = busca;
    }
  });

  const hayComida = (y, x) => {
    try {
      return game[y][x] === COMIDA;
    } catch {
      return false;
    }
  };

  let isMovimientoValido = {
    [UP]: () => {
      return hayComida(posicionRatonY - 1, posicionRatonX);
    },
    [DOWN]: () => {
      return hayComida(posicionRatonY + 1, posicionRatonX);
    },
    [RIGHT]: () => {
      return hayComida(posicionRatonY, posicionRatonX + 1);
    },
    [LEFT]: () => {
      return hayComida(posicionRatonY, posicionRatonX - 1);
    },
  };

  return isMovimientoValido[direction]();
}
