import React, { useState, useEffect } from 'react';

export default function Color() {
    const [mostrar, setMostrar] = useState(true);

    return (
      <div>
        <button onClick = {() => setMostrar(false)}>Dejar de mostrar</button>
        {mostrar ? <MouseColor /> : null}
      </div>
    );
}

function MouseColor() {
  const [color, setColor] = useState("red");

  useEffect(()=> {
    function onMouseMove(event){
      if(event.clientX < window.innerWidth / 4) {
        setColor("red");
      } else {
        setColor("blue");
      }
    }

    window.addEventListener("mousemove", onMouseMove);
    console.log("Comprando Halls!!")

    return () => {
      console.log("Se gastaron los Halls!! Sorry... Ups")
      window.removeEventListener("mousemove", onMouseMove);
    }

  },[]);
  
  console.log("Qué te gusta un Halls...!!")

  return <div style={{ height: "50vh", width: "50vw",background: color}}></div>
  
}

