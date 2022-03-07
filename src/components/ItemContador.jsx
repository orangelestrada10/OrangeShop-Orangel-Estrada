import React, { useState } from 'react'

export const ItemContador = () => {

    const [contador, setContador] = useState(0);

  return (
    <div className='containerCaja'>
        <div className="contador">{contador}</div>
      <div className="Botones">
        <div
          className="boton-"
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          -
        </div>

        <div
          className="botonSuma"
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          +
        </div>
      </div>
    </div>
  )
}
