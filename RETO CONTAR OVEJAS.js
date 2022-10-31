export default function contarOvejas(ovejas) {
  // aquí tu magia

  let ovejasEntries = ovejas;

  return ovejasEntries.filter((oveja) =>
    oveja.color === "rojo" &&
    (oveja.name.toLowerCase().includes("n") && oveja.name.toLowerCase().includes("a"))
  );
}