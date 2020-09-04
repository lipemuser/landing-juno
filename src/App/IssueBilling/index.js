import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styled from 'styled-components'

import Cards from '../../assets/images/cards.svg'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  justify-content: center;
  left: 0;
  @media(max-width: 1160px) {
    padding: 0 50px;
  }
  @media(max-width: 480px) {
    padding: 0 38px;
  }
  @media(max-width: 830px) {
    flex-direction: column;
    align-items: flex-start;
  }
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.fontQuinaryColor};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  width: 300px;
  @media(max-width: 830px) {
    width: 100%;
  }
`;

export const P = styled.p`
  color: ${props => props.theme.fontTertiaryColor};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  margin-top: 18px;
  margin-bottom: 25px;
  width: 300px;
  @media(max-width: 830px) {
    width: 100%;
  }
`;

export const WrapperText = styled.div`
  flex-basis: 50%; 
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  padding-right: 8%;
  margin-top: 40px;
  order: 1;
  @media(max-width: 830px) {
    align-items: flex-start;
    flex-basis: 100%; 
    order: 2;
  }
`;

export const WrapperImg = styled.div`
  flex-basis: 50%; 
  position: relative;
  order: 2;
  @media(max-width: 830px) {
    position: relative;
    width: 100%;
    order: 1;
  }
`;

export const WrapperCards = styled.div`
  position: absolute;
  bottom: 14%;
  width: 80px;
  margin-left: -40px;
  z-index: 1;
  @media(max-width: 830px) {
    width: 20px;
    margin-left: -10px;
    bottom: 12%;
  }
`;

const BackgroundSection = ({ className, height }) => {

    const { placeholderImage } = useStaticQuery(
      graphql`
        query {
          placeholderImage: file(relativePath: { eq: "issue-billing.png" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          },
        }
      `
    )

    const imageData = placeholderImage.childImageSharp.fluid;
      
    return (
      <Wrapper>
        <WrapperText>
          <H2>Emita cobranças recorrentes </H2>
          <P>Com a Juno, você pode emitir cobranças recorrentes com lembretes que ajudam a diminuir a inadimplência dos seus clientes.</P>
        </WrapperText>
        <WrapperImg>
          <WrapperCards>
            <Cards />
          </WrapperCards>
          <Img fluid={imageData} />
        </WrapperImg>
      </Wrapper>
      )
    }


BackgroundSection.defaultProps = {
  height: `535px`,
}

BackgroundSection.propTypes = {
  height: PropTypes.string.isRequired,
}

export default BackgroundSection