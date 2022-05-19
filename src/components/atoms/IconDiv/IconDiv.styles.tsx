import styled from 'styled-components';
import building from 'img/build.png';
import shaking from 'img/shaking.png';
import mixing from 'img/mixed.png';
import layers from 'img/layer.png';
import cubes from 'img/cubes.png';
import crushed from 'img/crushed.png';
import frozen from 'img/frozen.png';
import hot from 'img/hot.png';
import free from 'img/free.png';
import { Ice, Build } from 'API/types';

interface IconPropsType {
  icon: Ice | Build | 'free' | null;
}

const IconDiv = (icon: Ice | Build | 'free' | null) => {
  switch (icon) {
    case 'building':
      return building;

    case 'shaking':
      return shaking;

    case 'mixing':
      return mixing;

    case 'layers':
      return layers;

    case 'cubes':
      return cubes;

    case 'crushed':
      return crushed;

    case 'frozen':
      return frozen;

    case 'hot':
      return hot;

    case 'free':
      return free;

    default:
      return null;
  }
};

const IconStyleDiv = styled.div`
  height: 40px;
  width: 40px;
  border: 4px black solid;
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  mix-blend-mode: normal;
`;

const IconStyleCard = styled(IconStyleDiv)`
  margin-left: 5px;
  margin-right: 5px;
  background-image: ${(props: IconPropsType) => `url(${IconDiv(props.icon)})`};
`;

const IconStyleContent = styled(IconStyleDiv)`
  margin: auto;
  width: 50px;
  height: 50px;
  margin-top: 5px;
  background-image: ${(props: IconPropsType) => `url(${IconDiv(props.icon)})`};
`;

export { IconStyleCard, IconStyleContent };
