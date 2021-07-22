import React from 'react';
import ProductContainer from './components/ProductContainer'
import ContainerFilter from './components/ContainerFilter.js'
import Filter from './components/Filter.js'
import Cart from './components/Cart.js'
import styled from 'styled-components'


const ContainerSection = styled.div`
   display: flex;
   justify-content: space-between;
`

const Section = styled.div`
  display: flex;
`

class App extends React.Component {
  render() {
    return (
      <ContainerSection>
        <ContainerFilter>
          <Filter />
        </ContainerFilter>

        <ProductContainer />

        <Section>
          <Cart />
        </Section>

      </ContainerSection>

    );
  }
}

export default App;
