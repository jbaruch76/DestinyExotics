import { Menu, Image, Card } from 'semantic-ui-react';
import React, { Component } from 'react'


const Header = (props) => {
  return (
    <div>
      <Menu fixed="top" size="large">
        <Menu.Item header>
          Destiny Exotic Collector
        </Menu.Item>
        <Menu.Item as="a">
          Authorize
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header;
