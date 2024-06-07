'use client';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';

export interface IButtonProps {
  text ?: string
  onClick ?: React.ReactEventHandler
}

export function Button (props: IButtonProps) {
  return (
    <button>{props?.text}</button>
  );
}


export function EstateAddBtn(props: IButtonProps){
  return(
    <Tooltip title='매물 추가'>
      <div className='add-estate-wrap'>
        <button onClick={props.onClick}>
          <AddIcon />
        </button>
      </div>
    </Tooltip>
  )  
}