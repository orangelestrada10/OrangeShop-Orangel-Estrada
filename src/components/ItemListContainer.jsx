import React from 'react'
import NavBar from './NavBar'
import { Welcome } from './Welcome'

export const ItemListContainer = () => {
  return (
    <>
    <div className='App'>
    <NavBar />
    <Welcome saludo ="Bienvenidos a OrangeShop!" />
    </div>
    </>
  )
}
