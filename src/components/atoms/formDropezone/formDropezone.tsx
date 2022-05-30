import { useDropzone } from 'react-dropzone';
import React from 'react';
import DropezoneStyled from './formDropezoneStyles';

interface IDropeZone {
  setImg: (imgLink: string, imgName: string, imgData: File) => void;
  img: string;
}

const formDropezone = (props: IDropeZone) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: (file) => {
      props.setImg(URL.createObjectURL(file[0]), file[0].name, file[0]);
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <DropezoneStyled bImg={props.img} {...getRootProps()}>
      <input {...getInputProps()} />
      {props.img ? null : <p>Add yours cocktail&#39;s photo</p>}
    </DropezoneStyled>
  );
};

export default formDropezone;
