import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { Button } from '../../shared/button'

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
`;

export const H1 = styled.h1`
  color: ${props => props.theme.fontPrimaryColor};
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 48px;
  width: 42%;
  @media(max-width: 880px) {
    font-size: 40px;
    line-height: 40px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    width: 75%;
  }
`;

export const P = styled.p`
  color: ${props => props.theme.fontPrimaryColor};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.4px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 50%;
  @media(max-width: 880px) {
    width: 75%;
  }
`;

const BackgroundSection = ({ className, height }) => {

    const [ backPosition, setBackPosition ] = React.useState('50%');

    const { desktopImage } = useStaticQuery(
      graphql`
        query {
          desktopImage: file(relativePath: { eq: "banner-principal.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          },
        }
      `
    )

    const imageData = desktopImage.childImageSharp.fluid;

    window.onresize = function() {
      let mq = window.matchMedia( "(max-width: 860px)" );
      if (mq.matches)
          setBackPosition('70%');
      else
          setBackPosition('50%');

    }
      
    return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          style={{
          backgroundPosition: backPosition,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: height,
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          
        <Wrapper className="wrapper-limit">
          <H1>Profissionalize seu negócio recebendo pagamentos por boleto</H1>
          <P>Na Juno você não precisa ter conta jurídica e nem carteira de cobrança junto ao banco para emitir boletos. Basta seu CPF. Simples assim!</P>
          <Button>
            Comece agora
          </Button>
        </Wrapper>

        </BackgroundImage>
      )
    }


BackgroundSection.defaultProps = {
  height: `535px`,
}

BackgroundSection.propTypes = {
  height: PropTypes.string.isRequired,
}

export default BackgroundSection