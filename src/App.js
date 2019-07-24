import React from 'react';

// State Provider
import { StateProvider, initialState } from './store/StateProvider';

// Reducers
import { rootReducer } from './reducers';

// Components
import { TodoList, TodoForm } from './components';

// Styles
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as reset from './styles/reset.css';
import * as global from './styles/global.css';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <StateProvider initialState={initialState} reducer={rootReducer}>
            <LeftColumn>
              <h1>todo</h1>
              <TodoForm />
            </LeftColumn>
            <TodoList />
          </StateProvider>
        </AppContainer>
      </ThemeProvider>
    </div>
  );
}

const theme = {
  primaryColor: 'palevioletred',
  secondaryColor: 'papayawhip',
  largeFont: '3.5rem',
  mediumFont: '2.8rem',
  smallFont: '2.0rem',
  tinyFont: '1.5rem',
  fontColor: 'aquamarine',
  maxAppWidth: '900px'
};

const AppContainer = styled.div`
  width: ${props => props.theme.maxAppWidth};
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const LeftColumn = styled.div`
  text-align: left;
  h1 {
    font-size: 4rem;
    font-family: Consolas, 'Courier New', monospace;
    padding-left: 20px;
  }
`;

export default App;
