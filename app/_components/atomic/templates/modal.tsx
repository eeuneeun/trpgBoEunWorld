import * as React from "react";

import CloseIcon from "@mui/icons-material/Close";
import useLayoutStore from "@/app/_store/useLayout";

export interface IModalProps {
  title: string;
  contents: React.ReactNode;
}

export default function Modal(props: IModalProps) {
  const { isModalOpen, toggleOpen } = useLayoutStore();

  return (
    <>
      <div
        className={`modal-wrap back-drop ${isModalOpen ? "active" : ""}`}
        // onClick={()=>toggleIsModalOpen(false)}
      >
        <div className="modal">
          <button
            className="close-btn"
            onClick={() => toggleOpen("isModalOpen", false)}
          >
            <CloseIcon />
          </button>
          {props.title && <h2>{props.title}</h2>}
          <div className="modal-contents">{props.contents}</div>
        </div>
      </div>
    </>
  );
}
