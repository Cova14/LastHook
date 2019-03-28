import React, { useContext } from 'react'
import { Drawer } from 'antd'
import { MenuContext } from '../context/MenuContext'

export default function Menu() {

    let { closeMenu, show } = useContext(MenuContext)

    return (
        <div>
            <Drawer
                title="Basic Drawer"
                placement={"left"}
                closable={true}
                onClose={closeMenu}
                visible={show}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}