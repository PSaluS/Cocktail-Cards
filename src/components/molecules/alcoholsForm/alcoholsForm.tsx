import React from 'react';
import { Alcohols } from 'API/types';
import P from 'components/atoms/contentP';
import FormInput from 'components/atoms/formInput';
import RemoveButton from 'components/atoms/removeRawButton';
import styled from 'styled-components';
import AddElementButton from 'components/atoms/addElementButton';

interface IAlcoholsForm {
  data: Alcohols[];
  setData: (newData: Alcohols[]) => void;
}

export const setNo0 = (x: number): number | string => (x > 0 ? x : '');

const checkFilledAlcohols = (data: Alcohols[]) => {
  let filed: boolean = true;
  data.forEach((element) => {
    if (element.alcoholType === '' || element.alcoholVolume <= 0) filed = false;
  });
  return filed;
};
const MLStyled = styled.div`
  transform: translateY(12px);
`;

const FormRaw = styled.div`
  display: flex;
  margin: auto;
  text-align: center;
  height: 30px;
  padding-left: 20px;
`;

const emptyAlcohols: Alcohols = {
  alcoholType: '',
  alcoholVolume: 0,
};
/* eslint-disable no-param-reassign */
const AlcoholsForm = ({ data, setData }: IAlcoholsForm) => (
  <>
    <P black>Alcohols Elements:</P>
    {data.map((element, index) => (
      <FormRaw>
        <FormInput
          width="120px"
          name="alcohloType"
          type="text"
          value={element.alcoholType}
          onChange={(e) => {
            setData([
              ...data.map((ele, mapindex) => {
                if (mapindex !== index) {
                  return ele;
                }
                return {
                  alcoholType: e.currentTarget.value,
                  alcoholVolume: data[index].alcoholVolume,
                };
              }),
            ]);
          }}
        />
        <FormInput
          width="25px"
          name="alcoholVolume"
          type="number"
          value={setNo0(element.alcoholVolume)}
          onChange={(e) => {
            setData([
              ...data.map((ele, mapindex) => {
                if (mapindex !== index) {
                  return ele;
                }
                return {
                  alcoholVolume: Number(e.currentTarget.value),
                  alcoholType: data[index].alcoholType,
                };
              }),
            ]);
          }}
        />
        <MLStyled> ml.</MLStyled>
        <RemoveButton
          onClick={() => {
            setData(data.filter((el, indexFillter) => indexFillter !== index));
          }}
        >
          X
        </RemoveButton>
      </FormRaw>
    ))}
    <AddElementButton
      name="addAlcohol"
      type="button"
      onClick={() => {
        if (checkFilledAlcohols(data)) {
          setData([...data, emptyAlcohols]);
        }
      }}
    >
      Add alcohol
    </AddElementButton>
  </>
);
/* eslint-disable no-param-reassign */
export default AlcoholsForm;
