import React from "react"
import './modal.css'

const Modal = ({ close, message }) => {

    return (
        <div className="saved" id="saved">
            <button class="form-submit closeModal" type="button" onClick={close}>X</button>
            <h3 className="saved-message">{message}</h3>
        </div>
    )

}

export default Modal