import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_COCKTAIL, ID_QUERY } from 'API/GraphQL';
import AddFormRow from 'components/atoms/addFormRow';
import { Ice, Build, Alcohols, NoAlcohols } from 'API/types';
import { SubbButton } from 'components/atoms/addElementButton/addElementButton';
import FormInput from 'components/atoms/formInput';
import P from 'components/atoms/contentP';
import FormSelect from 'components/atoms/formSelect';
import FormTextArea from 'components/atoms/formTextArea';
import FormDropezone from 'components/atoms/formDropezone';
import AlkoholsForm from 'components/molecules/alcoholsForm';
import NoAlkoholsForm from 'components/molecules/elementsForm';
import Card from 'components/molecules/card';
import ContentCard from 'components/molecules/contentCard';
import StyledForm, { StyledCard } from './addForm.styles';

interface inicialValuesTypes {
  title: string;
  elements: {
    alcohols: Alcohols[];
    noAlcohols: NoAlcohols[];
  };
  build: Build;
  ice: Ice;
  img: {
    link: string;
    name: string;
    data: File | null;
    id: string;
  };
  content: string;
  author: string;
}

const inicialValues: inicialValuesTypes = {
  title: '',
  elements: {
    alcohols: [],
    noAlcohols: [],
  },
  build: 'building',
  ice: 'cubes',
  img: {
    link: '',
    name: '',
    data: null,
    id: '',
  },
  content: '',
  author: '',
};

const ff = (data: File | null) => {
  if (data !== null) {
    const imgForm = new FormData();
    imgForm.append('fileUpload', data);

    return fetch(`${process.env.REACT_APP_API}/upload`, {
      method: 'POST',
      body: imgForm,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    });
  }
  return null;
};

const AddSpace = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  position: relative;
`;

const SuccesField = styled.div`
  color: #00ff00;
`;

const ErrField = styled.div`
  color: red;
`;

const AddForm = () => {
  const [errState, setErrState] = useState<String[]>(['']);
  const [successState, setSuccessState] = useState<boolean>(false);
  const [buttText, setButtTest] = useState<String | HTMLElement>('Send');
  const [formState, setformState] = useState<inicialValuesTypes>(inicialValues);

  const [addCocktail] = useMutation(ADD_COCKTAIL);

  const { refetch } = useQuery(ID_QUERY, {
    skip: true,
  });

  const cmmonSetState: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e) => {
    setformState({ ...formState, [e.currentTarget.name]: e.currentTarget.value });
  };
  const imgSetState = (imgLink: string, imgName: string, imgData: File) => {
    setformState({ ...formState, img: { name: imgName, link: imgLink, data: imgData, id: '' } });
  };
  return (
    <AddSpace>
      <StyledCard>
        <ContentCard
          focus={{
            id: '0',
            title: formState.title,
            elements: formState.elements,
            img: {
              url: formState.img.link,
              alt: formState.img.name,
            },
            build: formState.build,
            ice: formState.ice,
            content: formState.content,
            author: formState.author,
          }}
          isAdd
        />
      </StyledCard>
      <StyledForm>
        <Card
          data={{
            id: null,
            title: formState.title,
            elements: formState.elements,
            img: {
              url: formState.img.link,
              alt: formState.img.name,
            },
            build: formState.build,
            ice: formState.ice,
            content: formState.content,
            author: formState.author,
          }}
          setFocus={() => null}
          key={0}
        />
      </StyledForm>
      <StyledForm
        onSubmit={async (e) => {
          e.preventDefault();
          setSuccessState(false);
          e.currentTarget
            .getElementsByClassName('SubbButton')
            .item(0)
            ?.setAttribute('disabled', 'true');
          setButtTest('In progres...');
          setErrState([]);
          const errBuff = [];
          let emptyAElement: boolean = false;
          let emptyNElement: boolean = false;

          formState.elements.alcohols.forEach((element) => {
            if (element.alcoholType === '' || element.alcoholVolume <= 0) emptyAElement = true;
          });
          formState.elements.noAlcohols.forEach((element) => {
            if (
              element.noAlcoholType === '' ||
              element.noAlcoholVolume <= 0 ||
              element.noAlcoholUnit === ''
            )
              emptyNElement = true;
          });

          if (formState.title === '') errBuff.push('Cocktail must have name');

          if (formState.title.length <= 3 || formState.title.length >= 30)
            errBuff.push(`Cocktail's name length must be between 2 and 30 char`);

          if (emptyAElement || emptyNElement)
            errBuff.push('element incomplete, complete all elements before send Cocktail');

          if (formState.elements.alcohols.length + formState.elements.noAlcohols.length < 2)
            errBuff.push('Cocktail must have 2 elements');

          if (formState.content === '') errBuff.push(`Instruction can't be empty`);

          if (formState.author.length > 20)
            errBuff.push(`Author's name must be shorter than 20 char`);

          if (formState.img.data === null) errBuff.push(`Cocktail must have an image`);

          if (errBuff.length > 0) {
            setErrState([...errBuff]);
          } else {
            const ffres = await ff(formState.img.data);
            if (ffres !== null && ffres.status === 200) {
              if (formState.img.data !== null) {
                const res = await refetch({
                  fileName: formState.img.data?.name ?? '',
                  fileSize: formState.img.data?.size ?? 0,
                });
                if (res.data.assets[0].id !== undefined) {
                  setformState({
                    ...formState,
                    img: { ...formState.img, id: res.data.assets[0].id },
                  });
                  const response = await addCocktail({
                    variables: {
                      title: formState.title,
                      elements: formState.elements,
                      content: formState.content,
                      imgId: res.data.assets[0].id,
                      build: formState.build,
                      ice: formState.ice,
                      author: formState.author,
                    },
                  });
                  if (response.data !== undefined) {
                    setSuccessState(true);
                    setformState(inicialValues);
                  }
                }
              }
            }
          }
          setButtTest('Send');
          document.getElementById('addSubbmitButton')?.removeAttribute('disabled');
          return null;
        }}
      >
        {!successState ? (
          <ErrField>
            {errState.map((element) => (
              <p>{element}</p>
            ))}
          </ErrField>
        ) : (
          <SuccesField className="succesField">
            <p>Done, your Cocktail has been added.</p>
            <p>After verification, it will be displayed on the website.</p>
          </SuccesField>
        )}
        <P black>Name:</P>
        <AddFormRow>
          <FormInput
            width="200px"
            name="title"
            type="text"
            value={formState.title}
            onChange={cmmonSetState}
          />
        </AddFormRow>

        <P black>Building type:</P>
        <AddFormRow>
          <FormSelect name="build" value={formState.build} onChange={cmmonSetState}>
            <option value="building" label="building" />
            <option value="shaking" label="shaking" />
            <option value="mixing" label="mixing" />
            <option value="layers" label="layers" />
          </FormSelect>
        </AddFormRow>

        <P black>Ice type:</P>
        <AddFormRow>
          <FormSelect name="ice" value={formState.ice} onChange={cmmonSetState}>
            <option value="cubes" label="cubes" />
            <option value="crushed" label="crushed" />
            <option value="frozen" label="frozen" />
            <option value="hot" label="hot" />
          </FormSelect>
        </AddFormRow>

        <AddFormRow>
          <AlkoholsForm
            data={formState.elements.alcohols}
            setData={(newData: Alcohols[]) => {
              setformState({
                ...formState,
                elements: { alcohols: newData, noAlcohols: formState.elements.noAlcohols },
              });
            }}
          />
        </AddFormRow>

        <AddFormRow>
          <NoAlkoholsForm
            data={formState.elements.noAlcohols}
            setData={(newData: NoAlcohols[]) => {
              setformState({
                ...formState,
                elements: { alcohols: formState.elements.alcohols, noAlcohols: newData },
              });
            }}
          />
        </AddFormRow>

        <P black>Instruction:</P>
        <AddFormRow>
          <FormTextArea name="content" value={formState.content} onChange={cmmonSetState} />
        </AddFormRow>

        <AddFormRow>
          <FormDropezone setImg={imgSetState} img={formState.img.link} />
        </AddFormRow>

        <P black>Author:</P>
        <AddFormRow>
          <FormInput
            width="200px"
            name="author"
            type="text"
            value={formState.author}
            onChange={cmmonSetState}
          />
        </AddFormRow>
        <SubbButton
          type="submit"
          id="addSubbmitButton"
          name="addSubbmitButton"
          className="SubbButton"
        >
          {buttText}
        </SubbButton>
        {!successState ? (
          <ErrField>
            {errState.map((element) => (
              <p>{element}</p>
            ))}
          </ErrField>
        ) : (
          <SuccesField className="succesField">
            <p>Done, your Cocktail has been added.</p>
            <p>After verification, it will be displayed on the website.</p>
          </SuccesField>
        )}
      </StyledForm>
    </AddSpace>
  );
};

export default AddForm;
