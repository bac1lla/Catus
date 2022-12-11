import React, {Dispatch, FC, ReactNode, SetStateAction} from 'react';
import "./Modal.css";

interface Modal {
    setShow: Dispatch<SetStateAction<boolean>>,
    title: string,
    children: ReactNode
}

const Modal: FC<Modal> = ({setShow, title, children}) => {
    return (
        <div className="modal" onClick={() => setShow(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    <button onClick={() => setShow(false)} className="button">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

