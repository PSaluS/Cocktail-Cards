import React from 'react';
import { NoAlcohols } from 'API/types';
import P from 'components/atoms/contentP';
import FormInput from 'components/atoms/formInput';
import RemoveButton from 'components/atoms/removeRawButton';
import styled from 'styled-components';
import AddElementButton from 'components/atoms/addElementButton';

interface INoAlcoholsForm {
  data: NoAlcohols[];
  setData: (newData: NoAlcohols[]) => void;
}

const FormRaw = styled.div`
  display: flex;
  margin: auto;
  text-align: revert;
  height: 30px;
  /* flex-wrap: wrap; */
`;

// const FormRaw2 = styled.div`
//   display: flex;
//   margin: auto;
//   text-align: revert;
//   height: 30px;
//   margin-bottom: 10px;
// `;

const emptyNoAlcohols: NoAlcohols = {
  noAlcoholType: '',
  noAlcoholVolume: 0,
  noAlcoholUnit: '',
};
/* eslint-disable no-param-reassign */
const AlcoholsForm = ({ data, setData }: INoAlcoholsForm) => (
  <>
    <P black>No Alcohols Elements:</P>
    {data.map((element, index) => (
      <>
        <FormRaw>
          <FormInput
            width="100px"
            name="noAlcohloType"
            type="text"
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
            value={element.noAlcoholVolume}
            onChange={(e) => {
              setData([
                ...data.map((ele, mapindex) => {
                  if (mapindex !== index) {
                    return ele;
                  }
                  return {
                    noAlcoholVolume: Number(e.currentTarget.value),
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
        setData([...data, emptyNoAlcohols]);
      }}
    >
      Add Element
    </AddElementButton>
  </>
);
/* eslint-disable no-param-reassign */
export default AlcoholsForm;
