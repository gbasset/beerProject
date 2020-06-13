import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function Form({ addAProductToList, length }) {
    const uniqueId = uuidv4()

    const [newElement, setNewElement] = useState(

        { id: uniqueId + length + 1 * 14578, name: '', price: 0, quantity: 1, total: 0 }
    )
    const createNewElement = (event) => {
        event.persist()
        setNewElement(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }))
    }
    useEffect(() => {
        setNewElement({ id: uniqueId + length + 1, name: '', price: 0, quantity: 1, total: 0 })
    }, [length])

    return (
        <div>
            <form className=".formCart">
                <label htmlFor='name'>
                    Nom:
                <input type="text" className="field" name='name' value={newElement.name} onChange={(e) => createNewElement(e)} />
                </label>
                <label htmlFor="price">
                    Price:
                    <input type="text" className="field" name="price" value={newElement.price} onChange={(e) => createNewElement(e)} />
                </label>
            </form>
            <button onClick={() => addAProductToList(newElement)}>Ajouter</button>
        </div>
    )
}
