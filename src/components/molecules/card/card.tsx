import React, { ReactElement } from 'react';
import Cocktail from 'API/types';
import ContentP from 'components/atoms/contentP';
import { IconStyleCard } from 'components/atoms/IconDiv';
import { CardStyle, Bar, CardP, IconsSpaces } from './card.styles';

interface Data {
  data: Cocktail;
  setFocus: React.Dispatch<React.SetStateAction<Cocktail>>;
}

const Card = ({ data, setFocus }: Data): ReactElement => {
  if (data.img !== null) {
    return (
      <CardStyle imgUrl={data.img.url} key={data.id}>
        <Bar
          onClick={() => {
            setFocus(data);
          }}
        >
          <CardP subTitle>{data.title}</CardP>
          <br />
          {data.elements.alcohols.map((element) => (
            <ContentP key={element.alcoholType}>
              {element.alcoholType}: {element.alcoholVolume} ml
            </ContentP>
          ))}
          {data.elements.noAlcohols.map((element) => (
            <ContentP key={element.noAlcoholType}>
              {element.noAlcoholType}: {element.noAlcoholVolume} {element.noAlcoholUnit}
            </ContentP>
          ))}
          <IconsSpaces>
            <IconStyleCard icon={data.build} />
            <IconStyleCard icon={data.ice} />
            {data.elements.alcohols.length === 0 ? <IconStyleCard icon="free" /> : null}
          </IconsSpaces>
        </Bar>
      </CardStyle>
    );
  }
  return <></>;
};

export default Card;
