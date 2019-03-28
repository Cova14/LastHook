import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Menu from './components/Menu'
import { MenuProvider } from './context/MenuContext'

export default function App() {

  return (
    <div>
      <MenuProvider>
        <Nav />
        <Menu />
      </MenuProvider>
      Cova
    </div>
  )
}
