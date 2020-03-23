import React from 'react'
import logo from './logo.svg'
import * as S from './styled'

function App () {
  return (
    <S.App>
      <S.AppHeader>
        <S.AppLogo src={logo} alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <S.AppLink
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </S.AppLink>
      </S.AppHeader>
    </S.App>
  )
}

export default App
