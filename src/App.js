import React from 'react';
import ContainerProdutos from './components/ContainerProdutos'
import Carrinho from './Componentcarrinho/Carrinho.js'

class App extends React.Component {
  render(){
    return (
      <section>
        <Carrinho/>
        <ContainerProdutos />
      </section>
    );
  }
}

export default App;
