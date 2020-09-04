import React from 'react';
import PropTypes from "prop-types"

import styled from 'styled-components'

export const DefaultButton = styled.button`
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.fontPrimaryColor};
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  -webkit-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;
  &:hover {
    background: ${props => props.theme.primaryColorHover};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgb(37 42 255 / 19%), 0 0 0 3px rgb(37 42 255 / 19%);
  }
`;

export const Button = ({children}) => {

  return (
    <DefaultButton>
      {children}
    </DefaultButton>
  )

}

Button.defaultProps = {
  title: ``,
}

Button.propTypes = {
  description: PropTypes.string.isRequired,
}

export default Button