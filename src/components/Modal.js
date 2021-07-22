import React from 'react'
import reactDom from 'react-dom'
import history from '../history'

const Modal = () => {
    return reactDom.createPortal(
        <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Delete Stream</div>
                <div className="content">Are you sure you want to delete your Stream?</div>
                <div className="actions">
                    <button className="ui button">Cancel</button>
                    <button className="ui red button">Delete</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal
