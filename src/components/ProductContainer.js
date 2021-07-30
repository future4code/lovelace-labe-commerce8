import React from 'react'
import styled from 'styled-components';
import Products from './Products'


const SortStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 60vw;
  height: 10vh;

  p {
      padding: 7px;
  }

  select {
      margin: 10px;
      width: 6vw;
      height: 4vh;
  }
`


const StyledContainer = styled.div`
  display: grid;
  border: 1px solid black;
  width: 45vw;
  height: 90vh;
  margin: 0 auto;
  padding: 0;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  justify-content: center;
  align-items: center;

`
const ProductCard = styled.div`
    display: flex;
    border: 1px solid black;
    width: 20vw;
    height: 40vh;
    margin: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
         width: 12vw;
        height: 23vh;
    }

    button {
        width: 10vw;
        height: 4vh;
        text-align: center;
    }

    p {
        margin: 10px;
    }
`



class ProductContainer extends React.Component {
    state = {
        sort: 'Descrecente'
    }

    onChangeSort = (event) => {
        this.setState({
            sort: event.target.value
        })
    }


    render() {
        const products = [
            {
                id: 1,
                name: 'Camisa do Astrodev',
                price: 90,
                image: 'https://ae01.alicdn.com/kf/H3d8970ee9584491babdea172dd3f5e00U/2020-casual-3d-t-camisa-das-mulheres-dos-homens-crian-as-espa-o-astronauta-planeta-explorar.jpg_q50.jpg'
            },
            {
                id: 2,
                name: 'Camisa Planeta Dark',
                price: 110,
                image: 'https://cf.shopee.com.br/file/ab9827659f02f23d6efc9241a4dd8611'
            },
            {
                id: 3,
                name: 'Camisa Galáxia',
                price: 70,
                image: 'https://http2.mlstatic.com/D_NQ_NP_865720-MLB31699567510_082019-O.jpg'
            },
            {
                id: 4,
                name: 'Camisa da Nasa',
                price: 90,
                image: 'https://static.netshoes.com.br/produtos/camiseta-geek-cool-tees-nasa-vintage/14/HIK-0027-014/HIK-0027-014_zoom1.jpg?ts=1626104468&ims=544x'
            }

        ]

        return (
            <div>
                <SortStyle>
                    <p>Quantidade de produtos: 4</p>
                    <select value={this.state.sort} Onchange={this.onChangeSort}>
                        <option>Crescente</option>
                        <option>Descrecente</option>
                    </select>
                </SortStyle>

                <StyledContainer>

                    {products.map((product, index) => {
                        return <ProductCard key={index}>
                            <Products
                                products={product}
                            />
                        </ProductCard>
                    })}
                </StyledContainer>
            </div>
        )
    }
}

export default ProductContainer;