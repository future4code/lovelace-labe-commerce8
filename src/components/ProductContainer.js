import React from 'react'

import styled from 'styled-components';


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
    render() {
        return (
            <StyledContainer>
                <ProductCard>
                    <img src="https://ae01.alicdn.com/kf/H3d8970ee9584491babdea172dd3f5e00U/2020-casual-3d-t-camisa-das-mulheres-dos-homens-crian-as-espa-o-astronauta-planeta-explorar.jpg_q50.jpg" alt="Imagem de Camisa" />

                    <p>Camisa do Astrodev</p>
                    <p>R$90,00</p>
                    <button>Adicionar ao carrinho</button>
                </ProductCard>

                <ProductCard>
                    <img src="https://cf.shopee.com.br/file/ab9827659f02f23d6efc9241a4dd8611" alt="Imagem de Camisa" />

                    <p>Camisa Planeta Dark</p>
                    <p>R$110,00</p>
                    <button>Adicionar ao carrinho</button>
                </ProductCard>

                <ProductCard>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_865720-MLB31699567510_082019-O.jpg" alt="Imagem de Camisa" />

                    <p>Camisa Galáxia</p>
                    <p>R$70,00</p>
                    <button>Adicionar ao carrinho</button>
                </ProductCard>


                <ProductCard>
                    <img src="https://static.netshoes.com.br/produtos/camiseta-geek-cool-tees-nasa-vintage/14/HIK-0027-014/HIK-0027-014_zoom1.jpg?ts=1626104468&ims=544x" alt="Imagem de camisa" />

                    <p>Camisa da Nasa</p>
                    <p>R$120,00</p>
                    <button>Adicionar ao carrinho</button>
                </ProductCard>
            </StyledContainer>
        )
    }
}

export default ProductContainer;