import styled, { keyframes } from 'styled-components'

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const App = styled.div`
  text-align: center;
`

export const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  background-color: #282c34;
`

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`

export const AppLink = styled.div`
  color: #61dafb;
`
