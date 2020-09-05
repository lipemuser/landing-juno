import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from "../Footer"

import styled from 'styled-components';
import { ResetStyle } from '../../theme/reset'

export const Wrapper = styled.div`
  margin: 0 auto;
  --type-first: Roboto, Helvetica, Arial;
  font-family: var(--type-first);
`;

const Layout = ({ children }) => {  

  return (
    <>
      <ResetStyle />
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
