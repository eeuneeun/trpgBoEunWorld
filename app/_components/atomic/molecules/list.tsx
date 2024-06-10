import * as React from 'react';

export interface IListProps {
    listItem : string[]
}

export default function List (props: IListProps) : any {
  return (
    <ul>
      {
        props.listItem.map((item, idx) =>{
          return (<li key={item+idx}>{item}</li>)
        })
      }
    </ul>
  )
};
