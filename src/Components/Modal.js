import React from 'react';
import "./Modal.css";


function Modal({open, children, onClose}) {
   if(!open) return null
   
    return (
        <div>
            <div className="Overlay">
                <div className="Popup">
                    <button className="BUTTON_STYLE" onClick={onClose}>Close</button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
