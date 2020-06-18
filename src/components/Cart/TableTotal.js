import React from 'react'

export default function TableTotal({ total }) {
    return (
        <>
            <tr >
                <td colSpan="5">
                    Total : {total} €
                 </td>
            </tr>
        </>
    )
}
