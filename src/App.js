import React, { useState, useContext } from 'react';
import './App.css';
import Nav from './components/Nav'
import Menu from './components/Menu'
import Login from './components/Login'
import { MenuProvider } from './context/MenuContext'
import { UserProvider, UserContext } from './context/UserContext'

export default function App() {

  return (
    <div>
      <UserProvider>
        <MenuProvider>
          <Nav />
          <Menu />
        </MenuProvider>
        Cova
        <Login />
      </UserProvider>
    </div>
  )
}
