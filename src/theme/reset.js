import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
}

h1,
h2,
h3,
h4,
p {
  margin: 0px;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  display: block;
  font-size: 1rem;
  font-family: var(--type-first);
  color: #333;
}

a {
  text-decoration: none;
  color: #333;
}
`