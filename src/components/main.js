import React, { Component } from 'react'
import {Header} from './'
import { Container, Menu, Image, Card, Item, Button } from 'semantic-ui-react';
import { fetchExotics } from '../store/exotics';
import { connect } from 'react-redux';
import ItemGroup from 'semantic-ui-react/dist/commonjs/views/Item/ItemGroup';

class Main extends Component  {

  componentDidMount() {
    this.props.loadExotics();
  }
  render() {
    console.log(this.props.exotics)
    return (
    <div>
      <Header />
      <Container style={{ marginTop: '9em' , display: 'flex', flexWrap: 'wrap'}}>
        {!!this.props.exotics.length && this.props.exotics.map(exotic => {
          return (
              <div key={exotic.name} style={{minWidth: '200px'}}>
                <h3>{exotic.name}</h3>
                <img key={exotic.name} src={'https://www.bungie.net' + exotic.icon} />

              </div>
              // <Item className="ui">
              //   <Item.Image src={'https://www.bungie.net' + exotic.icon} />
              //   <Item.Header>{exotic.name}</Item.Header>
              //   <Item.Description>Test</Item.Description>
              // </Item>
          )
        })}
        </Container>
    </div>
    )
  }
}

const mapState = ({exotics}) => ({
  exotics
})

const mapDispatch = dispatch => ({
  loadExotics: () => dispatch(fetchExotics())
});

export default connect(mapState, mapDispatch)(Main);
