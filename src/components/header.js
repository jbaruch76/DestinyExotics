import { Container, Menu, Image } from 'semantic-ui-react';
import React, { Component } from 'react'


const Header = (props) => {
  return (
    <div>
      <Menu fixed="top" size="large">
        <Menu.Item header>
          Logo
        </Menu.Item>
        <Menu.Item>
          Login
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header;
