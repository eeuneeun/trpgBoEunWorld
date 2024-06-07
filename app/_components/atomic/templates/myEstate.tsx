import * as React from 'react';
import { MyEstateList } from '../organisms/estateList';

export interface IMyEstateProps {
}

export function MyEstate (props: IMyEstateProps) {
  return (
    <div className='my-estate'>
        <h3>내 매물</h3>
        <div className='my-estate-list'>
            <ul>
                <MyEstateList />
            </ul>
        </div>
    </div>
  );
}
