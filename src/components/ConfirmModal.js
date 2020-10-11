import React, { useContext } from 'react'
import './ConfirmModal.css'
import { Context } from '../Context/Context'
export default function ConfirmModal() {
    const {
        oppenCloseModale,
        changeTotalCart,
        deleteProp,
        addAProductToList,
        chooseQuantity,
        productList,
        toggleModales,
        setToggleModales,
        totalCart,
        id
    } = useContext(Context)

    const stopPropa = (e) => {
        e.stopPropagation()
    }
    return (
        <div onClick={(e) => oppenCloseModale(e)} className="containerConfirmModal">
            <div onClick={(e) => stopPropa(e)} className="contenuModal">
                <div className="btn-closeModal" onClick={(e) => oppenCloseModale(e)}>Close <i className="fas fa-times"></i></div>
                <div className="textModal">
                    Voullez vous vraiment supprimer ce produit ?
                </div>
                <div className='btnGroup'>
                    <div className="btnCancelModal " onClick={(e) => oppenCloseModale(e)} >Annuler</div>
                    <div className="btnDeleteModal" onClick={(e) => deleteProp(id, oppenCloseModale)}>Supprimer</div>
                </div>
            </div>
        </div>
    )
}
