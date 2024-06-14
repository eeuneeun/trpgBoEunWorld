'use client';
import * as React from 'react';

import { Tooltip } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';

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

export function LikeBtn() {
  const [isLike, setIsLike] = React.useState(false)
  return (
    <button className='like-btn' onClick={()=>setIsLike(!isLike)}>
        {
          isLike 
          ? <StarIcon />
          : <StarBorderIcon />
        }
    </button>
  );
}
