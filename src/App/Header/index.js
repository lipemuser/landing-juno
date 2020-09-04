import PropTypes from "prop-types"
import React from "react"

import Logo from "../../assets/images/logo.svg";
import { Button } from '../../shared/button'

import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  @media(max-width: 1160px) {
    padding: 0 50px;
  }
  @media(max-width: 480px) {
    padding: 0 18px;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  height: 63px;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => (
  <header>
    <Nav>
      <Menu className="wrapper-limit">
        <Logo></Logo>
        <Button>Comece agora</Button>
      </Menu>
    </Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
