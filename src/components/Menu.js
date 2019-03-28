import React from 'react'
import { Drawer } from 'antd'
import { MenuConsumer } from '../context/MenuContext'

export default function Menu({ }) {
    return (
        <div>
            <MenuConsumer>
                {({ closeMenu, show }) => (
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
                )}
            </MenuConsumer>
        </div>
    )
}