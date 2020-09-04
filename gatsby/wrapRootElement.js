import React from 'react'
import { ThemeProvider } from 'styled-components' 

import juno from '../src/theme/juno'

export function wrapRootElement({ element }) {

  return <ThemeProvider theme={ juno }>{element}</ThemeProvider>

}