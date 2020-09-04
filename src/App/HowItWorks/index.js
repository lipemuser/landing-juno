import React from 'react'

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  justify-content: center;
  left: 0;
  @media(max-width: 1160px) {
    padding: 0 50px;
  }
  @media(max-width: 480px) {
    padding: 0 18px;
  }
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.fontSecundaryColor};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  width: 220px;
  @media(max-width: 880px) {
    font-size: 40px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    width: 95%;
  }
`;

export const Ul = styled.li`
  color: ${props => props.theme.fontSecundaryColor};
  list-style-type: none;
  counter-increment: list;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  color: ${props => props.theme.fontTertiaryColor};
  width: 315px;
  display: flex;
  font-size: 18px;
  line-height: 140%;
  position: relative;
  margin-top: 30px;
`;

export const NumberLi = styled.span`
  color: ${props => props.theme.fontQuaternatyColor};
  flex-basis: 100px;
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
  font-feature-settings: 'pnum' on, 'lnum' on;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  margin-left: 32px;
  margin-top: 3px;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  font-style: normal;
  font-weight: normal;
`;

const HowItWorks = () => {

    return (
          
        <Wrapper className="wrapper-limit">
          <H2>Como a Juno funciona?</H2>
          <Ul>
            <Li>
              <Div>
                <NumberLi>1. </NumberLi>
                Você se cadastra na Juno, emite cobranças e envia para seus clientes. É rápido e não precisa ter carteira de cobrança em nenhum banco.
              </Div>
            </Li>
            <Li>
              <Div>
                <NumberLi>2. </NumberLi>
                Seu cliente recebe a cobrança da maneira que você preferir e paga. A Juno cuida da conciliação bancária e da segurança das suas transações.
              </Div>
            </Li>
            <Li>
              <Div>
                <NumberLi>3. </NumberLi>
                O dinheiro cai na sua conta Juno e você pode usá-lo com seu cartão Juno, pagar contas ou transferir para uma conta bancária. 
              </Div>
            </Li>
          </Ul>
          
        </Wrapper>

      )
    }


export default HowItWorks