import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { Button } from '../../shared/button'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media(max-width: 830px) {
    width: 100%;
    height: 330px;
  }
  background: ${props => props.theme.secundaryColor};
  justify-content: center;
  align-items: flex-end;
  left: 0;
  @media(max-width: 1380px) {
    padding: 0 50px;
  }
  @media(max-width: 480px) {
    padding: 0 38px;
  }
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 64px;
  @media(max-width: 830px) {
    display: flex;
    flex-direction: column;
  }
`;

export const H1 = styled.h1`
  color: ${props => props.theme.fontPrimaryColor};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  width: 42%;
`;

export const LimitText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 580px;
  height: 100%;
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
    width: 100%;
  }
`;

const BackgroundSection = ({ className, height, backMobilePosition }) => {

    const { desktopImage } = useStaticQuery(
      graphql`
        query {
          desktopImage: file(relativePath: { eq: "mobile.png" }) {
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
      
    return (
        <Div>
          <Wrapper className="wrapper-limit">
            <LimitText>
              <H1>Gostou?</H1>
              <P>Fazer seu cadastro na Juno é grátis e não leva nem 5 minutos.</P>
              <Button>
                Comece agora
              </Button>
            </LimitText>
          </Wrapper>

          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            style={{
            backgroundPosition: backMobilePosition,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: height,
            display: 'flex',
            justifyContent: 'center',
          }}
          ></BackgroundImage>
        </Div>
      
      )
    }


BackgroundSection.defaultProps = {
  height: `535px`,
}

BackgroundSection.propTypes = {
  height: PropTypes.string.isRequired,
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 50%;
  @media(max-width: 860px) {
    width: 100%;
  }
`

export default StyledBackgroundSection