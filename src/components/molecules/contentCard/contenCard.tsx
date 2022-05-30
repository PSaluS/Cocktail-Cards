import React from 'react';
import Cocktail from 'API/types';
import { IconStyleContent } from 'components/atoms/IconDiv';
import CloseButton from 'components/atoms/closeButton';
import ContentP from 'components/atoms/contentP';
import {
  BackSpace,
  ContentTitle,
  ElementsSpace,
  IconsSpaces,
  CraftSpace,
  AuthorSpace,
} from './contentCard.styles';

type closeFunctionType = () => void;

interface PropsInterface {
  focus: Cocktail;
  closeFunction?: closeFunctionType;
  isAdd?: boolean;
}

const contentCard = ({ focus, closeFunction, isAdd }: PropsInterface) => (
  // Why focus={...focus} don't work and throw error "type.ts(2609)", i'd know :(
  <BackSpace focus={focus} isAdd={isAdd}>
    <ContentTitle subTitle black>
      {focus.title}
    </ContentTitle>
    {closeFunction ? <CloseButton onClick={closeFunction}>X</CloseButton> : null}
    <ElementsSpace>
      {focus.elements.alcohols.map((element) => (
        <ContentP black key={element.alcoholType}>
          {element.alcoholType}: {element.alcoholVolume} ml
        </ContentP>
      ))}
      <br />
      {focus.elements.noAlcohols.map((element) => (
        <ContentP black key={element.noAlcoholType}>
          {element.noAlcoholType}: {element.noAlcoholVolume} {element.noAlcoholUnit}
        </ContentP>
      ))}
    </ElementsSpace>
    <IconsSpaces>
      <IconStyleContent icon={focus.build} />
      <IconStyleContent icon={focus.ice} />
      {focus.elements.alcohols.length === 0 ? <IconStyleContent icon="free" /> : null}
    </IconsSpaces>
    <CraftSpace>{focus.content}</CraftSpace>
    <br />
    {focus.author !== null && focus.author !== '' ? (
      <AuthorSpace>Author: {focus.author}</AuthorSpace>
    ) : null}
  </BackSpace>
);

export default contentCard;
