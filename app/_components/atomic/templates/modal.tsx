import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';

export interface IModalProps {
    title : string
    contents : React.ReactNode
}

export default function Modal(props: IModalProps) {

    return (<>
        <div 
            className={`modal-wrap back-drop ${layoutInfo.isModalOpen ? "active" : ""}`}
            // onClick={()=>toggleIsModalOpen(false)}
        >
            <div className='modal'>
                <button 
                    className='close-btn'
                    onClick={()=>toggleIsModalOpen(false)}
                >
                    <CloseIcon />
                </button>
                {props.title && (<h2>{props.title}</h2>)}
                <div className='modal-contents'>
                    {props.contents}
                </div>
            </div>
        </div>
    </>);
}
