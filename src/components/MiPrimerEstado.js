import React, {useState} from 'react'

export default function MiPrimerEstado() {

  // let nombre = "Washington Nieto";

  // const cambiarNombre = e => {
  //   nombre= "paquito Fernandez";
  // }

  const [ nombre, setNombre ] = useState("Washington Nieto")

  const cambiarNombre = (e, nombre) => {
    setNombre(nombre);
  }
  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      <strong>{ nombre }</strong>
      &nbsp;
      <button onClick={e => cambiarNombre(e, "Francisco") }>Cambiar</button>
      &nbsp;
      <input type="text" placeholder='Cambiar el nomre' />

    </div>


  )
}

