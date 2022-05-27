import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { QUERY } from 'API/GraphQL';
import emptyCocktail from 'API/Templates';
import Cocktail from 'API/types';
import CardsSpace from 'components/organisms/cardsSpace';
import ContentCard from 'components/molecules/contentCard';

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  justify-content: right;
  width: 100%;
  padding: 0;
  margin: 0;
  right: 0px;
`;

// const End = styled.div`
//   width: 95%;
//   margin: 5px 5px 2.5% 2.5%;
//   height: 0px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   background-color: rgba(0, 0, 0, 0.1);
//   border-radius: 2px;
//   box-sizing: border-box;
//   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
// `;

const cocktails = (): ReactElement => {
  const [focusCard, setFocusCard] = useState<Cocktail>(emptyCocktail);
  const { loading, error, data } = useQuery(QUERY);
  return (
    <>
      <Main>
        <ContentCard
          focus={focusCard}
          closeFunction={() => {
            setFocusCard(emptyCocktail);
          }}
        />
        {loading ?? <p>loadring...</p>}
        {!error && !loading ? (
          <CardsSpace data={data.cocktailCardsID} setFocus={setFocusCard} isFocus={focusCard.id} />
        ) : null}
        {(error !== undefined && !loading) ?? <p>Something get wrong.</p>}
      </Main>
    </>
  );
};

export default cocktails;
