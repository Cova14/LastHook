import React from 'react'
import { Menu, Icon } from 'antd'
import { MenuConsumer } from '../context/MenuContext'
let SubMenu = Menu.SubMenu

export default function Nav({ }) {
    return (
        <div>
            <MenuConsumer>
                {({ openMenu }) => (
                    <Menu mode="horizontal" theme="dark" >
                        <Menu.Item
                            onClick={openMenu}
                        >
                            <Icon type="menu-fold" />
                        </Menu.Item>
                        <Menu.Item>
                            Home
                        </Menu.Item>
                        <SubMenu title="SubMenu">
                            <Menu.Item>
                                SubMenuItem
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                )}
            </MenuConsumer>
        </div>
    )
}