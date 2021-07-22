import React from 'react';
import styled from 'styled-components';
import Filter from './Components_Filtro/Filter'
import { Filtro } from "./App.Styles"

class App extends React.Component {
  render(){
    return  <Filtro>

      <Filter/>

    </Filtro>


  }
}

export default App;
