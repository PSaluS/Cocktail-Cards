import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { QUERY } from 'API/GraphQL';
import emptyCocktail from 'API/Templates';
import Cocktail from 'API/types';
import CardsSpace from 'components/organisms/cardsSpace';
import ContentCard from 'components/molecules/contentCard';
import LoadIcon from 'components/atoms/loadIcon';

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  justify-content: right;
  width: ${window.innerWidth}px;
  padding: 0;
  margin: 0;
  right: 0px;
`;

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
        {loading ? <LoadIcon /> : null}
        {!error && !loading ? (
          <CardsSpace data={data.cocktailCardsID} setFocus={setFocusCard} isFocus={focusCard.id} />
        ) : null}
        {(error !== undefined && !loading) ?? <p>Something get wrong.</p>}
      </Main>
    </>
  );
};

export default cocktails;
