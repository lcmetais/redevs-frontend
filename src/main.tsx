import ReactDOM from 'react-dom/client';
import Router from './Routes'
import Main from './Components/Main'
import AuthProvider from './Context/AuthContext'
import styledTheme from './styles/styled-theme'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import { GlobalStyles } from './styles/Global'
import { SearchProvider } from './Context/SearchContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={styledTheme}>
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <Main>
            <Header />
            <div style={{ marginTop: '64px' }}>
              <Router />
            </div>
          </Main>
        </SearchProvider>
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
)
