import React from 'react';
import { NoAlcohols } from 'API/types';
import P from 'components/atoms/contentP';
import FormInput from 'components/atoms/formInput';
import RemoveButton from 'components/atoms/removeRawButton';
import styled from 'styled-components';
import AddElementButton from 'components/atoms/addElementButton';
import { setNo0 } from 'components/molecules/alcoholsForm/alcoholsForm';

interface INoAlcoholsForm {
  data: NoAlcohols[];
  setData: (newData: NoAlcohols[]) => void;
}
const checkFilledNoAlcohols = (data: NoAlcohols[]) => {
  let filed: boolean = true;
  data.forEach((element) => {
    if (
      element.noAlcoholType === '' ||
      element.noAlcoholVolume <= 0 ||
      element.noAlcoholUnit === ''
    )
      filed = false;
  });
  return filed;
};
const FormRaw = styled.div`
  display: flex;
  margin: auto;
  text-align: revert;
  height: 30px;
`;

const emptyNoAlcohols: NoAlcohols = {
  noAlcoholType: '',
  noAlcoholVolume: 0,
  noAlcoholUnit: '',
};
/* eslint-disable no-param-reassign */
const AlcoholsForm = ({ data, setData }: INoAlcoholsForm) => (
  <>
    <P black>Non-alcohols ingredients:</P>
    {data.map((element, index) => (
      <>
        <FormRaw>
          <FormInput
            width="100px"
            name="noAlcohloType"
            type="text"
            maxLength={24}
            value={element.noAlcoholType}
            onChange={(e) => {
              setData([
                ...data.map((ele, mapindex) => {
                  if (mapindex !== index) {
                    return ele;
                  }
                  return {
                    noAlcoholType: e.currentTarget.value,
                    noAlcoholVolume: data[index].noAlcoholVolume,
                    noAlcoholUnit: data[index].noAlcoholUnit,
                  };
                }),
              ]);
            }}
          />
          <FormInput
            width="25px"
            name="noAlcoholVolume"
            type="number"
            value={setNo0(element.noAlcoholVolume)}
            onChange={(e) => {
              setData([
                ...data.map((ele, mapindex) => {
                  if (mapindex !== index) {
                    return ele;
                  }
                  let fixed = Number(e.currentTarget.value);
                  if (fixed > 1000) fixed = 1000;
                  fixed = Number(fixed.toFixed(2));
                  return {
                    noAlcoholVolume: fixed,
                    noAlcoholType: data[index].noAlcoholType,
                    noAlcoholUnit: data[index].noAlcoholUnit,
                  };
                }),
              ]);
            }}
          />

          <FormInput
            width="60px"
            name="noAlcohloUnit"
            type="text"
            maxLength={15}
            value={element.noAlcoholUnit}
            onChange={(e) => {
              setData([
                ...data.map((ele, mapindex) => {
                  if (mapindex !== index) {
                    return ele;
                  }
                  return {
                    noAlcoholUnit: e.currentTarget.value,
                    noAlcoholVolume: data[index].noAlcoholVolume,
                    noAlcoholType: data[index].noAlcoholType,
                  };
                }),
              ]);
            }}
          />
          <RemoveButton
            onClick={() => {
              setData(data.filter((el, indexFillter) => indexFillter !== index));
            }}
          >
            X
          </RemoveButton>
        </FormRaw>
      </>
    ))}
    <AddElementButton
      name="addNoAlcohol"
      type="button"
      onClick={() => {
        if (checkFilledNoAlcohols(data)) {
          setData([...data, emptyNoAlcohols]);
        }
      }}
    >
      Add Element
    </AddElementButton>
  </>
);
/* eslint-disable no-param-reassign */
export default AlcoholsForm;
