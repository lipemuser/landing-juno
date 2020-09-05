import React from "react"
import styled from 'styled-components'

export const ElFooter = styled.footer`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 0px;
  @media(max-width: 1380px) {
    padding: 21px 50px;
  }
  @media(max-width: 880px) {
    flex-direction: column;
    text-align: center;
    padding: 32px 0px;
    > *:nth-child(1n+2) {
      margin-top: 15px;
    }
  }
`;

export const Aside = styled.aside`
  color:  ${props => props.theme.fontSecundaryColor};
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
`;

export const Article = styled.article`
  color:  ${props => props.theme.fontSecundaryColor};
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`;

const Footer = () => (
  <ElFooter>
    <Aside>
      Juno.com.br
    </Aside>
    <Article>
      2020 Juno. Todos os direitos reservados.
      <br />
      Juno é uma plataforma de BoletoBancário.com
    </Article>
    <Aside>
      #tamojuno
    </Aside>
  </ElFooter>
)

export default Footer
