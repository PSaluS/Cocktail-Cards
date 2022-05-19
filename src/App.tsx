import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
// import FlexSpace from 'components/organisms/cardsSpace/cardsSpace.styles';
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
            <Link to="/">
              <Logo src={CCLogo} alt="" />
              Cocktail Cards
            </Link>
          </Title>
          <Link to="/add">
            <AddLink>+</AddLink>
          </Link>
          <Switch>
            <Route path="/add" exact>
              <AddCocktail />
            </Route>
            <Route path="/" exact>
              <Cocktails />
            </Route>
          </Switch>
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
