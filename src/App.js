import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Menu from './components/Menu'
import MenuContext from './context/MenuContext'

export default function App() {

  let [show, setShow] = useState(true)

  function closeMenu() {
    setShow(false)
  }

  function openMenu() {
    setShow(true)
  }

  return (
    <div>
      <MenuContext.Provider value={{ show, closeMenu, openMenu }} >
        <Nav />
        <Menu />
      </MenuContext.Provider>
      Cova
    </div>
  )
}
