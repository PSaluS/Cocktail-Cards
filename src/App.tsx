import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Title from 'components/atoms/title';
import apolloClient from 'API/apolloClient';
import { GlobalStyle, Theme } from 'theme';
import Cocktails from 'views/cocktails';
import AddCocktail from 'views/addCocktail';
import { ThemeProvider } from 'styled-components';
import Logo from 'components/atoms/logo';
import CCLogo from 'img/CClogo_Tall.svg';
import AddLink from 'components/atoms/addLink';

function App(): React.ReactElement {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <ApolloProvider client={apolloClient}>
          <GlobalStyle />
          <Title>
            <NavLink activeClassName="activ" to="/Cocktail-Cards">
              <Logo src={CCLogo} alt="" />
              Cocktail Cards
            </NavLink>
          </Title>
          <NavLink
            activeClassName="activ"
            to="/add"
            style={(isActive) => ({
              opacity: isActive ? '0' : '1',
            })}
          >
            <AddLink>+</AddLink>
          </NavLink>
          <Switch>
            <Route path="/add" exact>
              <AddCocktail />
            </Route>
            <Route path="/Cocktail-Cards" exact>
              <Cocktails />
            </Route>
            <Route path="/Cocktail-Cards/" exact>
              <Cocktails />
            </Route>
          </Switch>
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
