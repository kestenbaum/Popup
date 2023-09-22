import React, {FC} from "react";

import "./popup.css"

interface IPopup {
    children: React.ReactNode,
    showModal: boolean,
    setShowModal: any
}
const Popup:FC<IPopup> = ({children, showModal, setShowModal}) => {

    return (
        <section
            className={showModal ? "modal active" : "modal"}
            onClick={() => setShowModal(false)}
        >
            <div
                className={showModal ? "wrapper active" : "wrapper"}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </section>
    );
};

export default Popup;