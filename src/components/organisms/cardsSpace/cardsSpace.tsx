import React, { ReactElement } from 'react';
import Card from 'components/molecules/card';
import Cocktail from 'API/types';
import FlexSpace from './cardsSpace.styles';

interface dataInter {
  data: Cocktail[];
  setFocus: React.Dispatch<React.SetStateAction<Cocktail>>;
  isFocus: null | string;
}

const CardsSpace = ({ data, setFocus, isFocus }: dataInter): ReactElement => {
  if (data !== undefined) {
    const cards: ReactElement[] = data.map((element: Cocktail) => (
      <Card data={element} setFocus={setFocus} key={element.id} />
    ));
    return <FlexSpace focus={isFocus}>{cards}</FlexSpace>;
  }
  return (
    <FlexSpace focus={null}>
      <p>Something get wrong.</p>
    </FlexSpace>
  );
};

export default CardsSpace;
