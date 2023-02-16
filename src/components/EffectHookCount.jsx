import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // ✅ Esto no depende en la variable `count` de afuera
    }, 1000);
    // el callback de setInterval se ejecuta una vez cada segundo, pero cada vez la llamada
    // interna a setCount puede utilizar un valor actualizado para count (llamado c en este callback).

    return () => clearInterval(id);
  },); // ✅ Nuestro efecto no usa ninguna variable en el ámbito del componente

  return (
    <div>
      <h1>¿Cuántos Halls llevas usado ya?</h1>
      <h1>{count}</h1>
      <h3>Madre mía, ¿tantos?</h3>
    </div>
  );
}