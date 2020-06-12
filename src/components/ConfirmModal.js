import React from 'react'
import './ConfirmModal.css'
export default function ConfirmModal({ close, stopPropa, deleted, id }) {
    return (
        <div onClick={(e) => close(e)} className="containerConfirmModal">
            <div onClick={(e) => stopPropa(e)} className="contenuModal">
                <div className="btn-closeModal" onClick={(e) => close(e)}>Close <i className="fas fa-times"></i></div>
                <div className="textModal">
                    Do you really want to delete this product ?
                </div>
                <div className='btnGroup'>
                    <div className="btnCancelModal " onClick={(e) => close(e)} >Cancel</div>
                    <div className="btnDeleteModal" onClick={(e) => deleted(id, close)}>Delete</div>
                </div>
            </div>
        </div>
    )
}
