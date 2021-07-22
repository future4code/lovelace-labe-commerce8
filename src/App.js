import React from 'react';
import ContainerProdutos from './components/ContainerProdutos'
import Filter from './Components_Filtro/Filter'
import Carrinho from './Componentcarrinho/Carrinho.js'

import { Filtro } from "./App.Styles"

class App extends React.Component {
  render(){
    return (
      <div>
        <Filtro>
          <Filter/>
        </Filtro>

        <section>
          <Carrinho/>
          <ContainerProdutos />
        </section>
      </div>
      
    );
  }
}

export default App;
