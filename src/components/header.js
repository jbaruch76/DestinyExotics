import { Menu, Image, Card } from 'semantic-ui-react';
import React, { Component } from 'react'


const Header = (props) => {
  return (
    <div>
      <Menu fixed="top" size="large" color="grey" id="nav">
        <Menu.Item header>
          Destiny Exotic Collector
        </Menu.Item>
        <Menu.Item href='https://www.bungie.net/en/OAuth/Authorize?client_id=23344&response_type=code' target='_blank' link={true} >
          Authorize
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Header;
